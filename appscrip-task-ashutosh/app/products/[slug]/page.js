import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getProductBySlug } from "../../../lib/products";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product not found | Minimal Store",
      description: "The product you are looking for could not be found.",
    };
  }

  return {
    title: `${product.name} | Minimal Store`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Minimal Store`,
      description: product.description,
      images: [
        {
          url: product.imageUrl,
          alt: product.imageAlt,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
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
  };

  return (
    <>
      <Header />
      <main className="page-main">
        <div className="container product-detail">
          <div className="product-detail-breadcrumbs">
            <a href="/" className="breadcrumb-link">
              Home
            </a>
            <span className="breadcrumb-separator">/</span>
            <a href="/" className="breadcrumb-link">
              Products
            </a>
            <span className="breadcrumb-separator">/</span>
            <span aria-current="page" className="breadcrumb-current">
              {product.name}
            </span>
          </div>

          <article
            className="product-detail-layout"
            itemScope
            itemType="https://schema.org/Product"
          >
            <section className="product-detail-media">
              <figure className="product-detail-image-wrapper">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="product-detail-image"
                  itemProp="image"
                />
              </figure>
            </section>

            <section className="product-detail-info">
              <header className="product-detail-header">
                <h1 className="product-detail-title" itemProp="name">
                  {product.name}
                </h1>
                <p className="product-detail-brand" itemProp="brand">
                  {product.brand}
                </p>
              </header>

              <div className="product-detail-meta">
                <p
                  className="product-detail-price"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span itemProp="priceCurrency">{product.currency}</span>{" "}
                  <span itemProp="price">{product.price.toFixed(2)}</span>
                  {product.inStock ? (
                    <span
                      className="badge badge-instock"
                      itemProp="availability"
                      content="https://schema.org/InStock"
                    >
                      In stock
                    </span>
                  ) : (
                    <span
                      className="badge badge-outofstock"
                      itemProp="availability"
                      content="https://schema.org/OutOfStock"
                    >
                      Out of stock
                    </span>
                  )}
                </p>

                <p className="product-detail-rating">
                  <span aria-label={`Rated ${product.rating} out of 5`}>
                    ★ {product.rating.toFixed(1)}
                  </span>
                  <span className="product-detail-review-count">
                    ({product.reviewCount} reviews)
                  </span>
                </p>
              </div>

              <section
                className="product-detail-description"
                aria-label="Product description"
              >
                <h2 className="section-heading">Description</h2>
                <p itemProp="description">{product.description}</p>
              </section>

              <section
                className="product-detail-actions"
                aria-label="Purchase actions"
              >
                <button
                  type="button"
                  className="primary-button"
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to cart" : "Out of stock"}
                </button>
                <button type="button" className="secondary-button">
                  Add to wishlist
                </button>
              </section>
            </section>
          </article>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productSchema),
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}