// document.addEventListener("DOMContentLoaded", function() { 
//         let calendar = new Calendar();
//         console.log("Year: " + calendar.year);
//         console.log("Month: " + calendar.month);
//         console.log("Date: " + calendar.date);
//         console.log("Day: " + calendar.day);
//         console.log("Month String: " + calendar.getMonthString());
//         console.log("Day String: " + calendar.getDayString());
//         console.log("Number of Days: " + calendar.getDaysOfMonth());
//         console.log("First Day Of Month: " + calendar.getFirstDayOfMonth());

//         //debug
//         console.log(calendar.year);
//         console.log(calendar.month);
//         console.log(calendar.day);

//         console.log(calendar.getMonthString()); // May
//         console.log(calendar.getDayString()); // Tuesday
//         console.log(calendar.getDaysOfMonth()); // 31
//         console.log(calendar.getFirstDayOfMonth()); // 6 (friday)
//     });

let calendar = new Calendar();

document.addEventListener("DOMContentLoaded", function updateMonthYear() { 
    let displayYear = document.getElementById("currentMonthYear");
    displayYear.innerHTML = calendar.getMonthString(calendar.month) + " " + calendar.year;

});

document.addEventListener("DOMContentLoaded", function fillInAllDates() { 
    let list = document.getElementById("gridDaysOfWeek");

    let includePreviousMonthDays = null;
    let includeNextMonthDays = 7 - calendar.getLastDayOfCurrentMonth();
    let counter = 0;
    
    // display days that are in the previous month
    if (calendar.getFirstDayOfCurrentMonth() >= 1){
        includePreviousMonthDays = (calendar.getDaysOfPreviousMonth() +1) - (calendar.getFirstDayOfCurrentMonth());
        for(j = includePreviousMonthDays; j <= calendar.getDaysOfPreviousMonth() ; j++){
            if (counter == 0) {
                list.innerHTML += '<div class="gridDaysOfWeekItem">' + calendar.getMonthString(calendar.month -1)+ j + '</div>';
                counter++;
            }
            else{
                list.innerHTML += '<div class="gridDaysOfWeekItem">' + j + '</div>';
            }
        
        }
    }

        // list the days for the current month
    for(i = 1; i <= calendar.getDaysOfMonth(); i++){
        if(i == 1){
            list.innerHTML += '<div class="gridDaysOfWeekItem">' + calendar.getMonthString(calendar.month) + i + '</div>';
        }
        else if (i == calendar.getTodaysDay()){
            list.innerHTML += '<div id="currentDay">' + i + '</div>';
        }
        else{
            list.innerHTML += '<div class="gridDaysOfWeekItem">' + i + '</div>'; 
        }
    }

    // display the dates for next month
    
    if (calendar.getLastDayOfCurrentMonth() <= 7){
        for (n = 1; n <= includeNextMonthDays; n++){
            if (n == 1) {
                list.innerHTML += '<div class="gridDaysOfWeekItem">' + calendar.getMonthString(calendar.month +1) + n + '</div>';
            }
            else{
                list.innerHTML += '<div class="gridDaysOfWeekItem">' + n + '</div>';
            }
        }
    }


    
    // console.log(calendar.getDaysOfMonth());
    // console.log(calendar.getLastDayOfCurrentMonth());
    // console.log(calendar.getDaysOfPreviousMonth()); //31
    // console.log(calendar.getLastDateOfPreviousMonth());
    // console.log(calendar.getFirstDayOfNextMonth());
    // console.log(calendar.getFirstDayOfCurrentMonth());
    // console.log(calendar.getLastDayOfPreviousMonth());
    // console.log(includePreviousMonthDays); //30
    // console.log(calendar.getFirstDayOfNextMonth());
    console.log(calendar.month + 1);
});
