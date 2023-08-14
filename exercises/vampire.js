class Vampire{
  constructor(name, pet = 'bat'){
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
  }

  drink(){
    this.thirsty = false;
  }
}
module.exports = Vampire;