import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import { getRoomApi } from "@/services/chat/apiGetRoom";

export function useGetRoom(keyName, url, filters = {}) {
  const { user } = useAuth();
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: [keyName, filters],
    queryFn: () => getRoomApi(user ? user.token : "no token", url, filters),
  });

  return { isLoading, error, data, refetch };
}
