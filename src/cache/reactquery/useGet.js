import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/services/apis/apiGet";
import { useAuth } from "@/context/AuthContext";

export function useGet(keyName, url, filters = {}) {
  const { user } = useAuth();
  console.log(filters);
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: [keyName, filters],
    queryFn: () => getApi(user ? user.token : "no token", url, filters),
  });

  return { isLoading, error, data, refetch };
}
