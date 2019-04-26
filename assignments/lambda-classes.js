// CODE here for your Lambda Classes


class Person {
    constructor(attribute) {
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location;
        this.gender = attribute.gender;
    }

    speak() {
        return `Hi, my name is ${this.name} and I am from ${this.location}.`
    }
}


class Student extends Person {
    constructor(attribute){
        super(attribute);
        this.previousBackground = attribute.previousBackground;
        this.className = attribute.className;
        this.favSubjects = attribute.favSubjects;
    }

    listSubjects() {
        return `${this.favSubjects}`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${this.subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${this.subject}.`
    }
}

const student1 = new Student ({
    name: 'jonny',
    age: 16,
    location: 'seattle',
    gender: 'male',
    previousBackground: 'myspace',
    favSubjects: ['math', 'css', 'javascript']
})



class Instructor extends Person {
    constructor(attribute){
        super(attribute);
        console.log(attribute);
        this.specialty = attribute.specialty;
        this.favLanguage = attribute.favLanguage;
        this.catchPhrase = attribute.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(subject) {
        return `${student1.name} receives a perfect score on ${subject}.`
    }
}


const instructor1 = new Instructor ({
    name: 'teach',
    age: 23,
    location: 'cali',
    gender: 'male',
    specialty: 'front-end',
    favLanguage: 'html',
    catchPhrase: 'yo yo code bros'
})

console.log(instructor1.demo('javascript'));

console.log(instructor1.grade('html'));


class ProjectManager extends Instructor {
    constructor(attribute){
        super(attribute);
        console.log(attribute);
        this.gradClassName = attribute.gradClassName;
        this.favInstructor = attribute.favInstructor;
   }

   standUp(slackChannel) {
       return `${projectManager1.name} announces to ${slackChannel}, @channel, standy times!`
       }

    debugsCode(student, subject) {
        return `${projectManager1.name} debugs ${student}'s code on ${subject}.`
    }
}



const projectManager1 = new ProjectManager {
    name: 'barb',
    age: 35,
    location: 'houston',
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'keiran',
}

console.log(projectManager1.standUp('webPT'));

console.log(projectManager1.debugsCode('franny', 'js'));

