var http=require("http");
var u=require("url");
//var queryString=require("queryString");

function s(req,resp)
{
	var url= u.parse(req.url);
	
	
   switch(url.pathname)
   {
    case '/':
	fs.readFile("form.html",function(err,data)
	{
	   if(err)
	   {
		   resp.write('Error');
		   //console.log(err);
			resp.end();
	   }
	   else
	   {
			resp.write(data);
			resp.end();
	   }
	});  
	break;
	
	case '/emi':
	   var str="";
	   req.on('data',function(d)
	   {
			str+=d;
	   });
	   
	   req.on('end',function()
	   {
	      //console.log(str);
		  var ob=query.parse(str);
		  
		  var at=parseInt(ob.lamt);
		   var mon=parseInt(ob.month);
		  //if(ob.btn=="Add")
	  
		    //console.log("Profit");
		   var e1=m1.cal(at,mon);
		   
		   resp.write("<h1>EMI : "+e1+"</h1>");
	   
	   });
	   
	}
}



var server=http.createServer(s);
server.listen(3000);
console.log("Successfully Created at port 3000");