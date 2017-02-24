function cal()
{
	var a,c,d,e,f,g,h,i;
	a=document.getElementById("form3");
	c=document.getElementById("form4");
	d=document.getElementById("form5")
	e=a.elements["b3"].value;
	f=c.elements["b4"].value;
	g=d.elements["b5"].value;
		
	for(i=e;i<f;i++)
	{	
		var f1 = add(i);
		
		if(f1>9)
		{
			var f2 = add(f1);
			
			if(f2==g)
			{
				document.getElementById("demo1").innerHTML+= i+" , ";
			}
		}
		if(f1==g)
		{
			document.getElementById("demo1").innerHTML+= i+" , ";
		}
	}
			document.getElementById("demo1").innerHTML+="End of The Result";
}

function add(num)
{
	var sum=0;
	while(num>0)
	{
		sum=sum+(num%10);
		num=Math.floor(num/10);
	}
	return sum;
}