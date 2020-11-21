
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

function findCourse(courseList) {
    let code= getValidCode();
    let foundCode = false;

    for (let i =0; i <courseList.length; i++) {
        if (courseList[i].code.indexOf(code) > -1) {
            foundCode = true;

            // change background color here
            document.querySelector('.acit' + code).style.backgroundColor= 'green';
            console.log('code found, changing background color!');
            break;

        }
    }

    if (!foundCode) {
        console.log('code not found, creating new one!');

        var p = document.createElement('p');
        p.classList.add('year');
        var new_course_year = document.createTextNode('Fall 2020');
        p.appendChild(new_course_year);

        var p_course_desc = document.createElement("p");
        var new_course_desc = document.createTextNode("N/A");
        p_course_desc.classList.add('class_desc');
        p_course_desc.appendChild(new_course_desc);

        var new_title = document.createElement('a');
        var new_title_desc = document.createTextNode(code);
        new_title.appendChild(new_title_desc);
        new_title.title = code;
        new_title.href = '';

        var new_div = document.createElement('div');
        new_div.classList.add('course');
        new_div.classList.add('acit' + code);
        new_div.appendChild(new_title);
        new_div.append(p);
        new_div.append(p_course_desc);

        document.querySelector('main').appendChild(new_div);
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
