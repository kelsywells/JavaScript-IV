// CODE here for your Lambda Classes


class Person {
    constructor (attribute) {
        this.name = name.attribute;
        this.age = age.attribute;
        this.location = location.attribute;
        this.gender = gender.attribute;
    }

    speak() {
        return `Hi, my name is ${this.name} and I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attribute){
        super(attribute);
        console.log(attribute);
        this.specialty = attribute.specialty;
        this.favLanguage = attribute.favLanguage;
        this.catchPhrase = attribute.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${this.subject}.`
    }

    grade(subject) {
        return `${student.name} receives a perfect score on ${this.subject}.`
    }
}


//#### Student
// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`


class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    
}