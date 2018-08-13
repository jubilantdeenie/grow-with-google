
const cats = [
  {'name': 'Raul' , 'image': 'img/cute-blue.jpg', 'pets':0},
  {'name': 'Moxie' , 'image': 'img/dark-diva.jpg', 'pets':0},
  {'name': 'Tobias' , 'image': 'img/siamese.jpg', 'pets':0},
  {'name': 'Hamlet' , 'image': 'img/persian.jpg', 'pets':0},
  {'name': 'Ingrid' , 'image': 'img/tiny-calico.jpg', 'pets':0},
  {'name': 'Angelica' , 'image': 'img/serious-tabby.jpg', 'pets':0},
  {'name': 'Dolce' , 'image': 'img/fawn-kitten.jpg', 'pets':0},
];

const container = document.getElementById('container');
  
for (var i = 0; i < cats.length; i++) {
  
  const catName = cats[i].name;
  const catImage = cats[i].image;
  let catPets = cats[i].pets;
  console.log(catPets);

  const catList = document.createElement('div');
  catList.textContent = catName;

  // Event closure
  catList.addEventListener('click', (function(catCopy) {
      return function() {
          
      container.innerHTML = '';
        
        const name = document.createElement('h1');
        //name.class = ('cat');
        name.textContent = catName;
        container.appendChild(name);

        const viewCat = document.createElement('img');
        viewCat.id = "image"
        viewCat.src = catImage;
        container.appendChild(viewCat);

        // Click me
        const counter = document.createElement('h2');
        //counter.id = ('count1');
        counter.src = catPets;

        
          counter.textContent = 'Pet me?';
  
        container.appendChild(counter);

        //Clicker
        viewCat.addEventListener('click', function(){
  
          catPets += 1;
        
           counter.textContent = 'Purrs: '+ catPets;
        }, false);
      };
  })(catName));

  document.body.appendChild(catList);
  
};


  /* var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
};

*/


/*
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
counter.textContent = 'Pet me?';
container.appendChild(counter);

//Clicker
count = 0;
cat1.addEventListener('click', function(){
  //the element has been clicked... do stuff here

  console.log('clicked');
  count += 1;
  
  //let clicks = document.getElementsByClass('count');
   counter.textContent = 'Purrs: '+ count;
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
counter2.textContent = 'Pet me?';
container.appendChild(counter2);

//Clicker
count2 = 0;
cat2.addEventListener('click', function(){
  //the element has been clicked... do stuff here

  console.log('clicked');
  count2 += 1;
  
  //let clicks = document.getElementsByClass('count');
   counter2.textContent = 'Purrs: '+ count2;
}, false);


*/



 
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