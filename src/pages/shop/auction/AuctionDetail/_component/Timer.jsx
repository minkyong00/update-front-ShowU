import { useEffect, useState } from "react";

const Timer = ({ endTime, endMessage = "경매 종료" }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    // console.log("지금", now)
    const end = new Date(endTime);
    // console.log("end", end)
    const difference = end - now;
    // console.log("차이", difference)

    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  if (!timeLeft) {
    return <div style={{ fontSize: "20px", color: "#ffd400" }}>{endMessage}</div>;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div style={{ fontSize: "20px", color: "#ffd400" }}>
      {days}일 {hours}시간 {minutes}분 {seconds}초
    </div>
  );
};

export default Timer;