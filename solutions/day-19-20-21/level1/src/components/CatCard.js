import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/CatCard.css";

const CatCard = ({ cat }) => {
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_id=${cat.id}`, {
        signal: controller.signal,
      })
      .then((response) => {
        setImageURL(response.data[0].url);
      });

    return () => {
      controller.abort();
    };
  }, [cat.id]);

  return (
    <div className="card">
      <div className="cat-image">
        {imageURL && <img src={imageURL} alt="Cat" />}
      </div>
      <div className="cat-info">
        <div className="breed-name">{cat.name?.toUpperCase()}</div>
        <div className="country">{cat.origin}</div>
        <div>
          <span className="title">Temperament: </span>
          {cat.temperament}
        </div>
        <div>
          <span className="title">Life Span: </span>
          {cat.life_span} years
        </div>
        <div>
          <span className="title">Weight: </span>
          {cat.weight.metric} kg
        </div>
        <div>
          <span className="title">Description</span>
        </div>
        <div>{cat.description}</div>
      </div>
    </div>
  );
};

export default CatCard;
