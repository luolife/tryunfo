import React, { Component } from 'react';
import Attribute from './Attribute'; // ajuste o caminho se necessário

class CharacterAttributes extends Component {
  render() {
    const { attribute1, attribute2, attribute3 } = this.props;

    const attributeLabels = {
      1: 'Força',
      2: 'Inteligência',
      3: 'Velocidade',
    };

    return (
      <div className="character-attributes">
        <Attribute
          datatestid="attr1"
          attribute={attribute1}
          label={attributeLabels[1]}
        />
        <Attribute
          datatestid="attr2"
          attribute={attribute2}
          label={attributeLabels[2]}
        />
        <Attribute
          datatestid="attr3"
          attribute={attribute3}
          label={attributeLabels[3]}
        />
      </div>
    );
  }
}

export default CharacterAttributes;
