import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";
import { Loader } from "./Loader";

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { loggedInUser, isLoading } = useLoggedInUser();

  useEffect(() => {
    if (!loggedInUser && !isLoading) {
      navigate("/signin");
    }
  }, [loggedInUser, isLoading, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  if (loggedInUser) return children;

  return null;
}
