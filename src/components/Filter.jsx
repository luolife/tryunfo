import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { nameFilter, nameFilterField } = this.props;

    return (
      <div>
        <h2>Filtros de busca</h2>
        <label htmlFor="name-filter">
          Nome:
          <input
            type="text"
            name="nameFilterField"
            data-testid="nameFilter"
            value={ nameFilterField }
            onChange={ nameFilter }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  nameFilter: PropTypes.func.isRequired,
  nameFilterField: PropTypes.string.isRequired,
};

export default Filter;
