import React from 'react';
import { Form, } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.update) {
      this.props.update(this.state.name, this.props.menu.id)
      this.props.toggle()
    } else {
    this.props.addMenu(this.state.name);
    }
    this.setState({ name: "", });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="New Menu"
        placeholder="Menu Name"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
      </Form>
    );
  };

};

export default MenuForm;