// export default function ProductCard({ product }) {
//   return (
//     <article
//       className="product-card"
//       itemScope
//       itemType="https://schema.org/Product"
//     >
//       <a href={`/products/${product.slug}`} className="product-image-link">
//         <figure className="product-image-wrapper">
//           <img
//             src={product.imageUrl}
//             alt={product.imageAlt}
//             className="product-image"
//             loading="lazy"
//             itemProp="image"
//           />
//         </figure>
//       </a>

//       <div className="product-content">
//         <h3 className="product-title" itemProp="name">
//           <a href={`/products/${product.slug}`} className="product-title-link">
//             {product.name}
//           </a>
//         </h3>

//         <p className="product-brand" itemProp="brand">
//           {product.brand}
//         </p>

//         <p className="product-description" itemProp="description">
//           {product.description}
//         </p>

//         <div className="product-meta">
//           <p
//             className="product-price"
//             itemProp="offers"
//             itemScope
//             itemType="https://schema.org/Offer"
//           >
//             <span itemProp="priceCurrency">{product.currency}</span>{" "}
//             <span itemProp="price">{product.price.toFixed(2)}</span>
//             {product.inStock ? (
//               <span
//                 className="badge badge-instock"
//                 itemProp="availability"
//                 content="https://schema.org/InStock"
//               >
//                 In stock
//               </span>
//             ) : (
//               <span
//                 className="badge badge-outofstock"
//                 itemProp="availability"
//                 content="https://schema.org/OutOfStock"
//               >
//                 Out of stock
//               </span>
//             )}
//           </p>

//           <p className="product-rating">
//             <span aria-label={`Rated ${product.rating} out of 5`}>
//               ★ {product.rating.toFixed(1)}
//             </span>
//             <span className="product-review-count">
//               ({product.reviewCount} reviews)
//             </span>
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// }








export default function ProductCard({ product }) {
  return (
    <article
      className="product-card"
      itemScope
      itemType="https://schema.org/Product"
    >
      <a href={`/products/${product.slug}`} className="product-image-link">
        <figure className="product-image-wrapper">
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            className="product-image"
            loading="lazy"
            itemProp="image"
          />
        </figure>
      </a>

      <div className="product-content">
        <h3 className="product-title" itemProp="name">
          <a href={`/products/${product.slug}`} className="product-title-link">
            {product.name}
          </a>
        </h3>

        <p className="product-brand" itemProp="brand">
          {product.brand}
        </p>

        <p className="product-description" itemProp="description">
          {product.description}
        </p>

        <div className="product-meta">
          <p
            className="product-price"
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

          <p className="product-rating">
            <span aria-label={`Rated ${product.rating} out of 5`}>
              ★ {product.rating.toFixed(1)}
            </span>
            <span className="product-review-count">
              ({product.reviewCount} reviews)
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}
