import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  const handleSuccess = async (res) => {
    try {
      const response = await axios.post(
        "https://routinemonsterapi.seongjinemong.app/api/users/signin",
        {
          credential: res.credential,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("백엔드로 성공적으로 전송:", response);
    } catch (err) {
      console.error("백엔드 전송 오류:", err);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onFailure={(err) => {
          console.error("로그인 실패:", err);
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
