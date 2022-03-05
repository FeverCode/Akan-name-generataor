 $(function () {
   $('.scroll-down').click(function () {
     $('html, body').animate({
       scrollTop: $('section.table').offset().top
     }, 'slow');
     return false;
   });
 });


 var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 function validate() {
   var dre = document.getElementById("dateInput");
   if (document.getElementById(dateInput) == "");{
     alert("Please select date from calendar")
     return false;

   }
 }

 function generateName() {
   var birthDay = document.getElementById("dateInput").value;
   var date = new Date(birthDay);
   var dayOfBirth = date.getDay();

   //gender

   var gender






 }