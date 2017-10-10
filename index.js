var a="";
var b="";
var c="";
var d="";
var obj="";
var gt="";
var total="";

$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"https://59da0fdfea4639001240945b.mockapi.io/foodItems",
		dataType:"json",
		success:function(result){
			var txt=""
			obj=result;
			for(i=0;i<result.length;i++){
					txt+="<option>"+result[i].Items+"</option>"
			}
			$("#selector").html(txt)
		}
	});
	//obj=$.get("http://59da0fdfea4639001240945b.mockapi.io/foodItems")
	$("#selector").change(function(){
		a=$("select").val();
		console.log(a);
	});
	$("button").click(function(){
		b=$("#quantity").val();
		console.log(b);
		console.log(obj);
		
		for(i=0;i<obj.length;i++){
			if(obj[i].Items===a){
				c=obj[i].price;
				//return i;
				console.log(c);
			}
			
		}
		
		total=b*c;
		console.log(total);
		d=eval(d+1);
		$("#tbody").append("<tr><td>"+d+"</td><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+total+"</td></tr>");
		gt=eval(gt+total)
		$("#grandTotal").html(gt)
	})
	
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
});