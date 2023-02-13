// Array of Object

const student = [
    {id:1, name: 'ashis'},
    {id:2, name: 'asis'},
    {id:3, name: 'mehedi'},
    {id:4, name: 'pritom'},
    {id:5, name: 'asion'},
]

const givenId = 3;

const updateName = 'prithijit'

for(let i = 0; i< student.length;i++){
    if(givenId === student[i].id){
        student[i].name = updateName;
        break;
    }
}

console.log(student)