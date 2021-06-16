const Item = ({item}) => {
  return (
    <div>
      <span>{item.name}</span>
      <span>{item.url}</span>
    </div>
  );
};

export default Item;
