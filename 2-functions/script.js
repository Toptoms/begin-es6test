//2.1 Fonctions simples
const sayHello = () => {
    console.log('Hello')
}

const sayMyName = (first, last) => {
    console.log(first, last)
}

const sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
}

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: function () {
        console.log(this)
    }
}
/* C'est un bjet qui contient une fonction showThis qui elle meme contient
un concole.log (this) cerirner permet s'appeller soit meme */
object.showThis()
// On appelle la focntion shoThis dans l'objet "object"
//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },

    age: 23,
    
     sayHello: () => {
        console.log('Hello')
    },

    sayMyName: () => {
        console.log('my name is ' + odile.name.first)
    },

    sayMyAge:() => {
        console.log('You are ' + odile.age + ' years old')
    }
}

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()