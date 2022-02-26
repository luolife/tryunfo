import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attribute from './Attribute';

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
      deleteBtn,
      deleteCard,
    } = this.props;

    return (
      <div className="card-with-btn">
        <div className="card">
          <div className="card-second-border">
            <div className="card-subcontainer">
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
              <Attribute datatestid="attr1-card" attribute={ cardAttr1 } attNumber="1" />
              <Attribute datatestid="attr2-card" attribute={ cardAttr2 } attNumber="2" />
              <Attribute datatestid="attr3-card" attribute={ cardAttr3 } attNumber="3" />
              <h3 data-testid="rare-card" className="rare-card">{ cardRare }</h3>
              { cardTrunfo && <h2 data-testid="trunfo-card">Super Trunfo</h2> }
            </div>
          </div>
        </div>
        { deleteBtn && (
          <button
            data-testid="delete-button"
            type="button"
            className="delete-btn"
            onClick={ () => deleteCard(cardName) }
          >
            Excluir
          </button>) }
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
  deleteBtn: PropTypes.bool,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  deleteBtn: false,
  deleteCard: () => console.log('default'),
};

export default Card;
