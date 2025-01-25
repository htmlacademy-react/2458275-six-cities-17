import {memo} from 'react';
type OfferHostProps = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
function OfferHostTemplate({name, avatarUrl, isPro}: OfferHostProps): JSX.Element {

  return (
    <div className="offer__host-user user">
      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
        <img
          className="offer__avatar user__avatar"
          src={avatarUrl}
          width={74}
          height={74}
          alt="Host avatar"
        />
      </div>
      <span className="offer__user-name">{name}</span>
      {isPro && <span className="offer__user-status">Pro</span>}
    </div>
  );

}
const OfferHost = memo(OfferHostTemplate);
export default OfferHost;
