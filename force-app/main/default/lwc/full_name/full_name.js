import { LightningElement } from 'lwc';

export default class FullName extends LightningElement {
  firstname = '';
  lastname = '';
  fullname = '';

  firstnamechangeHandler(event) {
    this.firstname = event.target.value;
  }

  secondnamechangeHandler(event) {
    this.lastname = event.target.value;
  }

  clickHandler(event) {
    // Combine first and last names with a space
    this.fullname = `${this.firstname} ${this.lastname}`;
  }
}
