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

interface AuthContextType {
  user: { token: string } | null;
  login: (username: string, password: string) => Promise<void>;
  signUp: (username: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ token: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (email: string, password: string) => {
    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // const data = await res.json();

    // if (res.ok) {
    //   localStorage.setItem("token", data.token);
    //   setUser({ token: data.token });
    //   router.push("/account");
    // } else {
    //   alert(data.error);
    // }

    if (email && password) {
      const token = "dummy-token";
      localStorage.setItem("token", token);
      setUser({ token });
      toast.success("You are Logged in now!");
    } else {
      alert("Invalid credentials");
    }
  };

  const signUp = async (email: string) => {
    if (email) {
      // const password = "dummy-password";
      let password;

      fetch("https://sportspace.onrender.com/api/client/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          // password = data;

          console.log("Response data:", data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      if (password) {
        try {
          const res = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            throw new Error("Failed to send email");
          }

          const result = await res.json();
          toast.success(result.message);
        } catch (error) {
          console.error("Error sending email:", error);
          toast.error("Failed to send email");
        }
      }
    } else {
      toast.error("Sorry! Invalid credentials!");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("You are Logged out now!");
    router.push("/");
  };

  const value = {
    user,
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
