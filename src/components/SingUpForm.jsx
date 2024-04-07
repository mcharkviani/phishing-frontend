import React, { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";
import { Link as RouterLink } from "react-router-dom";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export function SignUpForm() {
  const { signUp, isLoading } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ firstName, lastName, organization, email, password });
    setFirstName("");
    setLastName("");
    setOrganization("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signin-container">
      <div>
        <h1>Create new account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isLoading}
              placeholder="Firstname"
            />
          </div>
          <div>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={isLoading}
              placeholder="Lastname"
            />
          </div>
          <div>
            <Input
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              disabled={isLoading}
              placeholder="Organization"
            />
          </div>
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              placeholder="Email"
            />
          </div>
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="Password"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            Sign Up
          </Button>
        </form>
      </div>
      <div>
        <RouterLink to="/signin">Sign In</RouterLink>
      </div>
    </div>
  );
}
