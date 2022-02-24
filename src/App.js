import React from 'react';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      nameFilterField: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkForTrunfo = this.checkForTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.nameFilter = this.nameFilter.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.formValidation());
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => this.checkForTrunfo());
  }

  checkForTrunfo() {
    const { savedCards } = this.state;
    const testTrunfo = savedCards.some(({ cardTrunfo }) => cardTrunfo);
    this.setState({ hasTrunfo: testTrunfo });
  }

  formValidation() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const attr1 = +cardAttr1;
    const attr2 = +cardAttr2;
    const attr3 = +cardAttr3;
    const maxAtt = 90;
    const maxAttrSum = 210;
    const notEmpty = (cardName && cardDescription && cardImage);
    const attrLimit = (attr1 <= maxAtt && attr2 <= maxAtt && attr3 <= maxAtt);
    const attrMin = (attr1 >= 0 && attr2 >= 0 && attr3 >= 0);
    const attrSum = (attr1 + attr2 + attr3 <= maxAttrSum);

    if (notEmpty && attrLimit && attrMin && attrSum) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  deleteCard(name) {
    const { savedCards } = this.state;
    const newDeck = savedCards
      .filter(({ cardName }) => cardName !== name);
    this.setState({
      savedCards: newDeck,
    }, () => this.checkForTrunfo());
  }

  nameFilter({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { savedCards } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
        <main className="main-container">
          <div className="form-title-container">
            <h2>Adicionar nova carta</h2>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="preview-title-container">
            <h2>Preview</h2>
            <Card { ...this.state } />
          </div>
        </main>
        <Filter { ...this.state } />
        <section className="cardList">
          { savedCards.map((card) => (<Card
            key={ card.cardName }
            deleteBtn
            deleteCard={ this.deleteCard }
            { ...card }
          />)) }
        </section>
      </>
    );
  }
}

export default App;
