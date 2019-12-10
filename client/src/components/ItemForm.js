import React from 'react';
import { Form, } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = { name: "", price: 0};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.update) {
      this.props.update(this.state.name, this.state.price)
      this.props.toggleAdd()
    } else {
    this.props.addItem(this.state.name, this.state.price);
    }
    this.setState({name: "", price: 0});
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name="price"
        label="Price"
        placeholder="Add a Price"
        required
        type="float"
        onChange={this.handleChange}
        />
        <Form.Input
        label="Item"
        placeholder="Add an Item"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
      </Form>
    );
  };
};

export default ItemForm;