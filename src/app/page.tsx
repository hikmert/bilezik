"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState("");
  useEffect(() => {
    const getTargetTime = () => {
      const now = new Date();
      const targetTime = new Date();
      targetTime.setHours(22, 30, 0, 0); // Establecer la hora objetivo a las 22:30:00

      // Si la hora objetivo está en el pasado, no establecerla para el próximo día
      if (targetTime.getTime() < now.getTime()) {
        return null;
      }

      return targetTime;
    };

    const updateCounter = () => {
      const now = new Date();
      const targetTime = getTargetTime();

      if (!targetTime) {
        setTimeRemaining("0 días, 0 horas, 0 minutos, 0 segundos");
        return;
      }

      const distance = targetTime.getTime() - now.getTime();

      const días = Math.floor(distance / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        setTimeRemaining("0 días, 0 horas, 0 minutos, 0 segundos");
      } else {
        setTimeRemaining(
          `${días} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`
        );
      }
    };

    updateCounter();
    const intervalId = setInterval(updateCounter, 1000); // Actualizar cada segundo

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1>¿Ha llegado Antonella?</h1>
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
          <h2 style={{ color: "red", marginBottom: 10 }}>Aún no ha llegado</h2>
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="https://w7.pngwing.com/pngs/902/845/png-transparent-airplane-aircraft-flight-airplane-mode-of-transport-flight-airplane-thumbnail.png"
          alt="Imagen de portada"
          height={200}
          width={200}
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>Tiempo restante:</h2>
        <p>{timeRemaining}</p>
        {" antes"}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Apóyame</h2>
        <p>Si deseas estar a mi lado en estos tiempos difíciles: </p>
        <p style={{ fontWeight: "bold" }}>
          IBAN: TR18 0006 4000 0014 3700 1036 29
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Aviso legal</h2>
        <p>Esta campaña se organiza sin el permiso de la gobernación. </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2 style={{ marginBottom: 12, color: "lightgray" }}>
          Patrocinado por
        </h2>

        <img
          src="https://static.ticimax.cloud/50498//uploads/editoruploads/logo-11.png"
          alt="Patrocinado por"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>El amor de Oğuz por Antonella</h2>
        <p>
          Oğuz ama a Antonella con todo su corazón y está ansioso por su
          llegada.
        </p>
      </div>
    </main>
  );
}
