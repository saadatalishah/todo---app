// var array=[];
// function myfunc()
// {
//     var span=document.createElement("input");
//     document.body.appendChild(span);
//     span.id="copy";
//  var x=document.getElementById("search").value;
//  array.push(x);
 
//     for(var i=0;i<array.length;i++)
//     {
//   document.getElementById("copy").value=array[i]
//   console.log(array);
//     }
//     var btn=document.createElement("button");
//     document.body.appendChild(btn);
    
// }

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("button");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("closse");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
function myfunc()
{
 var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "closse";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
   
  }
  }
}
function naya()
{
   location.reload();
}
