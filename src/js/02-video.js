import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

// player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

// player.on('timeupdate', function ({ seconds }) {
//     const currentTime = seconds;
//     saveCurrentTime(currentTime);
//     
// });

// const saveCurrentTime = throttle(function (time) {
//   localStorage.setItem('videoplayer-current-time', time);
// }, 1000);



player.on('timeupdate', throttle(function ({ seconds }) {
    const currentTime = localStorage.setItem("videoplayer-current-time", seconds);

}, 1000)
    
);

const savedTime = localStorage.getItem('videoplayer-current-time');
// console.log(typeof (savedTime));
if (savedTime) {
  player.setCurrentTime(Number(savedTime));
}
    


