/* students informations.

** Oppilas nimi
** Numero
** Sukupuoli
** oppitunti
** 1.koen piste
** 2. koen piste
** laske keskimääräinen arvosana ja tulosta se konsoliin

*/

var nimi = prompt("mikä sun nimi on :");
var opp_no = prompt("mikä sun numero on :");
var opp_suku = prompt("sukupuoli :"); // tyttö true, poika: false
var oppitunti = prompt("oppitunti :");
var en_koen_piste = prompt("piste1 :");
var toinen_koen_piste = prompt("piste2 :");
var arvosana = (Number(en_koen_piste) + Number(toinen_koen_piste))/2;

console.log("opiskelijan numero " + opp_no+ " nimeltään " +nimi +"in " + oppitunti + "n keskiarvosana on " + arvosana)