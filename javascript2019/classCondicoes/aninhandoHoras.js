var hour = new Date()
var getHour = hour.getHours

if(getHour < 12) {
    console.log("Good Morning!")
} else if (getHour < 18) {
    console.log("Good Afternoon!")
} else {
    console.log("Good Evening!")
}