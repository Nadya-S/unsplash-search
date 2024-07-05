import { useState } from "react";
import { SearchInput } from "../../UI-components/SearchInput/SearchInput";
import { SearchButton } from "../../UI-components/SearchButton/SearchButton";
import "./SearchForm.css";

export const SearchForm = ({
  searchText,
  setSearchText,
  getCards,
  isCenter,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === value) return;
    setSearchText(value);
    getCards(value);
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
        />
        <SearchButton />
      </form>
    </section>
  );
};
