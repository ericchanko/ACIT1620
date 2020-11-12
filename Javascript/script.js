
let webTech = {code:'ACIT 1620', name: 'Web Fundamental Technologies'};
let sysAd = {code: 'ACIT 1420', name: 'Intro to system Administration'};
let dataB = {code: 'ACIT 1630', name: 'Database Systems'};

const courseList = [webTech, sysAd, dataB];

let succesfullyFound = false;
let validCourseCode = false;

while (!validCourseCode) {
    let courseCode = prompt("Enter a course code");
    if (courseCode.length === 4 && !isNaN(parseInt(courseCode))) {
        validCourseCode = true;
    }
}

for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(courseCode)) {
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
        succesfullyFound = true;
    }
}



if (!succesfullyFound) {
    let newObj = {code: prompt, name:null};
    courseList.push(newObj);
    console.log(`Successfully added ${prompt}`);
}
