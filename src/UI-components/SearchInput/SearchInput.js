import "./SearchInput.css";

export const SearchInput = ({
  placeholder,
  onChange,
  value,
  clearInput,
  handleFocus,
}) => {
  return (
    <div className="search-input">
      <span className="search-input__search-icon"></span>
      <input
        className="search-input__input"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onFocus={handleFocus}
        required
      ></input>
      <span
        className={value ? "search-input__clear-icon" : ""}
        onClick={clearInput}
      ></span>
    </div>
  );
};
