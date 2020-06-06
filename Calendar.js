class Calendar {

    constructor(){
        this.time = new Date(Date.now());
        this.year = this.time.getFullYear();
        this.month = this.time.getMonth() + 1;
        this.date = this.time.getDate();
        this.day = this.time.getDay() + 1;
    }

    getMonthString(a) {
        switch(a){
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }

    // getDayString() {
    //     switch(this.day){
    //         case 1: return "Sunday";
    //         case 2: return "Monday";
    //         case 3: return "Tuesday";
    //         case 4: return "Wednesday";
    //         case 5: return "Thursday";
    //         case 6: return "Friday";
    //         case 7: return "Saturday";
    //     }
    // }

    getTodaysDay(){
        return new Date(Date.now()).getDay();
    }

    getDaysOfMonth(){
        let date = new Date(this.year, this.month, 0)
        return date.getDate();
    }

    getFirstDayOfCurrentMonth(){
        return new Date(this.year, this.month-1, 1).getDay();
    }

    getFirstDayOfNextMonth(){
        return new Date(this.year, this.month, 1).getDay() + 1;
    }

    getLastDayOfCurrentMonth(){
         return new Date(this.year, this.month, 0).getDay() + 1;
    }

    getLastDaysOfPreviousMonth(){
         return new Date(this.year, this.month-1, 1).getDay();
    }

    getFirstDateOfNextMonth(){
        return new Date(this.year, this.month, 1);
    }

    getLastDateOfPreviousMonth(){
        return new Date(this.year, this.month-1, 0);
    }

    // show number of days in the previous month
    getDaysOfPreviousMonth(){
        return new Date(this.year, this.month-1, 0).getDate();
    }

    getLastDayOfPreviousMonth(){
        return new Date(this.year, this.month-2, 1).getDay() + 1;
    }


}