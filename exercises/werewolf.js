class Werewolf {
  constructor(name, location, human = true, wolf = false, hungry = false){
    this.name = name;
    this.location = location;
    this.human = human;
    this.wolf = wolf;
    this.hungry = hungry;
  }

  change(){
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
    this.human = !this.human;
  }

  eat(victim){
    if (this.hungry === true){
      victim.alive = false;
      this.change();
      return "YUM!";
    }
    else {
      return "I cannot eat because I am not hungry.";
    }
  }
}
module.exports = Werewolf;
