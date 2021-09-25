import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";
import { Marker } from "react-map-gl";
import { Popup } from "react-map-gl";

function Map({searchResults}) {

  
  //convert the lat an long to full latitude and 
  //longitude
  const coordinates = searchResults.map((result) => ({
      longitude: result.long,
      latitude: result.lat,
  }));

  const [selectedLocation, setSelectedLocation] = useState(coordinates[0])


  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dawith305/cktzmd875230p17mocmmcvk6d"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_mapbox_key}
      {...viewPort}
      onViewportChange={(nextViewport)=> setViewPort(nextViewport)}
    >
        {searchResults.map((result) => (
            <div key={result.long}>
                <Marker
                longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p className="curson-ponter 
                        text-3xl animate-bounce"
                        aria-label="push-pin"
                        role="img"
                        onClick={()=> setSelectedLocation(result)}
                    >📍</p>
                </Marker>

                {/* The overflow marker popup */}
                {selectedLocation.long === result.long ? (
                    <Popup
                    onClose={()=> setSelectedLocation({})}
                    closeOnClick={true}
                    latitude={result.lat}
                    longitude={result.long}
                    >{result.title}</Popup>
                ):(
                    false
                )}
            </div>
        ))}

    </ReactMapGL>
  );
}

export default Map;
