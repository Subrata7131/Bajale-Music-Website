const body = document.body;
const bulbContainer = document.getElementById('bulbContainer');
const songContainer = document.getElementById('songContainer');
const navLeftInfo = document.getElementById('navLeftInfo');
const navThumb = document.getElementById('navThumb');
const navTitle = document.getElementById('navTitle');
const navArtist = document.getElementById('navArtist');
const navbar = document.getElementById('musicNavbar');
const fullPlayer = document.getElementById('fullPlayer');
const fullThumb = document.getElementById('fullThumb');
const fullTitle = document.getElementById('fullTitle');
const fullArtist = document.getElementById('fullArtist');
const seekBar = document.getElementById('seekBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const fullPlayPause = document.getElementById('fullPlayPause');
const fullShuffle = document.getElementById('fullShuffle');
const fullRepeat = document.getElementById('fullRepeat');
const fullVolumeSlider = document.getElementById('fullVolumeSlider');

let bulbSvg = null;
let currentTheme = 0;

const themes = [
    { name: 'Warm Gold', bg: '#0a0a0f', filament: '#ff7700', filamentCore: '#ffbb44', ambientOuter: '#ff7700', ambientInner: '#ffaa00', glassEdge: '#ff9900', glassBounce: '#ffaa00', junctionGlow: '#ffaa00', dropShadowColor: 'rgba(255, 170, 0, 0.6)' },
    { name: 'Cyan', bg: '#0a1414', filament: '#00ccdd', filamentCore: '#44eeff', ambientOuter: '#00ccdd', ambientInner: '#00e5ff', glassEdge: '#00ccdd', glassBounce: '#00ccdd', junctionGlow: '#00e5ff', dropShadowColor: 'rgba(0, 240, 255, 0.6)' },
    { name: 'Purple', bg: '#140a1e', filament: '#9b30d0', filamentCore: '#c560f0', ambientOuter: '#9b30d0', ambientInner: '#b347ea', glassEdge: '#a040e0', glassBounce: '#b347ea', junctionGlow: '#b347ea', dropShadowColor: 'rgba(179, 71, 234, 0.6)' },
    { name: 'Green', bg: '#0a140f', filament: '#00cc66', filamentCore: '#44ff99', ambientOuter: '#00cc66', ambientInner: '#00ff88', glassEdge: '#00dd77', glassBounce: '#00ff88', junctionGlow: '#00ff88', dropShadowColor: 'rgba(0, 255, 136, 0.6)' },
    { name: 'Red', bg: '#1a0a0a', filament: '#dd2222', filamentCore: '#ff5555', ambientOuter: '#dd2222', ambientInner: '#ff3333', glassEdge: '#ee3333', glassBounce: '#ff3333', junctionGlow: '#ff3333', dropShadowColor: 'rgba(255, 51, 51, 0.6)' },
    { name: 'Blue', bg: '#0a0a1a', filament: '#3366dd', filamentCore: '#6699ff', ambientOuter: '#3366dd', ambientInner: '#4488ff', glassEdge: '#4477ee', glassBounce: '#4488ff', junctionGlow: '#4488ff', dropShadowColor: 'rgba(68, 136, 255, 0.6)' },
    { name: 'Pink', bg: '#1a0a14', filament: '#ee4488', filamentCore: '#ff77bb', ambientOuter: '#ee4488', ambientInner: '#ff66aa', glassEdge: '#ee5599', glassBounce: '#ff66aa', junctionGlow: '#ff66aa', dropShadowColor: 'rgba(255, 102, 170, 0.6)' },
    { name: 'Orange', bg: '#1a0f0a', filament: '#ee6611', filamentCore: '#ff9944', ambientOuter: '#ee6611', ambientInner: '#ff8833', glassEdge: '#ee7722', glassBounce: '#ff8833', junctionGlow: '#ff8833', dropShadowColor: 'rgba(255, 136, 51, 0.6)' },
    { name: 'Teal', bg: '#0a1a1a', filament: '#00aa88', filamentCore: '#33ddbb', ambientOuter: '#00aa88', ambientInner: '#00ccaa', glassEdge: '#00bb99', glassBounce: '#00ccaa', junctionGlow: '#00ccaa', dropShadowColor: 'rgba(0, 204, 170, 0.6)' },
    { name: 'Lime', bg: '#0f1a0a', filament: '#88cc00', filamentCore: '#bbff33', ambientOuter: '#88cc00', ambientInner: '#aaff00', glassEdge: '#99dd00', glassBounce: '#aaff00', junctionGlow: '#aaff00', dropShadowColor: 'rgba(170, 255, 0, 0.6)' },
    { name: 'Violet', bg: '#1a0a1e', filament: '#aa22dd', filamentCore: '#dd55ff', ambientOuter: '#aa22dd', ambientInner: '#cc44ff', glassEdge: '#bb33ee', glassBounce: '#cc44ff', junctionGlow: '#cc44ff', dropShadowColor: 'rgba(204, 68, 255, 0.6)' },
    { name: 'White', bg: '#0f0f0f', filament: '#dddddd', filamentCore: '#ffffff', ambientOuter: '#dddddd', ambientInner: '#ffffff', glassEdge: '#eeeeee', glassBounce: '#ffffff', junctionGlow: '#ffffff', dropShadowColor: 'rgba(255, 255, 255, 0.6)' }
];

function loadBulbSVG() {
    fetch('lightbulb.svg')
        .then(r => r.text())
        .then(svg => {
            bulbContainer.innerHTML = svg;
            bulbSvg = bulbContainer.querySelector('svg');
            if (bulbSvg) bulbSvg.classList.add('bulb-svg');
        }).catch(() => { });
}

function changeTheme() {
    if (!bulbSvg) {
        currentTheme = (currentTheme + 1) % themes.length;
        body.style.backgroundColor = themes[currentTheme].bg;
        return;
    }
    bulbSvg.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
    bulbSvg.style.transform = 'translateY(12px)';
    setTimeout(() => { bulbSvg.style.transform = 'translateY(0px)'; }, 200);
    currentTheme = (currentTheme + 1) % themes.length;
    const t = themes[currentTheme];
    body.style.backgroundColor = t.bg;
    const up = {
        '.filament-glow-outer': ['stroke', t.filament],
        '.filament-core-outer': ['stroke', t.filamentCore],
        '.filament-glow-inner': ['stroke', t.filament],
        '.filament-core-inner': ['stroke', t.filamentCore],
        '.junction-glow': ['fill', t.junctionGlow],
        '.bulb-ambient-glow-outer': ['fill', t.ambientOuter],
        '.bulb-ambient-glow-inner': ['fill', t.ambientInner],
        '.glass-edge-glow': ['stroke', t.glassEdge],
        '.glass-bounce-right': ['stroke', t.glassBounce]
    };
    for (let [sel, [attr, val]] of Object.entries(up)) {
        const el = bulbSvg.querySelector(sel);
        if (el) el.setAttribute(attr, val);
    }
    bulbSvg.style.filter = `drop-shadow(0 15px 25px ${t.dropShadowColor}) drop-shadow(0 30px 60px ${t.ambientOuter}80) drop-shadow(0 0 20px ${t.filamentCore})`;
}

// ---------- ID3 TAG READING ----------
function readID3Tags(fileUrl) {
    return new Promise((resolve) => {
        const fallbackTitle = decodeURIComponent(fileUrl).replace(/\.mp3$/i, '').replace(/[_-]/g, ' ').trim() || 'Unknown Title';
        try {
            if (typeof jsmediatags !== 'undefined') {
                jsmediatags.read(fileUrl, {
                    onSuccess: function (tag) {
                        const t = tag.tags;
                        let picture = null;
                        if (t.picture) {
                            const data = t.picture.data, format = t.picture.format;
                            let base64 = '';
                            for (let i = 0; i < data.length; i++) base64 += String.fromCharCode(data[i]);
                            picture = `data:${format};base64,${btoa(base64)}`;
                        }
                        resolve({
                            title: t.title || fallbackTitle,
                            artist: t.artist || 'Unknown Artist',
                            picture: picture
                        });
                    },
                    onError: () => resolve({ title: fallbackTitle, artist: 'Unknown Artist', picture: null })
                });
            } else {
                resolve({ title: fallbackTitle, artist: 'Unknown Artist', picture: null });
            }
        } catch (e) {
            resolve({ title: fallbackTitle, artist: 'Unknown Artist', picture: null });
        }
    });
}

// ---------- MUSIC PLAYER ----------
let songList = [];
let currentAudio = null;
let currentSongIndex = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let currentSongMeta = { title: '', artist: '', picture: null };

function generateGradient(seed) {
    const colors = [
        ['#ff2d55', '#8a2be2'], ['#00cfff', '#ff2d55'], ['#8a2be2', '#00cfff'],
        ['#ff7700', '#ff2d55'], ['#00ff88', '#00cfff'], ['#ffbb44', '#ff2d55']
    ];
    return colors[seed % colors.length];
}

function generateThumbnail(title, gradient) {
    const [c1, c2] = gradient;
    const canvas = document.createElement('canvas');
    canvas.width = 300; canvas.height = 300;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 300, 300);
    grad.addColorStop(0, c1); grad.addColorStop(1, c2);
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 300, 300);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font = '120px Arial';
    ctx.fillText('♪', 30, 200); ctx.fillText('♫', 170, 120);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 22px "Space Grotesk"';
    ctx.textAlign = 'center';
    const short = title.length > 20 ? title.substring(0, 20) + '...' : title;
    ctx.fillText(short, 150, 260);
    return canvas.toDataURL();
}

