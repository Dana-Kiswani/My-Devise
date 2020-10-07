'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
 //------

var kolshi =[];
function MyDevise (DeviceName,DeviseCategory, DeviseQuantity){
    this.DeviceName = DeviceName;
    this.DeviseCategory = DeviseCategory;
    this.DeviseQuantity = DeviseQuantity;
    //---
    this.dValue = [];
    //---
    this.randomNum();
    //---
    kolshi.push(this);
    //---
    this.total = 0;
    //---
    this.insideTable();


}
// console.log(kolshi);

//------
MyDevise.prototype.randomNum = function(){
  for(var i=0; i<kolshi.length; i++){
    var randomX = Math.floor(getRandomInt(350 , 750));
    this.dValue.push(randomX);
  }
};
//-----
//Adding Event-Listener
formSubmit;
var formSubmit = document.addEventListener('submit', onSub);

function onSub(event){
    event.preventDefault();

    var dName     = event.target.name.value;
    var dCategory = event.target.category.value;
    var dQuantity = event.target.quantity.value;

    new MyDevise(dName,dCategory,dQuantity);

//     taleHead();
    setLocal();


}

//---
//generate table
var tableEl = document.getElementById('mainTable');

function taleHead() {
      var tr = document.createElement('tr');


    tableEl.appendChild(tr);

    //---
    var th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Device Name';
    //---

    var th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = 'Quantity';
    //---

    var th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'Unit Price';

    //---
    var th4 = document.createElement('th');
    tr.appendChild(th4);
    th4.textContent = 'Category';
}
taleHead();

//-----
     var finalTotal = 0;

MyDevise.prototype.insideTable = function (){
  var tr = document.createElement('tr');

  tableEl.appendChild(tr);
    //--
    var td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = this.DeviceName;
    //---

    var td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = this.DeviseCategory;

    //----
    for (var d=0; d<kolshi.length; d++){
    var td3 = document.createElement('td');
    this.total += this.finalTotal;
    td3.textContent = kolshi[d].dValue;
    tr.appendChild(td3);
    }
    //----
    var td4 = document.createElement('td');
    tr.appendChild(td4);
    td4.textContent = this.DeviseQuantity;
};


//LOCAL STORAGEEEEEEE
//Set-Item
function setLocal() {
    var setStorage = JSON.stringify(kolshi);
    localStorage.setItem('folder1', setStorage);
}
//Get-Item

function getLocal() {
    var getStorage = localStorage.getItem('folder1');

    if (getStorage) {
        kolshi = JSON.parse;
    }

}
getLocal();
