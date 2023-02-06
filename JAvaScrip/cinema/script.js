const container = document.querySelector('.container');
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");



container.addEventListener('click', function(e) {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal()

    }
     
 });

 select.addEventListener('change', function(e) {
    calculateTotal();
 });

 function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatsArr = [];
    const seatsArr = [];
    selectedSeats.forEach(function(seat) { 
        selectedSeatsArr.push(seat);
     });

     //spread 
     seats.forEach(function(seat) {
        seatsArr.push(seat);
     });

    let selectedSeatIndex = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    console.log(selectedSeatIndex);
    
    


    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndex); 
    
 }
 function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats!= null && selectedSeats.length > 0 )
    {
        seats.forEach(function(seat, index){
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');

            }      
    });
}


    const selectedMovieIndex = JSON.parse(localStorage.getItem('selectedMovieIndex'));


    if (selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
 }

    if (selectedSeats!= null)
        selectedSeats.forEach(function(seat, index) {
            seats[index].classList.add('selected');
        });}

 function saveToLocalStorage(selectedSeatIndex) {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatIndex));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
    
 }