async function scanMusicFolder() {
    songContainer.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa;width:100%;"><i class="fas fa-spinner fa-spin" style="font-size:50px;"></i><p>Scanning music files...</p></div>';
    songList = [];
    for (let i = 1; i <= 10; i++) {
        const name = `song${i}.mp3`;
        try {
            const resp = await fetch(name, { method: 'HEAD' });
            if (resp.ok) {
                const meta = await readID3Tags(name);
                const thumb = meta.picture || generateThumbnail(meta.title, generateGradient(songList.length));
                songList.push({
                    file: name,
                    title: meta.title,
                    artist: meta.artist,
                    picture: thumb,
                    gradient: generateGradient(songList.length)
                });
            }
        } catch (e) { }
    }
    console.log('Total songs found:', songList.length);
    renderSongCards();
}

function renderSongCards() {
    songContainer.innerHTML = '';
    if (songList.length === 0) {
        songContainer.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa;width:100%;"><i class="fas fa-music" style="font-size:50px;display:block;margin-bottom:20px;"></i><h3>No Songs Found</h3><p>Place <code>song1.mp3</code> – <code>song10.mp3</code> in this folder.</p></div>';
        return;
    }
    songList.forEach((song, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', i * 100);
        card.onclick = () => playSong(i);
        card.innerHTML = `
            <img src="${song.picture}" alt="${song.title}">
            <div class="play-btn">${(i === currentSongIndex && isPlaying) ? '⏸' : '▶'}</div>
            <h4>${song.title}</h4>
            <p>${song.artist}</p>`;
        songContainer.appendChild(card);
    });
    if (typeof AOS !== 'undefined') AOS.refresh();
}

