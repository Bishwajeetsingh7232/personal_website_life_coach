import products from "../data/products";

const FeaturedProducts = () => {
  return (
    <section
      style={{
        marginTop: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Featured Books</h2>

        <button>View All Books</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "220px",
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
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;