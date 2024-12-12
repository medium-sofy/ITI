const slideshow = document.querySelector("#slideshow")
let images = [1,2,3,4,5,6]
let index = 0
let intervalId

function start()
{
  intervalId = setInterval(cycle, 2000);
}
function stop()
{
  clearInterval(intervalId)
}

function next()
{
  if(index<images.length - 1)
  {
    index++
    slideshow.src=`/tasks/taskResources/slideshow/${images[index]}.jpg`
  }
}

function previous()
{
  if(index > 0)
  {
    index--
    slideshow.src=`/tasks/taskResources/slideshow/${images[index]}.jpg`
  }
}

function cycle()
{
  if(index<images.length - 1)
    {
      index++
      slideshow.src=`/tasks/taskResources/slideshow/${images[index]}.jpg`
    }
    else 
    {
        index = 0
        slideshow.src=`/tasks/taskResources/slideshow/${images[index]}.jpg`
    }
}


