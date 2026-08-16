import {
  FILTER_TYPES,
  POPULATION_OPTIONS,
  CLIMATE_OPTIONS,
  WEALTH_OPTIONS,
  NO_FILTER,
  getContinentOptions,
  getDefaultValue,
  describeFilter,
} from "../utils/filterCountries";

// This component holds no state of its own. It receives the current filter and a
// function to change it, which is what keeps the controls and the grid from ever
// disagreeing about what is being shown.
function FilterBar({ filter, onChange, countries, resultCount, totalCount }) {
  // Which options belong in the second dropdown depends on the first one
  const valueOptions = {
    continent: getContinentOptions(countries),
    population: POPULATION_OPTIONS,
    climate: CLIMATE_OPTIONS,
    wealth: WEALTH_OPTIONS,
  }[filter.type];

  // Changing the filter type replaces the whole filter, which is how only one
  // filter stays active at a time
  const handleTypeChange = (event) => {
    const type = event.target.value;
    onChange({ type, value: getDefaultValue(type, countries) });
  };

  const handleValueChange = (event) => {
    onChange({ ...filter, value: event.target.value });
  };

  const isFiltered = filter.type !== "none";

  return (
    <div className="filter-bar">
      <div className="filter-bar-controls">
        <label className="filter-label">
          Filter by
          <select
            className="filter-select"
            value={filter.type}
            onChange={handleTypeChange}
          >
            {FILTER_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        {/* The second dropdown only makes sense once a filter type is picked */}
        {valueOptions && (
          <label className="filter-label">
            Show
            <select
              className="filter-select"
              value={filter.value ?? ""}
              onChange={handleValueChange}
            >
              {valueOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        )}

        {isFiltered && (
          <button
            type="button"
            className="filter-reset-btn"
            onClick={() => onChange(NO_FILTER)}
          >
            Reset
          </button>
        )}
      </div>

      <p className="filter-summary">
        Showing {resultCount} of {totalCount} countries {describeFilter(filter)}
      </p>
    </div>
  );
}

export default FilterBar;
