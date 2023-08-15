class Wizard{
  constructor({name: name, bearded: bearded = true}){
    this.name = name;
    this.bearded = bearded;
    this.isRested = true;
    this.count = 0;
  }

  incantation(spell){
    return spell.toUpperCase();
  }

  cast(){
    this.count++;
    if(this.count >= 3){
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } else {  
      return 'MAGIC BULLET';
    }
  }
}
module.exports = Wizard;