class Locationn{ 
  city ="";
  zipcode: number ;
  address="";
  img ="";
myvisit ="last visit";
id: number;
constructor(city,zipcode,address,img,id) { 
       this.city = city;
       this.zipcode= zipcode;
      this.address= address;
      this.img= img;
      this.id= id;
         }
  getloc(){
	  	return`<div class=" d-flex"><img src="imgs/pin.png" width="40px" height="30px"><p>${this.address}, ${this.city}, ${this.zipcode}</p></div>`
  }
  getdes (){
     	
		 return`<div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2">
			 <img class="card-img-top m-1" width="300px" src="${this.img}">
			 <div class="card-body old"><p class="card-title">${this.getloc()}</p>
       </div>
       <button  class="btn btn-secondary visit" id="${this.id}">${this.myvisit}</button>
			 
		 </div>`


  }
  setmyvisit(myvisit){
    this.myvisit=myvisit;
  }
  getmyvisit(){
      return`${this.myvisit}`
  }

   
}
class Restaurant extends Locationn{
	name ="";
    type ="";
    telephoneNumber = "" ;
    webAddress = "";
	constructor(city,zipcode,address,img,id, name, type, telephoneNumber, webAddress){
    super(city, zipcode, address, img,id);
    this.name = name;
    this.type = type;
    this.telephoneNumber = telephoneNumber;
    this.webAddress = webAddress;
    
	}
  getdes (){
    
		return `<div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2 ">
			 <img class="card-img-top m-2" width="300px" src="${this.img}">
			<h4 class="card-title">${this.name}</h4>
         <div class="card-body old">
				 <p class="card-text">${super.getloc()}<br> ${this.type} <br> ${this.telephoneNumber}</p></div>
                     <button class="btn btn-secondary visit" id="${this.id}" >${this.myvisit}</button>
                     </div>` 
	}
     
  }



class Eventt extends Restaurant {
	eventDate = "";
	eventTime = "";
	price : number; 
	constructor( city,zipcode,address,img,id, name, type, telephoneNumber, webAddress, eventDate, eventTime, price){
    super(city,zipcode,address,img,id, name, type, telephoneNumber, webAddress);
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.price = price;
	}
        getdes (){return` <div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2">
									 <img class="card-img-top m-2" src="${this.img}">
								 		<h4 class="card-title">${this.name}</h4>
                    <p class="card-text">${super.getloc()}</p>
                    <div class="card-body old">
										<p class="card-text">Event on: ${this.eventDate} ${this.eventTime} Uhr <br>${this.price}
										</p></div>
									  <button   class="btn btn-secondary visit" id="${this.id}" >${this.myvisit}</button>
                     </div>` 
							}


}
 let items =[new Locationn("Vienna", 1010, "St.Charles Karlsplatz 1", "imgs/m1.jpeg",0)
 , new Locationn("Vienna", 1130, "Schoenbrunn Park Maxingstrasse 13b", "imgs/m2.jpeg",1),
 new Restaurant("vienna", 1050, "Wehrgasse 8", "imgs/m3.jpeg",2, "ON Restaurant", "Chinese", "+43(1)5854900", "http://www.restaurant-on.at/"),
 new Restaurant("vienna", 1150, "Stutterheimstrasse 6", "imgs/m4.jpeg",3, "BioFrische", "Indian", "+43(1)9529215", "biofrische.wien"),
 new Eventt("vienna", 1010, "Seilerstaette 9", "imgs/m5.jpeg",4, "Cats- The Musical",   "Indian", "+43(1)9529215", "http://catsmusical.at", "Fr., 15.12.2020", "20:00" , 120),
new Eventt("vienna", 1020, "Meiereistrasse 7", "imgs/m6.jpeg",5, "Guns 'n Roses", "Indian", "+43(1)9529215", "www.gunsandroses.com/", "Sat, 09.06.2020", "19:30" , 95)];


create();
function create(){

for (let i = 0; i < items.length; i++) {
	if (i< 3){
    document.getElementById("gallary1").innerHTML += items[i].getdes();
    } else{
        document.getElementById("gallary2").innerHTML += items[i].getdes();  
    }	
	}
}
/*var dc =document.getElementsByClassName("visit");
  document.querySelectorAll(".visit").addEventListener("click", function(){
    document.querySelectorAll('.visit').forEach(item => {
  item.addEventListener('click', event => {*/

    const buttons = document.querySelectorAll(".visit")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    //...

    //handle click
 
    var ff=document.getElementById(button.id).getAttribute("id");
    console.log(ff);
    var z= prompt("when u visited that location");
    
    items[ff].setmyvisit(z);
    document.getElementById("gallary1").innerHTML = "";
   document.getElementById("gallary2").innerHTML = "";  
      create();
  })
}
/* })
})*/


