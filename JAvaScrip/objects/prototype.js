let Person = function(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2023 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);    
    this.subject = subject;
}

let emel = new Teacher("emel",1989,"teacher","math");



// INherit the Person prototype Methods

Teacher.prototype = Object.create 
(Person.prototype);

//set teacher as a constructor
Teacher.prototype.constructor = Teacher;


Teacher.prototype.greeting = function(){
    return "hello" +this.name;
}
console.log(Teacher.prototype.contructor)



console.log(emel);
