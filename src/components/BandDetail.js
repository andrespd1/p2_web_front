import React from "react";
import { useParams } from "react-router-dom";

const { useEffect, useState } = require("react");

function BandDetail(band) {
  const params = useParams();
  const [estado, setEstado] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setEstado(data.find((b) => b.id == params.idBand));
      });
  }, []);

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={estado.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{estado.name}</h5>
          <p className="card-text">{estado.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BandDetail;
