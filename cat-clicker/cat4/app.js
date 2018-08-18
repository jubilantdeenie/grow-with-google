
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


// Viewer

// Model

// Octopus