element.addEventListener('click', func1);

function func1() {
   let x = document.getElementsByTagName('p').innerHTML;
   document.write(x.toUpperCase())
}