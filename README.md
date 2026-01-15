Appscrip ReactJS Assignment

A fully functional product listing web application built as part of Appscrip’s frontend evaluation task.

🚀 Live Demo

👉 Netlify Link: add your link here

📂 GitHub Repository

👉 add your repo link here

🛠️ Tech Stack

React.js

Next.js

JavaScript (ES6+)

CSS (No UI frameworks — No Bootstrap / Tailwind)

🎯 Assignment Requirements Met

Product listing page

Grid UI layout

Filter products by category

Sort by price

Product details page

Pagination / Load more (if implemented)

Fully responsive UI

No CSS frameworks used

🔧 API & Data Handling

Originally provided API responses lacked certain fields required for filtering and full feature implementation.

Therefore:
✔️ API replaced with FakeStore API
URL: https://fakestoreapi.com/products

This enabled:

Category-based filtering

Dynamic price sorting

Detailed product view
with consistent data.

🧩 Features Implemented
🛍️ Product List

Display all products fetched via API

Lazy load / re-render on filter sort

🔽 Sorting

Sort by Price – Low to High

Sort by Price – High to Low

🏷️ Filtering

Category filter based on dynamic API categories

📄 Product Details Page

View full description, image, price, category

Navigate back to list

📱 Responsiveness

Fully responsive layout

Desktop / Tablet / Mobile tested

📁 Project Structure
appscrip-task-ashutosh/
├── app/
│   ├── page.js
│   ├── products/
│   │   ├── [id]/page.js
│   └── layout.js
├── components/
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── ProductToolbar.jsx
│   ├── Footer.jsx
│   └── Header.jsx
├── styles/
│   ├── globals.css
│   ├── header.css
│   ├── footer.css
│   ├── product-grid.css
│   └── product-card.css
├── README.md
└── package.json

▶️ How to Run Locally
git clone <repo-url>
cd appscrip-task-ashutosh
npm install
npm run dev


App will run on:

http://localhost:3000

🚀 Build for Production
npm run build
npm start

📝 Notes

Filtering & sorting were adapted based on API structure

No external UI libraries used

Fully custom layout, reusable components, vanilla CSS

Next.js 13+ app router used

🙌 Author

Ashutosh Kumar Jaiswal
LinkedIn: add your profile link
