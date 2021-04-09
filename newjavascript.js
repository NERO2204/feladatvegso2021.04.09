$(document).ready(function()
{
  
Beolvas();

$("#kuld").on("click",adBeir);


$("#listahley").delegate(".torol","click",adTorol);
$("#listahley").delegate(".elvegezve","click",adatmodosit);

});

var teendoim=[];




function Beolvas()
{
   $.ajax(
           {
            type:"GET",
            url: "feldolgoz.php", 
   success: function(result)
   {
       
        teendoim=JSON.parse(result);
        console.log(teendoim);
        kiir();
  
      
     
        
       
   },
   
   
    error:function()
    {
        
           alert("hiba az adatok betoltésekor");
    
    }
           
        
   });
  


 
}

function adTorol()
{
  
    var aktelem=$(this).closest("li");
    var id=$(this).attr("id");
  
     $.ajax({
         
            type:"DELETE",
            url: "torles.php?id="+id, 
   success: function()
   {
      aktelem.remove();
        
       
   },
   
   
    error:function()
    {
        
           alert("hiba az adatok torlesekor");
    
    }
           
        
   });
    
     
}



function adatmodosit()
{
   console.log("meghivva");
   

    var id=$(this).attr("data-id");
    console.log(id);
    $.ajax({
         
            type:"PUT",
            url: "Modosit.php?id="+id, 
   success: function()
   {
    
        
       
   },
   
   
    error:function()
    {
        
           alert("hiba az adatok torlesekor");
   
    }
           
        
   });
    
     
}


function kiir()
{
    
    
    for (var i = 0; i <teendoim.length; i++)
    {
         var ID=teendoim[i].id;
         var nev=teendoim[i].todo;
         var datum=teendoim[i].datum;
         
         var elem="<li>"+nev+""+"<img src='kepek/kuka.jpg' class=torol id="+ID+">  <img src='kepek/pipa.jpg' class=elvegezve data-id="+ID+"></li>";
         $("#listahley").append(elem);
    }
    

}

function adBeir()
{
   //kiolvassukaz urlapbol az adatokat
   var teendo=
           {
               nev:$("#nev").val(),
               datum:$("#datum").val()
           };
           
           
    $.ajax
    (
           
        {
            type:"POST",
            url: "beir.php",
            data:teendo,  
   success:function(ujteendo)
   {
       console.log(ujteendo);
       teendoim.push(JSON.parse(ujteendo));
       
       console.log(teendoim);
       Beolvas();
       
       
       
       $("#listahley").empty();
       var todonev=$("#nev").val();
       var tododatum=$("#datum").val();
       var elemUj="<li>"+todonev+"---------------------"+tododatum+"<input type='image' src='kepek/kuka.jpg' name='torol' id='torol'><input type='image' src='kepek/pipa.jpg' name='elvegezve' id='elvegezve'></li>";
       
       $("#listahley").append(elemUj);
          
      
        
       
   },
   
   
    error:function()
    {
        
           alert("hiba az adatok mentésekor");
    
    }
           
        
   });
}