function playSong(index) {
    if (index < 0 || index >= songList.length) return;
    const song = songList[index];

    if (index === currentSongIndex && currentAudio) {
        if (isPlaying) {
            currentAudio.pause();
            isPlaying = false;
        } else {
            currentAudio.play();
            isPlaying = true;
        }
        updateUI();
        return;
    }

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(song.file);
    currentSongIndex = index;
    currentSongMeta = {
        title: song.title,
        artist: song.artist,
        picture: song.picture
    };

    currentAudio.play().then(() => {
        isPlaying = true;
        updateUI();
        showSongInNavbar();
        if (fullPlayer && fullPlayer.style.display === 'flex') updateFullPlayer();
    }).catch(err => {
        alert('Cannot play: ' + song.title);
        isPlaying = false;
        updateUI();
    });

    currentAudio.onended = () => {
        if (isRepeat) playSong(currentSongIndex);
        else playNext();
    };
    currentAudio.ontimeupdate = updateSeekBar;
}

function togglePlayPause() {
    if (!currentAudio) return;
    if (isPlaying) { currentAudio.pause(); isPlaying = false; }
    else { currentAudio.play(); isPlaying = true; }
    updateUI();
}

function playNext() {
    if (songList.length === 0) return;
    let next = isShuffle ? Math.floor(Math.random() * songList.length) : (currentSongIndex + 1) % songList.length;
    playSong(next);
}
function playPrev() {
    if (songList.length === 0) return;
    let prev = isShuffle ? Math.floor(Math.random() * songList.length) : (currentSongIndex - 1 + songList.length) % songList.length;
    playSong(prev);
}

function showSongInNavbar() {
    if (!navThumb || !navTitle || !navArtist) return;
    navLeftInfo.style.display = 'flex';
    navThumb.src = currentSongMeta.picture;
    navTitle.textContent = currentSongMeta.title;
    navArtist.textContent = currentSongMeta.artist;
    if (navbar) navbar.classList.add('has-song');
}

