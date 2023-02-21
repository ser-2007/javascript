// Functions that returns functions

function Question(hobby){
    switch(hobby){

        case 'car':
            return function(name){
                console.log(name +' Do you have a car')
            }
        
        break;

        case 'book':
            return function(name){
                console.log(name +' What book are you readig at this moment')
            }

        break;

        case 'software':
            return function(name,type){
                console.log(name +'! Are you interested in ' +type+ '?')
            }
        break;

        default:
            return function(name){
                console.log(name +' How is going')
            }

    }

}

var carQuestion = Question('car');
carQuestion('Serkan');
carQuestion('Mikko');

var bookQuestion = Question('book');
bookQuestion('Serkan');

var softwareQuestion = Question('software');
softwareQuestion('Serkan','Devops');
softwareQuestion('Kimmo','JavaScript');