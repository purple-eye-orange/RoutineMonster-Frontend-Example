import React, { useState } from "react";
import axios from "axios";

const LogoutButton = () => {
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    try {
      // 로그아웃 API 호출
      const response = await axios.post(
        "http://localhost:3000/api/users/signout",
        {}, // POST 요청이지만 body는 비어 있음
        {
          withCredentials: true, // 세션 쿠키 포함
        }
      );

      // 로그아웃 성공 시 메시지 설정
      setMessage(response.data.message);
      console.log("로그아웃 성공:", response.data);

      // 세션 확인 요청
      const sessionResponse = await axios.get(
        "http://localhost:3000/api/users/session",
        {
          withCredentials: true, // 세션 쿠키 포함
        }
      );

      console.log("세션 데이터:", sessionResponse.data);
    } catch (err) {
      console.error("로그아웃 실패:", err);
      setMessage("로그아웃 실패. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LogoutButton;
