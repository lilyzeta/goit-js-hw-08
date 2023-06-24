const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const local = 'videoplayer-current-time';

let saveTimeInterval;

player.on('play', () => {
  saveTimeInterval = setInterval(saveTimeToLocalStorage, 1000);
});

player.on('pause', () => {
  clearInterval(saveTimeInterval);
});

function saveTimeToLocalStorage() {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem(local, seconds.toString());
  });
}

function setCurrentTime() {
  const savedTime = localStorage.getItem(local);

  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
}

setCurrentTime();
