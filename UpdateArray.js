const arr = new Array(10);
console.log(arr)

arr.fill(7)
// console.log(arr)

const name = ['Ashis Kumar Pal', 'Mehidi Hassan', 'Rasel Islam', 'Din Mohammad Alamin'];

const update = new Array(9);
update.fill('false');
// console.log(update)

for(let i = 0; i < update.length; i++){
    const rand = Math.floor(Math.random()*10 + 1);
    update[i] = rand > 5 ? 'X' : 'O';
}

console.log(update);

// ! Array is Mutable

function updater(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = `${i+1}. ${arr[i]}`;
    }
    return arr;
}

const updates = updater(name);

console.log(updates);
console.log(name)

console.log(name === updates)



