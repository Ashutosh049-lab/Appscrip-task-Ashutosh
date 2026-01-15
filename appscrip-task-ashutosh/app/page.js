

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductToolbar from "../components/ProductToolbar";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import { getProducts, getCategories } from "../lib/products";

export const metadata = {
  title: "Discover Our Products | Minimal Store",
  description:
    "Browse a minimal grid of products including bags, accessories, shoes, and toys.",
};

export default async function Home({ searchParams }) {
  // Await searchParams in Next.js 15+
  const params = await searchParams;
  const category = params?.category || "";
  const sort = params?.sort || "";

  const [products, categories] = await Promise.all([
    getProducts({ category, sort }),
    getCategories(),
  ]);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://example.com/products/${product.slug}`,
      item: {
        "@type": "Product",
        name: product.name,
        image: `https://example.com${product.imageUrl}`,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: product.currency,
          price: product.price,
          availability: product.inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviewCount,
        },
      },
    })),
  };

  return (
    <>
      <Header />
      <main className="page-main">
        <div className="container">
          <header className="plp-header">
            <h1>Discover our products</h1>
            <p className="plp-subtitle">
              A simple, minimal collection of everyday objects. Filter, sort and
              browse the grid below.
            </p>
          </header>

          <ProductToolbar
            totalCount={products.length}
            currentCategory={category}
            currentSort={sort}
          />

          <div className="plp-layout">
            <aside className="plp-filters" aria-label="Product filters">
              <FilterSidebar 
                initialCategory={category} 
                initialSort={sort}
                categories={categories}
              />
            </aside>

            <section className="plp-results" aria-label="Product list">
              <ProductGrid products={products} />
            </section>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
