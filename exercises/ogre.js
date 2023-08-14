class Ogre{
  constructor(name, home = 'Swamp'){
    this.name = name;
    this.home = home;
    this.swings = 0;
  }

  encounter(human){
    human.encounterCounter++;
    if(human.noticesOgre()){
      this.swingAt();
    }
  }

  swingAt() {
    this.swings++;
  }

}
module.exports = Ogre;