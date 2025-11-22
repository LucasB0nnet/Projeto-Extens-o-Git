import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone Pro",
      price: 1299.99,
      description: "Smartphone de última geração com câmera 108MP",
      image: "📱",
    },
    {
      id: 2,
      name: "Laptop Gamer",
      price: 3499.99,
      description: "Laptop com RTX 4090 e processador i9",
      image: "💻",
    },
    {
      id: 3,
      name: "Fone Wireless",
      price: 299.99,
      description: "Fone com cancelamento de ruído ativo",
      image: "🎧",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 599.99,
      description: "Relógio inteligente com GPS e monitoramento cardíaco",
      image: "⌚",
    },
  ]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const handleAddToCart = (productId, quantity) => {
    const qty = parseInt(quantity) || 1;
    if (qty > 0) {
      setCartCount(cartCount + qty);
      setQuantities({ ...quantities, [productId]: 1 });
      alert(`${qty} produto(s) adicionado(s) ao carrinho! Total de itens: ${cartCount + qty}`);
    }
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
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              background: "rgba(255, 255, 255, 0.2)",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
            }}
          >
            Carrinho: {cartCount}
          </span>
          <button
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
            🛒 Ver Carrinho
          </button>
        </div>
      </header>

      {/* Conteúdo principal - Grid de Produtos */}
      <div
        style={{
          padding: "3rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            textShadow: "2px 2px 10px rgba(0,0,0,0.2)",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          Produtos em Destaque
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0, 0, 0, 0.15)";
              }}
            >
              {/* Imagem do Produto */}
              <div
                style={{
                  fontSize: "4rem",
                  textAlign: "center",
                  padding: "2rem",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "#fff",
                }}
              >
                {product.image}
              </div>

              {/* Conteúdo do Card */}
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    margin: "0 0 0.5rem 0",
                    color: "#333",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#666",
                    margin: "0 0 1rem 0",
                    lineHeight: "1.4",
                  }}
                >
                  {product.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      color: "#764ba2",
                    }}
                  >
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>

                {/* Controle de Quantidade */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#333",
                    }}
                  >
                    Qtd:
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    defaultValue="1"
                    id={`qty-${product.id}`}
                    style={{
                      width: "60px",
                      padding: "0.5rem",
                      border: "2px solid #667eea",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      textAlign: "center",
                    }}
                  />
                </div>

                {/* Botão Adicionar ao Carrinho */}
                <button
                  onClick={() => {
                    const input = document.getElementById(`qty-${product.id}`);
                    handleAddToCart(product.id, input.value);
                  }}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(102, 126, 234, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  🛒 Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
