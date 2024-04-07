import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signInApi } from "../services/apiAuth";

export function useSignIn() {
  const navigate = useNavigate();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      const { accessToken } = data;
      localStorage.setItem("accessToken", `Bearer ${accessToken}`);
      navigate("/main", { replace: true });
    },
    onError: (error) => {
      const errorMessage = error.response.data?.message;
      console.log('Error useSignIn():', errorMessage)
    },
  });

  return { signIn, isLoading };
}
