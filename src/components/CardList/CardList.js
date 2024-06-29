import { Card } from "../Card/Card";
import "./CardList.css";

export const CardList = ({ data }) => {
  return (
    <ul className="card-list">
      {data.map((card) => (
        <Card card={card} />
      ))}
    </ul>
  );
};
