const params = new URLSearchParams(window.location.search);
const episode = window.EPISODES?.[params.get('ep')];

if (!episode) {
  window.location.replace('index.html#episodes');
} else {
  document.title = `${episode.number}｜${episode.title}｜resonance`;
  document.getElementById('episodeNumber').textContent = episode.number;
  document.getElementById('episodeTitle').textContent = episode.title;
  document.getElementById('episodeMeta').textContent = episode.meta;
  document.getElementById('episodeIntro').textContent = episode.intro;
  document.getElementById('episodePlayer').src = episode.audio;
  document.getElementById('episodeQuote').textContent = episode.quote;
  document.getElementById('episodeQuoteNote').textContent = `—— ${episode.quoteNote}`;

  const player = document.getElementById('episodePlayer');
  const list = document.getElementById('chapterList');
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${String(secs).padStart(2, '0')}`;
  };

  episode.chapters.forEach(chapter => {
    const li = document.createElement('li');
    li.tabIndex = 0;
    li.setAttribute('role', 'button');
    li.innerHTML = `<span class="ch-name">${chapter.name}</span><span class="ch-time">${formatTime(chapter.t)}</span>`;
    const jump = () => {
      player.currentTime = chapter.t;
      player.play();
    };
    li.addEventListener('click', jump);
    li.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        jump();
      }
    });
    list.appendChild(li);
  });
}
