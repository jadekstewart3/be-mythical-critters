class Medusa {
  constructor(name, statues = []) {
    this.name = name;
    this.statues = statues;
  }

  stare(victim) {
    if (this.statues.length === 3) {
      this.statues[0].stoned = false;
      this.statues.shift();
    }
    victim.stoned = true;
    this.statues.push(victim);
  }
}

module.exports = Medusa;
