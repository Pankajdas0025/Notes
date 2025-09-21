function  Time()
{
   var Time=new Date();
   var a=Time.toLocaleTimeString();
   document.getElementById("Timebtn").innerHTML=a;

}
setInterval(Time,100);
// for home button only //

function Scrollbtn(){window.scrollTo(0, -1000);}

// Navigation bar .........................................................................................

  window.document.onscroll=function() {
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
        document.getElementById("Rbtn").style.backgroundColor="";
        document.getElementById("Abtn").style.backgroundColor="red";
      };
      if (document.documentElement.scrollTop>3200) {
        document.getElementById("Hbtn").style.backgroundColor="";
        document.getElementById("Nbtn").style.backgroundColor="";
        document.getElementById("Pbtn").style.backgroundColor="";
        document.getElementById("Rbtn").style.backgroundColor="red";
        document.getElementById("Abtn").style.backgroundColor="";
      };
    }


  // Mobile Navigation bar -----------------------------------------------------------------------

function openNav() {
  document.getElementById("result").style.display="block";
}

function closeNav() {
  document.getElementById("result").style.display="none";
}
