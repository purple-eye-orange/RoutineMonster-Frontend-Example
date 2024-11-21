import React from "react";
import axios from "axios";

const DeleteRoutineButton = () => {
  const handleDeleteRoutine = async () => {
    try {
      const requestBody = {
        routineId: 7, // 삭제할 루틴의 ID
      };

      const response = await axios.delete(
        "http://localhost:3000/api/routine/delete", // 백엔드 삭제 엔드포인트
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: requestBody, // 요청 본문을 data로 전달
          withCredentials: true, // 세션 쿠키 포함
        }
      );
      // 성공적으로 삭제된 경우 메시지 출력
      console.log("루틴 삭제 성공:", response.data.message);
    } catch (err) {
      // 삭제 실패 시 에러 메시지 출력
      console.error("루틴 삭제 실패:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteRoutine}>루틴 삭제</button>
    </div>
  );
};

export default DeleteRoutineButton;
