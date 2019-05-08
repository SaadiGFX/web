// FUNCTION TO CONVERT 24H FORMAT TIME TO 12H FORMAT TIME
function timeCon(timeString) {
  var timeString;
  var H = +timeString.substr(0, 2);
  var h = (H % 12) || 12;
  var ampm = H < 12 ? " AM" : " PM";
  timeString = h + timeString.substr(2, 3) + ampm;
  return timeString;
}
function timeSetup(adjust, method) {
  prayTimes.adjust({asr: adjust});
  prayTimes.setMethod(method);
}
// TIMETABLE UPDATE FUNCTION
function timeTable(tableA_title, tableA_timezone, tableA_lon, tableA_lat, tableB_title, tableB_timezone, tableB_lon, tableB_lat, tableC_title, tableC_timezone, tableC_lon, tableC_lat, tableD_title, tableD_timezone, tableD_lon, tableD_lat) {
  function tableA(tableA_title, tableA_timezone, tableA_lon, tableA_lat) {
    var times = prayTimes.getTimes(new Date(), [tableA_lon, tableA_lat], tableA_timezone);
    document.getElementById("tableA").innerHTML = tableA_title;
    document.getElementById("tableA_R1").innerHTML = timeCon(times.fajr);
    document.getElementById("tableA_R2").innerHTML = timeCon(times.dhuhr);
    document.getElementById("tableA_R3").innerHTML = timeCon(times.asr);
    document.getElementById("tableA_R4").innerHTML = timeCon(times.maghrib);
    document.getElementById("tableA_R5").innerHTML = timeCon(times.isha);
    document.getElementById("tableA_R6").innerHTML = timeCon(times.sunrise);
    document.getElementById("tableA_R7").innerHTML = timeCon(times.sunset);
  }
  function tableB(tableB_title, tableB_timezone, tableB_lon, tableB_lat) {
    var times = prayTimes.getTimes(new Date(), [tableB_lon, tableB_lat], tableB_timezone);
    document.getElementById("tableB").innerHTML = tableB_title;
    document.getElementById("tableB_R1").innerHTML = timeCon(times.fajr);
    document.getElementById("tableB_R2").innerHTML = timeCon(times.dhuhr);
    document.getElementById("tableB_R3").innerHTML = timeCon(times.asr);
    document.getElementById("tableB_R4").innerHTML = timeCon(times.maghrib);
    document.getElementById("tableB_R5").innerHTML = timeCon(times.isha);
    document.getElementById("tableB_R6").innerHTML = timeCon(times.sunrise);
    document.getElementById("tableB_R7").innerHTML = timeCon(times.sunset);
  }
  function tableC(tableC_title, tableC_timezone, tableC_lon, tableC_lat) {
    var times = prayTimes.getTimes(new Date(), [tableC_lon, tableC_lat], tableC_timezone);
    document.getElementById("tableC").innerHTML = tableC_title;
    document.getElementById("tableC_R1").innerHTML = timeCon(times.fajr);
    document.getElementById("tableC_R2").innerHTML = timeCon(times.dhuhr);
    document.getElementById("tableC_R3").innerHTML = timeCon(times.asr);
    document.getElementById("tableC_R4").innerHTML = timeCon(times.maghrib);
    document.getElementById("tableC_R5").innerHTML = timeCon(times.isha);
    document.getElementById("tableC_R6").innerHTML = timeCon(times.sunrise);
    document.getElementById("tableC_R7").innerHTML = timeCon(times.sunset);
  }
  function tableD(tableD_title, tableD_timezone, tableD_lon, tableD_lat) {
    var times = prayTimes.getTimes(new Date(), [tableD_lon, tableD_lat], tableD_timezone);
    document.getElementById("tableD").innerHTML = tableD_title;
    document.getElementById("tableD_R1").innerHTML = timeCon(times.fajr);
    document.getElementById("tableD_R2").innerHTML = timeCon(times.dhuhr);
    document.getElementById("tableD_R3").innerHTML = timeCon(times.asr);
    document.getElementById("tableD_R4").innerHTML = timeCon(times.maghrib);
    document.getElementById("tableD_R5").innerHTML = timeCon(times.isha);
    document.getElementById("tableD_R6").innerHTML = timeCon(times.sunrise);
    document.getElementById("tableD_R7").innerHTML = timeCon(times.sunset);
  }
  tableA(tableA_title, tableA_timezone, tableA_lon, tableA_lat);
  tableB(tableB_title, tableB_timezone, tableB_lon, tableB_lat);
  tableC(tableC_title, tableC_timezone, tableC_lon, tableC_lat);
  tableD(tableD_title, tableD_timezone, tableD_lon, tableD_lat);
}
