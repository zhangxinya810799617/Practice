function myFunction()
{
x=document.getElementById("demo");// 找到元素
if(x.innerHTML=="a"){
	x.innerHTML="b";
} else{
	x.innerHTML="a";
}
 
if(x.style.color=='red'){
	x.style.color='blue';
}else{
	x.style.color='red';
}
}

function myTime()
{
var x="";
var time=new Date().getHours();
if (time<10)
  {
  x="Good morning";
  }
else if (time<20)
  {
  x="Good day";
  }
else
  {
  x="Good evening";
  }
document.getElementById("demo").innerHTML=x;
}