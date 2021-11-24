class Figura {
    constructor(name, perimetro) {
      this.name = name;
      this.perimetro = perimetro;
    }
    area() {
      return this.perimetro;
    }
  }
  
  class Rectangulo extends Figura {
    constructor(a, b) {
      super("Rectangulo", a + b);
      this.a = a;
      this.b = b;
    }
    area() {
      return this.a * this.b;
    }
  }
  
  class Circulo extends Figura {
    constructor(r) {
      super("Circulo", Math.PI * r * 2);
      this.r = r;
    }
    area() {
      const pi = 3.1416;
      return pi * this.r * this.r;
    }
    static 
  }
  
  const circulo = new Figura(3);
  const rectangulo = new Rectangulo(2,3);
  console.log(circulo.name, circulo.area());
  console.log(rectangulo.name, rectangulo.area());
  