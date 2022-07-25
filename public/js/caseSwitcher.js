element.addEventListener('click', func1);

function func1(e) {
   let x = document.getElementsByTagName('p').innerHTML;
   document.write(x.toUpperCase())
}