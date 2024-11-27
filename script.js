function  Time(){
   var Time=new Date();
   var a=Time.toLocaleTimeString();
   document.getElementById("Timebtn").innerHTML=a;

}
setInterval(Time,100)


function Scrollbtn(){

        window.scrollTo(0, -1000);
      

}
// document.onkeydown=function(a){
//     if(a.keyCode==17||a.keyCode==85)
//     {
//         alert("This operation Not allowed !");
//     }
//   }
//   window.document.onscroll=function() {
    if (document.documentElement.scrollTop <300) {
      document.getElementById("Hbtn").style.backgroundColor="red";
      document.getElementById("Nbtn").style.backgroundColor="";
      document.getElementById("Pbtn").style.backgroundColor="";
      document.getElementById("Rbtn").style.backgroundColor="";
      document.getElementById("Abtn").style.backgroundColor="";
    };
    if (document.documentElement.scrollTop>600) {
        document.getElementById("Hbtn").style.backgroundColor="";
        document.getElementById("Nbtn").style.backgroundColor="red";
        document.getElementById("Pbtn").style.backgroundColor="";
        document.getElementById("Rbtn").style.backgroundColor="";
        document.getElementById("Abtn").style.backgroundColor="";
      };
      if (document.documentElement.scrollTop>1800) {
        document.getElementById("Hbtn").style.backgroundColor="";
        document.getElementById("Nbtn").style.backgroundColor="";
        document.getElementById("Pbtn").style.backgroundColor="red";
        document.getElementById("Rbtn").style.backgroundColor="";
        document.getElementById("Abtn").style.backgroundColor="";
      };
      if (document.documentElement.scrollTop>2600) {
        document.getElementById("Hbtn").style.backgroundColor="";
        document.getElementById("Nbtn").style.backgroundColor="";
        document.getElementById("Pbtn").style.backgroundColor="";
        document.getElementById("Rbtn").style.backgroundColor="red";
        document.getElementById("Abtn").style.backgroundColor="";
      };
      if (document.documentElement.scrollTop>3200) {
        document.getElementById("Hbtn").style.backgroundColor="";
        document.getElementById("Nbtn").style.backgroundColor="";
        document.getElementById("Pbtn").style.backgroundColor="";
        document.getElementById("Rbtn").style.backgroundColor="";
        document.getElementById("Abtn").style.backgroundColor="red";
      };
  }

  function formCheck(){
    a=document.getElementById("uname").value;
    b=document.getElementById("uemail").value;
    c=document.getElementById("umsg").value;
    var Objtext={
      Name :a,
      Email:b,
      message:c,
    }
    var Strtext=JSON.stringify(Objtext);
    if(a!=" "&&b!=" "&&c!=" ")
    {
      localStorage.setItem(b,Strtext);
    }
    alert("Your message sucessfully sent")

  }

  