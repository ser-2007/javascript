/*
var marka = 'Opel';
var model = 'Astra';
var otomatik = 'yes';

/* if else statement */ /*

if(otomatik=='yes'){
    console.log('car is automatic');
}else{
    console.log('car is not automatic');
}

otomatik = true
if(otomatik){
    console.log(marka+' '+model+' is otomatik');
}

if(otomatik==true) {
    console.log("true")
}

if(10==='10'){ 
    console.log('numbers are equal')
}

*/
/*3 tane = kullandigimizda typleri de kontrol */

/*
var vites ='1';
if (vites=='1'){
    console.log('auto is automatic');
}else if (vites=='2'){
    console.log('auto on manuel');
}else{
    console.log('it is not a valid value');
}
*/ 
vites ='2';
switch(vites){
    case '1':
        console.log('auto is automatic');
        break;
    case '2':
        console.log('auto is manuel');
        break;
    default:
        console.log('not a valid value')

}