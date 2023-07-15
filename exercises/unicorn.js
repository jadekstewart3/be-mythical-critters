class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
  }

  says(message) {
    return `**;* ${message} *;**`;
  }

  isWhite() {
    if (this.color !== "white") {
      return false;
    }
  }
}
module.exports = Unicorn;
