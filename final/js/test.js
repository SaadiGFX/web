// $(document).ready(function(){
//     console.time('RunTimeCheck'); // to check runtime
//     // TO CHECK USER COUNTRY
//     function getCountry() {
//       var getCountry_api = 'http://ip-api.com/json/';
//       $.getJSON(getCountry_api,function(getCountryData){
//         checkCountry(getCountryData);
//       });
//     }
//     getCountry();
//     function checkCountry(getCountryData) {
//       var country = getCountryData.country;
//       if(country == 'Pakistan'){
//         karachi_Pakistan();
//       }else if(country == 'India'){
//         console.log('India');
//       }
//     }
//
//     function karachi_Pakistan(){
//       function karachiTiming() {
//         var api_source = 'http://api.aladhan.com/v1/timingsByCity?city=Karachi&country=Pakistan&method=1';
//         $.getJSON(api_source,function(timingDataKarachi) {
//           updateKarachi(timingDataKarachi);
//         });
//       }
//       karachiTiming();
//       function updateKarachi(timingDataKarachi) {
//         var fajr = timingDataKarachi.data.timings.Fajr;
//         var dhuhr = timingDataKarachi.data.timings.Dhuhr;
//         var asr = timingDataKarachi.data.timings.Asr;
//         var maghrib = timingDataKarachi.data.timings.Maghrib;
//         var isha = timingDataKarachi.data.timings.Isha;
//         var sunrise = timingDataKarachi.data.timings.Sunrise;
//         var sunset = timingDataKarachi.data.timings.Sunset;
//         $('#tableA_R1').html(fajr+' AM');
//         $('#tableA_R2').html(dhuhr+' AM');
//         $('#tableA_R3').html(asr+' AM');
//         $('#tableA_R4').html(maghrib+' AM');
//         $('#tableA_R5').html(isha+' AM');
//         $('#tableA_R6').html(sunrise+' AM');
//         $('#tableA_R7').html(sunset+' AM');
//       }
//     }
//     console.timeEnd('RunTimeCheck'); // to check runtime
// });






// window.onload = function () {
  // what();
  // function what() {
  //   var times = prayTimes.getTimes(new Date(), [32.4404, 74.1203], 'auto', '12h');
  //   document.getElementById("tableA_R1").innerHTML = times.fajr + " AM";
  //   document.getElementById("tableA_R2").innerHTML = times.dhuhr + " PM";
  //   document.getElementById("tableA_R3").innerHTML = times.asr + " PM";
  //   document.getElementById("tableA_R4").innerHTML = times.maghrib + " PM";
  //   document.getElementById("tableA_R5").innerHTML = times.isha + " PM";
  //   document.getElementById("tableA_R6").innerHTML = times.sunrise + " AM";
  //   document.getElementById("tableA_R7").innerHTML = times.sunset + " PM";
  //   console.log('Status: Success');
  // }
// }



// window.onload = function() {
//             what();
//             function what(){
//                 document.getElementById('hello').innerHTML = 'hi';
//             };
// var times = prayTimes.getTimes(new Date(), [32.4404, 74.1203], 'auto', '12h');
// console.log('Sunrise : '+ times.sunrise);
// console.log('Sunset : '+ times.sunset);
// console.log('Fajar : '+ times.fajr);
// console.log('Dhuhr : '+ times.dhuhr);
// console.log('Asr : '+ times.asr);
// console.log('Maghrib : '+ times.maghrib);
// console.log('Isha : '+ times.isha);




// TEST FOT LIB > ADHAN.JS
// var date = new Date();
// var coordinates = new adhan.Coordinates(32.4404, 74.1203);
// var params = adhan.CalculationMethod.Karachi();
// params.madhab = adhan.Madhab.Hanafi;
// var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
// var formattedTime = adhan.Date.formattedTime;
// console.log('Fajr: ' + formattedTime(prayerTimes.fajr, -7) + '\n');
// console.log('Sunrise: ' + formattedTime(prayerTimes.sunrise, -7) + '\n');
// console.log('Dhuhr: ' + formattedTime(prayerTimes.dhuhr, -7) + '\n');
// console.log('Asr: ' + formattedTime(prayerTimes.asr, -7) + '\n');
// console.log('Maghrib: ' + formattedTime(prayerTimes.maghrib, -7) + '\n');
// console.log('Isha: ' + formattedTime(prayerTimes.isha, -7) + '\n');
