import { Item } from 'components'

const List = ({list}) =>
  list.map(item => (
    <Item key={item.name} item={item} />
  ));

export default List;
