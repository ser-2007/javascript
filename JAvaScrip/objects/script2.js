let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    

}

Person.prototype.calculateAge=function(){
    return 2023 - this.yearOfBirth;
}

Person.prototype.getName=function(){
    return this.name;
}

Person.prototype.lastname="Turan";
let Emel = new Person("emel",1988,"teacher")

console.log(Emel);
console.log(Emel.calculateAge());
console.log(Emel.getName());
console.log(Emel.hasOwnProperty('lastname'));  // Emelin prototype kismina alinan özellikler bu sekilde olup olmadigini goruyoruz