import { useEffect, useState, useCallback } from "react";

const Countdown = ({ targetDate }) => {
  // Función para calcular el tiempo restante
  const calculateTime = useCallback(() => {
    const now = new Date();
    const distance = targetDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / 1000 / 60) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }, [targetDate]);

  // Estado del countdown
  const [timeLeft, setTimeLeft] = useState(calculateTime());

  // Actualiza cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [calculateTime]);

  // Componente para cada círculo
  const Circle = ({ label, value }) => (
    <div className="flex flex-col items-center">
      <div
        className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full text-gray-800 text-2xl md:text-3xl font-bold shadow-lg"
        style={{
          background: "linear-gradient(135deg, #fef3c7, #fde68a, #ffb6b9)",
          border: "2px solid rgba(255,255,255,0.3)",
        }}
      >
        {value}
      </div>
      <span className="mt-2 text-sm md:text-base text-gray-800">{label}</span>
    </div>
  );

  return (
    <section
      id="CountdownSection"
      className="flex justify-center gap-6 md:gap-12 flex-wrap py-6"
    >
      <Circle label="Días" value={timeLeft.days} />
      <Circle label="Horas" value={timeLeft.hours} />
      <Circle label="Minutos" value={timeLeft.minutes} />
      <Circle label="Segundos" value={timeLeft.seconds} />
    </section>
  );
};

export default Countdown;