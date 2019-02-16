var flag=true;
				var otext = document.getElementById("otext")
				var otext1 = document.getElementById("otext1")
				var zhuce = document.getElementById("zhuce")
				zhuce.onclick=function(){
					location="zhuce.html"
				}		
				var str = document.cookie;
					 var arr = str.split(";")
					 var dname = arr[0].split("=")[1];
					 var dpas = arr[1].split("=")[1];
					 submit.onclick = function(){
					 	var uname = otext.value;
					 	var upas = otext1.value;
					 	if(dname == uname && dpas == upas){
					 		alert("登录成功");
					 	}else{
							flag=false;
					 		alert("登录失败")
					 	}
						if(flag==true){
							location = "1.html"
						}else{
							alert("用户名密码不匹配")
						}
					 }
					 