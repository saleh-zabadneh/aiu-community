export const createMessage = (toastMessage, language) => {
  if (toastMessage) {
    return language === "en" ? toastMessage.en : toastMessage.ar;
  }
  return language === "en" ? "created successfully" : "تمت العملية بنجاح";
};
export const editMessage = (toastMessage, language) => {
  if (toastMessage) {
    return language === "en" ? toastMessage.en : toastMessage.ar;
  }
  return language === "en" ? "Updated successfully" : "تمت التعديل بنجاح";
};
export const deleteMessage = (toastMessage, language) => {
  if (toastMessage) {
    return language === "en" ? toastMessage.en : toastMessage.ar;
  }
  return language === "en" ? "Deleted successfully" : "تمت الحذف بنجاح";
};

export const errorMessage = (language) => {
  return language === "en" ? "Somthing Went Wrong" : "حصل خطا يرجى المحاولة";
};
