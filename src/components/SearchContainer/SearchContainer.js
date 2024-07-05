import { useEffect, useRef, useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { CardList } from "../CardList/CardList";
import { NotFound } from "../../UI-components/NotFound/NotFound";
import UnsplashApi from "../../api/UnsplashApi";
import "./SearchContainer.css";
import { ImageModal } from "../ImageModal/ImageModal";

export const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [isCenter, setIsCenter] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const lastElement = useRef();
  const observer = useRef();

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    if (!isCenter && data.length && page < totalPages) {
      var callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
          setPage((prev) => ++prev);
        }
      };
      observer.current = new IntersectionObserver(callback);
      observer.current.observe(lastElement.current);
    }
  }, [isCenter, data.length]);

  const getCards = (text) => {
    setIsCenter(false);
    setIsLoading(true);
    if (text !== searchText) {
      UnsplashApi.getCards(text, page)
        .then((res) => {
          setData([...res.results]);
          setTotalPages(res.total_pages);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    } else {
      UnsplashApi.getCards(text, page)
        .then((res) => {
          setData([...data, ...res.results]);
          setTotalPages(res.total_pages);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    if (page !== 1) {
      getCards(searchText, page);
    }
  }, [page]);

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        getCards={getCards}
        isCenter={isCenter}
      />
      <section className="search-container">
        {!isCenter && (
          <>
            {data.length ? (
              <>
                <div className="search-container__list">
                  <CardList
                    data={data}
                    isLoading={isLoading}
                    setSelectedImage={setSelectedImage}
                  />
                </div>
                <div
                  ref={lastElement}
                  style={{
                    height: "10px",
                    width: "100%",
                  }}
                />
              </>
            ) : (
              !isLoading && <NotFound />
            )}
          </>
        )}
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      </section>
    </>
  );
};
