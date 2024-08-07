import { useState } from "react";
import { SearchInput } from "../../UI-components/SearchInput/SearchInput";
import { SearchButton } from "../../UI-components/SearchButton/SearchButton";
import "./SearchForm.css";

export const SearchForm = ({
  searchText,
  setSearchText,
  setPage,
  getCards,
  isCenter,
}) => {
  const [value, setValue] = useState("");

  const handleFocus = (e) => {
    e.target.focus({ preventScroll: true });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === value) return;
    setPage(1);
    setSearchText(value);
    getCards(value, 1);
  };

  const clearInput = () => {
    setValue("");
  };

  return (
    <section className={`search-form ${isCenter && "search-form_center"}`}>
      <form onSubmit={handleSubmit}>
        <SearchInput
          placeholder={"Телефоны, яблоки, груши..."}
          value={value}
          onChange={handleChange}
          clearInput={clearInput}
          handleFocus={handleFocus}
        />
        <SearchButton />
      </form>
    </section>
  );
};
