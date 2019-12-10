import axios from "axios";
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import React from 'react';
import { Container, } from 'semantic-ui-react';

class App extends React.Component {
  state = { menus: [], };

  // make a call to rails server to get Menus
  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data, });
    })
    .catch( err => {
      console.log(err);
    });
    
  };

  // make api call to rails server to add item
  // update state
  addMenu = (name) => {
    axios.post(`/api/menus/`, {name,})
    .then( res => {
      const {menus,} = this.state;
      this.setState({ menus: [...menus, res.data], });
    });
  };

  // todo make api call to update todo
  // todo update state
  updateMenu = (name, id) => {
    axios.put(`api/menus/${id}`, {id, name} )
      .then( res => {
        const menus = this.state.menus.map( menu => {
          if (menu.id === id)
            return res.data;
          return menu;
        });
        this.setState({ menus, })
      });
  };

  // make api call to delete todo
  // remove it from state
  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      this.setState({ menus: this.state.menus.filter(menu => menu.id !== id), })
    })
    .catch( err => {
      console.log(err)
    });
  };


  render() {
    return (
      <div>
        <Container style={{ padding: "30px 0"}}>
          <MenuForm addMenu={this.addMenu} />
          <br />
          <br />
          <MenuList
          menus={this.state.menus}
          addMenu={this.state.addMenu}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
          />
        </Container>
      </div>
    );
  };
};

export default App;
