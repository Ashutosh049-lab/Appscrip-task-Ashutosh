



const API_BASE_URL = "https://dummyjson.com";

// Transform DummyJSON product to our app format
function transformProduct(apiProduct) {
  return {
    id: String(apiProduct.id),
    name: apiProduct.title,
    slug: apiProduct.title.toLowerCase().replace(/\s+/g, "-"),
    description: apiProduct.description,
    imageUrl: apiProduct.thumbnail || apiProduct.images?.[0] || "",
    imageAlt: apiProduct.title,
    price: apiProduct.price,
    currency: "USD",
    rating: apiProduct.rating,
    reviewCount: apiProduct.reviews?.length || 0,
    category: apiProduct.category,
    brand: apiProduct.brand || "Unknown",
    inStock: apiProduct.stock > 0,
    stock: apiProduct.stock,
    discountPercentage: apiProduct.discountPercentage,
    images: apiProduct.images || [],
  };
}

export async function getProducts(query = {}) {
  const { category, sort } = query;
  
  try {
    // Build API URL based on category filter
    let apiUrl = category
      ? `${API_BASE_URL}/products/category/${category}`
      : `${API_BASE_URL}/products?limit=100`;

    // Fetch products from DummyJSON API
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    let products = data.products.map(transformProduct);

    // Apply sorting
    if (sort === "price-asc") {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === "rating-desc") {
      products.sort((a, b) => b.rating - a.rating);
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductBySlug(slug) {
  if (!slug) return null;
  
  try {
    // Fetch all products and find by slug
    const products = await getProducts();
    const product = products.find((p) => p.slug === String(slug));
    return product || null;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
}

// Get all available categories
export async function getCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
