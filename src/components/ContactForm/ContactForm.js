import { Component } from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onChange = event => {
    event.preventDefault();
    console.dir(event.currentTarget);
    const { value, name } = event.currentTarget;
    const currentState = this.state;
    const upadateState = { [name]: value };
    this.setState({ ...currentState, ...upadateState });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const nameId = genId();
    const telId = genId();
    return (
      <form onSubmit={this.onSubmit} className={s.contactForm}>
        <label htmlFor={nameId} className={s.labelForm}>
          Name
          <input
            type="text"
            name="name"
            id={nameId}
            value={this.state.name}
            onChange={this.onChange}
            className={s.inputForm}
          />
        </label>

        <label htmlFor={telId} className={s.labelForm}>
          Tel
          <input
            type="tel"
            name="number"
            id={telId}
            value={this.state.number}
            // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            onChange={this.onChange}
            className={s.inputForm}
          />
        </label>
        <button type="submit" className={s.buttonForm}>
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(actions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
