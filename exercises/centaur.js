class Centaur {
  constructor(name, breed, cranky = false, standing = true, counter = 0) {
    this.name = name;
    this.breed = breed;
    this.cranky = cranky;
    this.standing = standing;
    this.counter = counter;
  }

  shoot() {
    if(this.cranky === true) {
      return 'NO!';
    } 
    else {
      this.counter++;
      return 'Twang!!!';
    }
  }

  run() {
    this.counter++;
    return 'Clop clop clop clop!!!';
  }

  cranky() {
    if (this.shoot + this.run >= 3) {
      return true;
    }
  }
}
 module.exports = Centaur;