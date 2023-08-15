import React, { Component } from "react";
import "../App.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
const position2 = [-6.229728, 106.6894291];
const markerPosition1 = [-6.229728, 106.6894284];

function GetIcon(_iconSize) {
  return L.icon({
    iconUrl: require("../Assets/Giwang/logoGiwang.png"),
    iconSize: [_iconSize],
  });
}

export default class MapAQMS extends Component {
  render() {
    return (
      <MapContainer center={position2} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          //   url="https://tiles.waqi.info/tiles/{aqi}/{z}/{x}/{y}.png?token=b4ad7d99faa79d31847c60deecee04cc8c3e9d79"
          //   url="https://tiles.waqi.info/tiles/{aqi}/{z}/{x}/{y}.png"
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          //   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //   url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
        />
        {/*START Mapping Style -> URL adalah design/style map */}
        <Marker position={markerPosition1} icon={GetIcon(40)}></Marker>
        {/*END Mapping Style -> URL adalah design/style map */}
      </MapContainer>
    );
  }
}
