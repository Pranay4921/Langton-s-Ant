let n = 100;
let t = 0;

let x_in=0;
let y_in=0;

let ant_pos = new p5.Vector();
let ant_vel = new p5.Vector();
let rect_state = [];


function setup() {
  createCanvas(600, 600);
  frameRate(10);
  
  ant_vel.y=1;
  ant_vel.x=0;
  
  for (let i=0;i<n;i++){
    rect_state[i] = [];
    for (let j =0;j<n;j++){
      rect_state[i][j] = 1;   
      }
  }
}

function draw() {
  
  background(220);
  let vx_temp=0;
  let vy_temp=0;
  
  if (mouseIsPressed)
  {
    t=0;
    for (let i=0;i<n;i++){
      for (let j =0;j<n;j++){
        rect_state[i][j] = 1;   
        }
      }
    x_in = mouseX;
    y_in = mouseY;
    ant_pos.x = floor(x_in*n/width);
    ant_pos.y = floor(y_in*n/height);
  }
  for(let i=0;i<n;i++){
    for (let j=0;j<n;j++){
      fill(255*rect_state[i][j])
      rect(i*width/n,j*height/n,width/n,height/n);
    }
  }
  fill('red');
  circle(ant_pos.x*width/n + width/(2*n),ant_pos.y*height/n + height/(2*n),height/(4*n));
  
  if(rect_state[ant_pos.x][ant_pos.y]==1){
    rect_state[ant_pos.x][ant_pos.y]=0;
    vx_temp = ant_vel.y;
    vy_temp = -ant_vel.x;
  }
  else{
    rect_state[ant_pos.x][ant_pos.y]=1;
    vx_temp = -ant_vel.y;
    vy_temp = ant_vel.x;
  }
  ant_vel.x = vx_temp;
  ant_vel.y = vy_temp;
  ant_pos.x = ant_pos.x + ant_vel.x;
  ant_pos.y = ant_pos.y + ant_vel.y;
  
  t++;
  
  console.log(t);
}