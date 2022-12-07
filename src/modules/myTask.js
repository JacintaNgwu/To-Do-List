/* eslint-disable import/prefer-default-export */
export class Mytask {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}