import { Link } from "react-router-dom";
import products from "../data/products";

const Products = () => {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>All Books</h1>
      <p style={{ color: "#666", marginTop: "8px" }}>
        Explore the complete collection of books by Marcus Aurel.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              style={{
                border: "2px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3 style={{ marginTop: "12px", marginBottom: "4px" }}>
                {product.title}
              </h3>

              <p style={{ color: "#777", fontSize: "13px", marginBottom: "8px" }}>
                {product.subtitle}
              </p>

              <p style={{ fontWeight: "bold", marginBottom: "12px" }}>
                {product.price}
              </p>

              <button>Buy Book</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;