import { useState } from "react";
import { SearchInput } from "../../UI-components/SearchInput/SearchInput";
import { SearchButton } from "../../UI-components/SearchButton/SearchButton";
import "./SearchForm.css";

export const SearchForm = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clearInput = () => {
    setValue("");
  };

  return (
    <section className="search-form">
      <form>
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
