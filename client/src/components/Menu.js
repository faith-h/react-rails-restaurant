import axios from 'axios';
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import MenuForm from './MenuForm';
import React from 'react';
import { Button, Header, Icon, } from 'semantic-ui-react';

class Menu extends React.Component {
  state = {editing: false, items: [], adding: false, };

  toggleEdit=() => this.setState({ editing: !this.state.editing});

  toggleAdd=() => this.setState({ adding: !this.state.adding})

  componentDidMount() {
    axios.get(`/api/menus/${this.props.menu.id}/items`)
    .then( res => {
      this.setState({ items: res.data, })
    })
  };

  addItem = (name, price) => {
    axios.post(`/api/menus/${this.props.menu.id}/items`)
    .then( res => {
      const {items, } = this.state;
      this.setState({ items: [...items, res.data], });
    });
  };

  updateItem = (id) => {
    axios.put(`/api/menus/${this.props.menu.id}/items/${id}`)
    .then( res => {
      const items = this.state.items.map( item => {
        if (item.id === id)
        return res.data;
        return item;
      });
      this.setState({ items, })
    });
  };

  deleteItem = (id) => {
    axios.delete(`/api/menus/${this.props.menu.id}/items/${id}`)
    .then( res => {
      const { items, } = this.state;
      this.setState({ items: items.filter( item => item.id !== id), });
    });
  };


  render () {
    return (
  <div>

  {/* display menu names */}
  <div>
    <Header as="h2"> {this.props.menu.name} </Header>
  </div>

  {/* add item button */}
  <Button
  icon
  color="green"
  size="tiny"
  onClick={this.addItem}
  style={{marginleft: "15px"}}
  >
    <Icon name="plus"/>
  </Button>

  {/* toggle add item form */}
  { this.state.adding?
    <ItemForm {...this.props.item} addItem={this.addItem} toggle={this.toggleEdit} />
    :
    null
  }

  {/* edit button */}
  <Button 
  icon
  color="blue"
  size="tiny"
  onClick={this.toggleEdit}
  style={{marginLeft: "15px", }}
  >
  <Icon name="pen square" />
  </Button>

  {/* delete button */}
  <Button 
  icon
  color="red"
  size="tiny"
  onClick={() => this.props.deleteMenu(this.props.menu.id)}
  style={{marginLeft: "15px", }}
  >
    <Icon name="trash" />
  </Button>

  {/* toggle edit form */}
  { this.state.editing?
    <MenuForm {...this.props} update={this.props.updateMenu} toggleAdd={this.toggleAdd} />
    :
    null
  }

  <ItemList items={this.state.items} updateItem={this.updateItem} deleteItem={this.deleteItem} />

  </div>
    );
  };
};

export default Menu;