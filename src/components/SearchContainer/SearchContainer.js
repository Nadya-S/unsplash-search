import { useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { CardList } from "../CardList/CardList";
import { NotFound } from "../../UI-components/NotFound/NotFound";
import "./SearchContainer.css";

export const SearchContainer = () => {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9,
  ]); //заменить на null

  // добавить запрос к апи

  return (
    <section
      className={`search-container ${!data && "search-container_center"}`}
    >
      <SearchForm />
      {data && (
        <div className="search-container__list">
          {data.length ? <CardList data={data} /> : <NotFound />}
        </div>
      )}
    </section>
  );
};
