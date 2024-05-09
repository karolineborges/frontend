import dog1 from "./images/dog1.jpg";
import dog2 from "./images/dog2.jpg";
import dog3 from "./images/dog3.jpg";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";

const database = [
    { size: "PEQUENO", name: "Paçoca", sex: "MACHO", age: "12 meses", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Bolinha", sex: "MACHO", age: "6 meses", castrated: "NÃO", image: dog2, vaccinated: "NÃO", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "MÉDIO", name: "Baster", age: "3 anos", sex: "FÊMEA", castrated: "SIM", image: cat1, vaccinated: "SIM", obs: "Bily nasceu sem a orelha esquerda" },
    { size: "PEQUENO", name: "Amora", age: "3 meses", sex: "FÊMEA", castrated: "SIM", image: dog3, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "GRANDE", name: "Dori", age: "9 anos", sex: "FÊMEA", castrated: "NÃO", image: cat2, vaccinated: "SIM", obs: "Bily nasceu sem a orelha esquerda" },
    { size: "MÉDIO", name: "Tela", age: "12 meses", sex: "FÊMEA", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Mel", age: "6 meses", sex: "FÊMEA", castrated: "NÃO", image: dog2, vaccinated: "NÃO", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "MÉDIO", name: "Max", age: "3 anos", castrated: "SIM", sex: "MACHO", image: cat1, vaccinated: "SIM", obs: "Bily nasceu sem a orelha esquerda" },
    { size: "MÉDIO", name: "Lulu", age: "3 meses", castrated: "SIM", image: dog3, sex: "FÊMEA", vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Arthur", age: "9 anos", sex: "MACHO", castrated: "NÃO", image: cat2, vaccinated: "SIM", obs: "Bily nasceu sem a orelha esquerda" },
    { size: "MÉDIO", name: "Totó", age: "12 meses", sex: "MACHO", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Pingo", age: "6 meses", sex: "MACHO", castrated: "NÃO", image: dog2, vaccinated: "NÃO", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "GRANDE", name: "Pit", age: "3 anos", sex: "FÊMEA", castrated: "SIM", image: cat1, vaccinated: "SIM", obs: "Bily nasceu sem a orelha esquerda" },
    { size: "GRANDE", name: "Tody", age: "3 meses", sex: "MACHO", castrated: "SIM", image: dog3, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "GRANDE", name: "Fifi", age: "9 anos", sex: "FÊMEA", castrated: "NÃO", image: cat2, vaccinated: "SIM", obs: "Bily nasceu sem a orelha esquerda" }
];
const sugestion = [
    { size: "MÉDIO", name: "Flor", age: "12 meses", sex: "FÊMEA", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "MÉDIO", name: "Bob", age: "12 meses", sex: "MACHO", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Flor", age: "12 meses", sex: "FÊMEA", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Bob", age: "12 meses", sex: "MACHO", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "MÉDIO", name: "Flor", age: "12 meses", sex: "FÊMEA", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "MÉDIO", name: "Bob", age: "12 meses", sex: "MACHO", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Flor", age: "12 meses", sex: "FÊMEA", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Bob", age: "12 meses", sex: "MACHO", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "GRANDE", name: "Flor", age: "12 meses", sex: "FÊMEA", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "PEQUENO", name: "Bob", age: "12 meses", sex: "MACHO", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "GRANDE", name: "Flor", age: "12 meses", sex: "FÊMEA", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
    { size: "GRANDE", name: "Bob", age: "12 meses", sex: "MACHO", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" }
];

function addPet(pet){
    let data = JSON.parse(sessionStorage.getItem("data"));

    data.push(pet);
    database.push(pet);

    sessionStorage.setItem("data", JSON.stringify(data));
}

function addSugestionPet(pet) {
    let data = JSON.parse(sessionStorage.getItem("sugestion"));

    data.push(pet);

    sessionStorage.setItem("sugestion", JSON.stringify(data));
}

function editPet(pet, id) {
    let data = JSON.parse(sessionStorage.getItem("data"));

    data[id].name = pet.petName.toUpperCase();
    data[id].age = pet.age.toUpperCase();
    data[id].sex = pet.sex.toUpperCase();
    data[id].obs = pet.obs;
    data[id].vaccinated = pet.vaccinated.toUpperCase();
    data[id].castrated = pet.castrated.toUpperCase();
    data[id].image = pet.image;
    data[id].size = pet.size;

    database[id].id = id;
    database[id].name = pet.petName.toUpperCase();
    database[id].age = pet.age.toUpperCase();
    database[id].sex = pet.sex.toUpperCase();
    database[id].obs = pet.obs;
    database[id].vaccinated = pet.vaccinated.toUpperCase();
    database[id].castrated = pet.castrated.toUpperCase();
    database[id].image = pet.image;
    database[id].size = pet.size;

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
    database.push(pet);

    sessionStorage.setItem("aux", JSON.stringify(data));

    removeSugestion(id);
}

function searchPets(filters){
    let pets = JSON.parse(sessionStorage.getItem("data"));
    console.log(pets)
    console.log("database")
    console.log(database)

    if (filters.castrated === '' && filters.vaccinated === '' && filters.name === '' && filters.type === '' && filters.size === ''){
        return (pets);
    }

    if(filters.castrated !== '')
        pets = pets.filter(obj => obj.castrated === filters.castrated);
    
    if (filters.vaccinated !== '')
        pets = pets.filter(obj => obj.vaccinated === filters.vaccinated);
    
    if (filters.name !== '')
        pets = pets.filter(obj => obj.name.toUpperCase() === filters.name.toUpperCase());
    
    if (filters.type !== '')
        pets = pets.filter(obj => obj.sex === filters.type);
    
    if (filters.size !== '')
        pets = pets.filter(obj => obj.size === filters.size);

    return pets;
}

export { database, sugestion, addPet, editPet, deletePet, addSugestion, removeSugestion, addSugestionPet, searchPets };