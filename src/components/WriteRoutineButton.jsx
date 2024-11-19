import React from "react";
import axios from "axios";

const WriteRoutineButton = () => {
  const handleCreateRoutine = async () => {
    try {
      // Request Body 데이터 정의
      const requestBody = {
        title: "read nudge",
        category: "reading",
        startDate: "2024-10-10",
        endDate: "2024-10-12",
        times: 10,
      };

      // POST 요청
      const response = await axios.post(
        "http://localhost:3000/api/routine/write", // 백엔드 API 엔드포인트
        requestBody,
        {
          headers: {
            "Content-Type": "application/json", // JSON 요청 헤더
          },
          withCredentials: true, // 세션 쿠키 포함
        }
      );

      console.log("루틴 작성 성공:", response.data); // 성공 응답 처리
    } catch (err) {
      console.error("루틴 작성 실패:", err); // 에러 처리
    }
  };

  return (
    <div>
      <button onClick={handleCreateRoutine}>루틴 작성</button>
    </div>
  );
};

export default WriteRoutineButton;
