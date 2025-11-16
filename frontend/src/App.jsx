import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        fontSize: "3rem",
        fontWeight: "bold",
        letterSpacing: "1px",
        transition: "opacity 1s ease",
        opacity: visible ? 1 : 0,
        textShadow: "2px 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      Nosso E-Commerce!!
    </div>
  );
}

export default App;
