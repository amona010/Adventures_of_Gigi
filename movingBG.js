var bg;
var header;
var block;
var gigi;
var sun;
var cloud;
var flag;
var success = false;
var failure = false;
var successImage;
var failImage;
var level = 1;
var speed;
var p = [1700, 2200, 2700, 3000, 3300, 3800, 4300];
var themeMusic;
var successMusic;
var successMusicVar=1;
var failureMusic;
var failureMusicVar=1;
var jumpMusic;
var jumpMusicVar=1;

function preload(){
  bg = loadImage('images/morning.jpg');
  block = loadImage('images/block.png');
  gigi = loadImage('images/gigi.png');
  sun = loadImage('images/sun.png');
  cloud = loadImage('images/cloud.png');
  header = loadImage('images/header.png');
  flag = loadImage('images/flag.png');
  successImage = loadImage('images/success.png');
  failImage = loadImage('images/failure.png');
  level2 = loadImage('images/level2.png');
  level3 = loadImage('images/level3.png');
  themeMusic = loadSound("audio/theme.m4a");
  themeMusic.setLoop(true);
  successMusic = loadSound("audio/groovy.m4a");
  failureMusic = loadSound("audio/failure.m4a");
  jumpMusic = loadSound("audio/jump.m4a");
}

function setup(){
  var cnv = createCanvas(1000,800);
  var a = (windowWidth - width) / 2;
  var b = (windowHeight - height) / 2;
  cnv.position(a, b);
  themeMusic.play();
}

function draw()
{

  if(level == 1)
  {
    speed = 5;
  }
  else if(level == 2)
  {
    speed = 10;
  }
  else
  {
    speed = 15;
  }

  if(success == false && failure == false)
  {
    for(var i = 0; i < 7; i++)
    {
      p[i] -= speed;
    }

    image(bg, 0,200,3200,600);
    for(var i=0; i < 6; i++)
    {
      image(block,p[i],710,60,60);
    }
    image(sun, -100,100,300,300);
    image(cloud, 200,250,200,50);
    image(cloud, 380,320,200,50);
    image(cloud, 900,300,200,50);
    image(header, -40,-20,1100,250);
    image(flag, p[6], 460, 150, 300);

    if(keyIsPressed)
    {
        if(keyCode == 32)
        {
          image(gigi,width/2,580,80,90);

          if(jumpMusicVar == 1){
            jumpMusic.play();
            jumpMusicVar = 0;
          }
        }

        else if(keyCode == ENTER)
        {
          resetGame();
        }
        else
        {
          image(gigi,width/2,680,80,90);

          for(var i=0; i<6; i++)
          {
            if(p[i] > (width/2) - 50 && p[i] < (width/2) + 50)
            {
              failure = true;
              level = 1;
            }
          }
        }
      }
    else
    {
      image(gigi,width/2,680,80,90);
      if(jumpMusicVar == 0) {
        jumpMusicVar = 1;
      }

      for(var i=0; i<6; i++)
      {
        if(p[i] > (width/2) - 50 && p[i] < (width/2) + 50)
        {
          failure = true;
          level = 1;
        }
      }
    }

    if(p[6] < width/2 - 200)
    {
      success = true;
      level += 1;
    }
  }

  else if(success == true)
  {
    if(level > 3)
    {
      image(successImage, -55, -163, width + 234, height + 434);

      if(successMusicVar == 1){
        successMusic.play();
        count = 20;
        successMusicVar = 0;
      }

      if(keyIsPressed)
      {
        if(keyCode == ENTER)
        {
          level = 1;
          resetGame();
        }
      }
    }
    else if(level == 2)
    {
      image(level2, -70, -40, width + 200, height + 80);

      if(keyIsPressed)
      {
        if(keyCode == ENTER)
        {
          resetGame();
        }
      }
    }
    else
    {
      image(level3, -300, -20, width + 560, height + 70);

      if(keyIsPressed)
      {
        if(keyCode == ENTER)
        {
          resetGame();
        }
      }
    }
  }

  else
  {
    image(failImage, 0, 0, width, height + 120);
    if(failureMusicVar == 1){
      failureMusic.play();
      count = 20;
      failureMusicVar = 0;
    }

    if(keyIsPressed)
    {
      if(keyCode == ENTER)
      {
        resetGame();
      }
    }
  }

}

function resetGame()
{
  success = false;
  failure = false;
  failureMusicVar = 1;
  p = [1000, 1500, 2000, 2300, 2600, 3100, 3600];
}
