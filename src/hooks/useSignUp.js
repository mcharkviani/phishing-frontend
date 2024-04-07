import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../services/apiAuth";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      const { accessToken } = data;
      localStorage.setItem("accessToken", `Bearer ${accessToken}`);
      navigate("/main", { replace: true });
    },
    onError: (error) => {
      const errorMessage = error.response.data?.message;
      console.log('Error useSignUp():', errorMessage)
    },
  });

  return { signUp, isLoading };
}
