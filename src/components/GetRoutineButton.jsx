import React from "react";
import axios from "axios";

const GetRoutineButton = () => {
  const handleFetchRoutines = async () => {
    try {
      // 루틴 데이터를 가져오는 GET 요청
      const response = await axios.get(
        "http://localhost:3000/api/routine/2", // 백엔드 엔드포인트
        {
          withCredentials: true, // 세션 쿠키 포함
        }
      );

      // 가져온 데이터 콘솔에 출력
      console.log("전체 루틴 데이터:", response.data);
    } catch (err) {
      console.error(
        "루틴 데이터 가져오기 실패:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div>
      <button onClick={handleFetchRoutines}>전체 루틴 가져오기</button>
    </div>
  );
};

export default GetRoutineButton;
