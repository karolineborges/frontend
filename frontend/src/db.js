import dog1 from "./images/dog1.jpg";
import dog2 from "./images/dog2.jpg";
import dog3 from "./images/dog3.jpg";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";

const database = [
    { name: "Paçoca", sex: "f", age: "12 meses", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Bolinha", sex: "f", age: "6 meses", castrated: "Não", image: dog2, vaccinated: "Não", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Max", age: "3 anos", sex: "f", castrated: "Sim", image: cat1, vaccinated: "Sim", obs: "Bily nasceu sem a orelha esquerda" },
    { name: "Amora", age: "3 meses", sex: "f", castrated: "Sim", image: dog3, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Dori", age: "9 anos", sex: "f", castrated: "Não", image: cat2, vaccinated: "Sim", obs: "Bily nasceu sem a orelha esquerda" },
    { name: "Paçoca", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Bolinha", age: "6 meses", sex: "f", castrated: "Não", image: dog2, vaccinated: "Não", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Max", age: "3 anos", castrated: "Sim", sex: "f", image: cat1, vaccinated: "Sim", obs: "Bily nasceu sem a orelha esquerda" },
    { name: "Amora", age: "3 meses", castrated: "Sim", image: dog3, sex: "f", vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Dori", age: "9 anos", sex: "f", castrated: "Não", image: cat2, vaccinated: "Sim", obs: "Bily nasceu sem a orelha esquerda" },
    { name: "Paçoca", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Bolinha", age: "6 meses", sex: "f", castrated: "Não", image: dog2, vaccinated: "Não", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Max", age: "3 anos", sex: "f", castrated: "Sim", image: cat1, vaccinated: "Sim", obs: "Bily nasceu sem a orelha esquerda" },
    { name: "Amora", age: "3 meses", sex: "f", castrated: "Sim", image: dog3, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Dori", age: "9 anos", sex: "f", castrated: "Não", image: cat2, vaccinated: "Sim", obs: "Bily nasceu sem a orelha esquerda" }
];
const sugestion = [
    { name: "Flor", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" }
];

function addPet(pet){
    let banco = JSON.parse(sessionStorage.getItem("banco"));

    banco.push(pet);
    
    sessionStorage.setItem("banco", JSON.stringify(banco));
}

function editPet(pet, id) {
    let banco = JSON.parse(sessionStorage.getItem("banco"));
    
    banco[id].id = id;
    banco[id].name = pet.petName.toUpperCase();
    banco[id].age = pet.age.toUpperCase();
    banco[id].sex = pet.sex.toUpperCase();
    banco[id].obs = pet.obs;
    banco[id].vaccinated = pet.vaccinated.toUpperCase();
    banco[id].castrated = pet.castrated.toUpperCase();

    sessionStorage.setItem("banco", JSON.stringify(banco));
}

function deletePet(id) {
    let banco = JSON.parse(sessionStorage.getItem("banco"));

    banco.splice(id, 1);

    sessionStorage.setItem("banco", JSON.stringify(banco));
}

export { database, sugestion, addPet, editPet, deletePet };