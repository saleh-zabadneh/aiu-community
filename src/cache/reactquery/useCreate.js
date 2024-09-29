import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { postApi } from "@/services/apis/apiPost";
import { useLanguage } from "@/hooks/useLanguage";
import { createMessage, errorMessage } from "@/hooks/toastMessage";
import { useAuth } from "@/context/AuthContext";

export function useCreate(keyName, url, toastMessage) {
  const { user } = useAuth();
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const [isCreating, setIsCreating] = useState(false);
  const { mutate: createFunction } = useMutation({
    mutationFn: (data) => postApi(user ? user.token : "no token", url, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [keyName] });
      toast.success(createMessage(toastMessage, language));
      setIsCreating(false);
    },
    onError: (err) => {
      console.log(err.message);
      toast.error(errorMessage(language));
      setIsCreating(false);
    },
    onMutate: () => setIsCreating(true),
  });

  return { isCreating, createFunction };
}

// onMutate: (data) => {
//   // Update cache optimistically (if applicable)
//   queryClient.setQueryData(keyName, (oldData) => ({
//     // Logic to update cache based on data and oldData
//   }));
//   return { rollback: () => queryClient.setQueryData(keyName, oldData) }; // For optimistic updates rollback
// },
// return { isCreating: isMutating, createFunction }; // Use isMutating for loading state
