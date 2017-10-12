

var PHLib = (function () {
	
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
    function formatNumber(nro,mil,decimal){
		var res= nro.toString().replace(/\B(?=(\d{3})+(?!\d))/g, mil);
		var aNro=res.split(decimal)
		
		var decimalPadding;
		if(typeof aNro[1]=='undefined'){
			aNro[1]=0
		}
		decimalPadding=paddingRight(aNro[1],"0",2)
		
		return aNro[0]+decimal+decimalPadding;
	}
	
	function paddingRight(s, c, n) {
		s=s.toString();
	  if (! s || ! c || s.length >= n) {
		return s;
	  }
	  var max = (n - s.length)/c.length;
	  for (var i = 0; i < max; i++) {
		s += c;
	  }
	  return s;
	}
	function convertDateToNumber(value,format){
		if (format.toUpperCase()=="YYMMDD"){
			return parseInt(value.substring(4,6)+value.substring(2,4)+ value.substring(0,2))
		}
		return null;
	}
	
	
	return {
        dayFromToday: dayFromToday,
		formatNumber: formatNumber,
		paddingRight:paddingRight,
		convertDateToNumber: convertDateToNumber
    };
})();



var day=PHLib.dayFromToday("Lunes","-");
console.log("Day -> ",day)

var test_Padding=PHLib.paddingRight(33.59,"0",2);
console.log("test_Padding -> ",test_Padding)


var test_number=23101808
var day=PHLib.formatNumber(test_number.toString(),",",".");
console.log("day -> ",day)


console.log( " fecha1 -> ",PHLib.convertDateToNumber("130717",'yymmdd'))
console.log( " fecha2 -> ",PHLib.convertDateToNumber("121017",'yymmdd'))


 


