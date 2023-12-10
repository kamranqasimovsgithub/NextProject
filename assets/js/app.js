

let currentMonth = document.querySelector(".current-month");
let today = new Date();
let date = new Date();
let calendarDays = document.getElementsByClassName("square");

currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
today.setHours(0,0,0,0);
renderCalendar();

function renderCalendar(){
  for(var i=0; i<42; i++){
    //collection.innerHTML += "1";
    calendarDays[i].innerHTML += "";
  
  
  }
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const totalMonthDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const startWeekDay = new Date(date.getFullYear(),date.getMonth(),0).getDay();

    // calendarDays.innerHTML = "";
   

    let totalCalendarDay = 6 * 7;
    let counter = 0;
    for(var j=0; j<42; j++){
      //collection.innerHTML += "1";
      calendarDays[j].innerHTML = "";   
    
    }
    
    for (let i = 0; i < totalCalendarDay; i++) {
        let day = i-startWeekDay;
        counter ++;
        if(i <= startWeekDay){
            // adding previous month days
            calendarDays[i].innerHTML += `${prevLastDay-i}`;
        }else if(i <= startWeekDay+totalMonthDay){
            // adding this month days
            date.setDate(day);
            date.setHours(0,0,0,0);

            let dayClass = date.getTime()===today.getTime() ? 'current-day' : 'month-day';
            calendarDays[i].innerHTML += `${day}`;
        }else{
            // adding next month days
            calendarDays[i].innerHTML += `${day-totalMonthDay}`;
        }

        
    }
}

document.querySelectorAll(".month-btn").forEach(function (element) {
	element.addEventListener("click", function () {
		date = new Date(currentMonth.textContent);
        date.setMonth(date.getMonth() + (element.classList.contains("prev") ? -1 : 1));
		currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
		renderCalendar();
	});
});

document.querySelectorAll(".btn").forEach(function (element) {
	element.addEventListener("click", function () {
        let btnClass = element.classList;
        date = new Date(currentMonth.textContent);
        if(btnClass.contains("today"))
            date = new Date();
        else if(btnClass.contains("prev-year"))
            date = new Date(date.getFullYear()-1, 0, 1);
        else
            date = new Date(date.getFullYear()+1, 0, 1);

		currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
		renderCalendar();
	});
});


