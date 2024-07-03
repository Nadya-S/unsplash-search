import "./Card.css";

export const Card = ({ card }) => {
  return (
    <>
      {card ? (
        <li className="card">
          <img
            className="card__img"
            src={card.urls.small}
            alt={card.alt_description}
          />
        </li>
      ) : (
        <li className="card_loader"></li>
      )}
    </>
  );
};
