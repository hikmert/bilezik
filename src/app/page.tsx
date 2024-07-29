"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [timeElapsed, setTimeElapsed] = useState<string>("");

  useEffect(() => {
    const startDate = new Date("2024-07-06T00:00:00");
    const updateCounter = () => {
      const now = new Date();
      const distance = now.getTime() - startDate.getTime();

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeElapsed(
        `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye`
      );
    };

    updateCounter();
    const intervalId = setInterval(updateCounter, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Gelme Durumu:</h1>
        <div style={{ display: "inline-flex", alignItems: "start" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "red",
              display: "inline-block",
              marginRight: "10px",
              marginTop: "5px",
            }}
          ></div>
          <h2 style={{ color: "red", marginBottom: 10 }}>Henüz gelmedi</h2>
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="data:image/jpeg;base64,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"
          alt="Kapak resmi"
          height={200}
          width={200}
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>Talep Tarihi: 06.07.2024</h2>
        <p>{timeElapsed}</p>
        {" evvel"}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Destek ol</h2>
        <p>Eğer bu zor zamanımda yanımda olmak istiyorsan: </p>
        <p style={{ fontWeight: "bold" }}>
          IBAN: TR18 0006 4000 0014 3700 1036 29
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Yasal uyarı</h2>
        <p>Bu kampanya valilik izni olmaksızın düzenlenmektedir. </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2 style={{ marginBottom: 12, color: "lightgray" }}>Sponsored By</h2>

        <img
          src="https://static.ticimax.cloud/50498//uploads/editoruploads/logo-11.png"
          alt="Sponsored By"
        />
      </div>
    </main>
  );
}
