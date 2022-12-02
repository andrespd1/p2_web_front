import React from "react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
import Band from "./Band";
import BandDetail from "./BandDetail";

function BandList(props) {
  const [estado, setEstado] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setEstado(data);
      });
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <table
          className="table"
          style={{ width: "40%", marginLeft: "5%", marginTop: "3%" }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Name" />
              </th>
              <th scope="col">
                <FormattedMessage id="Country" />
              </th>
              <th scope="col">
                <FormattedMessage id="Genre" />
              </th>
              <th scope="col">
                <FormattedMessage id="Foundation" />
              </th>
            </tr>
          </thead>
          <tbody>
            {estado.map((band) => (
              <Band band={band} />
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ marginLeft: "5%" }}>
        La banda más antigua es <b>Queen</b> y fue fundada hace <b>52</b> años
      </p>
    </div>
  );
}

function AncientBand() {
  const [estado, setEstado] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setEstado((data) => {
          let max = -1;
          let obj;
          for (const element of data) {
            if (2022 - element.foundation_year > max) {
              max = 2022 - element.foundation_year;
              obj = element;
            }
          }
          return obj;
        });
      });
  }, []);
  return estado;
}

export default BandList;
