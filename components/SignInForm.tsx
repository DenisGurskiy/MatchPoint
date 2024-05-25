"use client";

export const SignInForm = () => {
  return (
    <form>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button>Sign in</button>
    </form>
  );
};
