/*
Playback range [x] // make slider change with video
video length(duration) [] use duration property
Play [x]
Pause [x]
Restart [x]
End [x]
Backward [x] use currentTime
Forward [x] ^
Mute [x] use muted
Volume slider [x]
Speed slider [x]
*/
const video = $('#video')[0]

// makes the playback bar move while video is playing
video.ontimeupdate = function (){
  $('#playback').val(video.currentTime)
  displayDuration()
}
// displays video length on page load
video.onloadeddata = ()=>displayDuration()

function play()
{
  video.play()
}

function pause()
{
  video.pause()
}

function volume(element)
{
  console.log(element)
  video.volume = element.value
  console.log(video.volume)
}

function speed(element)
{
  console.log(element)
  video.playbackRate = element.value
  console.log(video.playbackRate)
}

function mute()
{ console.log(video.currentTime)
  console.log(video.muted)
  video.muted = !video.muted
}

function forward()
{
  console.log(video.currentTime)
  video.currentTime +=5
  console.log(video.currentTime)
}

function backwards()
{
  console.log(video.duration)
  video.currentTime -=5
  console.log(video.currentTime)
}

function start()
{
  video.currentTime =0
}

function end()
{
  video.currentTime = video.duration
}

$('#video').change(()=>{
  $('#playback').val($('#video')[0].duration)
})


function seek(element)
{
  $('#playback').attr('max',video.duration)
  video.currentTime = element.value
}

function displayDuration()
{
  if(video.readyState > 0)
    {
      let minutes = parseInt(video.duration / 60,10)
      let seconds = (video.duration % 60).toFixed(0)
      let currentTime = video.currentTime.toFixed(0)

      currentTime < 10 ? currentTime = currentTime.toString().padStart(2,'0')
                        : ''
      $('#duration').text(`0:${currentTime}/${minutes}:${seconds}`)
    }
}