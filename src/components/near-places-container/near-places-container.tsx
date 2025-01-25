import {memo} from 'react';
import {CardType, OfferCardCount} from '../../consts';
import {useAppSelector} from '../../hooks/index';
import {getNearbyPlaces} from '../../store/full-offer-process-slice/selectors';
import OffersList from '../../components/offers-list/offers-list';

function NearPlacesContainerTemplate(){
  const nearbyPlaces = useAppSelector(getNearbyPlaces).slice(OfferCardCount.Min, OfferCardCount.Max);
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
          Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        <OffersList offers={nearbyPlaces} cardType={CardType.Offer}/>
      </div>
    </section>
  );
}
const NearPlacesContainer = memo(NearPlacesContainerTemplate);
export default NearPlacesContainer;
