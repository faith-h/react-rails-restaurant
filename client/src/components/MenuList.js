import React from 'react';
import Menu from './Menu';

const MenuList = (props) => (
  <div>
    { props.menus.map( menu => (
      <Menu
      key={menu.id}
      menu={menu}
      updateMenu={props.updateMenu}
      deleteMenu={props.deleteMenu}
      />
    ))}
  </div>
);

export default MenuList;