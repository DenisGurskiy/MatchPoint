"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { User } from "@/app/types/user";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (username: string, password: string) => Promise<void>;
  signUp: (username: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("access_token");
      if (token && !user) {
        try {
          const response = await fetch(
            "https://sportspace.onrender.com/api/client/me/",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }

          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, []);

  const login = async (email: string, password: string) => {
    if (email && password) {
      try {
        const res = await fetch(
          "https://sportspace.onrender.com/api/client/token/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );

        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("access_token", data.access);
          localStorage.setItem("refresh_token", data.refresh);

          const userRes = await fetch(
            "https://sportspace.onrender.com/api/client/me/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.access}`,
              },
            }
          );

          const userData = await userRes.json();

          if (userRes.ok) {
            setUser({
              ...userData,
            });
            toast.success("You are logged in now!");
            router.push("/account");
          } else {
            toast.error("Failed to fetch user data");
          }
        } else {
          toast.error(data.detail);
          throw new Error(data.detail);
        }
      } catch (error) {
        toast.error("Failed to log in. Please try again.");
        throw new Error("Failed to log in. Please try again.");
      }
    } else {
      toast.error("Invalid credentials");
    }
  };

  const signUp = async (email: string) => {
    if (email) {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!res.ok) {
          throw new Error("Failed to sign up");
        }

        const result = await res.json();
        toast.success(result.message);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to sign up");
      }
    } else {
      toast.error("Sorry! Invalid credentials!");
    }
  };

  const logout = async () => {
    // const token = localStorage.getItem("access_token");
    // if (token && user) {
    //   try {
    //     const res = await fetch(
    //       "https://sportspace.onrender.com/api/client/logout/",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );

    //     const data = await res.json();

    //     if (res.ok) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    toast.success("You are Logged out now!");
    router.push("/");
    //     } else {
    //       toast.error(data.error);
    //     }
    //   } catch (error) {
    //     console.error("Logout error:", error);
    //     toast.error("Failed to logout. Please try again.");
    //   }
    // } else {
    //   toast.error("Sorry! Invalid credentials!");
    // }
  };

  const value = {
    user,
    setUser,
    login,
    logout,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
