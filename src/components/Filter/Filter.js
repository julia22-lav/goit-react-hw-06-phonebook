import { Component } from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  render() {
    const filterInputId = genId();
    const { filterState, filterChange } = this.props;

    return (
      <label htmlFor={filterInputId} className={s.labelFilter}>
        Search Contacts by Name
        <input
          type="text"
          name="filter"
          id={filterInputId}
          value={filterState}
          onChange={filterChange}
          className={s.inputFilter}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.string,
  filterChange: PropTypes.func,
};

export default Filter;
