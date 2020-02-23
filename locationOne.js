var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locationn = /** @class */ (function () {
    function Locationn(city, zipcode, address, img, id) {
        this.city = "";
        this.address = "";
        this.img = "";
        this.myvisit = "last visit";
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.img = img;
        this.id = id;
    }
    Locationn.prototype.getloc = function () {
        return "<div class=\" d-flex\"><img src=\"imgs/pin.png\" width=\"40px\" height=\"30px\"><p>" + this.address + ", " + this.city + ", " + this.zipcode + "</p></div>";
    };
    Locationn.prototype.getdes = function () {
        return "<div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2\">\n\t\t\t <img class=\"card-img-top m-1\" width=\"300px\" src=\"" + this.img + "\">\n\t\t\t <div class=\"card-body old\"><p class=\"card-title\">" + this.getloc() + "</p>\n       </div>\n       <button  class=\"btn btn-secondary visit\" id=\"" + this.id + "\">" + this.myvisit + "</button>\n\t\t\t \n\t\t </div>";
    };
    Locationn.prototype.setmyvisit = function (myvisit) {
        this.myvisit = myvisit;
    };
    Locationn.prototype.getmyvisit = function () {
        return "" + this.myvisit;
    };
    return Locationn;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zipcode, address, img, id, name, type, telephoneNumber, webAddress) {
        var _this = _super.call(this, city, zipcode, address, img, id) || this;
        _this.name = "";
        _this.type = "";
        _this.telephoneNumber = "";
        _this.webAddress = "";
        _this.name = name;
        _this.type = type;
        _this.telephoneNumber = telephoneNumber;
        _this.webAddress = webAddress;
        return _this;
    }
    Restaurant.prototype.getdes = function () {
        return "<div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2 \">\n\t\t\t <img class=\"card-img-top m-2\" width=\"300px\" src=\"" + this.img + "\">\n\t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n         <div class=\"card-body old\">\n\t\t\t\t <p class=\"card-text\">" + _super.prototype.getloc.call(this) + "<br> " + this.type + " <br> " + this.telephoneNumber + "</p></div>\n                     <button class=\"btn btn-secondary visit\" id=\"" + this.id + "\" >" + this.myvisit + "</button>\n                     </div>";
    };
    return Restaurant;
}(Locationn));
var Eventt = /** @class */ (function (_super) {
    __extends(Eventt, _super);
    function Eventt(city, zipcode, address, img, id, name, type, telephoneNumber, webAddress, eventDate, eventTime, price) {
        var _this = _super.call(this, city, zipcode, address, img, id, name, type, telephoneNumber, webAddress) || this;
        _this.eventDate = "";
        _this.eventTime = "";
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    Eventt.prototype.getdes = function () {
        return " <div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2\">\n\t\t\t\t\t\t\t\t\t <img class=\"card-img-top m-2\" src=\"" + this.img + "\">\n\t\t\t\t\t\t\t\t \t\t<h4 class=\"card-title\">" + this.name + "</h4>\n                    <p class=\"card-text\">" + _super.prototype.getloc.call(this) + "</p>\n                    <div class=\"card-body old\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"card-text\">Event on: " + this.eventDate + " " + this.eventTime + " Uhr <br>" + this.price + "\n\t\t\t\t\t\t\t\t\t\t</p></div>\n\t\t\t\t\t\t\t\t\t  <button   class=\"btn btn-secondary visit\" id=\"" + this.id + "\" >" + this.myvisit + "</button>\n                     </div>";
    };
    return Eventt;
}(Restaurant));
var items = [new Locationn("Vienna", 1010, "St.Charles Karlsplatz 1", "imgs/m1.jpeg", 0),
    new Locationn("Vienna", 1130, "Schoenbrunn Park Maxingstrasse 13b", "imgs/m2.jpeg", 1),
    new Restaurant("vienna", 1050, "Wehrgasse 8", "imgs/m3.jpeg", 2, "ON Restaurant", "Chinese", "+43(1)5854900", "http://www.restaurant-on.at/"),
    new Restaurant("vienna", 1150, "Stutterheimstrasse 6", "imgs/m4.jpeg", 3, "BioFrische", "Indian", "+43(1)9529215", "biofrische.wien"),
    new Eventt("vienna", 1010, "Seilerstaette 9", "imgs/m5.jpeg", 4, "Cats- The Musical", "Indian", "+43(1)9529215", "http://catsmusical.at", "Fr., 15.12.2020", "20:00", 120),
    new Eventt("vienna", 1020, "Meiereistrasse 7", "imgs/m6.jpeg", 5, "Guns 'n Roses", "Indian", "+43(1)9529215", "www.gunsandroses.com/", "Sat, 09.06.2020", "19:30", 95)];
create();
function create() {
    for (var i = 0; i < items.length; i++) {
        if (i < 3) {
            document.getElementById("gallary1").innerHTML += items[i].getdes();
        }
        else {
            document.getElementById("gallary2").innerHTML += items[i].getdes();
        }
    }
}
/*var dc =document.getElementsByClassName("visit");
  document.querySelectorAll(".visit").addEventListener("click", function(){
    document.querySelectorAll('.visit').forEach(item => {
  item.addEventListener('click', event => {*/
var buttons = document.querySelectorAll(".visit");
var _loop_1 = function (button) {
    button.addEventListener('click', function (event) {
        //...
        //handle click
        var ff = document.getElementById(button.id).getAttribute("id");
        console.log(ff);
        var z = prompt("when u visited that location");
        items[ff].setmyvisit(z);
        document.getElementById("gallary1").innerHTML = "";
        document.getElementById("gallary2").innerHTML = "";
        create();
    });
};
for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
    var button = buttons_1[_i];
    _loop_1(button);
}
/* })
})*/
