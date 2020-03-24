function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.write('Loading');
    document.body.style = 'display:none;'
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function myFunction() {
    ready(function() {
      document.body.style = 'display:block;'
    }
}

myFunction();
