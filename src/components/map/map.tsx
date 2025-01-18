import './map.module.css';
import leaflet, {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import {MapIcon, MapTypes} from '../../consts';
import {Location, offerMapPoint} from '../../types/offers-types';

type MapProps = {
  cityLocation: Location;
  mapType: MapTypes;
  activeOffer?: string | null;
  mapPoints: offerMapPoint[];
};

function Map({cityLocation, mapPoints, mapType, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const shouldZoomScroll = mapType === MapTypes.Main;
  const map = useMap(mapRef, cityLocation, shouldZoomScroll);
  console.log()
  useEffect(() => {
    if (map) {
      const markers:Marker[] = [];
      mapPoints.forEach((point) => {
        const marker =
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: point.id === activeOffer ? leaflet.icon(MapIcon.Active) : leaflet.icon(MapIcon.Default),
          })
          .addTo(map);
        markers.push(marker);
      });
      return () => {
        markers.forEach((marker) =>{
          marker.removeFrom(map);
        });
      };
    }
  }, [map, mapPoints, activeOffer, cityLocation]);

  return (
    <section
      ref={mapRef}
      className={`${mapType}__map map`}
    >
    </section>
  );
}

export default Map;
