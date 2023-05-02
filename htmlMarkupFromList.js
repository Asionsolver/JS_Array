const links =[
    {name:'facebook', url:'https://facebook.com'},
    {name:'google', url:'https://google.com'},
    {name:'youtube', url:'https://youtube.com'},
    {name:'twitter', url:'https://twitter.com'},
    {name:'instagram', url:'https://instagram.com'},
    {name:'linkedin', url:'https://linkedin.com'},
    {name:'github', url:'https://github.com'},
    {name:'stackoverflow', url:'https://stackoverflow.com'},
    {name:'quora', url:'https://quora.com'}
];


let template = `<ul> {{links}} </ul>`;

const linkList = links.reduce((acc, curr) => {
    acc += `<li><a href="${curr.url}">${curr.name}</a></li>`;
    return acc;
}, '');

// console.log(linkList);

template = template.replace('{{links}}', linkList);

console.log(template);