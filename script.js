var data1 = {image:"veena-7/veena-7.github.io/abc.jpeg",name: "Yerraguntla Veena",designation:"Student"};
var data2 = {image:"veena-7/veena-7.github.io/bcd.jpeg",name: "Y Veena",designation:"Intern"};
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
   document.getElementById("mD").innerHTML=displaydata.designation;

   
}
