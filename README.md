# Abhigyan Neog — Systems & Full-Stack AI Engineer Portfolio

A high-performance, single-page engineering portfolio designed around a warm Swiss Editorial aesthetic, fluid interactions, and deep-dive architectural case studies. Showcases production systems, machine learning prototypes, cybercrime intelligence platforms, and foundational AI research.

---

## 🌟 Highlights & Key Features

- **Signature Cinematic Introduction**: Precision 3D CSS viewport choreography with responsive fallback and keyboard accessibility (<kbd>ESC</kbd> shortcut).
- **Swiss Editorial Visual Identity**: Warm-light typographic hierarchy inspired by international typographic style, editorial rules, and subtle micro-interactions.
- **Dynamic Horizontal Project Gallery**: Custom touch/keyboard/arrow navigable carousel featuring 8 production-grade systems and research prototypes with instantaneous viewport adaptation.
- **Architectural Case-Study Drawer**: In-depth technical breakdown for each project including system architecture, verified implementation capabilities, tech stacks, and live links.
- **Dedicated Experience & Certifications Portal**: Showcases AI/Edge Computing internship at Samsung Innovation Campus and verified credentials (e.g. Microsoft Certified: Azure Fundamentals AZ-900).
- **Zero Build-Tool Overhead**: Pure vanilla HTML5, CSS3, and modern ES6+ JavaScript. Fast, robust, portable, and natively deployable anywhere.

---

## 🚀 Projects Showcase

1. **[VeriClass — Faculty Attendance Management System](https://github.com/AbhigyanNeog/college_faculty_attendence)**  
   *Python, Flask, SQLAlchemy, SQLite/PostgreSQL, OpenCV, Tesseract OCR*  
   Web-based faculty attendance automation combining Haversine GPS geofencing, classroom image verification, and automated timetable schedule parsing.

2. **[Campus Copilot](https://github.com/Deepak-Reddy-56/campuscopilot)**  
   *Python, Flask, Pandas, Matplotlib, Folium*  
   Algorithmic campus assistance application utilizing Levenshtein distance query matching, greedy activity selection, 0/1 knapsack budget planning, and interactive geospatial mapping.

3. **[NEXORA — Hierarchical AI Research Prototype](https://github.com/AbhigyanNeog/IBM-project)**  
   *Python, YOLOv8n, NATS JetStream, REST APIs, SSE, Schema Validation*  
   A 6-module event-driven AI platform covering real-time edge ingestion, computer vision telemetry, rule-based event fusion, and governed recommendation policies.

4. **[LLM Educational Assistant](https://github.com/AbhigyanNeog/LLM_LMS_PROJECT)**  
   *Qwen3-8B, RAG, Document Processing, QLoRA*  
   Course material ingestion, vector retrieval, and locally fine-tuned Qwen-based educational query answering with academic grounding benchmarks.

5. **[TRACE-X — Transaction Risk & Analytics for Cybercrime Enforcement](https://github.com/AbhigyanNeog/SIH-2026_Fraud-detection)**  
   *React, TypeScript, Vite, Leaflet, Recharts, Express, Prisma, PostgreSQL*  
   High-throughput cybercrime transaction intelligence platform featuring interactive money mule graph visualization, geolocated risk maps, and RBAC investigative workflows.

6. **[Log Analyzer](https://github.com/AbhigyanNeog/log_analyzer_tool)**  
   *Python, Flask, Pandas, Regular Expressions, TextBlob/NLTK, Chart.js*  
   Automated server log parser, HTTP status categorization, hourly traffic telemetry, and TextBlob sentiment analysis.

7. **[Phish Guard](https://github.com/AbhigyanNeog/PhishGuard)**  
   *Python, scikit-learn, Random Forest, URL Heuristics, Chrome Extension*  
   Machine learning anti-phishing defense analyzing 16 lexical URL features with a Random Forest model, browser extension client, and real-time scanning simulation.

8. **[E-Platform](https://github.com/AbhigyanNeog/e-platform)** • [Live Demo](https://abhigyanneog.github.io/e-platform/)  
   *Angular 17, TypeScript, RxJS, Bootstrap 5*  
   Reactive e-commerce architecture utilizing Angular standalone components, RxJS state streams, client-side cart management, and seamless checkout simulation.

---

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5 (W3C validated, ARIA-accessible, OpenGraph metadata, SEO-optimized).
- **Styling**: Vanilla CSS3 (Custom properties design system, CSS Grid, Flexbox, hardware-accelerated transforms, zero utility framework overhead).
- **Scripting**: Modern ES6+ JavaScript (Vanilla DOM orchestration, 2D Canvas particles, dynamic drawer rendering, and keyboard event bus).
- **Media**: Optimized WebP/PNG graphics, vector SVGs, and compressed MP4 demonstration reels.

---

## 💻 Local Development

Because this portfolio uses pure static web technologies, no compiler or package installation is required. You can preview it immediately using any local web server.

### Option A: Python (Recommended)
```bash
# From the repository root directory
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Option B: Node.js / npx
```bash
npx serve .
```

### Option C: VS Code Live Server
1. Open the folder in Visual Studio Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🚢 Deployment Instructions

### 1. GitHub Pages
1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** → **Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `master` (or `main`) / `/ (root)`
4. Click **Save**. GitHub Pages will deploy your site in ~1–2 minutes.

### 2. Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or connect your GitHub repository on [vercel.com](https://vercel.com).
2. For CLI deployment:
   ```bash
   vercel
   ```
3. Set **Framework Preset** to `Other` and **Output Directory** to `./`.

### 3. Netlify
1. Connect the GitHub repository at [app.netlify.com](https://app.netlify.com).
2. Configure build settings:
   - **Build command**: *(leave blank)*
   - **Publish directory**: `.` (root)
3. Or deploy via Netlify CLI:
   ```bash
   npx netlify deploy --prod --dir=.
   ```

---

## 📁 Repository Structure

```
├── .backup_recovery/      # Local emergency recovery snapshots (ignored by Git)
├── _backups/              # Local migration backups (ignored by Git)
├── assets/
│   ├── images/            # Project previews, diagrams, badges, and posters
│   ├── resume/            # Current curriculum vitae (PDF)
│   └── videos/            # Feature demonstrations & project video feeds
├── videos/                # Featured hero looping video clips
├── .gitignore             # Comprehensive VCS exclusion rules
├── certifications.html    # Dedicated certifications and professional training page
├── favicon.ico            # Standalone site icon
├── favicon.svg            # Vector site favicon
├── index.html             # Primary portfolio document & project case studies
├── README.md              # Documentation, specifications, and deployment guide
├── script.js              # Core UI orchestration, drawer data, and event handlers
└── styles.css             # Unified Swiss Editorial design system
```

---

## 📄 License & Attribution

Designed and engineered by **Abhigyan Neog**.  
Code and implementation details are provided for portfolio presentation, architectural reference, and evaluation.
