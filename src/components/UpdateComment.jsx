import React from "react";
import axios from "axios";

const UpdateCommentButton = () => {
  const handleUpdateComment = async () => {
    try {
      const requestBody = {
        date: "2024-10-10", // 설정된 날짜
        comment: "알았다!", // 작성할 코멘트
      };

      const response = await axios.patch(
        "http://localhost:3000/api/date/comment", // 백엔드 API 엔드포인트
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // 세션 쿠키 포함
        }
      );

      // 성공적으로 업데이트된 경우 메시지 출력
      console.log("코멘트 업데이트 성공:", response.data.message);
    } catch (err) {
      // 업데이트 실패 시 에러 메시지 출력
      console.error("코멘트 업데이트 실패:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <button onClick={handleUpdateComment}>코멘트 업데이트</button>
    </div>
  );
};

export default UpdateCommentButton;
