/* 1- Matematiksel Operatörler */

var x = 10;
var y = 20;
var z = 30;

console.log(x+y);
console.log(z-y);
console.log(x*y+z);
console.log(z/x-y);

x++;
x=x+1;
console.log(x);


/* 2- Karsilastirma Operatörler */

var sonuc = x>y;
console.log(sonuc);

console.log(x<y);

console.log(z>=x);
console.log(x=="10");
console.log(x!=z);


/* 3- Mantiksal Operatorler */

/* && (And) Operatoru */
 
console.log((20>10) && (10==10));

console.log((5>5) && (10==10));

/* || (Or) Operatori */

console.log((5>5) || (10==10));

/* ! (NOT) Operatoru */

console.log(!(5>5));
