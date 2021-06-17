$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var check = false;
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
);
$("#forma1").validate({
rules:{
  ime:{
    required:true,
    regex:/^[A-Z][A-Za-z]+$/
  },
  Email:{
    required:true
  }
},
messages:{
  ime:{
    required:"Ovo polje je obavezno",
    regex:"Obavezno pocetno veliko slovo"
  },
  Email:{
    required:"Ovo polje je obavezno"
  }
}
})
$("#forma2").validate({
rules:{
  Name:{
    required:true,
    regex:/^[A-Z][A-Za-z]+$/
  },
  prezime:{
    required:true,
    regex:/^[A-Z][A-Za-z]+$/
  },
  email:{
    required:true
  },
  naslov:{
    required:true
  },
  area:{
    required:true
  }
},
messages:{
  Name:{
    required:"Ovo polje je obavezno",
    regex:"Obavezno pocetno veliko slovo"
  },
  prezime:{
    required:"Ovo polje je obavezno",
    regex:"Obavezno pocetno veliko slovo"
  },
  email:{
    required:"Ovo polje je obavezno"
  },
  naslov:{
    required:"Ovo polje je obavezno"
  },
  area:{
    required:"Ovo polje je obavezno"
  }
}
})


      var i=0;
      var slike=[];
      var vrijeme=3000;

      slike[0]="url('./Images/Baloni.jpg')";
      slike[1]="url('./Images/druga_slika.jpg')";
      slike[2]="url('./Images/treca.jpg')";
      slike[3]="url('./Images/cetvrta_slika.jpg')";
      slike[4]="url('./Images/peta_slika.jpg')";
      slike[5]="url('./Images/sesta_slika.jpg')";
      slike[6]="url('./Images/sedma_slika.jpg')";
      slike[7]="url('./Images/osma_slika.jpg')";

      function SlideShow(){
       
       
        if(i<slike.length){
          document.getElementById("glavni").style.backgroundImage=slike[i];
          i++;
        }
        else{
          i=0;
        }
        
        setTimeout("SlideShow()",vrijeme);

      }
      SlideShow();
      

       document.getElementById("1").onclick=promjeni;
       document.getElementById("2").onclick=promjeni;
       document.getElementById("3").onclick=promjeni;
       function promjeni()
       {
         document.getElementById("1").style.border="none";
         document.getElementById("2").style.border="none";
         document.getElementById("3").style.border="none";
         if(this.id=="1")
         {
          document.getElementById("1").style.border="2px solid yelow";
           document.getElementById("Slika").value="Putovanje u Crnu Goru";
           document.getElementById("CijenaPoDanu").value="159";
           document.getElementById("BrojDana").addEventListener("input",Izracunaj);
           function Izracunaj(){
          document.getElementById("IznosUkupno").value=Number("159")*Number(document.getElementById("BrojDana").value);
          }
          Izracunaj();
         }
         else if(this.id=="2")
         {
          document.getElementById("2").style.border="2px solid yelow";
           document.getElementById("Slika").value="Villa Makarska";
           document.getElementById("CijenaPoDanu").value="185";
           document.getElementById("BrojDana").addEventListener("input",Izracunaj);
           function Izracunaj(){
          document.getElementById("IznosUkupno").value=Number("185")*Number(document.getElementById("BrojDana").value);
          }
          Izracunaj();
         }
         else
         {
          document.getElementById("3").style.border="2px solid yelow";
           document.getElementById("Slika").value="Hotel Neum";
           document.getElementById("CijenaPoDanu").value="167";
           document.getElementById("BrojDana").addEventListener("input",Izracunaj);
           function Izracunaj(){
          document.getElementById("IznosUkupno").value=Number("167")*Number(document.getElementById("BrojDana").value);
          }
          Izracunaj();
         }
       }
       
       /*document.getElementById("BrojDana").oninput=()=>{
        document.getElementById("IznosUkupno").value=Number(document.getElementById("CijenaPoDanu").value)*Number(document.getElementById("BrojDana").value);
       }
       function Promjeni2(a,br,this)
       {
        document.getElementById("1").style.border="none";
        document.getElementById("2").style.border="none"
        document.getElementById("3").style.border="none";
      
          this.style.border="2px solid yellow";
         document.getElementById("Slika").value=a;
         document.getElementById("CijenaPoDanu").value=br;
         document.getElementById("IznosUkupno").value=Number(br)*Number(document.getElementById("BrojDana").value);
       }
       var izbornik=document.getElementById("Izbornik");
       izbornik.style.height="0";
       document.getElementById("IzbornikDugme").onclick=function()
       {
         if(izbornik.style.height=="0px")
         {
           izbornik.style.height=izbornik.scrollHeight+"px";
         }
         else{
           izbornik.style.height="0";
         }
       }*/