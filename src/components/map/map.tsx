import './map.module.css';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../components/hooks/use-map/use-map';
import {MapIcon} from '../../consts';
import {Location, Offer} from '../../types/offers-types';

type MapProps = {
  cityLocation: Location;
  offers: Offer[];
  activeOffer?: string | null;
};

function Map({cityLocation, offers, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOffer ? leaflet.icon(MapIcon.Active) : leaflet.icon(MapIcon.Default),
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >
    </section>
  );
}

export default Map;
