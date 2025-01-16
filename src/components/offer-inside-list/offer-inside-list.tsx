type OfferInsideListProps = {
  goods: string[];
}

function OfferInsideList({goods}: OfferInsideListProps): JSX.Element {

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((goodsItem) =>
          (<li key={goodsItem} className="offer__inside-item">{goodsItem}</li>)
        )}
      </ul>
    </div>
  );

}

export default OfferInsideList;
