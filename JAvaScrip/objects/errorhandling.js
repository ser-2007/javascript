// Error Handling

//console.log(myFunction());  // tanimlanmadigi icin hata bverir
var user = {
    email : 'serkan@gmail.com'
}

try {
   // console.log(myFunction());
   console.log(user.name);
   if(!user.name){
    throw new Error('You must give a name');
   }
}
catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
}

finally {
    console.log('finally block');
}