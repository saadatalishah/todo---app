var array=[];
// for (var i=0;i<6;i++)
// {
//     var x=prompt("enter the task");
//     array.push(x);
// }
// console.log(array)
alert("8 task can be lined up at a time")
function search()
{
    
 var x=document.getElementById("typpe").value;
 array.push(x)
 document.getElementById("typpe").value="";
 document.getElementById("task1").value=array[0];
 document.getElementById("task2").value=array[1];
 document.getElementById("task3").value=array[2];
 document.getElementById("task4").value=array[3];
document.getElementById("task5").value=array[4];
document.getElementById("task6").value=array[5];
document.getElementById("task7").value=array[6];
document.getElementById("task8").value=array[7];
 console.log(array);
}

function myfunction()
{
    document.getElementById("form1").reset();
    for(var i=0;i<7;i++)
    {
        array.shift();
    }
    console.log(array);
}

function delete0()
{
    document.getElementById("task1").value="";
   array.splice(0,1);
   console.log(array);

    
}
function delete1()
{
    document.getElementById("task2").value="";
   array.splice(0,2);
    
}

function delete2()
{
    document.getElementById("task3").value="";
   array.splice(0,3);
    
}
function delete3()
{
    document.getElementById("task4").value="";
   array.splice(0,4);
    
}
function delete4()
{
    document.getElementById("task5").value="";
   array.splice(0,5);
    
}
function delete5()
{
    document.getElementById("task6").value="";
   array.splice(0,6);
    
}

function delete6()
{
    document.getElementById("task7").value="";
   array.splice(0,6);
    
}
function delete7()
{
    document.getElementById("task8").value="";
   array.splice(0,6);
    
}
