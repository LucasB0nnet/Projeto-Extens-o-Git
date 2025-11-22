import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [products] = useState([
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

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const handleAddToCart = (productId, quantity) => {
    const qty = parseInt(quantity) || 1;
    if (qty > 0) {
      const product = products.find((p) => p.id === productId);
      const existingItem = cartItems.find((item) => item.id === productId);

      if (existingItem) {
        setCartItems(
          cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + qty }
              : item
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: qty }]);
      }
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleFinalizePurchase = () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
    setShowCheckout(true);
  };

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      alert(
        `✅ Pedido realizado com sucesso!\n\nTotal: R$ ${totalPrice.toFixed(2)}\nItens: ${totalItems}\n\nObrigado pela compra!`
      );
      setCartItems([]);
      setShowCheckout(false);
      setOrderPlaced(false);
      setShowCart(false);
    }, 1000);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
            🛒 {totalItems} {totalItems !== 1 ? "item" : "itens"}
          </span>
          <button
            onClick={() => setShowCart(!showCart)}
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
            {showCart ? "✕ Fechar" : "🛍️ Ver Carrinho"}
          </button>
        </div>
      </header>

      {/* Modal do Carrinho */}
      {showCart && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "flex-end",
            zIndex: 999,
          }}
          onClick={() => setShowCart(false)}
        >
          <div
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: "400px",
              height: "100%",
              overflow: "auto",
              boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Carrinho */}
            <div
              style={{
                padding: "1.5rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "1.5rem" }}>🛒 Carrinho</h2>
              <button
                onClick={() => setShowCart(false)}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  color: "#fff",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                }}
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Carrinho */}
            <div style={{ flex: 1, padding: "1.5rem", overflowY: "auto" }}>
              {cartItems.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "#999",
                    padding: "2rem",
                    fontSize: "1.1rem",
                  }}
                >
                  Carrinho vazio 😔
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      marginBottom: "1.5rem",
                      padding: "1rem",
                      background: "#f5f5f5",
                      borderRadius: "8px",
                      borderLeft: "4px solid #667eea",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          flex: 1,
                        }}
                      >
                        <span style={{ fontSize: "2rem" }}>{item.image}</span>
                        <div>
                          <h4 style={{ margin: "0 0 0.25rem 0", color: "#333" }}>
                            {item.name}
                          </h4>
                          <p
                            style={{
                              margin: 0,
                              color: "#999",
                              fontSize: "0.85rem",
                            }}
                          >
                            R$ {item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        style={{
                          background: "#ff4757",
                          border: "none",
                          color: "#fff",
                          borderRadius: "50%",
                          width: "28px",
                          height: "28px",
                          cursor: "pointer",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "#ff3838";
                          e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "#ff4757";
                          e.target.style.transform = "scale(1)";
                        }}
                        title="Remover do carrinho"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Controle de Quantidade */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        style={{
                          background: "#e0e0e0",
                          border: "none",
                          width: "24px",
                          height: "24px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                        }}
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleUpdateQuantity(
                            item.id,
                            parseInt(e.target.value) || 1
                          )
                        }
                        style={{
                          width: "50px",
                          padding: "0.25rem",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          textAlign: "center",
                          fontSize: "0.9rem",
                        }}
                      />
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        style={{
                          background: "#e0e0e0",
                          border: "none",
                          width: "24px",
                          height: "24px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </button>
                      <span
                        style={{
                          marginLeft: "auto",
                          fontWeight: "bold",
                          color: "#764ba2",
                        }}
                      >
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer do Carrinho */}
            {cartItems.length > 0 && (
              <div
                style={{
                  padding: "1.5rem",
                  borderTop: "2px solid #eee",
                  background: "#f9f9f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  <span>Total:</span>
                  <span style={{ color: "#764ba2" }}>
                    R$ {totalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleFinalizePurchase}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(102, 126, 234, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  💳 Finalizar Compra
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal de Checkout */}
      {showCheckout && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => !orderPlaced && setShowCheckout(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "2rem",
              maxWidth: "500px",
              width: "90%",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {orderPlaced ? (
              <div style={{ animation: "pulse 1s infinite" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    animation: "bounce 1s infinite",
                  }}
                >
                  ✅
                </div>
                <h2 style={{ color: "#333", marginBottom: "0.5rem" }}>
                  Processando seu pedido...
                </h2>
                <p style={{ color: "#999" }}>Por favor aguarde</p>
              </div>
            ) : (
              <>
                <h2 style={{ color: "#333", marginBottom: "1.5rem" }}>
                  💳 Resumo do Pedido
                </h2>

                <div
                  style={{
                    background: "#f5f5f5",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    marginBottom: "1.5rem",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "1rem",
                      paddingBottom: "1rem",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <p style={{ margin: "0.5rem 0", color: "#666" }}>
                      <strong>Quantidade de itens:</strong> {totalItems}
                    </p>
                    <p style={{ margin: "0.5rem 0", color: "#666" }}>
                      <strong>Subtotal:</strong> R$ {totalPrice.toFixed(2)}
                    </p>
                    <p style={{ margin: "0.5rem 0", color: "#666" }}>
                      <strong>Frete:</strong> Grátis
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#764ba2",
                    }}
                  >
                    <span>Total:</span>
                    <span>R$ {totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div
                  style={{
                    background: "#f0f4ff",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginBottom: "1.5rem",
                    color: "#333",
                    fontSize: "0.9rem",
                  }}
                >
                  <p style={{ margin: 0, marginBottom: "0.5rem" }}>
                    📍 <strong>Endereço:</strong>
                  </p>
                  <p style={{ margin: 0, color: "#666" }}>
                    Rua Principal, 123 - São Paulo, SP
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <button
                    onClick={() => setShowCheckout(false)}
                    style={{
                      flex: 1,
                      padding: "0.8rem",
                      background: "#e0e0e0",
                      color: "#333",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#d0d0d0";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#e0e0e0";
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirmOrder}
                    style={{
                      flex: 1,
                      padding: "0.8rem",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(102, 126, 234, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    ✅ Confirmar Compra
                  </button>
                </div>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#999",
                    margin: 0,
                  }}
                >
                  Você receberá um email de confirmação em breve
                </p>
              </>
            )}
          </div>
        </div>
      )}

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
                    input.value = 1;
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