function updateUI() {
    const pp = document.getElementById('playPauseBtn');
    if (pp) pp.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    if (fullPlayPause) fullPlayPause.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';

    document.querySelectorAll('.card').forEach((card, i) => {
        const btn = card.querySelector('.play-btn');
        if (btn) btn.textContent = (i === currentSongIndex && isPlaying) ? '⏸' : '▶';
        card.classList.toggle('active', i === currentSongIndex && isPlaying);
    });

    const sh = document.getElementById('shuffleBtn');
    if (sh) sh.style.color = isShuffle ? '#1db954' : '#ccc';
    const rp = document.getElementById('repeatBtn');
    if (rp) rp.style.color = isRepeat ? '#1db954' : '#ccc';
    if (fullShuffle) fullShuffle.style.color = isShuffle ? '#1db954' : '#ccc';
    if (fullRepeat) fullRepeat.style.color = isRepeat ? '#1db954' : '#ccc';
}

function updateFullPlayer() {
    if (!fullThumb || !fullTitle || !fullArtist) return;
    fullThumb.src = currentSongMeta.picture;
    fullTitle.textContent = currentSongMeta.title;
    fullArtist.textContent = currentSongMeta.artist;
}

function updateSeekBar() {
    if (!currentAudio || !seekBar || !currentTimeEl || !durationEl) return;
    const cur = currentAudio.currentTime;
    const dur = currentAudio.duration || 0;
    if (dur) {
        seekBar.max = dur;
        seekBar.value = cur;
        currentTimeEl.textContent = formatTime(cur);
        durationEl.textContent = formatTime(dur);
    }
}

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
}

function seekTo(value) {
    if (currentAudio) currentAudio.currentTime = value;
}

function openFullPlayer() {
    if (!fullPlayer) return;
    fullPlayer.style.display = 'flex';
    updateFullPlayer();
    updateSeekBar();
    updateVolumeUI();

    // Close button visible
    const closeBtn = document.querySelector('.close-full');
    if (closeBtn) closeBtn.style.display = 'block';
}

function closeFullPlayer() {
    if (!fullPlayer) return;
    fullPlayer.style.display = 'none';

    // Close button hide
    const closeBtn = document.querySelector('.close-full');
    if (closeBtn) closeBtn.style.display = 'none';
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    if (isShuffle) isRepeat = false;
    updateUI();
}
function toggleRepeat() {
    isRepeat = !isRepeat;
    if (isRepeat) isShuffle = false;
    updateUI();
}

function changeVolume(val) {
    if (currentAudio) currentAudio.volume = val / 100;
    localStorage.setItem('bajaleVolume', val);
}
function updateVolumeUI() {
    const vol = localStorage.getItem('bajaleVolume') || 70;
    if (currentAudio) currentAudio.volume = vol / 100;
    const mainVol = document.getElementById('volumeSlider');
    if (mainVol) mainVol.value = vol;
    if (fullVolumeSlider) fullVolumeSlider.value = vol;
}

// ---------- SCROLL ----------
function scrollLeft() { if (songContainer) songContainer.scrollBy({ left: -300, behavior: 'smooth' }); }
function scrollRight() { if (songContainer) songContainer.scrollBy({ left: 300, behavior: 'smooth' }); }

// ---------- EVENTS ----------
bulbContainer.addEventListener('click', changeTheme);
document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlayPause(); }
    if (e.code === 'ArrowRight') { e.preventDefault(); playNext(); }
    if (e.code === 'ArrowLeft') { e.preventDefault(); playPrev(); }
    if (e.code === 'KeyT' && !e.ctrlKey) { e.preventDefault(); changeTheme(); }
});
document.getElementById('playPauseBtn')?.addEventListener('click', togglePlayPause);
document.getElementById('nextBtn')?.addEventListener('click', playNext);
document.getElementById('prevBtn')?.addEventListener('click', playPrev);
document.getElementById('shuffleBtn')?.addEventListener('click', toggleShuffle);
document.getElementById('repeatBtn')?.addEventListener('click', toggleRepeat);
document.getElementById('volumeSlider')?.addEventListener('input', e => changeVolume(e.target.value));
if (fullVolumeSlider) fullVolumeSlider.addEventListener('input', e => changeVolume(e.target.value));

updateVolumeUI();

// ---------- INIT ----------
AOS.init();
loadBulbSVG();
scanMusicFolder();