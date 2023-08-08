class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.activity = 0;
    this.standing = true;
    this.layingDown = false;
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  shoot(){
    this.activity++;
      if(this.activity >= 3 || this.layingDown === true) {
        this.cranky = true;
        return this.no();
      } else{
    return 'Twang!!!';
    }
  }

  run(){
    this.activity++;
      if(this.activity >= 3 || this.layingDown === true) {
        this.cranky = true;
        return this.no();
      } else{
      return 'Clop clop clop clop!!!';
    }
  }

  sleep(){
    if(this.standing === true){
      return this.no();
    } else {
      this.cranky = false;
      this.activity = 0;
      return 'ZZZZ';
    }
  }

  drinkPotion(){
    if(this.standing === true && this.cranky === false){
      this.cranky = true;
    } else if(this.standing === true && this.cranky === true){
      this.cranky = false;
    }
    else {
      return 'Not while I\'m laying down!';
    }
  }

  no(){ 
    return 'NO!';
  }
}
module.exports = Centaur;