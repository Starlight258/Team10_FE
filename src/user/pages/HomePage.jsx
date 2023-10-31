import React, { useState, useEffect } from "react";
import { Button } from "../components/atoms/Button";
import Reservation from "/Button/home/reservation.svg";
import ReservationHistory from "/Button/home/reservationHistory.svg";
import { RecentCarwashSlider } from "../components/organisms/RecentCarwashSlider";
import { CarwashCard } from "../components/molecules/CarwashCard";

const HomePage = () => {
  const [recentList, setRecentList] = useState([]); // Initializing state
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Simulating fetching from your mock API endpoint
    fetch("/reservations/recent")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRecentList(data.response.recent);
        }
      })
      .catch((error) => {
        console.error("Error fetching recent carwashes:", error);
      });
  }, []); // This ensures the fetch only runs once when the component mounts

  return (
    <>
      <main className="grid gap-6">
        <h1 className="text-2xl font-semibold">노주영님 안녕하세요!</h1>
        {/* 메뉴 링크 */}
        <section className="flex justify-between gap-4">
          <Button
            type="home"
            icon={Reservation}
            label="내 주변 세차장 예약하기"
          />
          <Button type="home" icon={ReservationHistory} label="예약하기" />
        </section>

        {/* 이런 세차장 어때요? */}
        <section className="grid gap-4">
          <h2 className="text-xl font-semibold">이런 세차장 어때요?</h2>
          <CarwashCard />
        </section>

        {/* 최근 이용 내역 */}
        <section className="grid gap-4">
          <h2 className="text-xl font-semibold">최근 이용 내역</h2>
          <RecentCarwashSlider recentList={recentList} />
        </section>
      </main>

      <div>
        <div>버튼을 눌러 데이터를 불러오세요</div>
        <button
          className="p-4 border"
          onClick={() => {
            fetch("/api/carwashes")
              .then((res) => JSON.stringify(res))
              .then((data) => {
                setMessage(data);
              });
          }}>
          Click me!
        </button>
        <div>{message}</div>
      </div>
    </>
  );
};

export default HomePage;
