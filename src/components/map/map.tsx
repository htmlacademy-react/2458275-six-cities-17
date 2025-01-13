import './map.module.css';
import leaflet, {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import {MapIcon} from '../../consts';
import {Location, Offer} from '../../types/offers-types';

type MapProps = {
  cityLocation: Location;
  offers: Offer[];
  mapType: string;
  activeOffer?: string | null;
};

function Map({cityLocation, offers, mapType, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const markers:Marker[] = [];
      offers.forEach((offer) => {
        const marker =
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOffer ? leaflet.icon(MapIcon.Active) : leaflet.icon(MapIcon.Default),
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
  }, [map, offers, activeOffer]);

  return (
    <section
      ref={mapRef}
      className={`${mapType}__map map`}
    >
    </section>
  );
}

export default Map;
