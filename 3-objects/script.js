//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}

//console.log(bus)

for (let element in bus) {
    console.log(element +bus[element])
}/*
Object.getOwnPropertyNames(bus).forEach(key => {
    let value = bus[key];
    console.log(value)
});
/*
for (i = 0; i < Object.keys(bus).length; i++) {
    //let k = Object.keys(bus)[i]
   // let v = Object.values(bus)[i]
    console.log(Object.keys(bus)[i],':',Object.values(bus)[i])

}*/



/*for (var [k, v] of Object.entries(bus)) {
    console.log(k + ':' + v)
}*/

//3.2 Object.value

Object.values(data).forEach(value => {
    console.log(value.texte)
})

//console.log(data)