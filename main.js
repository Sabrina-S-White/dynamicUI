const btn = document.getElementById('menuBtn')
const list = document.getElementById('menu')
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const one = document.getElementById('imgDiv1');
const two = document.getElementById('imgDiv2');
const three = document.getElementById('imgDiv3');
const four = document.getElementById('imgDiv4');

//For dropdown
list.style.maxHeight = '0px'

btn.addEventListener('click', () => {
  if (list.style.maxHeight == "0px") {
      list.style.maxHeight = "130px";
  } else {
      list.style.maxHeight = "0px";
  }
})

//For image slider
leftBtn.addEventListener('click', () => {
  console.log(img1)
})

rightBtn.addEventListener('click', () => {
  console.log('right')
})

