import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <h2 data-testid="name-card" className="name-card">{ cardName }</h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          className="image-card"
        />
        <p data-testid="description-card" className="description-card">
          { cardDescription }
        </p>
        <h3 data-testid="attr1-card" className="attributes">{ cardAttr1 }</h3>
        <h3 data-testid="attr2-card" className="attributes">{ cardAttr2 }</h3>
        <h3 data-testid="attr3-card" className="attributes">{ cardAttr3 }</h3>
        <h3 data-testid="rare-card" className="rare-card">{ cardRare }</h3>
        { cardTrunfo && <h2 data-testid="trunfo-card">Super Trunfo</h2> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
