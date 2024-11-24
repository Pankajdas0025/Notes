function  Time(){
   var Time=new Date();
   var a=Time.toLocaleTimeString();
   document.getElementById("Timebtn").innerHTML=a;

}
setInterval(Time,100)


function Scrollbtn(){

        window.scrollTo(0, -1000);
      

}
document.onkeydown=function(a){
    if(a.keyCode==17||a.keyCode==85)
    {
        alert("This operation Not allowed !");
    }
}
window.onscroll = function() {
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
  window.onscroll=function(){
  if(screen.availWidth<1000)
  {
    document.querySelector("body").style.opacity="0";
    alert("This Website run only screen width >1024px");
  }
}
  