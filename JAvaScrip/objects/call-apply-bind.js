// Call, apply and bind 

var welcome = function (a,b){
    console.log('Welcome ' +this.name+' .Are you interested in '+a+' and '+b);
}

var hanna = {name:'Hanna'};
var serkan = {name:'Serkan'};

welcome.call(serkan,"devops","cloud"); // call metodunda bu parametreleri boyle gonderebiliyoruz
welcome.call(hanna,'java','python');

welcome.apply(serkan,['angular','javascript']);  // apply metodunda parametreleri dizi seklinde gondermemiz gerekiyor
welcome.apply(hanna,['java','javascript']);


welcomeHanna = welcome.bind(hanna);
welcomeHanna('java','javascript');