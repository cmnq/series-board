window.addEventListener('keydown', showSeries);

const keyData = [...document.querySelectorAll('div[data-key]')];
let lastKey = null;

function showSeries(e) {
  const key = keyData.find(k => k.dataset.key === e.keyCode.toString());
  
   if (!key) { 
    return;
  } 
  
  if (lastKey) {
    lastKey.classList.toggle('hidden');
  }
  
  
  key.classList.toggle('hidden');
  lastKey = key; 
}
