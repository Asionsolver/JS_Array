const {argv} = require('yargs')
const path = require('path')
const todo = require('./todo')
const {saveFile, readFile} = require('./utils')
const {ADD, UPDATE, NEXT, DONE, FIND, LIST} = require('./commands');


const fileName = '../data.json';
const filePath = path.join(__dirname, fileName);

(function init(){
    const data = readFile(filePath) || [];
    const todo = new TodoList(data);
    const {_:baseCommand} = argv;
    console.log(argv);
})();
