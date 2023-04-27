let language = [
    {name: 'C', invent: 1972, inventor: 'Dennis Ritchie'},
    {name: 'C++', invent: 1983, inventor: 'Bjarne Stroustrup'},
    {name: 'JavaScript', invent: 1995, inventor: 'Brendan Eich'},
    {name: 'Java', invent: 1995, inventor: 'James Gosling'},
    {name: 'Python', invent: 1991, inventor: 'Guido van Rossum'},
    {name: 'PHP', invent: 1994, inventor: 'Rasmus Lerdorf'},
    {name: 'C#', invent: 2000, inventor: 'Microsoft'},
    {name: 'Go', invent: 2009, inventor: 'Robert Griesemer, Rob Pike, and Ken Thompson'},
    {name: 'Swift', invent: 2014, inventor: 'Chris Lattner'},
    {name: 'Kotlin', invent: 2011, inventor: 'JetBrains'},
    {name: 'Ruby', invent: 1995, inventor: 'Yukihiro Matsumoto'},
    {name: 'Rust', invent: 2010, inventor: 'Graydon Hoare'},
    {name: 'Scala', invent: 2004, inventor: 'Martin Odersky'},
    {name: 'Perl', invent: 1987, inventor: 'Larry Wall'},
    {name: 'R', invent: 1993, inventor: 'Ross Ihaka and Robert Gentleman'},
    {name: 'Dart', invent: 2011, inventor: 'Lars Bak and Kasper Lund'},
]

let product = [
    {name: 'Javascript Cookbook', price: 100},
    {name: 'Javascript: The Definitive Guide', price: 500},
    {name: 'Javascript: The Good Parts', price: 200},
    {name: 'Javascript Cookbook', price: 100},
    {name: 'Javascript: The Good Parts', price: 200},
    {name: 'You Don\'t Know JS', price: 400},
    {name: 'Javascript: The Good Parts', price: 200},
    {name: 'Eloquent Javascript', price: 300},
    {name: 'You Don\'t Know JS', price: 400},
    {name: 'Eloquent Javascript', price: 300},
    {name: 'Javascript Cookbook', price: 100},
    {name: 'You Don\'t Know JS', price: 400},
    {name: 'Javascript Cookbook', price: 100},
    {name: 'Eloquent Javascript', price: 300},
    {name: 'You Don\'t Know JS', price: 400},
    {name: 'Javascript: The Definitive Guide', price: 500},
    {name: 'You Don\'t Know JS', price: 400},
    {name: 'Javascript Cookbook', price: 100},
    {name: 'You Don\'t Know JS', price: 400},
    {name: 'Javascript Cookbook', price: 100},
    {name: 'Javascript: The Definitive Guide', price: 500},
]

const invoice = product.reduce((acc, curr) => {
    if (acc[curr.name]) {
        acc[curr.name].quantity ++
        acc[curr.name].price += curr.price
    }else{
        acc[curr.name] = {
            price: curr.price,
            quantity: 1
        }
    }
   
    return acc
} , {})

console.log(invoice)
