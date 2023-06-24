const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const local = 'videoplayer-current-time';
var throttled = _.throttle(renewToken, 1000, { trailing: false });
jQuery(player).on('timeupdate', throttled);
player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  localStorage.setItem(local, data.seconds.toString());
};

player.on('timeupdate', onPlay);

function setCurrentTime() {
  const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
}
player.setCurrentTime(savedTime);
