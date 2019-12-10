import React from 'react';
import Item from './Item';

const ItemList = (props) => (
  <div>
    { props.items.map( item =>
      <Item
        key={item.id}
        item={props.item}
        updateItem={props.updateItem}
        deleteItem={props.deleteItem}
      />
    )
  }
  </div>
);

export default ItemList;