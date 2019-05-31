let listItem = document.querySelectorAll('.num');
let newArr = Array.from(listItem);
var a=[];
var b='!';
var c=[];
var d=0;
var a1 =[];
var c1 = [];
newArr.forEach(e =>{
  e.addEventListener('click',function(){
     if(b == '!' && d == 0){
     a.push(this.value);
     a1.push(this.value);
     a1 = a1.join('');
     document.getElementById('p').innerHTML = a1;
     a1 = a1.split('')

   }
   else if(b!== '!' && d == 0){
     c.push(this.value);
     c1.push(this.value);
     c1 = c1.join('');
     document.getElementById('p').innerHTML = c1;
     c1 = c1.split('')

   }
   else{
      a=[];
      b='!';
      c=[];
      d=0;
      a1 =[];
      c1 = [];
     a.push(this.value);
     a1.push(this.value);
     a1 = a1.join('');
     document.getElementById('p').innerHTML = a1;
     a1 = a1.split('')

   }
  }, false);
});


document.getElementById('ang').onclick = function(){

  if (a.length > 0 && c.length == 0) {
    a = +a.join('');
    b = '*';
    document.getElementById('p').innerHTML = '*';

  }
  
}

document.getElementById('baj').onclick = function(){

  if (a.length > 0) {
    a = +a.join('');
    b = '/';
    document.getElementById('p').innerHTML = '/';

  }
}
document.getElementById('han').onclick = function(){

  if (a.length > 0) {
    a = +a.join('');
    b = '-';
    document.getElementById('p').innerHTML = '-';

  }
}
document.getElementById('gum').onclick = function(){

  if (a.length > 0) {
    a = +a.join('');
    b = '+';
    document.getElementById('p').innerHTML = '+';

  }
}

document.getElementById('del').onclick = function(){
  a=[];
  b='!';
  c=[];
  d=0;
  a1 =[];
  c1 = [];
  document.getElementById('p').innerHTML = '';
}
document.getElementById('tok').onclick = function(){

  if (a.length > 0) {
    a = +a.join('');
    b = '%';
    document.getElementById('p').innerHTML = '%';

  }
}

document.getElementById('hav').onclick = function(){
  if (c.length > 0 && b == '*') {
    c = +c.join('');
    d = a*c;
    document.getElementById('p').innerHTML = d;
  }
  else if(c.length > 0 && b == '/'){
  c = +c.join('');
  d = a/c;
  document.getElementById('p').innerHTML = d;
}
else if(c.length > 0 && b == '-'){
c = +c.join('');
d = a-c;
document.getElementById('p').innerHTML = d;
}
else if(c.length > 0 && b == '+'){
c = +c.join('');
d = a+c;
document.getElementById('p').innerHTML = d;
}
else if(c.length > 0 && b == '%'){
c = +c.join('');
d = a*c/100;
document.getElementById('p').innerHTML = d;
}
};
