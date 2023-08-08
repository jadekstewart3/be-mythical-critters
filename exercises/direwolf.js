class Direwolf{
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
  }

  leave(stark) {
    stark.safe = false;
    this.starksToProtect.pop();
  }

  protect(stark) {
      if (this.home === stark.location && this.starksToProtect.length < 2) {
      stark.safe = true;
      this.starksToProtect.push(stark);
    }
  }

  get huntsWhiteWalkers() {
    if(this.starksToProtect.length >= 1) {
      return false;
    } else {
      return true;
    }
  }
}
module.exports = Direwolf;
