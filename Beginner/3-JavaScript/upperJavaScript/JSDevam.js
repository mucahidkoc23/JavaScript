//Random sayı üretmek

var n= Math.random();//0-1 arasında rastgele sayı üretir.
n=n*6;//sayıyı 6 ile çarptık.
n=Math.floor(n)+1;//+1 eldedik ve 1-6 arası rastgele tam sayı üretecek.
console.log(n);

//if-else

/*if(n===6){ //n 6 ya eşit olsaydı demek
               üç eşittir işareti ile 2 eşittir işareti arasındaki fark şudur;
               Üç eşittir de veri türlerinin aynı olup olmadığına bakıp
               ona göre eşit olup olmadığına bakarken iki eşittir işaretinde
               veri türleri önemsenmez.
               örneğin var a=1; var b="1"; üç eşittir de eşit değildir ama
               iki eişittir de eşittir. 
}
*/

if(n>6)
{
    console.log("Şanslı");
}
else{
console.log("Şanssız");
    
}

/*
&&:And
||:Or 
!: Not
*/


//Diziler

var guestList =["Angela","Mücahid","Tamer","Çeri"];//Dizi böyle tanımlanır.
var guestName=prompt("Whait is your name");
guestList.includes(guestName); //inludes dizide yazdığımız eleman var mı diye 
                               //diye kontrol eder.

//Diziler Örnek

var output=[];
var count=1;

function fizzBuzz() {

    if(count%3===0){
        output.push("Fizz")  // "push" diziye eleman eklemeye,"pop" ise 
                             // eleman silmeye yarar. "pop" eleman silerken 
                             // sondaki elemanı siler.
    }
    else if(count%5===0){
        output.push("Buzz")
    }
    else if(count%3===0&&count%5===0)
    {
        output.push("FizzBuzz");
    }
    else{
        output.push(count);
    }


}

//Dögüler -While
var i=1;

while (i<2) {       //While döngüsü bu şekilde çalışır.
    console.log(i); //"State" olaylarında kullan.
    i++;
}

//Dögüler -For

for(i=0; i<2 ; i++){  //For döngüsü bu şekilde tanımlanır.
    //Do someting     //"Iterate" durumlarda kullan
}