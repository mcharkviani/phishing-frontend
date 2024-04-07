import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSignIn } from "../hooks/useSignIn";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export function SignInForm() {
  const { signIn, isLoading } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signin-container">
      <div>
        <h3>Welcome to phishing page</h3>
      </div>
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <Button type="submit">Sign In</Button>
        </form>
      </div>
      <div>
        <RouterLink to="/signup">Create new account</RouterLink>
      </div>
    </div>
  );
}
