function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.body.style = 'display:none;color: black;'
    document.write('Loading');
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function myFunction() {
    ready(function() {
      document.body.style = 'display:block;display:none;color: initial;'
    })
}

myFunction();
console.log('asdfasdf');
