// function profit(sp,cp){
//     return console.log(sp - cp);
// }
// profit(5000,2000)
// console.log(profit);


// function areaOfRectangle(l,w){
//     var areaOfRectangle =  (l*w)
//     return console.log(areaOfRectangle);
    

// }
// areaOfRectangle(10,5)

// function areaOfCylinder(r,h){
//     var areaOfCylinder = 2*(Math.PI)(r,h) + 2*(Math.PI)(r**2)
//     return console.log(areaOfCylinder);
    

// }
// areaOfCylinder(4,13)
// console.log(areaOfCylinder);


// function greeting(){
//     console.log("Hello Everybody");
// }
// greeting()


// function seikiro(name){
//     return console.log('hello' + name);
    
// }
// seikiro(' Sidney ')

// function seikiro2(name, course, firm, job){
//     return console.log(' my name is ' + name + ' i studied ' + course + ' i work at ' + firm + ' as a ' + job);
    
// }
// seikiro2(' Sidney ', ' Software Engineering', 'Google', ' Software Developer ' )


function areaOfSun(r){
    var areaOfSun = (4*(Math.PI)*r**2);
    return console.log(Math.round(areaOfSun));
     


}
areaOfSun(696340)


var movies =['Batman', 'Storks', 'Moana', 'GameofThrones', 'KissingBooth']
console.log(movies[2]);

movies[1]= 'osofiaInLondon'
console.log(movies);

movies.push('stranger things')
console.log(movies);

movies.shift()
console.log(movies);

movies.unshift()
console.log(movies);

movies.pop()
console.log(movies);


var employee ={
    fullName: 'Gavin',
    email: 'example@gmail.com',
    phone: 9199191919,
    married: false,
    age: 65,
    skills : ['CanTapDance', 'ComputerGuru', 'GoodWithFinances'],
    address : {
        street: "53,Modupe",
        city: "Lagos mainland",
        state: "Lagos",
        country: "Nigeria",
    },
    salary: 400000,

    mortgage: function(){
        return this.salary*(30/100);
        
    },

    tax: function(){
        return this.salary*(12.5/100);
    },

    tithe: function(){
        return this.salary*(10/100);
    },
    
}
console.log(employee.mortgage());

console.log(employee.tax());

console.log(employee.tithe());






// console.log(employee);

// console.log(employee.email);

// console.log(employee.address.city);

// console.log(employee.skills);

// employee.skills[0]='Gambling'
// console.log(employee.skills);















