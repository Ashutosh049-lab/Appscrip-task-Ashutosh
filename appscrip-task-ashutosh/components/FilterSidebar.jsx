

export default function FilterSidebar({ initialCategory, initialSort, categories = [] }) {
  return (
    <form className="filters-form" method="GET">
      {initialSort ? (
        <input type="hidden" name="sort" value={initialSort} />
      ) : null}

      <fieldset className="filters-group">
        <legend className="filters-legend">Category</legend>
        <div className="filters-options">
          <label className="filters-option">
            <input
              type="radio"
              name="category"
              value=""
              defaultChecked={!initialCategory}
            />
            <span>All</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.slug} className="filters-option">
              <input
                type="radio"
                name="category"
                value={cat.slug}
                defaultChecked={initialCategory === cat.slug}
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit" className="filters-submit">
        Apply filters
      </button>
    </form>
  );
}
