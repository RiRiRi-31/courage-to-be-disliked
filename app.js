// 每集章節（秒）——按實際音訊時間碼
const EPISODES = {
  ep1: [
    { t: 0,    name: '開場：如果你不再需要討好任何人' },
    { t: 70,   name: '目的論：不是過去決定你' },
    { t: 246,  name: '自卑感是燃料，自卑情結是藉口' },
    { t: 392,  name: '一切煩惱都是人際關係的煩惱＋課題分離' },
    { t: 588,  name: '橫向關係：被討厭是自由的代價' },
    { t: 737,  name: '自我接納、他者信賴、他者貢獻' },
    { t: 919,  name: '甘於平凡的勇氣＋人生是連續的當下' },
    { t: 1058, name: '收尾：今晚就能做到的小行動' },
  ],
  ep2: [
    { t: 0,      name: '開場：你是不是常常需要一個人安靜一下？' },
    { t: 107.58, name: '什麼是高敏感？先不要急著給自己貼標籤' },
    { t: 233.40, name: '現實情境一：工作不是做不來，而是同時進來太多東西' },
    { t: 374.84, name: '現實情境二：你感受到別人的情緒，但那不一定是你的責任' },
    { t: 483.68, name: '高敏感的另一面：你不只是容易累，也可能看見更多' },
    { t: 586.94, name: '高敏感的人，為什麼容易內耗？' },
    { t: 671.62, name: '在關係裡說出需要，不等於麻煩別人' },
    { t: 755.46, name: '三個可以從今天開始的小練習' },
    { t: 830.60, name: '結尾：敏感不是要被消除的自己' },
  ],
};

const fmt = s => {
  const m = Math.floor(s / 60), sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
};

document.querySelectorAll('[data-episode]').forEach(card => {
  const episodeId = card.dataset.episode;
  const player = card.querySelector('audio');
  const list = card.querySelector('[data-chapters]');
  const chapters = EPISODES[episodeId] || [];

  chapters.forEach(ch => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="ch-name">${ch.name}</span><span class="ch-time">${fmt(ch.t)}</span>`;
    li.addEventListener('click', () => {
      player.currentTime = ch.t;
      player.play();
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    list.appendChild(li);
  });
});
