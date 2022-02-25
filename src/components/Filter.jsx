import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filterChange, nameFilterField } = this.props;
    const { rarityFilterField } = this.props;
    const { trunfoFilter } = this.props;

    return (
      <div>
        <h2>Filtros de busca</h2>
        <label htmlFor="nameFilterField">
          Nome:
          <input
            type="text"
            name="nameFilterField"
            data-testid="name-filter"
            value={ nameFilterField }
            onChange={ filterChange }
            disabled={ trunfoFilter }
          />
        </label>
        <label htmlFor="rarityFilterField">
          Raridade:
          <select
            name="rarityFilterField"
            data-testid="rare-filter"
            value={ rarityFilterField }
            onChange={ filterChange }
            disabled={ trunfoFilter }
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          SuperTrybeTrunfo
          <input
            type="checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            onChange={ filterChange }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  nameFilterField: PropTypes.string.isRequired,
  rarityFilterField: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filter;
