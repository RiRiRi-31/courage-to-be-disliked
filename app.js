const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${String(secs).padStart(2, '0')}`;
};

const list = document.getElementById('episodeIndex');
if (list && window.EPISODES) {
  Object.entries(window.EPISODES).forEach(([episodeId, episode]) => {
    const card = document.createElement('article');
    card.className = 'episode-index-card';
    card.innerHTML = `
      <div class="ep-head">
        <div class="ep-num">${episode.number}</div>
        <div>
          <h3>${episode.title}</h3>
          <p class="ep-meta">${episode.meta}</p>
        </div>
      </div>
      <p class="episode-intro">${episode.intro}</p>
      <div class="episode-index-footer">
        <span>${episode.chapters.length} 個章節</span>
        <a class="btn btn-gold" href="episode.html?ep=${episodeId}">進入本集　→</a>
      </div>
    `;
    list.appendChild(card);
  });
}
