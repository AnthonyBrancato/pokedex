import "styles/Item.scss";

const Item = ({ item }) => {
  let altAttribute = `${item.name} is displayed in a card`;

  return (
    <div className="item-card">
      <div className="item-image">
        <img
          src={
            item.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={altAttribute}
        />
      </div>
      <div className="item-info">
        <p className="item-name">{item.name}</p>
        <p className="item-id">N.{item.id}</p>
      </div>
    </div>
  );
};

export default Item;
