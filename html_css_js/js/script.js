function Read(){

    var name= document.getElementById("getname").value;
    var age= document.getElementById("getage").value;
    var op=document.getElementById("district");
    var dist=op.options[op.selectedIndex].value;
    console.log(dist);

    if(age>=18)
  {
      alert("You are Eligible");
      console.log("Eligible");
  }
  else{
      console.log("Not Eligible");
  alert(" You are Not Eligible");
  }
  
  }


  function Addition()
  {
var num1=document.getElementById("op1").value;
var num2=document.getElementById("op2").value;
var operation=document.getElementById("operation");
var op=operation.options[operation.selectedIndex].value;

var x = parseInt(num1);
var y= parseInt(num2);
if(op=="add")
{
    var num3=x+y;
}
else if(op=="sub")
{
    var num3=x-y;
}
else if(op=="mul")
{
    var num3=x*y;
}


console.log(num3);


  }
 
function findLargest()
{
    var num1=document.getElementById("op1").value;
    var num2=document.getElementById("op2").value;
    var num3=document.getElementById("op3").value;

    var x = parseInt(num1);
    var y= parseInt(num2);
    var z= parseInt(num3);


if(x>y)
{
    if(x>z)
    {
    var res=x;
    }
    else{
        var res=z;

        }
}


else
{
    if(y>z)
    {
        var res=y;
    }
    else{
        var res=z;    }

}


document.getElementById("result").innerHTML="<table class='table'> <tr> <td>Result is </td> <td> "+res+"</td> </tr> </table>";


}  