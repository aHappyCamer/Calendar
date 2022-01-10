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

    // get today's date
    getTodaysDay(){
        return new Date(Date.now()).getDate();
    }

    // shows the number of days in the month
    getDaysOfMonth(){
        let date = new Date(this.year, this.month, 0)
        return date.getDate();
    }

    // get the day of the week for first day of the week. 
    // 1-based
    getFirstDayOfCurrentMonth(){
        return new Date(this.year, this.month-1, 1).getDay();
    }

    // get the day of the week on the last day of the month
    //1-based
    getLastDayOfCurrentMonth(){
         return new Date(this.year, this.month, 0).getDay() + 1; 
    }

    // show number of days in the month for the previous month
    getDaysOfPreviousMonth(){
        return new Date(this.year, this.month-1, 0).getDate();
    }

}