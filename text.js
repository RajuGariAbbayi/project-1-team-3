function out()
	{
		var x,y,p,q,z;
		x=document.getElementById("form1");
		y=document.getElementById("form2");
		p=x.elements["b1"].value;
		q=y.elements["b2"].value;
			
		
		var s=0;
		var temp=p;
		while(p>0)
		{
			s = s+(p%10);
			p = Math.floor(p/10);
			var t=s;
		}
		
		var b=0;
		
		if(t>9)
		{
			while(t>0)
			{
				
				b=b+(t%10);
				t= Math.floor(t/10);
				var u=b;
			}
		}
		if(t<10)
		{
			if(t==q)
			{
				
				document.getElementById("demo").innerHTML="Number is a lucky number"+"<br>";
			}
			else
			{
				document.getElementById("demo").innerHTML="Number is not a lucky number"+"<br>"+"Lucky Number is:"+t;
			}
		}
		
		if(u<10){
			if(u==q)
			{
				
				document.getElementById("demo").innerHTML="Number is a lucky number"+"<br>";
			}
			else
			{
				document.getElementById("demo").innerHTML="Number is not a lucky number"+"<br>"+"<br>"+"Lucky Number is:"+u;
			}
				
		}
		if(u>9)
		{
			var f1 = add(u);
			
			if(f1==q)
			{
				
				document.getElementById("demo").innerHTML="Number is a lucky number"+"<br>";
			}
			else
			{
				document.getElementById("demo").innerHTML="Number is not a lucky number"+"<br>"+"<br>"+"Lucky Number is:"+f1;
			}
		
		
		
		
		}
		
		
		
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
	