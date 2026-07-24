// =========================
// VARIABLES
// =========================


let currentStep = 0;


const steps = document.querySelectorAll(".booking-step");


const progress = document.querySelectorAll(".progress-step");


const startButton = document.getElementById("startBooking");


const bookingContainer = document.getElementById("booking");





// =========================
// START BOOKING
// =========================


startButton.addEventListener("click", function(){



bookingContainer.classList.add("show");



bookingContainer.scrollIntoView({

behavior:"smooth"

});



});







// =========================
// NEXT BUTTONS
// =========================


const nextButtons = document.querySelectorAll(".next-btn");



nextButtons.forEach(button => {



button.addEventListener("click", function(){



nextStep();



});



});






// =========================
// CHANGE STEP FUNCTION
// =========================


function nextStep(){



if(currentStep < steps.length - 1){



steps[currentStep].classList.remove("active");



progress[currentStep].classList.remove("active");



currentStep++;



steps[currentStep].classList.add("active");



progress[currentStep].classList.add("active");



}

}






// =========================
// PREVENT EMPTY CLICK
// =========================


document.addEventListener("DOMContentLoaded",()=>{


console.log("Luxury Barber System Loaded");


});
// =========================
// SERVICE SELECTION
// =========================


const serviceCards = document.querySelectorAll(".service-card");



serviceCards.forEach(card => {



card.addEventListener("click", function(){



serviceCards.forEach(item => {


item.classList.remove("selected");


});



this.classList.add("selected");



});



});








// =========================
// BARBER SELECTION
// =========================


const barberCards = document.querySelectorAll(".barber-card");



barberCards.forEach(card => {



card.addEventListener("click", function(){



barberCards.forEach(item => {


item.classList.remove("selected");


});



this.classList.add("selected");



});



});








// =========================
// DATE SELECTION
// =========================


const dateCards = document.querySelectorAll(".date-card");



dateCards.forEach(date => {



date.addEventListener("click", function(){



dateCards.forEach(item => {


item.classList.remove("selected");


});



this.classList.add("selected");



});



});








// =========================
// TIME SELECTION
// =========================


const timeCards = document.querySelectorAll(".time-card");



timeCards.forEach(time => {



time.addEventListener("click", function(){



timeCards.forEach(item => {


item.classList.remove("selected");


});



this.classList.add("selected");



});



});








// =========================
// SAVE USER DATA
// =========================


const nameInput = document.getElementById("customerName");

const phoneInput = document.getElementById("customerPhone");




function getCustomerData(){


let customer = {


name:nameInput.value,


phone:phoneInput.value


};



return customer;


}
// =========================
// CONFIRM BOOKING
// =========================


const confirmButton = document.querySelector("#step-info .next-btn");


const whatsappButton = document.getElementById("whatsappButton");





confirmButton.addEventListener("click", function(){



let customer = getCustomerData();



if(customer.name === "" || customer.phone === ""){


alert("Please fill in your information.");


return;


}





nextStep();



createWhatsAppMessage();



});









// =========================
// CREATE WHATSAPP MESSAGE
// =========================


function createWhatsAppMessage(){



let selectedService = document.querySelector(".service-card.selected h3");


let selectedBarber = document.querySelector(".barber-card.selected h3");


let selectedDate = document.querySelector(".date-card.selected");


let selectedTime = document.querySelector(".time-card.selected");




let service = selectedService 
? selectedService.innerText 
: "Not selected";



let barber = selectedBarber 
? selectedBarber.innerText 
: "Not selected";



let date = selectedDate 
? selectedDate.innerText.replace(/\s+/g," ")
: "Not selected";



let time = selectedTime 
? selectedTime.innerText
: "Not selected";





let name = document.getElementById("customerName").value;



let phone = document.getElementById("customerPhone").value;





let message = `

Hello Luxury Barber! 💈

I would like to book an appointment.

👤 Name:
${name}

✂ Service:
${service}

💈 Barber:
${barber}

📅 Date:
${date}

⏰ Time:
${time}

📱 WhatsApp:
${phone}

`;





let whatsappNumber = "551195328646";





whatsappButton.href = 
"https://wa.me/" 
+ whatsappNumber 
+ "?text=" 
+ encodeURIComponent(message);



}








// =========================
// SMOOTH CARD ANIMATION
// =========================



const cards = document.querySelectorAll(
".service-card, .barber-card, .date-card, .time-card"
);



cards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform="translateY(-8px)";


});



card.addEventListener("mouseleave",()=>{


if(!card.classList.contains("selected")){


card.style.transform="translateY(0)";


}



});



});







// =========================
// SYSTEM READY
// =========================


console.log(
"Luxury Barber Booking System Ready 💈"
);