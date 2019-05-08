// timeTable("","",0,0,"","",0,0,"","",0,0,"","",0,0);
$(document).ready(function() {
  console.time('a');
  // FUNCTION TO CHECK USER COUNTRY
  function checkCountry() {
    var url = 'https://api.ipdata.co/?api-key=89ee5a0932238fce3a72f69e69171c442d30c50cf419a2ea0ff7cc28';
    $.getJSON(url,function(countryName) {
      updateCountry(countryName);
    });
  }
  checkCountry();
  timeSetup("Standard","Makkah");
  function updateCountry(countryName) {
    var country = countryName.country_name;
    if(country == "Afghanistan"){
      timeTable("Kabul","+4.5",34.543896,69.160652,"Kandahar","+4.5",31.739847,65.755920,"Mazari Sharif","+4.5",36.715771,67.105865,"Herat","+4.5",34.343044,62.199074);
    }else if (country == "Albania") {
      timeTable("Tirana","+2",41.327953,19.819025,"Durrës","+2",41.3246,19.4565,"Elbasan","+2",41.1102,20.0867,"Vlorë","+2",40.4661,19.4914);
    }else if (true) {
      timeTable("Algiers","+1",36.7538,3.0588,"Boumerdes","+1",36.7580,3.4852,"Oran","+1",35.6971,0.6308,"Tébessa","+1",35.4142,8.1011);
    }
  }
  console.timeEnd('a');
});
