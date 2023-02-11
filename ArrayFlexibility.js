// const arr = ['ashis', 'asis', 10, 11, true, false,{name: 'ashis'},[1,2,3], getTen]

// function getTen(){
//     return 10;
// }

// console.log(arr)

// const arr2 = new Array(5);

// const arr3 =[];
// arr3[1001] = 5;

// let a1 = []; // This array has no elements and length 0
// let a2 = [undefined]; // This array has one undefined element
// let a3 = [,]; // This array has no elements and but length 1
// 0 in a1 // => false: a1 has no element with index 0
// 0 in a2 // => true: a2 has the undefined value at index 0

// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a1.length)
// console.log(a2.length)
// console.log(a3.length)

// console.log(arr.length);
// console.log(arr2.length)
// console.log(arr3.length)

// Array of objects

// const favChanel = [
//     { name: 'Stack Learner', subscribers: 1000000 },
//     { name: 'Code with Ashis', subscribers: 1000000 },
//     { name: 'Ashis', subscribers: 1000000 },
//     { name: 'Wes Bos', subscribers: 1000000 },
//     { name: 'Fun Fun Function', subscribers: 1000000 },
//     { name: 'Traversy Media', subscribers: 1000000 },
//     { name: 'Dev Ed', subscribers: 1000000 },
//     { name: 'Coding Addict', subscribers: 1000000 },
//     { name: 'The Net Ninja', subscribers: 1000000 },
//     { name: 'Web Dev Simplified', subscribers: 1000000 },
// ];

// Array of Functions

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;
// const pow = (a, b) => a ** b;

// const funs = [sum, sub, mul, div, mod, pow];

// console.log(funs[0](10, 5));

// Loop and call all the functions in the array

// const a = 10,
//   b = 5;

// for (let i = 0; i < funs.length; i++) {
//     const result = funs[i](a, b);
//     console.log(` ${funs[i].name} Result = ${result}`);
// }

// Array of Arrays (Multidimensional Array)

// const pointTable = [
//     [0,1],
//     [1,2],
//     [2,3],
//     [3,4],
//     [4,5],
// ];

// One dimensional array traversal

// for (let i = 0; i < pointTable.length; i++) {
//     console.log(`Point Table ${i} -  x= ${pointTable[i][0]} and y= ${pointTable[i][1]}`);
// }

// console.log(pointTable[0][0]);
// const arr2 = [1,2,3,4];
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }

// for (let i = 0; i < pointTable.length; i++) {
//     for (let j = 0; j < pointTable[i].length; j++) {
//         // console.log(pointTable[i][j]);
//         console.log(`Point Table ${i}, ${j} = ${pointTable[i][j]} `);
//     }
// }

// Matrix Example

const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrixB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


const matrixSum = (matrixA, matrixB) => {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

const result = matrixSum(matrixA, matrixB);
console.log(result);

// program to create a two dimensional array

// function twoDimensionArray(a, b) {
//     let arr = [];

//     // creating two dimensional array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i] = [];
//             console.log('');
//         }
//     }

//     // inserting elements to array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i][j] = j;
//         }
//     }
//     return arr;
// }

// const x = 2;
// const y = 3;

// const result = twoDimensionArray(x, y);
// console.log(result);
