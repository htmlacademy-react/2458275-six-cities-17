import {memo} from 'react';
type OfferHostProps = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
function OfferHostTemplate({name, avatarUrl, isPro}: OfferHostProps): JSX.Element {
  const avatarClassName = `offer__avatar-wrapper user__avatar-wrapper ${isPro && 'offer__avatar-wrapper--pro'}`;
  return (
    <div className="offer__host-user user">
      <div className={avatarClassName}>
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
