






const container = document.getElementById('container');

const name = document.createElement('h1');
name.class = ('cat');
name.textContent = 'Raul';
container.appendChild(name);

const cat1 = document.createElement('img');
cat1.id = "image"
cat1.src = "img/cute-blue.jpg";
container.appendChild(cat1);

// Click me
const counter = document.createElement('h2');
counter.id = ('count1');
counter.textContent = 'Click me?';
container.appendChild(counter);

//Clicker
count = 0;
cat1.addEventListener('click', function(){
  //the element has been clicked... do stuff here

  console.log('clicked');
  count += 1;
  
  //let clicks = document.getElementsByClass('count');
   counter.textContent = 'Clicks: '+ count;
}, false);


// Cat 2

const name2 = document.createElement('h1');
name2.class = ('cat');
name2.textContent = 'Moxie';
container.appendChild(name2);

const cat2 = document.createElement('img');
cat2.id = "image"
cat2.src = "img/dark-diva.jpg";
container.appendChild(cat2);

// Click me
const counter2 = document.createElement('h2');
counter2.id = ('count2');
counter2.textContent = 'Click me?';
container.appendChild(counter2);

//Clicker
count2 = 0;
cat2.addEventListener('click', function(){
  //the element has been clicked... do stuff here

  console.log('clicked');
  count2 += 1;
  
  //let clicks = document.getElementsByClass('count');
   counter2.textContent = 'Clicks: '+ count2;
}, false);






 
 //const cat2 = document.createElement('img');

 



//container.appendChild('Raul');





 //const name2 = document.createElement('h1');
 //img.src ='Moxie';
 //src.appendChild(h1);



 //src "image/dark-diva";

//var src = document.getElementById("gamediv");   container

//var img = document.createElement("img");
//img.src = "img/eqp/"+this.apparel+"/"+this.facing+"_idle.png";
//src.appendChild(img);


 //<h1>Adorable</h1>
//<img id="image" src="img/cute-blue.jpg" alt="cute kitten">