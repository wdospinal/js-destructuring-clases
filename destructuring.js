// Destructuring Propiedad a variable
const obj = { cantidad: 12, name: "Daniel" };
const obj2 = { cantidad: 20, name: "Daniel" };
const obj3 = { cantidad: 31, name: "Daniel" };
const { name } = obj;
console.log("Hola " + name + " como estas?");

// Destructuring Alias
const { cantidad: cant1 } = obj;
const { cantidad: cant2 } = obj2;
const { cantidad: cant3 } = obj3;
const total = cant1 + cant2 + cant3;
console.log("Contidad total " + total);

// Destructuring Deep properties
const object = {
  cantidad: 12,
  user: {
    name: "Daniel",
    email: "test@test.com",
    friend: {
      name: "Carlos",
    },
  },
  color: "red",
};
const {
  user: {
    friend: { name: FriendName },
  },
} = object;
console.log(FriendName);

// Destructuring Multiples propiedades
const object2 = {
  cantidad: 12,
  name: "Daniel",
  email: "test@test.com",
  color: "red",
};
const { color, email, ...rest } = object2;
console.log(color);
console.log(email);
console.log(rest);
