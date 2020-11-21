
let webTech = {code:'ACIT 1620', name: 'Web Fundamental Technologies'};
let sysAd = {code: 'ACIT 1420', name: 'Intro to system Administration'};
let dataB = {code: 'ACIT 1630', name: 'Database Systems'};

const courseList = [webTech, sysAd, dataB];

let succesfullyFound = false;
let validCourseCode = false;

let courseCode = prompt("Enter a course code");

while (!validCourseCode) {
    if (courseCode.length === 4 && !isNaN(Number(courseCode))) {
        validCourseCode = true;
        break;
    }
    courseCode = prompt("Enter a course code");
}

for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(courseCode)) {
        console.log(`Yes, I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
        succesfullyFound = true;
    }
}

if (!succesfullyFound) {
    let newObj = {code: prompt, name:null};
    courseList.push(newObj);
    console.log(`Successfully added Course ${courseCode}`);
}

function createCourseArray() {
    let courseList = document.querySelectorAll('.course');
    let newCourseList = [];
    for (let i=0; i<courseList.length; i++) {
        let newObj = {
            code: courseList[i].querySelector('a').innerHTML,
            date: courseList[i].querySelector('.year').innerHTML
        };
        newCourseList.push(newObj);
    }
    return newCourseList
}

function findCourse() {
    let courseList = createCourseArray();
    let code= getValidCode();
    let foundCode = false;

    for (let i =0; i <courseList.length; i++) {
        if (courseList[i].code.indexOf(code) > -1) {
            foundCode = true;
            console.log('changing color of background');
        }
    }

    if (!foundCode) {
        console.log('code not found, creating new one!');
    }

}

function getValidCode() {
    let courseCode = prompt("Enter a course code");

    while (!validCourseCode) {
        if (courseCode.length === 4 && !isNaN(Number(courseCode))) {
            validCourseCode = true;
            break;
        }
        courseCode = prompt("Enter a course code");
    }
    return courseCode;
}
