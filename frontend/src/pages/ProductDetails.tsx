import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Book Not Found</h1>;
  }

  return (
    <div
      style={{
        padding: "60px 40px",
        display: "flex",
        gap: "50px",
        alignItems: "flex-start",
      }}
    >
      {/* Book Cover */}
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "300px",
          height: "380px",
          objectFit: "cover",
          borderRadius: "10px",
          flexShrink: 0,
        }}
      />

      {/* Book Info */}
      <div>
        <p style={{ color: "gray", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>
          {product.category}
        </p>

        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          {product.title}
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px", lineHeight: "1.6" }}>
          {product.subtitle}
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          {product.price}
        </h2>

        <button
          style={{
            backgroundColor: "#1a1a1a",
            color: "white",
            padding: "14px 32px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Buy This Book
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;