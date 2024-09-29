import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { editApi } from "@/services/apis/apiEdit";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/hooks/useLanguage";
import { editMessage, errorMessage } from "@/hooks/toastMessage";

export function useEdit(keyName, url, toastMessage) {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { language } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const { mutate: editFunction } = useMutation({
    mutationFn: (data) => editApi(user ? user.token : "no token ", url, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [keyName] });
      toast.success(editMessage(toastMessage, language));
      setIsEditing(false);
    },
    onError: (err) => {
      console.log(err.message);
      toast.error(errorMessage(language));
      setIsEditing(false);
    },
    onMutate: () => setIsEditing(true),
  });

  return { isEditing, editFunction };
}
