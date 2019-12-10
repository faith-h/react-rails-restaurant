import React from 'react';
import { Header, } from 'semantic-ui-react';

// can't get items to render yet, item array set in state of menu remains empty

const Item = (props) => (
  <div>
    <Header as="h2"> {props.items} </Header>
  </div>
);

export default Item;