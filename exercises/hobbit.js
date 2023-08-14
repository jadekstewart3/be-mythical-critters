class Hobbit {
  constructor(name){
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.isShort = true;
    
  }
  
  celebrateBirthday(){
    this.age++;
  }

  adult(){
    return this.age >= 33;
  }

  old(){
    return this.age >= 101;
  }

  hasRing(){
    return this.name === 'Frodo';
  }
}
module.exports = Hobbit;