(function(){
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'));
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  let mouseX = null;
  let raf = null;
  let isRafPlaying = false;
  let mouseY = null;

  function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t;
  }

  // class Animation{
  //   update(){

  //   }
  //   draw(){

  //   }
  // }

  class Circle {
    constructor(x,y,radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.init();
    }

    init(){
    }

    update(){
    }

    draw(){
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(this.x,this.y, this.radius, 0, 2*Math.PI, true);
      ctx.fill();
    }
  }

  function update(timestamp) {
    circle.draw();
    console.log(circle);
    circle.x = lerp(circle.x,mouseX, 0.05);
    circle.y = lerp(circle.y,mouseY, 0.05);
    circle.draw();
    let diffX = Math.abs(circle.x - mouseX);
    let diffY = Math.abs(circle.y - mouseY);
    if (diffX < 0.1 && diffY < 0.1) {
      cancelAnimationFrame(raf);
      isRafPlaying = false;
      return;
    }
    raf = requestAnimationFrame(update);
    isRafPlaying = true;
  }

  let circle = new Circle(WIDTH/2,HEIGHT/2, 30);
  circle.draw();

  document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log(event.clientX);
    console.log(event.clientY);
    if (isRafPlaying === false) {
      requestAnimationFrame(update);
    }
  });

})();
