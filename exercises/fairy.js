class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: [ 'Iris' ]};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  replaceInfant(infant){
    if(this.disposition === 'Vengeful' && this.humanWards.length < 2){
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
    } else {
      this.disposition = 'Good natured';
      return infant;
    }
  }

  provoke(){
    this.disposition = 'Vengeful';
  }

  makeDresses(flowers){
    for (var i = 0; i < flowers.length; i++) {
      //i means index, next is the condition to stop the loop, then the increment
      this.clothes.dresses.push(flowers[i]);
    }
  }

  believe() {
    this.dust += 10;
  }

  receiveBelief() {
    this.dust++;
  }
}
module.exports = Fairy;