// 1.
{var mywindow;
document.getElementById("button").addEventListener("click", function () {
   mywindow=window.open("childeren.html", "childeren", "width=300,height=300");
});
document.getElementById("close").addEventListener("click", function () {
 mywindow.close("");
});}
{function change(){
var timechange=setTimeout('displaytime()',1000)

}
document.getElementById("stratclock").addEventListener("click",function(){
    alert("started clock")
});
document.getElementById("stratclock").addEventListener("click",displaytime)

function displaytime(){
 
var date=new Date().toLocaleString();
document.getElementById("currenttime").innerHTML=date;
change();

}}
// 3.
  var newwindow;
  var i=0;
{function openwindow(){

setTimeout(function(){

     newwindow = window.open(
      "index.html",
      "index",
      "width=300,height=300"
    );
    var txt="hello world";

  
  var set=setInterval(function(){

    var x = newwindow.document.write(txt[i++]);
    if (i >= txt.length) {
      clearInterval(set);
    }

  },1000)

}

,3000)

}}
function closewindow() {
  newwindow.close();
}
function scorl(){
    if(scrollY>777){
        alert("say hi")
    }
}
// 5.
  {  var x= window.open("childeren.html", "childeren", "width=300,height=300");
     x.document.write("<h1>hiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>");



setTimeout(function(){
    x.close()
},3000);}

// 6.
{function openpopup(){
  window.open(
   "https://www.google.com/?hl=ar",
   "",
   "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
 );

}}