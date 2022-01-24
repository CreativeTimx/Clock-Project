setInterval(setClock,1000); //this is to call setClock every second!!
// to be able to select the values in our clock of our hands, we should add some {data attributes} to div created in the html 
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');//this are the data element, we create a function that will use them
function setClock(){
    const currentDate = new Date(); //This is a constructor for the data()
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio + currentDate.getHours())/12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
}
function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation",rotationRatio*360);
}
setClock();

 