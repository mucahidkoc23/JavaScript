//1

console.log("Hello world"); //Ekrana yazı yazdırır.

//https://github.com/rwaldron/idiomatic.js/  => Js hakkında bir kaynak.

prompt("Adın ne?");//Kullanıcıdan değer alır
var yourname=prompt("Adın ne?");// değeri kaydederiz.

//Örnek

var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:

var c=a; //3.bir değişken vererek değeri taşıdık.
a=b;
b=c;

/***********Do not change the code below 👇*******/

console.log("a is " + a);
console.log("b is " + b);


//2

var tweet=prompt("Twitinizi giriniz");
var tweetCount=tweet.length;         //Karekter Sayısını hesaplar
alert("Bu kadar harf yazdınız"+ tweet +"Bu kadar harf yazma hakkınız var:"+(140-tweetCount));//alert: console.log gibi ekrana mesaj gösterir.

var tweet=prompt("Twitinizi giriniz");
var tweetUnder140=tweet.slice(0,140);  //Slice komutu belirlediğimiz alanı keser.
alert(tweetUnder140);

//3

var isim="Mücahid";
isim=isim.toLocaleUpperCase();//Tüm harfleri büyük yapar.
isim=isim.toLocaleLowerCase();//Tüm harfleri küçük yapar.

//4

function getMilk() {         //Fonksiyonu yarattık
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

getMilk();                //fonksiyonu çağırdık.

//4-paremetre ekleme

function getMilk(bottles) {         
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("but"+bottles+"milk");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

getMilk(12);         //12 tane süt almış olur.      

//4-Return ile fonksiyona çıktı üretme

function getMilk2(Money)
{
  return money%1.5;
}

var change=getMilk2(4);//Bu şekilde çağrılır.