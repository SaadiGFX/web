$(document).ready(function (){
  $(window).resize(function () {
    if ($(window).width() < 509){
      $('#time_table_B').prop('checked',false);
      $('#time_table_C').prop('checked',false);
      $('#time_table_D').prop('checked',false);
    }
    else {
      $('#time_table_A').prop('checked',true);
      $('#time_table_B').prop('checked',true);
      $('#time_table_C').prop('checked',true);
      $('#time_table_D').prop('checked',true);
    }
  });
});
