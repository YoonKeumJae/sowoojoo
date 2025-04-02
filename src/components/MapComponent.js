import React from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

const MapComponent = () => {
  const navermaps = useNavermaps();
  const mapLocation = new navermaps.LatLng(35.8461862, 128.5956776);
  return (
    <MapDiv style={{ width: "100%", height: "700px" }}>
      <NaverMap defaultCenter={mapLocation} defaultZoom={15}>
        <Marker defaultPosition={mapLocation} />
      </NaverMap>
    </MapDiv>
  );
};

export default MapComponent;
