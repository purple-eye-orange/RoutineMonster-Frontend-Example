import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  const handleSuccess = async (res) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signin",
        {
          credential: res.credential,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("백엔드로 성공적으로 전송:", response);

      // 세션 확인 요청
      const sessionResponse = await axios.get(
        "http://localhost:3000/api/users/session",
        {
          withCredentials: true, // 세션 쿠키 포함
        }
      );

      console.log("세션 데이터:", sessionResponse.data);
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
