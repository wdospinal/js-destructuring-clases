class Animal {
    constructor(name) {
      this.name = name;
    }
    hablar() {
      return this.name;
    }
  }
  
  class Perro extends Animal {
      ladrar(){
          return 'guay!';
      }
  }
  
  class Mamifero extends Animal {}
  
  const toby = new Perro('Toby');
  const pato = new Mamifero('Donald');
  console.log(toby.ladrar());
  console.log(pato.hablar());
  