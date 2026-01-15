

import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="no-results" role="status">
        No products found. Try adjusting your filters.
      </p>
    );
  }

  return (
    <section
      className="product-grid-section"
      aria-label="Product results"
    >
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
