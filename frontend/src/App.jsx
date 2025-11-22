import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert(`Produto adicionado ao carrinho! Total: ${cartCount + 1}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
      }}
    >
      {/* Header com botão do carrinho */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", margin: 0 }}>
          E-Commerce
        </h1>
        <button
          onClick={handleAddToCart}
          style={{
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "600",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
          }}
        >
          🛒 Adicionar ao Carrinho
          {cartCount > 0 && (
            <span
              style={{
                background: "#ff4757",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* Conteúdo principal */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 100px)",
          padding: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            transition: "opacity 1s ease",
            opacity: visible ? 1 : 0,
            textShadow: "2px 2px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          Nosso E-Commerce!!
        </div>
      </div>
    </div>
  );
}

export default App;
