import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50"
      style={{ height: "7px", background: "rgba(212,175,55,0.12)" }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, #FDE68A, #D4AF37, #B8962E, #D4AF37, #FDE68A)",
          backgroundSize: "200% 100%",
          animation: "bar-shimmer 2s linear infinite",
          boxShadow:
            "0 0 16px rgba(212,175,55,1), 0 0 32px rgba(212,175,55,0.6), 0 0 6px rgba(255,255,255,0.9)",
          borderRadius: "0 4px 4px 0",
          transition: "width 80ms linear",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
