import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GetGoogleDataButton = () => {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID; // Google OAuth 클라이언트 ID

  const handleSuccess = async (response) => {
    try {
      // Google에서 전달받은 credential을 디코딩하여 사용자 정보를 얻습니다.
      const credential = response.credential;

      // JWT 디코딩 (base64 디코딩)
      const base64Url = credential.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join("")
      );

      const userInfo = JSON.parse(jsonPayload);

      console.log("User Info:", userInfo);
      console.log("Name:", userInfo.name);
      console.log("Email:", userInfo.email);
      console.log("Profile Picture:", userInfo.picture);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const handleError = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleSuccess} onFailure={handleError} />
    </GoogleOAuthProvider>
  );
};

export default GetGoogleDataButton;
