// export default function ProductToolbar({ totalCount, currentCategory, currentSort }) {
//   return (
//     <section className="toolbar" aria-label="Product toolbar">
//       <div className="toolbar-left">
//         <h2 className="toolbar-title">Discover our products</h2>
//         <p className="toolbar-count">
//           {totalCount} product{totalCount === 1 ? "" : "s"} found
//         </p>
//       </div>

//       <form className="toolbar-form" method="GET">
//         {currentCategory ? (
//           <input type="hidden" name="category" value={currentCategory} />
//         ) : null}

//         <label className="toolbar-sort-label" htmlFor="sort">
//           Sort by
//         </label>
//         <select
//           id="sort"
//           name="sort"
//           defaultValue={currentSort || ""}
//           className="toolbar-sort-select"
//           aria-label="Sort products"
//         >
//           <option value="">Featured</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="rating-desc">Rating: High to Low</option>
//         </select>

//         <button type="submit" className="toolbar-apply">
//           Apply
//         </button>
//       </form>
//     </section>
//   );
// }







export default function ProductToolbar({ totalCount, currentCategory, currentSort }) {
  return (
    <section className="toolbar" aria-label="Product toolbar">
      <div className="toolbar-left">
        <h2 className="toolbar-title">Discover our products</h2>
        <p className="toolbar-count">
          {totalCount} product{totalCount === 1 ? "" : "s"} found
        </p>
      </div>

      <form className="toolbar-form" method="GET">
        {currentCategory ? (
          <input type="hidden" name="category" value={currentCategory} />
        ) : null}

        <label className="toolbar-sort-label" htmlFor="sort">
          Sort by
        </label>
        <select
          id="sort"
          name="sort"
          defaultValue={currentSort || ""}
          className="toolbar-sort-select"
          aria-label="Sort products"
        >
          <option value="">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>

        <button type="submit" className="toolbar-apply">
          Apply
        </button>
      </form>
    </section>
  );
}
