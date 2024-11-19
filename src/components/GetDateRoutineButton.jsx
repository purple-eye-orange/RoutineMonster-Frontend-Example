import React from "react";
import axios from "axios";

const GetDateRoutineButton = () => {
  const defaultDate = "2024-10-11"; // 기본 날짜 설정

  const handleFetchDateRoutine = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/date", {
        params: { date: defaultDate }, // 쿼리 파라미터로 date 전달
        withCredentials: true, // 세션 쿠키 포함
      });

      // 성공적으로 데이터 가져온 경우
      console.log("일별 루틴 데이터:", response.data.data);
    } catch (err) {
      // 에러 발생 시
      console.error(
        "일별 루틴 가져오기 실패:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div>
      <button onClick={handleFetchDateRoutine}>일별 루틴 가져오기</button>
    </div>
  );
};

export default GetDateRoutineButton;
