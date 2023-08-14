class Human{
  constructor(name){
    this.name = name;
    this.encounterCounter = 0;
  }

    noticesOgre(){
      console.log(this.encounterCounter);
    if(this.encounterCounter % 3 === 0 && this.encounterCounter !== 0){
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Human;