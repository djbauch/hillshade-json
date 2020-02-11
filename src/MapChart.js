import React from "react";
import {
  Graticule,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import hillshade from "./hillshade.json";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  return (
    <ComposableMap>
      <Graticule stroke="#EEE" strokeWidth={0.5} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography fill="#EEE" key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Geographies geography={hillshade.features}>
        {({ geographies }) => {
          return geographies.map(geo => (
            <Geography
              fill={
                geo.id === "layer-1"
                  ? "rgba(0,0,0,0.01)"
                  : geo.id === "layer-2"
                  ? "rgba(0,0,0,0.02)"
                  : "rgba(0,0,0,0.03)"
              }
              key={geo.rsmKey}
              geography={geo}
            />
          ));
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
