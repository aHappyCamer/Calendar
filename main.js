
let calendar = new Calendar();
let previousMonth = calendar.month -1;
let nextMonth = calendar.month +1;


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
                list.innerHTML += '<div class="gridDaysOfWeekItem-non">' + calendar.getMonthString(calendar.month -1).substring(0, 3)+" "+ j + '</div>';
                counter++;
            }
            else{
                list.innerHTML += '<div class="gridDaysOfWeekItem-non">' + j + '</div>';
            }
        }
    }

    // list the days for the current month
    for(i = 1; i <= calendar.getDaysOfMonth(); i++){
        if(i == 1){
            list.innerHTML += '<div class="gridDaysOfWeekItem">' + calendar.getMonthString(calendar.month).substring(0, 3) +" "+ i + '</div>';
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
                list.innerHTML += '<div class="gridDaysOfWeekItem-non">' + calendar.getMonthString(calendar.month +1).substring(0, 3) +" "+ n + '</div>';
            }
            else{
                list.innerHTML += '<div class="gridDaysOfWeekItem-non">' + n + '</div>';
            }
        }
    }

});

