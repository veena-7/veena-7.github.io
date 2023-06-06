var userinfo={name:"",image:"",username:""};
var newpic=function(){
    fetch("new.json").then((response) => response.json()).then((data) =>{ userinfo.name=data.results[0].name.first;
        userinfo.image=data.results[0].picture.large;
        userinfo.username=data.results[0].login.username;
        document.getElementById("mi").src=userinfo.image;
        document.getElementById("mn").innerHTML=userinfo.name;
        document.getElementById("md").innerHTML=userinfo.username;
    });

}