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
    { name: "Flor", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Flor", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Flor", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Flor", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Flor", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { name: "Flor", age: "12 meses", sex: "f", castrated: "Sim", image: dog1, vaccinated: "Sim", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" }
];

function addPet(pet){
    let data = JSON.parse(sessionStorage.getItem("data"));

    data.push(pet);

    sessionStorage.setItem("data", JSON.stringify(data));
}

function editPet(pet, id) {
    let data = JSON.parse(sessionStorage.getItem("data"));
    
    data[id].id = id;
    data[id].name = pet.petName.toUpperCase();
    data[id].age = pet.age.toUpperCase();
    data[id].sex = pet.sex.toUpperCase();
    data[id].obs = pet.obs;
    data[id].vaccinated = pet.vaccinated.toUpperCase();
    data[id].castrated = pet.castrated.toUpperCase();

    sessionStorage.setItem("data", JSON.stringify(data));
}

function deletePet(id) {
    let data = JSON.parse(sessionStorage.getItem("data"));

    data.splice(id, 1);

    sessionStorage.setItem("data", JSON.stringify(data));
}

function removeSugestion(id){
    let data = JSON.parse(sessionStorage.getItem("sugestion"));

    data.splice(id, 1);

    sessionStorage.setItem("sugestion", JSON.stringify(data));
}

function addSugestion(id) {
    let sugestions = JSON.parse(sessionStorage.getItem("sugestion"));
    let pet = sugestions[id];
    let data = JSON.parse(sessionStorage.getItem("aux"));

    data.push(pet);

    sessionStorage.setItem("aux", JSON.stringify(data));

    removeSugestion(id);
}

export { database, sugestion, addPet, editPet, deletePet, addSugestion, removeSugestion };