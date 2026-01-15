# 🛒 Appscrip ReactJS Assignment – Product Store

A clean, responsive product listing application built as part of the Appscrip frontend hiring assignment.
Features include filtering, sorting, product details, and dynamic UI — built **without Bootstrap or Tailwind CSS**.

---

## 🌐 Live Demo
👉 **Netlify:** https://appscrip-task-assignment-ashutosh.netlify.app/
## 📦 GitHub Repository
👉 _https://github.com/Ashutosh049-lab/Appscrip-task-Ashutosh_

---

## 🌟 Features

- 🛍️ Product listing grid view
- 🔽 Sort by price (Low → High / High → Low)
- 🏷️ Category-based product filtering
- 📄 Product details page
- 🔄 Dynamic UI powered by API
- 📱 Responsive layout for all screens
- 🎨 Pure CSS styling — **No Bootstrap / Tailwind**
- 🚀 Built using Next.js App Router
- 🌎 API-powered UI using FakeStore API
- 🧩 Modular & reusable components

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- React
- JavaScript (ES6+)
- CSS (Custom)
- Fetch API
- Netlify Hosting

---

## 🔧 API & Data Source

Used **FakeStore API** for stable JSON data  
👉 https://fakestoreapi.com/products

📌 Reason for switch:  
The original assignment API lacked fields needed for:
- Sorting by price
- Category filters
- Detailed view

FakeStore provided consistent fields (title, price, category, image, description).

---

## 📋 Requirements Met

- No UI libraries (Bootstrap/Tailwind ❌)
- Responsive layout
- Product list + detail pages
- Sorting + filtering working
- Component-based architecture

---

## 📋 Prerequisites

- Node.js (18+ recommended)
- npm or yarn
- Git

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone <your-repo-url>
cd appscrip-task-ashutosh
```


### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run development server
```bash
npm run dev
```


App runs at:

http://localhost:3000

### 4️⃣ Build for Production
```bash
npm run build
```


## 📁 Project Structure
```
appscrip-task-ashutosh/
├── app/
│   ├── page.js                   # Product listing
│   ├── products/
│   │   └── [id]/page.js          # Product detail page
│   └── layout.js                 # Root layout
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── ProductFilters.jsx
├── styles/
│   ├── globals.css
│   ├── header.css
│   ├── footer.css
│   └── product.css
├── public/
│   └── logo.png
├── package.json
├── README.md
└── .next/                        # Build output (ignored in git)

```

## 📌 Features Explained

### 🏷️ Filtering

Dynamic category filter based on API

Filters products without reload

### 🔽 Sorting

- Low → High price sort

- High → Low price sort

- Sort updates product grid instantly

### 📄 Product Detail View

- Large product image

- Title, price, category & description

### 🎨 Styling

- 00% custom CSS

- No UI frameworks

- Mobile → Tablet → Desktop support

## 🙋 Notes (Important)

- Filters were updated to match available API data structure

- FakeStore API used because original API lacked sortable fields

- Fully aligns with assignment rules & UI requirements


## 📝 Future Enhancements (Optional Ideas)

- Add pagination or infinite scroll

- Add wishlist/cart localStorage

- Add rating UI

- Add search functionality

---
 ## 👨‍💻 Author

Ashutosh Kumar Jaiswal

👉 **📧 email:** jashutosh528@gmail.com
👉 **🔗 LinkedIn:** https://www.linkedin.com/in/ashutosh-kumar-jaiswal-128054256/
👉 **💻 Portfolio:** https://ashutosh-portfolio-049.netlify.app/
