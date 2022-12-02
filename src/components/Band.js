import React from "react";
import { Link } from "react-router-dom";

function Band(band) {
  return (
    <tr>
      <th scope="row">{band.band.id}</th>
      <td>
        <Link to={"/band/" + band.band.id}>{band.band.name}</Link>
      </td>
      <td>{band.band.country}</td>
      <td>{band.band.genre}</td>
      <td>{band.band.foundation_year}</td>
    </tr>
  );
}

export default Band;
