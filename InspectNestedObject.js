/**
* @title Inspect Nested Object
*/

const js = {
    name: 'JavaScript: All You Need to Know',
    author : {
        name: 'HM Nayem',
        email: 'jsan.m.nayem@gamail.com',
        profession: ' Full Stack Developer',
        experience: '10 Years'
    },
    contents: {
        video: {
            count: 200,
        },
    },
};

const node = {
    name: 'Node.js: All You Need to Know',
    author : {
        name: 'HM Nayem',
        email: 'hsan.nayem@gmail.con',
        profession: ' Full Stack Developer',
        experience: '10 Years'
    },
    contents: {
        video: {
            count: 174,
        },
    },
};

const react = {
    name: 'React.js: All You Need to Know',
    author : {
        name: 'HM Nayem',
        email: 'hsan.nayem@gmail.con',
        profession: ' Full Stack Developer',
        experience: '10 Years'
    },
    contents: {
        video: {
            count: 98,
        },
        article: {
            count: 20,
        },
        quiz: {
            count: 10,
        },
    },
};




const inspectObject = (obj, path, returnValue=0) => {
    return path.split('.').reduce((acc, curr) => {
        if (acc[curr]) {
            return acc[curr];
        }
        return returnValue;
    }, obj);
};

const course = [js, node, react];

course.forEach((course) => {
    const videoCount = inspectObject(course, 'contents.video.count');
    const articleCount = inspectObject(course, 'contents.article.count');
    const quizCount = inspectObject(course, 'contents.quiz.count');
    console.log(`${course.name} has ${videoCount} videos, ${articleCount} articles and ${quizCount} quizzes`);
});

