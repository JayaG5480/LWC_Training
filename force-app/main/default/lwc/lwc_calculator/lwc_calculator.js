import { LightningElement } from 'lwc';

export default class Lwc_calculator extends LightningElement {
  number1 = 0;
  number2 = 0;
  result = 0;

  numberChangeHandler(event) {
    const name = event.target.name;
    if (name === 'number1') {
      this.number1 = parseFloat(event.target.value); // Ensure proper conversion
    } else if (name === 'number2') {
      this.number2 = parseFloat(event.target.value);
    }
  }

  clickHandler(event) {
    const label = event.target.label;
    if (label === 'Add') {
      this.result = parseInt(this.number1) + parseInt(this.number2);
    } else if (label === 'Sub') {
      this.result = parseInt(this.number1) - parseInt(this.number2);
    }
  }
}
