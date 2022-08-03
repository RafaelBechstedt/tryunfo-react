import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
 state = {
   cardName: '',
   cardDescription: '',
   cardAttr1: '',
   cardAttr2: '',
   cardAttr3: '',
   cardImage: '',
   cardRare: '',
   cardTrunfo: false,
   isSaveButtonDisabled: true,
   savedCard: [],
 }

 onInputChange = ({ target }) => {
   const { name } = target;
   const value = (target.type === 'checkbox') ? target.checked : target.value;
   this.setState({
     [name]: value,
   }, () => {
     this.validateButton();
   });
 }

 validateButton = () => {
   const {
     cardName,
     cardDescription,
     cardImage,
     cardRare,
     cardAttr1,
     cardAttr2,
     cardAttr3,
   } = this.state;

   const maxAttr = 90;
   const maxAttrSum = 210;

   const validateNotEmpty = cardName.length > 0
   && cardDescription.length > 0
   && cardImage.length > 0
   && cardRare.length > 0;

   const validateNegative = Number(cardAttr1) >= 0
   && Number(cardAttr2) >= 0
   && Number(cardAttr3) >= 0;

   const validateSumAttr = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3))
   <= maxAttrSum;

   const validateAttrValue = Number(cardAttr1) <= maxAttr
   && Number(cardAttr2) <= maxAttr
   && Number(cardAttr3) <= maxAttr;

   const validateAll = validateNotEmpty
   && validateNegative && validateSumAttr && validateAttrValue;

   this.setState({
     isSaveButtonDisabled: !validateAll,
   });
 }

 onSaveButtonClick = () => {
   const { cardName,
     cardDescription,
     cardAttr1,
     cardAttr2,
     cardAttr3,
     cardImage,
     cardRare,
     cardTrunfo,
     savedCard } = this.state;

   savedCard.push(cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
     cardImage, cardRare, cardTrunfo);

   this.setState({
     cardName: '',
     cardDescription: '',
     cardAttr1: '0',
     cardAttr2: '0',
     cardAttr3: '0',
     cardImage: '',
     cardRare: 'normal',
   });
 };

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
     isSaveButtonDisabled,
   } = this.state;
   return (
     <div>
       <h1>Tryunfo</h1>
       <Form
         cardName={ cardName }
         cardDescription={ cardDescription }
         cardAttr1={ cardAttr1 }
         cardAttr2={ cardAttr2 }
         cardAttr3={ cardAttr3 }
         cardImage={ cardImage }
         cardRare={ cardRare }
         cardTrunfo={ cardTrunfo }
         onInputChange={ this.onInputChange }
         isSaveButtonDisabled={ isSaveButtonDisabled }
         onSaveButtonClick={ this.onSaveButtonClick }
       />
       <Card
         cardName={ cardName }
         cardDescription={ cardDescription }
         cardAttr1={ cardAttr1 }
         cardAttr2={ cardAttr2 }
         cardAttr3={ cardAttr3 }
         cardImage={ cardImage }
         cardRare={ cardRare }
         cardTrunfo={ cardTrunfo }
       />
     </div>
   );
 }
}

export default App;
