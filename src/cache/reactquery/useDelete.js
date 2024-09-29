import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { deleteApi } from "@/services/apis/apiDelete";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/hooks/useLanguage";
import { deleteMessage, errorMessage } from "@/hooks/toastMessage";

export function useDelete(keyName, url, toastMessage) {
  const { user } = useAuth();
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate: deleteFunction } = useMutation({
    mutationFn: deleteApi(user ? user.token : "no token", url),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [keyName] });
      toast.success(deleteMessage(toastMessage, language));
      setIsDeleting(false);
    },
    onError: (err) => {
      console.log(err.message);
      toast.error(errorMessage(language));
      setIsDeleting(false);
    },
    onMutate: () => setIsDeleting(true),
  });

  return { isDeleting, deleteFunction };
}
