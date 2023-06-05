var data1 = {image:"abc.jpeg",name: "Yerraguntla Veena",designation:"Student"};
var data2 = {image:"bcd.jpeg",name: "Y Veena",designation:"Intern"};
var isdata1 = true;
var displaydata;
var newpic=function(){
   if(isdata1) {
    displaydata=data2;
    isdata1=false;
   }
   else{
    displaydata=data1;
    isdata1=true;
   }
   document.getElementById("mi").src=displaydata.image;
   document.getElementById("mn").innerHTML=displaydata.name;
   document.getElementById("md").innerHTML=displaydata.designation;

   
}
