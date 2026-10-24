/**
 * =============================================================================
 * ABHIGYAN NEOG PORTFOLIO — TECHNICAL COMPETENCIES & SKILLS DATA STORE
 * =============================================================================
 *
 * HOW TO EDIT YOUR SKILLS IN THE FUTURE:
 * -----------------------------------------------------------------------------
 * - To add, remove, or modify skills, edit the items in `SKILLS_DATA`.
 * - Each category has:
 *     - `id`: Unique identifier
 *     - `number`: Category index ('01', '02', etc.)
 *     - `title`: Category heading
 *     - `skills`: Array of `{ name, context }` objects
 *
 * =============================================================================
 */

(function () {
  'use strict';

  const SKILLS_DATA = [
    {
      id: 'languages',
      number: '01',
      title: 'Core Programming Languages',
      skills: [
        { name: 'Python 3', context: 'Backend, ML, Pandas, Regex' },
        { name: 'TypeScript', context: 'React 19, Angular 17, Node' },
        { name: 'JavaScript (ES6+)', context: 'Asynchronous DOM, Node, Chrome API' },
        { name: 'C & C++', context: 'Data Structures, Systems, Memory' },
        { name: 'Java', context: 'OOP, Enterprise Architecture, Lab' },
        { name: 'SQL', context: 'PostgreSQL, SQLite, Joins, Pragma' }
      ]
    },
    {
      id: 'frontend',
      number: '02',
      title: 'Frontend & Reactive Frameworks',
      skills: [
        { name: 'React 19', context: 'Hooks, Context API, Vite, Oxlint' },
        { name: 'Angular 17', context: 'Standalone Components, Routing' },
        { name: 'RxJS', context: 'BehaviorSubject, Observables' },
        { name: 'HTML5 / Vanilla CSS3', context: 'Semantic HTML, Swiss Grid, Flexbox' },
        { name: 'Leaflet & Folium', context: 'Interactive Geospatial Visualizations' },
        { name: 'Chart.js & Recharts', context: 'Real-time Telemetry & Trend Graphs' }
      ]
    },
    {
      id: 'backend',
      number: '03',
      title: 'Backend, APIs & Databases',
      skills: [
        { name: 'Flask (Python)', context: 'Jinja2, REST Endpoints, Sessions' },
        { name: 'Node.js & Express 5', context: 'Middleware, JWT Auth, RBAC' },
        { name: 'PostgreSQL', context: 'Render Managed, Relations, Indexes' },
        { name: 'Prisma ORM', context: 'Schema Migrations, Type-safe Client' },
        { name: 'SQLite', context: 'WAL Mode, Foreign Key Pragma' },
        { name: 'Gunicorn & REST', context: 'WSGI Server, JSON API Contracts' }
      ]
    },
    {
      id: 'machine-learning',
      number: '04',
      title: 'Machine Learning & NLP',
      skills: [
        { name: 'Scikit-Learn', context: 'Random Forest, Train/Test Split' },
        { name: 'Feature Engineering', context: 'Shannon Entropy, Lexical Parsing' },
        { name: 'NLTK & TextBlob', context: 'VADER, Tokenization, Polarity' },
        { name: 'Google Gemini SDK', context: 'Prompt Tuning, Session Memory' },
        { name: 'OpenCV & Pillow', context: 'Webcam Capture, JPEG Compression' },
        { name: 'Tesseract OCR', context: 'Schedule & Image Text Extraction' }
      ]
    },
    {
      id: 'security',
      number: '05',
      title: 'Security & Digital Forensics',
      skills: [
        { name: 'Shannon Entropy', context: 'Information Theory, Obfuscation' },
        { name: 'Google Safe Browsing', context: 'Threat Intelligence API v4' },
        { name: 'Chrome Extension V3', context: 'Background Service Workers' },
        { name: 'Mule Account Graph', context: 'Dispersal & Clustering Analytics' },
        { name: 'Explainable AI (XAI)', context: 'SHAP Feature Importance' },
        { name: 'Haversine GPS Math', context: 'Spherical Trigonometry Geofence' }
      ]
    }
  ];

  if (typeof window !== 'undefined') {
    window.SKILLS_DATA = SKILLS_DATA;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SKILLS_DATA };
  }

})();
