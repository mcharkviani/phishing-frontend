import { useQuery } from "@tanstack/react-query";
import { getLoggedInUser } from "../services/apiAuth";

export function useLoggedInUser() {
  const { data, isLoading } = useQuery({
    queryKey: "user",
    queryFn: getLoggedInUser,
  });

  return { loggedInUser: data, isLoading };
}
