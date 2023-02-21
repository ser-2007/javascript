// object litreas

//let yigit = {
//name:"yigit",
//yearofbirth: 2000,
//job: 'd'

// }

/* function person(name,yearofbirth,job){
    this.name = name;
    this.yearofbirth = yearofbirth;
    this.job = job;
    this.calculateage = function(){
        return 2023 - this.yearofbirth;
    }


    console.log(this);
}
*/


let person = function(name,yearofbirth,job) {
    this.name = name;
    this.yearofbirth = yearofbirth;
    this.job = job;
    this.calculateage = function(){
        return 2023 - this.yearofbirth;
    }
}
let yigit = new person('yigit','2000',"student");
let serkan = new person('serkan','1981',"teacher");

// console.log(yigit.name);
// console.log(serkan.name);
// console.log(serkan.calculateage());
// console.log(yigit.calculateage());

