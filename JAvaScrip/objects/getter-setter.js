const person = {
    firstName: 'Serkan',
    lastName: 'Sah' }

    Object.defineProperty(person,'fullName', {
        
        
        get function() {
            return `${this.firstName} ${this.lastName}`
    
    },
        set function(value) {
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    })

    Object.defineProperty(person, 'age',{
        value : 50,
        writable : false
    })
    person.age = 55;

    console.log(person.age);

 /*    get fullName(){

        return `${this.firstName} ${this.lastName}`

    },
        set fullName(value) {
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];

        }
    }
*/

 /*   getfullName: function () {
        return `${this.firstName} ${this.lastName}`
    },

    setfullName: function (value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}*/





// person.firstName = 'Sena';
//person.setfullName('Sena Sah');
//person.fullName = "Serkan Sah"
//console.log(person.fullName);
// console.log(`${person.firstName} ${person.lastName}`);