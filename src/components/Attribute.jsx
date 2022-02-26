import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute extends Component {
  render() {
    const { datatestid, attribute, attNumber } = this.props;
    return (
      <div data-testid={ datatestid } className="attribute-container">
        <p>
          { `Atributo ${attNumber} ......................` }
        </p>
        <h4 className="attribute-value">{ attribute }</h4>
      </div>
    );
  }
}

Attribute.propTypes = {
  datatestid: PropTypes.string,
  attribute: PropTypes.string,
}.isRequired;

export default Attribute;
