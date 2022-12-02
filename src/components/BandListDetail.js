import React from "react";
import BandList from "./BandList";
import BandDetail from "./BandDetail";

function BandListDetail(props) {
  return (
    <div style={{ display: "flex" }}>
      <BandList />
      <BandDetail />
    </div>
  );
}

export default BandListDetail;
