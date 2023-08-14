class Pirate{
  constructor(name, job = 'Scallywag', cursed = false){
    this.name = name;
    this.job = job;
    this.cursed = cursed;
    this.acts = 0;
    this.booty = 0;
  }

  commitHeinousAct(){
    this.acts++;
    if(this.acts >= 3){
      this.cursed = true;
    }
  }

  robShip(){
    this.booty += 100;
    return 'YAARRR!';
  }
}
module.exports = Pirate;