window.addEventListener("keyup",key);
var c=1;
function key(e) {
		if(c<8)
			c++;
		else
			c=1;
		if(c==1)
		{
			document.getElementsByClassName("background_container")[0].style.filter="hue-rotate(0deg)";
			document.getElementsByClassName("container_background")[0].style.filter="hue-rotate(0deg)";
		}
		else if(c==2)
		{
			document.getElementsByClassName("background_container")[0].style.filter="hue-rotate(45deg)";
			document.getElementsByClassName("container_background")[0].style.filter="hue-rotate(45deg)";
		}
		else if(c==3)
		{
			document.getElementsByClassName("background_container")[0].style.filter="hue-rotate(90deg)";
			document.getElementsByClassName("container_background")[0].style.filter="hue-rotate(90deg)";
		}
		else if(c==4)
		{
			document.getElementsByClassName("background_container")[0].style.filter="hue-rotate(135deg)";
			document.getElementsByClassName("container_background")[0].style.filter="hue-rotate(135deg)";
		}
		else if(c==5)
		{
			document.getElementsByClassName("background_container")[0].style.filter="hue-rotate(180deg)";
			document.getElementsByClassName("container_background")[0].style.filter="hue-rotate(180deg)";
		}
		else if(c==6)
		{
			document.getElementsByClassName("background_container")[0].style.filter="hue-rotate(225deg)";
			document.getElementsByClassName("container_background")[0].style.filter="hue-rotate(225deg)";
		}
		else if(c==7)
		{
			document.getElementsByClassName("background_container")[0].style.filter="hue-rotate(270deg)";
			document.getElementsByClassName("container_background")[0].style.filter="hue-rotate(270deg)";
		}
		else if(c==8)
		{
			document.getElementsByClassName("background_container")[0].style.filter="hue-rotate(315deg)";
			document.getElementsByClassName("container_background")[0].style.filter="hue-rotate(315deg)";
		}
		var x = e.key;
		if(x =="ArrowRight")
		{
			window.removeEventListener("keyup",key);
			next();
			setTimeout(function(){
				window.addEventListener("keyup",key);
			},3000);
		}
		else if (x =="ArrowLeft") 
		{
			window.removeEventListener("keyup",key);
			previous();
			setTimeout(function(){
				window.addEventListener("keyup",key);
			},3000);
		}
		else if( Number(x) >= 1 && Number(x) <= noOfImages)
		{
			window.removeEventListener("keyup",key);
			keyMap(Number(x));
			setTimeout(function(){
				window.addEventListener("keyup",key);
			},3000);
		}
	console.log(e);
}
