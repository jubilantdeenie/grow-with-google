const elem = document.getElementById('image');
count = 0;
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
   console.log('clicked');
  count += 1;
  
  let clicks = document.getElementById('clicks');
   clicks.innerHTML = 'Clicks:' + count; 
}, false);