
//(function(){})();
//(function(){}());


(function(name){

    var days =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var days =  ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'PErjantai', 'Lauantai'];
    var today = new Date();
    // var msg = 'Welcome! Today is ' + days[today.getDay()];
    var message = 'Tervetulua Suomeen '+name+  '. Tänään on '  + days[today.getDay()];

    // return msg;
    console.log(message);


}('Serkan'));
