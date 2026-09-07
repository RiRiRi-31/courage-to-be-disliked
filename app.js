// EP1 章節（秒）——用實際音訊時間碼
const CHAPTERS = [
  { t: 0,    name: '開場：如果你唔使再討好任何人' },
  { t: 70,   name: '目的論：唔係過去決定你' },
  { t: 246,  name: '自卑感係燃料，自卑情結係藉口' },
  { t: 392,  name: '一切煩惱都係人際關係嘅煩惱＋課題分離' },
  { t: 588,  name: '橫向關係：被討厭係自由嘅代價' },
  { t: 737,  name: '自我接納、他者信賴、他者貢獻' },
  { t: 919,  name: '甘於平凡嘅勇氣＋人生係連續嘅當下' },
  { t: 1058, name: '收尾：今晚做得到嘅小行動' },
];

const fmt = s => {
  const m = Math.floor(s / 60), sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
};

const list = document.getElementById('chapterList');
const player = document.getElementById('player');
CHAPTERS.forEach(ch => {
  const li = document.createElement('li');
  li.innerHTML = `<span class="ch-name">${ch.name}</span><span class="ch-time">${fmt(ch.t)}</span>`;
  li.addEventListener('click', () => {
    player.currentTime = ch.t;
    player.play();
    document.getElementById('listen').scrollIntoView({ behavior: 'smooth' });
  });
  list.appendChild(li);
});
