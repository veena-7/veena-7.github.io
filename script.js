var data1 = {image:"abc.jpg",name: "Yerraguntla Veena",designation:"Student"};
var data2 = {image:"bcd.jpg",name: "Y Veena",designation:"Intern"};
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
   
}
