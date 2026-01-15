const ALL_PRODUCTS = [
  {
    id: "1",
    name: "Red Backpack",
    slug: "red-backpack",
    description: "Minimal everyday backpack with padded laptop sleeve.",
    imageUrl: "/images/product-1.jpg",
    imageAlt: "Red backpack on white background",
    price: 79.99,
    currency: "USD",
    rating: 4.5,
    reviewCount: 112,
    category: "Bags",
    brand: "Studio Line",
    inStock: true,
  },
  {
    id: "2",
    name: "Leather Strap",
    slug: "leather-strap",
    description: "Tan leather camera or bag strap with metal hardware.",
    imageUrl: "/images/product-2.jpg",
    imageAlt: "Tan leather strap coiled on white surface",
    price: 49.0,
    currency: "USD",
    rating: 4.7,
    reviewCount: 68,
    category: "Accessories",
    brand: "Studio Line",
    inStock: true,
  },
  {
    id: "3",
    name: "White Sneakers",
    slug: "white-sneakers",
    description: "Low‑profile white sneakers with rubber sole.",
    imageUrl: "/images/product-1.jpg",
    imageAlt: "Pair of white sneakers on white background",
    price: 92.0,
    currency: "USD",
    rating: 4.3,
    reviewCount: 154,
    category: "Shoes",
    brand: "Studio Line",
    inStock: true,
  },
  {
    id: "4",
    name: "Yellow Plush Toy",
    slug: "yellow-plush-toy",
    description: "Soft yellow plush toy with blue scarf.",
    imageUrl: "/images/product-2.jpg",
    imageAlt: "Yellow plush toy on white cube",
    price: 39.5,
    currency: "USD",
    rating: 4.9,
    reviewCount: 43,
    category: "Toys",
    brand: "Studio Line",
    inStock: false,
  },
];

export async function getProducts(query = {}) {
  const { category, sort } = query;
  let products = [...ALL_PRODUCTS];

  if (category) {
    products = products.filter(
      (p) => p.category.toLowerCase() === String(category).toLowerCase()
    );
  }

  if (sort === "price-asc") {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    products.sort((a, b) => b.price - a.price);
  } else if (sort === "rating-desc") {
    products.sort((a, b) => b.rating - a.rating);
  }

  return products;
}

export async function getProductBySlug(slug) {
  if (!slug) return null;
  const product = ALL_PRODUCTS.find((p) => p.slug === String(slug));
  return product || null;
}
