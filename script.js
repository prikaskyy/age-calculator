function getAge() {
    const d = new Date();

    let curDay = d.getDate();
    let curMonth = d.getMonth();
    let curYear = d.getFullYear();
    
    const entredDate = {};
    const age = {};

    const dayLabel = document.querySelector("#dayLabel");
    const monthLabel = document.querySelector("#monthLabel");
    const yearLabel = document.querySelector("#yearLabel");

    const year = document.querySelector("#year");
    const month = document.querySelector("#month");
    const day = document.querySelector("#day");

    const outputYear = document.getElementById("years");
    const outputMonth = document.getElementById("months");
    const outputDay = document.getElementById("days");

    const msgDay = document.querySelector("#msgDay");
    const msgMonth = document.querySelector("#msgMonth");
    const msgYear = document.querySelector("#msgYear");
    
    let ruleDay = true;
    let ruleMonth = true;
    let ruleYear = true;

    dayLabel.classList.remove("err-label");
    day.classList.remove("err-border");

    monthLabel.classList.remove("err-label");
    month.classList.remove("err-border");

    yearLabel.classList.remove("err-label");
    year.classList.remove("err-border");

    msgDay.innerText = "";
    msgMonth.innerText = "";
    msgYear.innerText = "";

    const longerMonths = [1,3,5,7,8,10,12];
    const feb = 2;

    entredDate.year = year.value;
    entredDate.month = month.value;
    entredDate.day = day.value;

    const daysOfMonth = (longerMonths,month) => {
        if (longerMonths.indexOf(month) !== -1) {
            return 31;
        } else if (month == 2) {
            return 28;
        } else {
            return 30;
        }
    };

    if (entredDate.day == "") {
        dayLabel.classList.add("err-label");
        day.classList.add("err-border");
        msgDay.innerText = "This field is required";
        ruleDay = false;
    } else if (entredDate.day < 1 || entredDate.day > daysOfMonth(longerMonths,Number(entredDate.month))) {
        dayLabel.classList.add("err-label");
        day.classList.add("err-border");
        msgDay.innerText = "Must be valid date";
        ruleDay = false;
    }   

    if (entredDate.month == "") {
        monthLabel.classList.add("err-label");
        month.classList.add("err-border");
        msgMonth.innerText = "This field is required";
        ruleMonth = false;
    } else if (entredDate.month < 1 || entredDate.month > 12) {
        monthLabel.classList.add("err-label");
        month.classList.add("err-border");
        msgMonth.innerText = "Must be valid date";
        ruleMonth = false;
    }

    if (entredDate.year == "") {
        yearLabel.classList.add("err-label");
        year.classList.add("err-border");
        msgYear.innerText = "This field is required";
        ruleYear = false;
    } else if (entredDate.year < 1 || Number(entredDate.year) > curYear) {
        yearLabel.classList.add("err-label");
        year.classList.add("err-border");
        msgYear.innerText = "Must be in past";
        ruleYear = false;
    } 

    if (ruleDay === true && ruleMonth === true && ruleYear === true){
    
    age.year = curYear - entredDate.year;
    age.month = 0;
    age.day = 0;

    if (curMonth >= entredDate.month) {
        age.month = curMonth - entredDate.month;
    } else {
        age.year--;
        age.month = 12 + curMonth - entredDate.month
    }

    if (curDay >= entredDate.day) {
        age.day = curDay - entredDate.day;
    } else {
        age.month--;
        age.day = 31 + curDay - entredDate.day 
    }
    age.month++;

    outputYear.innerText = age.year;
    outputYear.style.letterSpacing = 0;

    outputMonth.innerText = age.month;
    outputMonth.style.letterSpacing = 0;

    outputDay.innerText = age.day;
    outputDay.style.letterSpacing = 0;
    }
}