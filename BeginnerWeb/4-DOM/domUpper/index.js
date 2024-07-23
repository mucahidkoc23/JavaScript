document.query
//w3school dan özelliklere bakılabilir. bazıları şunlardır.
//document : html elementlerini gösterir.
//document.firstChild : ilk elemanı gösterir.
/*document.getElementsByTagName : 
web sitesine bakar ve belirli bir etiket adına sahip öğeyi arar.*/

/*document.getElementsByTagName("li")[2].style.color="purple";
li adındaki dizinin ikinci elemanın rengini mor yapar.
*/

/*document.querySelector(); :
Arama yapar.Her öğe için arama farklıdır.Örneğin id araması için başına 
# koymayı unutma vs...*/ 

/*document.querySelectorAll();
Aramada birden fazla sonç varsa hepsini gösterir.*/

/*document.querySelector("button").classList.add("invisible") :
invisible class ı ekler.*/

/*document.querySelector("button").classList.remove("invisible") :
invisible classı siler.*/

 /*document.querySelector("button").classList.toggle("invisible") 
 :toggle eğer sınıf uygulanmışsa uygulama,eğer uygulamamışsa uygula 
  anlamına gelir.*/   

 /*document.querySelector("h1").textContent; 
 textContent: içerği verir ve 
 değiştirmenize olanak sağlar. Bütün etiketleriyle(kalın,itelik...) 
 birlikte ama innerHTML sadece içeriği verir ve değiştirmenize izin verir. 
 Etiketleri vermez.*/
                                  

/*document.querySelector("a").getAttribute("href");
getAtribute ile html elementlerine ulaşırız (href,class,src....vs) 
burda "a" sınıdından "href" linkine ulaştık*/

/*document.querySelector("a").setAttribute("href","https://www.bing.com");
"href" içindeki linki "https://www.bing.com" linki le değiştik setAttribute 
sayesinde */