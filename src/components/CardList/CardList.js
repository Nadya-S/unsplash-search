import { Card } from "../Card/Card";
import "./CardList.css";

export const CardList = ({ data, isLoading, setSelectedImage }) => {
  return (
    <ul className="card-list">
      {data.map((card) => (
        <Card card={card} key={card.id} setSelectedImage={setSelectedImage} />
      ))}
      {isLoading &&
        Array(10)
          .fill()
          .map((el, i) => <Card card={null} key={i} />)}
    </ul>
  );
};
