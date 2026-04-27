Here is your project `README.md` file with detailed documentation and setup instructions.

```markdown
# 🎵 Bajale Music - Immersive Web Player & Hackathon 2026 Project

**Bajale** is a futuristic, immersive web-based music streaming platform designed for hackathon 2026. It combines a stunning 3D animated landing page with a powerful music player that scans local audio files, reads ID3 tags, and creates a rich listening experience with dynamic themes and interactive animations.

![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

### Landing Page Highlights:
- **3D Spline Robot** – Integrated interactive 3D robot model.
- **Dynamic Bulb Theme Switcher** – Click/pull the bulb or press `Space` to cycle through themes (Cyan, Purple, Green, etc.).
- **Login/Signup Modal** – Fully functional mock authentication with form validation and smooth animations.
- **Animated Sound Waves** – Visualizer that reacts with pulsing bars.
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.

### Music Player Page (`Music_page/index1.html`):
- **ID3 Tag Reader** – Extracts metadata (title, artist, album art) from MP3 files.
- **Local File Scanning** – Automatically detects `song1.mp3` to `song10.mp3` in the player directory.
- **Dynamic Gradient Thumbnails** – Auto-generates album art if no embedded image is found.
- **Full Player Controls** – Play/Pause, Next/Previous, Shuffle, Repeat, Volume, and Seek.
- **Navbar Mini Player** – Displays current song with thumbnail and control shortcuts.
- **Keyboard Shortcuts** – `Space` (Play/Pause), `→/←` (Next/Prev), `T` (Change Theme).
- **Floating Bulb Theme** – Changes the entire player’s color scheme dynamically.
- **Fullscreen Player View** – Large album art, detailed timeline, and volume control.

---

## 🛠️ Tech Stack

| Category       | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| **Frontend**   | HTML5, CSS3, JavaScript ES6                                                 |
| **Fonts**      | Google Fonts (Space Grotesk)                                                |
| **Icons**      | Font Awesome 6                                                              |
| **Animations** | AOS Library, CSS Keyframe Animations, SVG Transitions                       |
| **3D Graphics**| Spline Viewer (3D Robot)                                                    |
| **Metadata**   | jsmediatags (ID3 parsing)                                                   |
| **Themes**     | Custom CSS variables + SVG bulb color transitions                           |

---

## 📁 Project Structure

```
project-root/
│
├── index.html              # Landing page (Hackathon 2026)
├── style.css               # Styles for landing page
├── script.js               # Logic for landing page (modal, bulb, AOS)
│
├── Music_page/
│   ├── index1.html         # Music player page
│   ├── Style1.css          # Player styles
│   ├── script1.js          # Player logic (scan, play, ID3)
│   └── lightbulb.svg       # SVG bulb for theme switching
│
├── song1.mp3               # Example audio file (needs to be added)
├── song2.mp3               # Add up to song10.mp3
├── ...
│
└── README.md               # Project documentation
```

> **Note:** The `Music_page/` folder contains the actual music player. The root `index.html` is the marketing/landing page.

---

## 🚀 How to Run the Project

### 1. Clone or Download the Repository
```bash
git clone https://github.com/your-username/bajale-music.git
cd bajale-music
```

### 2. Add MP3 Files
- Place your MP3 files in the **root directory** (same level as `index.html`).
- Rename them as `song1.mp3`, `song2.mp3`, …, `song10.mp3`.
- For best results, use MP3 files with **embedded ID3 tags** (title, artist, cover art).

### 3. Open the Application
- **Landing Page**: Open `index.html` in any modern browser.
- **Music Player**: Click the **"PLAY NOW"** button on the landing page, login, and you will be redirected to the player. Or directly open `Music_page/index1.html`.

> ⚠️ Due to CORS policies, some browsers may restrict local file access. Use a local development server (e.g., VS Code Live Server, Python HTTP server) for full functionality.

**Start a local server quickly:**
```bash
# Python 3
python -m http.server 8000

# or with VS Code Live Server extension
```

Then navigate to `http://localhost:8000`

---

## 🎮 How to Use the Music Player

### On the Player Page (`index1.html`)
- **Bulb (Top Right)** – Click to cycle through 12+ color themes.
- **Sidebar** – Hover to expand menu (Home, Search, Radio, etc.).
- **Trending Songs Section** – Displays scanned songs. Click any card to play.
- **Navbar Controls** – Play/Pause, Next, Previous, Shuffle, Repeat, Volume.
- **Full Player** – Click the left song thumbnail in navbar to open full-screen player.

### Keyboard Shortcuts (Player Page)
| Key          | Action                          |
|--------------|---------------------------------|
| `Space`      | Play / Pause                    |
| `→` (Right)  | Next Song                       |
| `←` (Left)   | Previous Song                   |
| `T`          | Change Theme (Bulb effect)      |

---

## 🧪 Testing the Login/Signup (Landing Page)

- The login/signup system is a **mock demo** for the hackathon.
- Credentials are **not validated** – any input is accepted.
- On successful submission, you will be redirected to the player page.
- Social login buttons (Google, GitHub, Discord) are UI placeholders.

---

## 🎨 Customization & Theming

### Bulb Theme Colors (Defined in `script1.js`)
The player includes 12 dynamic themes:
- Warm Gold, Cyan, Purple, Green, Red, Blue, Pink, Orange, Teal, Lime, Violet, White

Each theme updates:
- Background color
- Bulb filament glow
- Shadow and ambient light
- Glass reflections

### Customizing the Theme List
Edit the `themes` array inside `script1.js` to add or modify color schemes.

---

## 🔧 Troubleshooting

| Issue                                      | Solution                                                                 |
|--------------------------------------------|--------------------------------------------------------------------------|
| Songs not appearing in player              | Make sure MP3 files are named `song1.mp3` to `song10.mp3` in the root.  |
| No album art / thumbnails                  | Some MP3 files lack ID3 pictures. The app auto-generates gradient art.  |
| jsmediatags errors in console              | Ensure MP3 files are accessible and not corrupted.                      |
| Player doesn't play on double-click        | Use a local server (Live Server / Python HTTP) to avoid CORS issues.    |
| Spline 3D robot not loading                | Check internet connection – Spline viewer loads from CDN.               |

---

## 📌 Future Enhancements (Planned)
- 🔍 **Search & Filter** – Real-time song search by title or artist.
- 📱 **Mobile App Wrapper** – Convert to PWA or React Native.
- 🎧 **Playlist Management** – Create, save, and share playlists.
- 🌐 **Backend Integration** – Node.js + MongoDB for user accounts and library sync.
- 📊 **Audio Visualizer** – Real-time frequency analyzer.
- ☁️ **Cloud Storage** – Upload and stream personal tracks.

---

## 👥 Team

- **Subrata** – Frontend Developer & UI/UX Designer  
- **Shubhranil** – Backend Integration & Animation Specialist  

Built with ❤️ for **Hackathon 2026**.

---

## 📄 License

This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute with attribution.

---

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com) for icons
- [Google Fonts](https://fonts.google.com) for Space Grotesk
- [AOS Library](https://michalsnik.github.io/aos/) for scroll animations
- [jsmediatags](https://github.com/aadsm/jsmediatags) for ID3 parsing
- [Spline](https://spline.design) for the 3D robot model

---

**Enjoy the music! 🎧**  
*“Play It • Feel It • Live It”*
```
