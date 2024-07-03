import "./Card.css";

export const Card = ({ card, setSelectedImage }) => {
  const handleClick = () => {
    setSelectedImage(card);
  };
  return (
    <>
      {card ? (
        <li className="card">
          <img
            className="card__img"
            src={card.urls.small}
            alt={card.alt_description}
            onClick={handleClick}
          />
        </li>
      ) : (
        <li className="card_loader"></li>
      )}
    </>
  );
};
