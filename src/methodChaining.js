const createWarrior = function createWarrior(name) {
  let hp = 100;
  let battleCryinterval = 0;
  return {
    bash: function(target) {
      target -= 10;
      return this;
    },
    battleCry: function battleCry() {
      hp += 60;
      battleCryinterval = setInterval(() => {
        hp -= 1;
      }, 1000);
      setTimeout(() => {
        if (battleCryinterval) clearInterval(battleCryinterval);
      }, 6000);
      return this;
    },
    getHp: function getHp() {
      return hp;
    }
  };
};

const warrior = createWarrior("John");
const otherWarrior = createWarrior("Alex");

warrior
  .battleCry()
  .bash(otherWarrior)
  .bash(otherWarrior)
  .bash(otherWarrior)
  .bash(otherWarrior)
  .bash(otherWarrior);

const otherWarriorsHp = otherWarrior.getHp();
console.log(otherWarriorsHp);
