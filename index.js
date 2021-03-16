// Code your solutions in this file
function writeCards(guestNames, eventName) {
    let a = []
    for (let i = 0; i < guestNames.length; i++) {
        a.push( "Thank you, " + guestNames[i] + ", for the wonderful " + eventName + " gift!" );
        
    }
    return a
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number = number - 1;
    }
}