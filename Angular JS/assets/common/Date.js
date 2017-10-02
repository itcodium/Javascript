

var LDate = (function () {
	
	function restDays(startDate,numberOfDays)
	{
		var returnDate = new Date(
								startDate.getFullYear(),
								startDate.getMonth(),
								startDate.getDate()-numberOfDays,
								startDate.getHours(),
								startDate.getMinutes(),
								startDate.getSeconds());
		return returnDate;
	}
	function addDays(startDate,numberOfDays)
	{
		var returnDate = new Date(
								startDate.getFullYear(),
								startDate.getMonth(),
								startDate.getDate()+numberOfDays,
								startDate.getHours(),
								startDate.getMinutes(),
								startDate.getSeconds());
		return returnDate;
	}
    function dayFromToday(day,next) {
		var daysUS = {'Sunday':0, 'Monday':1, 'Tuesday':2, 'Wednesday':3, 'Thursday':4, 'Friday':5, 'Saturday':6};
		var daysES = {'Domingo':0, 'Lunes':1, 'Martes':2, 'Miercoles':3, 'Jueves':4, 'Viernes':5, 'Sabado':6};
		var vDay=daysES[day]
		
		if(typeof vDay=='undefined'){
			vDay=daysUS[day]
		}
		
		var dayList=[];
		dayList.push(new Date())
		
		for(var i=1;i<=7;i++){
			var newdate;
			if(next=="-"){
				newdate = restDays(dayList[i-1],1);
			}
			if(next=="+"){
				newdate = addDays(dayList[i-1],1);
			}
			if(newdate.getDay()==vDay){
				return newdate;
			}
			dayList.push(newdate);
		}
    }
    return {
        dayFromToday: dayFromToday,
    };
})();



var day=LDate.dayFromToday("Lunes","-");
 console.log("Day -> ",day)


