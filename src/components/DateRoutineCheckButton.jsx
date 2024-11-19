import React from "react";
import axios from "axios";

const DateRoutineCheckButton = () => {
  const handleDateRoutineCheck = async () => {
    try {
      // 요청 데이터 설정
      const requestData = {
        date: "2024-10-10", // 요청 날짜
        checkedRoutineIds: [1], // 체크된 루틴 ID
      };

      // PATCH 요청 보내기
      const response = await axios.patch(
        "http://localhost:3000/api/date/check", // API 엔드포인트
        requestData,
        {
          headers: {
            "Content-Type": "application/json", // JSON 형식
          },
          withCredentials: true, // 세션 쿠키 포함
        }
      );

      // 성공 시 응답 처리
      console.log("루틴 체크 성공:", response.data.message);
    } catch (err) {
      // 에러 발생 시 응답 처리
      console.error("루틴 체크 실패:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <button onClick={handleDateRoutineCheck}>일별 루틴 체크</button>
    </div>
  );
};

export default DateRoutineCheckButton;
