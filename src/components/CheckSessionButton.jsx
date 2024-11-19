import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const CheckSessionButton = () => {
  const handleCheckSession = async () => {
    try {
      // 세션 확인 요청
      const response = await axios.get(
        "http://localhost:3000/api/users/session",
        {
          withCredentials: true, // 세션 쿠키 포함
        }
      );

      console.log("세션 데이터:", response.data);
    } catch (err) {
      console.error("백엔드 전송 오류:", err);
    }
  };

  return (
    <div>
      <button onClick={handleCheckSession}>세션 체크</button>
    </div>
  );
};

export default CheckSessionButton;
