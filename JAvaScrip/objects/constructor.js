function Person(name){
    this.name = name;
}

Person.prototype.Introduce = function(){
    console.log("Hello my name is "+this.name);
}

// Teacher constructor

function Teacher(name,branch){
    Person.call(this,name);
    this.branch = branch;
}  

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function(){
    console.log("I teach "+this.branch)
}




// Student

function Student(name,number){
    Person.call(this,name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function(){
    console.log("my number "+this.number+" and I am a hard study student")
}


// Headmaster

function Headmaster(name,branch,school){
    Person.call(this,name);
    this.branch = branch;
    this.school = school;
}
Headmaster.prototype = Object.create(Person.prototype);
Headmaster.prototype.constructor = Headmaster;
Headmaster.prototype.master = function(){
    console.log("I am  the headmaster of the" +this.school)
}

let p1 = new Person('Cinar');
p1.Introduce();


let t1 = new Teacher("Serkan","Math");
t1.Introduce();
t1.teach();


let s1 = new Student('ali','100');
s1.Introduce();
s1.study();

let h1 = new Headmaster("Hanna","English","Business College");
h1.Introduce();
h1.master();