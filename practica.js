const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}

let i = 0;
while (i < miLista.length) {
    console.log(miLista[i]);
    i++;
}

let sayHi = () => console.log("Hola mundo!");

sayHi();