import React from "react";
import axios from "axios";

const GetCalendarButton = () => {
  const handleGetCalendar = async () => {
    try {
      const year = 2024;
      const month = 10;

      const response = await axios.get(
        "http://localhost:3000/api/date/calendar",
        {
          params: { year, month },
          withCredentials: true,
        }
      );

      console.log("캘린더 데이터 가져오기 성공:", response.data);
    } catch (error) {
      console.error(
        "캘린더 데이터 가져오기 실패:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <button onClick={handleGetCalendar}>캘린더 데이터 가져오기</button>
    </div>
  );
};

export default GetCalendarButton;
