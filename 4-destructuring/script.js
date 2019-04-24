//4.1 Découverte

const [a, b] = [1, 2, 3, 4]
console.log(a)
console.log(b)
// les elements du tableau sont appelés par rapport a la position des variables 

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)
console.log(age)
//les elements de l'objet sont appelés par rapport au nom de la clé


//4.2 Application
Object.values(data).forEach(value => {
    console.log(value.dateDebut,value.texte,value.dateFin)
})
console.log(data)