/**
 * =============================================================================
 * ABHIGYAN NEOG PORTFOLIO — PROJECTS & TECHNICAL CASE STUDIES DATA STORE
 * =============================================================================
 *
 * HOW TO EDIT YOUR PROJECTS & CASE STUDIES IN THE FUTURE:
 * -----------------------------------------------------------------------------
 * 1. PROJECT METADATA (PROJECTS_DATA):
 *    - To update project titles, descriptions, categories, technologies, or links
 *      (GitHub repo, live demo), edit the corresponding entry in `PROJECTS_DATA`.
 *    - Projects are listed in their exact curated display order (1 to 8):
 *        01: VeriClass (attendance)
 *        02: Campus Copilot (copilot)
 *        03: NEXORA (nexora)
 *        04: LLM Educational Assistant (llmassistant)
 *        05: TRACE-X (tracex)
 *        06: Log Analyzer (loganalyzer)
 *        07: Phish Guard (phishguard)
 *        08: E-Platform (eplatform)
 *
 * 2. WELCOME SCREEN REEL (WELCOME_REEL_PROJECTS):
 *    - Edit the brief teaser tags and images shown inside the opening laptop display.
 *
 * 3. DEEP-DIVE CASE STUDIES (CASE_STUDIES):
 *    - To modify what appears inside the full-screen slide-out drawer when visitors
 *      click "Read case study", edit the HTML content within `CASE_STUDIES[projectId]`.
 *    - You can freely edit headings, paragraphs, code blocks, and metrics tables.
 *
 * =============================================================================
 */

(function () {
  'use strict';

  // ===========================================================================
  // 1. MASTER PROJECTS DATA LIST (Curated Order: 1 through 8)
  // ===========================================================================
  const PROJECTS_DATA = [
    {
      id: 'attendance',
      domId: 'project-attendance',
      order: 1,
      number: '01',
      title: 'VeriClass — Faculty Attendance Management System',
      shortTitle: 'VeriClass',
      badge: 'LOCATION VERIFICATION & ATTENDANCE',
      badgeClass: 'badge-cobalt',
      year: '2026',
      status: '● WEB APPLICATION PROTOTYPE',
      category: 'systems',
      categoryLabel: 'Systems & ML',
      tagline: 'GPS geofencing, classroom photo capture, and timetable parsing pipeline.',
      description: 'Web-based faculty attendance management system developed to replace manual registers and centralized entrance biometrics. Combines browser-based location verification, classroom photo capture, and timetable parsing into an automated, role-aware workflow for faculty check-ins and academic administration.',
      technologies: ['Python / Flask', 'SQLAlchemy', 'OpenCV', 'Tesseract OCR'],
      repositoryUrl: 'https://github.com/AbhigyanNeog/college_faculty_attendence',
      liveUrl: null,
      previewImage: 'assets/images/sfas_placeholder.svg',
      previewAlt: 'VeriClass Architecture & Parser Output',
      isPlaceholder: true,
      caseStudyKey: 'attendance'
    },
    {
      id: 'copilot',
      domId: 'project-copilot',
      order: 2,
      number: '02',
      title: 'Campus Copilot',
      shortTitle: 'Campus Copilot',
      badge: 'ALGORITHMS & VISUALIZATION',
      badgeClass: 'badge-cobalt',
      year: '2026',
      status: '● COLLABORATIVE HACKATHON BUILD',
      category: 'systems',
      categoryLabel: 'Systems & ML',
      tagline: 'Algorithms & Data Visualization for Campus Workflows',
      description: 'Campus-focused application developed by a team of five during an intensive five-hour hackathon. The system was designed to assist students and staff with event discovery, scheduling, and geospatial campus insights using classical computer science algorithms and data visualization.',
      technologies: ['Python / Flask', 'Pandas & Matplotlib', 'Folium Mapping', 'Classical Algorithms'],
      repositoryUrl: 'https://github.com/Deepak-Reddy-56/campuscopilot',
      liveUrl: null,
      previewImage: 'assets/images/campus_copilot_events.png',
      previewAlt: 'Campus Copilot Events & Geospatial Mapping Interface',
      isPlaceholder: false,
      caseStudyKey: 'copilot'
    },
    {
      id: 'nexora',
      domId: 'project-nexora',
      order: 3,
      number: '03',
      title: 'NEXORA — Hierarchical AI Research Prototype',
      shortTitle: 'NEXORA',
      badge: 'MODULAR AI SYSTEM',
      badgeClass: 'badge-cobalt',
      year: '2026',
      status: '● RESEARCH PROTOTYPE',
      category: 'systems',
      categoryLabel: 'Systems & ML',
      tagline: 'Event-driven modular architecture across 6 decoupled subsystems with NATS JetStream.',
      description: 'Modular AI engineering system designed to process source data, generate events, combine alerts, support governed recommendations, maintain operational state, and provide integration and monitoring capabilities. Enforces strict contract boundaries across six subsystems over NATS JetStream.',
      technologies: ['YOLOv8n / OpenCV', 'NATS JetStream', 'FastAPI & SSE', 'JSON Schema (2020-12)'],
      repositoryUrl: 'https://github.com/AbhigyanNeog/IBM-project',
      liveUrl: null,
      previewImage: 'assets/images/nexora_placeholder.svg',
      previewAlt: 'NEXORA Subsystem Architecture',
      isPlaceholder: true,
      caseStudyKey: 'nexora'
    },
    {
      id: 'llmassistant',
      domId: 'project-llmassistant',
      order: 4,
      number: '04',
      title: 'LLM Educational Assistant',
      shortTitle: 'LLM Assistant',
      badge: 'EDUCATIONAL AI & RETRIEVAL',
      badgeClass: 'badge-cobalt',
      year: '2026',
      status: '● ACTIVE DEVELOPMENT',
      category: 'systems',
      categoryLabel: 'Systems & ML',
      tagline: 'Course question-answering with teacher-managed materials grounding and QLoRA/RAG exploration.',
      description: 'Educational AI assistant intended to help students ask course-related questions using teacher-managed learning materials and retrieval-augmented generation. Evaluates Qwen3-8B 4-bit NF4 quantization budgeting on 8 GB VRAM hardware alongside local QLoRA fine-tuning and planned RAG.',
      technologies: ['Qwen3-8B Base Model', 'QLoRA (PEFT)', 'BitsAndBytes 4-bit NF4', 'PyTorch'],
      repositoryUrl: 'https://github.com/AbhigyanNeog/LLM_LMS_PROJECT',
      liveUrl: null,
      previewImage: 'assets/images/llm_placeholder.svg',
      previewAlt: 'LLM Educational Assistant Architecture',
      isPlaceholder: true,
      caseStudyKey: 'llmassistant'
    },
    {
      id: 'tracex',
      domId: 'project-tracex',
      order: 5,
      number: '05',
      title: 'TRACE-X — Transaction Risk & Analytics for Cybercrime Enforcement',
      shortTitle: 'TRACE-X',
      badge: 'CYBERCRIME ANALYTICS & TRANSACTION RISK',
      badgeClass: 'badge-cobalt',
      year: '2024',
      status: '● SIH \'24 FINALIST / PROTOTYPE',
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity & Intelligence',
      tagline: 'Predict. Prioritize. Prevent. Law enforcement financial fraud and mule network investigation platform.',
      description: 'Full-stack cybercrime investigation engine built to map multi-hop transaction siphon chains, identify high-risk mule accounts, and deliver actionable intelligence to law enforcement teams. Features 11 operational views, Leaflet geospatial risk mapping, and Explainable AI scoring gauges.',
      technologies: ['React 18 & TypeScript', 'Vite & Tailwind', 'Leaflet & Recharts', 'Mule Network Analytics'],
      repositoryUrl: 'https://github.com/AbhigyanNeog/SIH-2026_Fraud-detection',
      liveUrl: null,
      previewVideo: 'videos/215500_medium.mp4',
      previewImage: 'assets/images/tracex_hero.png',
      previewAlt: 'TRACE-X Command Center Interface',
      isPlaceholder: false,
      caseStudyKey: 'tracex'
    },
    {
      id: 'loganalyzer',
      domId: 'project-loganalyzer',
      order: 6,
      number: '06',
      title: 'Log Analyzer',
      shortTitle: 'Log Analyzer',
      badge: 'LOG ANALYTICS & TEXT ANALYSIS',
      badgeClass: 'badge-cobalt',
      year: '2026',
      status: '● VERIFIED PROTOTYPE',
      category: 'systems',
      categoryLabel: 'Systems & ML',
      tagline: 'Python log parsing, pattern visualization, sentiment analysis, and interaction simulation.',
      description: 'Python-based web application that parses unstructured log data into structured Pandas DataFrames using compiled regex patterns, classifies entries, performs sentiment analysis via TextBlob and NLTK, visualizes hourly trends via Chart.js, and integrates Google Gemini SDK assistance.',
      technologies: ['Python & Flask', 'Regex Parsing Engine', 'TextBlob & NLTK', 'Chart.js Analytics'],
      repositoryUrl: 'https://github.com/AbhigyanNeog/log_analyzer_tool',
      liveUrl: null,
      previewImage: 'assets/images/log_analyzer_hourly.png',
      previewAlt: 'Log Analyzer Hourly Metrics Interface',
      isPlaceholder: false,
      caseStudyKey: 'loganalyzer'
    },
    {
      id: 'phishguard',
      domId: 'project-phishguard',
      order: 7,
      number: '07',
      title: 'Phish Guard',
      shortTitle: 'Phish Guard',
      badge: 'MACHINE LEARNING SECURITY',
      badgeClass: 'badge-cobalt',
      year: '2026',
      status: '● DUAL-PHASE PROTOTYPE',
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity & Intelligence',
      tagline: 'Lexical URL analysis, Shannon entropy calculation, and Random Forest classification with Chrome extension.',
      description: 'Phishing-detection project combining lexical URL analysis (10 extracted features including Shannon Informational Entropy), machine learning with a Random Forest model, and a Chrome extension interface. Second round explored Google Safe Browsing API and Gemini LLM semantic verification.',
      technologies: ['Python & scikit-learn', 'Random Forest Model', 'Shannon Entropy', 'Browser Extension'],
      repositoryUrl: 'https://github.com/AbhigyanNeog/PhishGuard',
      liveUrl: null,
      previewImage: 'assets/images/phishguard_placeholder.svg',
      previewAlt: 'Phish Guard Heuristic Inspection Engine',
      isPlaceholder: true,
      caseStudyKey: 'phishguard'
    },
    {
      id: 'eplatform',
      domId: 'project-eplatform',
      order: 8,
      number: '08',
      title: 'E-Platform',
      shortTitle: 'E-Platform',
      badge: 'REACTIVE E-COMMERCE & CLIENT STATE',
      badgeClass: 'badge-cobalt',
      year: '2026',
      status: '● SIMULATED CHECKOUT PROTOTYPE',
      category: 'web',
      categoryLabel: 'Web & Reactive Apps',
      tagline: 'Angular 17 standalone architecture with reactive RxJS state management and simulated checkout.',
      description: 'Angular-based e-commerce storefront featuring product catalog exploration, client-side cart state management using RxJS BehaviorSubject observables with LocalStorage persistence, promo discount calculations, and a complete simulated checkout pipeline hosted on GitHub Pages.',
      technologies: ['Angular 17 Standalone', 'TypeScript', 'RxJS BehaviorSubject', 'Bootstrap 5'],
      repositoryUrl: 'https://github.com/AbhigyanNeog/e-platform',
      liveUrl: 'https://abhigyanneog.github.io/e-platform/',
      previewImage: 'assets/images/gadgetpro_preview.png',
      previewAlt: 'E-Platform Storefront Interface',
      isPlaceholder: false,
      caseStudyKey: 'eplatform'
    }
  ];

  // ===========================================================================
  // 2. WELCOME SCREEN REEL CONFIGURATION (Opening Laptop Display)
  // ===========================================================================
  const WELCOME_REEL_PROJECTS = [
    {
      id: 'project-attendance',
      caseStudy: 'attendance',
      order: 1,
      title: 'VeriClass — Faculty Attendance Management System',
      tag: 'Systems & Verification',
      desc: 'A web-based faculty attendance management system combining location verification, classroom photo capture, and timetable management.',
      image: 'assets/images/sfas_placeholder.svg',
      alt: 'VeriClass Architecture (Screenshot Pending)',
      isPlaceholder: true
    },
    {
      id: 'project-copilot',
      caseStudy: 'copilot',
      order: 2,
      title: 'Campus Copilot',
      tag: 'Algorithms & Visualization',
      desc: 'A campus-focused application developed during a five-hour hackathon, using algorithms and data visualization to support campus-related workflows.',
      image: 'assets/images/campus_copilot_events.png',
      alt: 'Campus Copilot Events Interface',
      isPlaceholder: false
    },
    {
      id: 'project-nexora',
      caseStudy: 'nexora',
      order: 3,
      title: 'NEXORA — Hierarchical AI Research Prototype',
      tag: 'Modular AI Engineering',
      desc: 'A modular AI engineering system designed to process source data, generate events, combine alerts, support governed recommendations, maintain operational state, and provide integration and monitoring capabilities.',
      image: 'assets/images/nexora_placeholder.svg',
      alt: 'NEXORA Architecture (Screenshot Pending)',
      isPlaceholder: true
    },
    {
      id: 'project-llmassistant',
      caseStudy: 'llmassistant',
      order: 4,
      title: 'LLM Educational Assistant',
      tag: 'Educational AI & RAG',
      desc: 'An educational AI assistant intended to help students ask course-related questions using teacher-managed learning materials and retrieval-augmented generation.',
      image: 'assets/images/llm_placeholder.svg',
      alt: 'LLM Educational Assistant Architecture (Screenshot Pending)',
      isPlaceholder: true
    },
    {
      id: 'project-tracex',
      caseStudy: 'tracex',
      order: 5,
      title: 'TRACE-X — Transaction Risk & Analytics for Cybercrime Enforcement',
      tag: 'Cybercrime Analytics',
      desc: 'A cybercrime analytics platform designed to support transaction-risk analysis, investigative prioritization, and visual exploration of suspicious activity.',
      image: 'assets/images/tracex_hero.png',
      alt: 'TRACE-X Command Center Interface',
      isPlaceholder: false
    },
    {
      id: 'project-loganalyzer',
      caseStudy: 'loganalyzer',
      order: 6,
      title: 'Log Analyzer',
      tag: 'Log Analytics & NLP',
      desc: 'A Python-based web application that parses log data, categorizes entries, visualizes patterns, and provides text-analysis capabilities.',
      image: 'assets/images/log_analyzer_hourly.png',
      alt: 'Log Analyzer Hourly Metrics Interface',
      isPlaceholder: false
    },
    {
      id: 'project-phishguard',
      caseStudy: 'phishguard',
      order: 7,
      title: 'Phish Guard',
      tag: 'Machine Learning Security',
      desc: 'A phishing-detection project combining lexical URL analysis, machine learning, and browser-extension functionality, with later development exploring external safety checks and LLM-assisted analysis.',
      image: 'assets/images/phishguard_placeholder.svg',
      alt: 'Phish Guard Heuristic Inspection Engine (Screenshot Pending)',
      isPlaceholder: true
    },
    {
      id: 'project-eplatform',
      caseStudy: 'eplatform',
      order: 8,
      title: 'E-Platform',
      tag: 'Reactive E-Commerce',
      desc: 'An Angular-based e-commerce interface featuring product browsing, shopping-cart state management, and a simulated checkout workflow.',
      image: 'assets/images/gadgetpro_preview.png',
      alt: 'GadgetPro E-Platform Interface',
      isPlaceholder: false
    }
  ];

  // ===========================================================================
  // 3. VERIFIED TECHNICAL CASE STUDIES DICTIONARY
  // Rendered inside the slide-out drawer on demand
  // ===========================================================================
  const CASE_STUDIES = {
    attendance: {
      number: 'CASE STUDY 01 / 08',
      badge: 'INSTITUTIONAL SYSTEMS',
      title: 'VeriClass — Faculty Attendance Management System',
      subtitle: 'Location Verification, Classroom Photo Capture & Timetable Management',
      content: `
        <h4 class="drawer-section-heading">1. System Overview & Problem Formulation</h4>
        <p class="drawer-p">
          VeriClass is a web-based faculty attendance management system developed to replace manual registers and centralized entrance biometrics. Conventional entry logs only confirm physical arrival at a campus gate rather than presence inside an assigned classroom during scheduled lecture periods.
        </p>
        <p class="drawer-p">
          <strong>The Objective:</strong> Combine browser-based location verification, classroom photo capture, and timetable parsing into an automated, role-aware workflow for faculty check-ins and academic administration.
        </p>

        <h4 class="drawer-section-heading">2. Core Implementation Features</h4>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Role-Based Authentication:</strong> Granular authentication isolating administrative timetable management and audit logs from faculty attendance submission interfaces.</li>
          <li><strong>GPS-Based Location Verification & Geofencing:</strong> Calculates great-circle distance between faculty device coordinates and campus boundary thresholds, flagging out-of-bounds submissions.</li>
          <li><strong>Classroom Photo Capture:</strong> Integrated browser photo capture with OpenCV image array conversion and compression for visual attendance confirmation.</li>
          <li><strong>Timetable Management & Parsing:</strong> Parsing pipeline handling structured schedule files and scanned documents via Tesseract OCR fallback.</li>
          <li><strong>SQLite / PostgreSQL Database Configuration:</strong> SQLAlchemy ORM configuration supporting local SQLite development and scalable PostgreSQL production environments.</li>
        </ul>

        <h4 class="drawer-section-heading">3. GPS Geofencing Implementation</h4>
        <p class="drawer-p">
          To verify presence without proprietary hardware beacons, VeriClass calculates the great-circle distance between device GPS coordinates and the institution's geographical center using the Haversine formula:
        </p>
        <div class="drawer-code-block">
def calculate_distance(lat1, lon1, lat2, lon2):
    R = 6371000.0  # Earth's radius in meters
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lon2 - lon1)
    
    a = (math.sin(delta_phi / 2.0) ** 2) + \\
        math.cos(phi1) * math.cos(phi2) * (math.sin(delta_lambda / 2.0) ** 2)
    c = 2.0 * math.atan2(math.sqrt(a), math.sqrt(1.0 - a))
    return R * c
        </div>
        <p class="drawer-p">
          If <code>distance &lt;= CampusSetting.radius_meters</code>, the location check succeeds and enables the classroom photo submission workflow.
        </p>

        <h4 class="drawer-section-heading">4. Technology Stack & Architecture</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology Stack</th></tr>
          </thead>
          <tbody>
            <tr><td>Backend Framework</td><td>Python, Flask</td></tr>
            <tr><td>ORM & Database</td><td>SQLAlchemy (SQLite / PostgreSQL configuration)</td></tr>
            <tr><td>Computer Vision</td><td>OpenCV, Pillow JPEG compression</td></tr>
            <tr><td>Document Ingestion</td><td>Tesseract OCR, pdfplumber, openpyxl</td></tr>
            <tr><td>Repository</td><td><a href="https://github.com/AbhigyanNeog/college_faculty_attendence" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">AbhigyanNeog/college_faculty_attendence ↗</a></td></tr>
          </tbody>
        </table>
      `
    },

    copilot: {
      number: 'CASE STUDY 02 / 08',
      badge: 'ALGORITHMS & VISUALIZATION',
      title: 'Campus Copilot',
      subtitle: 'Algorithms & Data Visualization for Campus Workflows',
      content: `
        <h4 class="drawer-section-heading">1. Project Context & Team Scope</h4>
        <p class="drawer-p">
          Campus Copilot is a campus-focused application developed by a team of five during an intensive five-hour hackathon. The system was designed to assist students and staff with event discovery, scheduling, and geospatial campus insights using classical computer science algorithms and data visualization.
        </p>
        <p class="drawer-p">
          <strong>Collaborative Scope:</strong> Built collaboratively within a strict five-hour timeframe, focusing on explainable algorithmic solutions and responsive visual workflows rather than uninterpretable black-box models.
        </p>

        <h4 class="drawer-section-heading">2. Technical Highlights & Algorithm Mapping</h4>
        <p class="drawer-p">
          The application leverages four classical algorithmic paradigms directly integrated into user-facing features:
        </p>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Algorithm</th><th>Paradigm</th><th>Campus Workflow Feature</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Levenshtein Distance</strong></td>
              <td>Dynamic Programming</td>
              <td>Typo-tolerant fuzzy intent matching for campus user queries across services and categories.</td>
            </tr>
            <tr>
              <td><strong>Activity-Selection Algorithm</strong></td>
              <td>Greedy Algorithm</td>
              <td>Computes optimal, conflict-free student itineraries across overlapping campus events and sessions.</td>
            </tr>
            <tr>
              <td><strong>0/1 Knapsack Algorithm</strong></td>
              <td>Dynamic Programming</td>
              <td>Optimizes student organization event budget allocation under fixed financial and resource constraints.</td>
            </tr>
            <tr>
              <td><strong>Binary Search</strong></td>
              <td>Divide &amp; Conquer</td>
              <td>Accelerates target date and deadline retrieval across pre-sorted academic calendar datasets.</td>
            </tr>
          </tbody>
        </table>

        <h4 class="drawer-section-heading">3. Data Visualization & Mapping</h4>
        <p class="drawer-p">
          To provide clear operational insights for campus life, the application incorporates data visualization and mapping layers:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Geospatial Mapping:</strong> Interactive campus maps generated using Folium to visualize event venues, study spaces, and key navigational points of interest.</li>
          <li><strong>Data Visualization:</strong> Statistical plots generated with Pandas and Matplotlib illustrating event attendance density, expense allocations, and fee distributions.</li>
        </ul>

        <h4 class="drawer-section-heading">4. Technology Stack & Repository</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology Stack</th></tr>
          </thead>
          <tbody>
            <tr><td>Backend Framework</td><td>Python, Flask</td></tr>
            <tr><td>Data Analytics & Visuals</td><td>Pandas, Matplotlib</td></tr>
            <tr><td>Geospatial Mapping</td><td>Folium</td></tr>
            <tr><td>Core Logic</td><td>Classical Algorithms (Levenshtein, Greedy, Knapsack, Binary Search)</td></tr>
            <tr><td>Repository</td><td><a href="https://github.com/Deepak-Reddy-56/campuscopilot" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">Deepak-Reddy-56/campuscopilot ↗</a></td></tr>
          </tbody>
        </table>
      `
    },

    nexora: {
      number: 'CASE STUDY 03 / 08',
      badge: 'MODULAR AI SYSTEM',
      title: 'NEXORA — Hierarchical AI Research Prototype',
      subtitle: 'Event-Driven Modular Architecture Across 6 Subsystems & Integration Assurance',
      content: `
        <h4 class="drawer-section-heading">1. System Overview & Architectural Purpose</h4>
        <p class="drawer-p">
          NEXORA is a modular AI engineering system designed to process source data, generate events, combine alerts, support governed recommendations, maintain operational state, and provide integration and monitoring capabilities.
        </p>
        <p class="drawer-p">
          <strong>Architectural Philosophy:</strong> Structured as an ongoing research prototype, the system enforces strict contract boundaries across six decoupled subsystems. Inter-module communication relies on an event-driven NATS JetStream message bus with standard envelope schemas (Draft 2020-12) to ensure auditable provenance and operational separation of concerns.
        </p>

        <h4 class="drawer-section-heading">2. Six-Module Subsystem Architecture</h4>
        <p class="drawer-p">
          The pipeline divides responsibilities across six specialized functional modules:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Module 1 — Source Ingestion & Health Reporting:</strong> Ingests raw optical camera feeds and sensor sources, computes SHA-256 binary frame integrity checksums, tracks source availability, and provides deterministic video replay capabilities.</li>
          <li><strong>Module 2 — Visual Analysis & Event Generation:</strong> Edge vision pipeline executing YOLOv8n object detection, multi-object tracking (IOU tracker), privacy-preserving human region blurring, and local UnitEvent generation.</li>
          <li><strong>Module 3 — Event Fusion & Higher-Level Alert Generation:</strong> Correlates multi-camera observations through spatiotemporal clustering, provenance-weighted evidence fusion, and decoupled operational risk scoring to emit DomainAlerts.</li>
          <li><strong>Module 4 — Recommendations, Authorization & Audit:</strong> Rule evaluation engine generating operational recommendations, enforcing authorization constraints, and maintaining immutable audit ledgers.</li>
          <li><strong>Module 5 — Operational State & Approval Decisions:</strong> Manages human-in-the-loop operator approval workflows, tracks decision state transitions, and maintains a unified operational picture.</li>
          <li><strong>Module 6 — Integration, Gateway, Monitoring & Assurance:</strong> The communication and assurance backbone featuring a NATS JetStream message bus, schema validation engine, health aggregation daemon, FastAPI/SSE gateway, deterministic JSONL capture/replay, and an operational monitoring dashboard.</li>
        </ul>

        <h4 class="drawer-section-heading">3. Implementation Status Audit</h4>
        <p class="drawer-p">
          To maintain engineering transparency, component readiness is classified across three distinct operational states:
        </p>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Status Category</th><th>Subsystems & Features</th><th>Verification Level</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Implemented & Tested</strong></td>
              <td>Module 6 message bus, Draft 2020-12 schema validation, and FastAPI/SSE streaming gateway; Module 1 ingestion API and video replay; Module 2 YOLOv8n detection and tracking; Module 3 domain fusion service; Module 4 rule evaluation and audit logging; Module 5 state contracts.</td>
              <td>Verified by 424 automated regression tests in Module 6, plus dedicated unit test suites across Modules 1–4.</td>
            </tr>
            <tr>
              <td><strong>Partially Implemented</strong></td>
              <td>Cross-module integration adapter shims connecting file/HTTP outputs to NATS JetStream; periodic continuous ServiceHealth heartbeats (currently bridged via adapter layer).</td>
              <td>Validated via standalone integration runner scripts and single-node JetStream test benches.</td>
            </tr>
            <tr>
              <td><strong>Planned / Disconnected</strong></td>
              <td>Unified autonomous end-to-end integration without adapter shims; full multi-node physical edge cluster deployment on target hardware.</td>
              <td>Evaluated in air-gapped lab and synthetic mock environments; production cluster deployment remains future work.</td>
            </tr>
          </tbody>
        </table>

        <h4 class="drawer-section-heading">4. Technologies & Repository Verification</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology Stack</th></tr>
          </thead>
          <tbody>
            <tr><td>Core Language & APIs</td><td>Python, REST APIs (FastAPI / Starlette)</td></tr>
            <tr><td>Edge Vision</td><td>YOLOv8n, OpenCV, NumPy</td></tr>
            <tr><td>Event Bus & Streaming</td><td>NATS JetStream (HEV_EVENTS stream), Server-Sent Events (SSE)</td></tr>
            <tr><td>Contract Engine</td><td>JSON Schema (Draft 2020-12), Pydantic v2</td></tr>
            <tr><td>Repository</td><td><a href="https://github.com/AbhigyanNeog/IBM-project" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">AbhigyanNeog/IBM-project ↗</a></td></tr>
          </tbody>
        </table>
      `
    },

    llmassistant: {
      number: 'CASE STUDY 04 / 08',
      badge: 'EDUCATIONAL AI & RETRIEVAL',
      title: 'LLM Educational Assistant',
      subtitle: 'Course Question-Answering, Teacher Materials Grounding & QLoRA/RAG Exploration',
      content: `
        <h4 class="drawer-section-heading">1. Project Context & Intended Scope</h4>
        <p class="drawer-p">
          LLM Educational Assistant is an educational AI assistant intended to help students ask course-related questions using teacher-managed learning materials and retrieval-augmented generation.
        </p>
        <p class="drawer-p">
          <strong>Development Status:</strong> The project is currently under active development. Current work focuses on document processing of syllabus units, local model quantization budgeting on consumer GPUs, and exploring the trade-offs between parameter-efficient fine-tuning (QLoRA) and retrieval-augmented generation (RAG) for academic materials.
        </p>

        <h4 class="drawer-section-heading">2. Technical Approaches Explored</h4>
        <p class="drawer-p">
          The engineering investigation is organized around four core technical pillars:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Document Processing & Dataset Preparation:</strong> Extracted, cleaned, and structured raw course PDF content (Java Object-Oriented Programming, CSE335P) across 5 syllabus units into cleaned markdown and ChatML-formatted instruction pairs (<code>train.jsonl</code>, <code>val.jsonl</code>).</li>
          <li><strong>Base Model Quantization (Qwen3-8B):</strong> Configured 4-bit NormalFloat4 (NF4) double-quantization loading via BitsAndBytes to operate within an 8 GB VRAM hardware budget on an NVIDIA RTX 4060.</li>
          <li><strong>QLoRA Fine-Tuning Exploration:</strong> Formulated a local adaptation pipeline (<code>train_qlora.py</code>) using PEFT LoRA (r=8, alpha=16) on attention projection layers with PagedAdamW8bit and gradient checkpointing, producing experimental adapter checkpoints.</li>
          <li><strong>Planned Retrieval-Augmented Generation (RAG):</strong> Architecting a retrieval pipeline intended to ground responses dynamically on teacher-uploaded syllabi, lecture slides, assignments, and question papers to mitigate hallucinations and maintain domain precision.</li>
        </ul>

        <h4 class="drawer-section-heading">3. Implementation Status Audit</h4>
        <p class="drawer-p">
          To maintain engineering rigor, current progress is distinguished across verified implementation stages and planned capabilities:
        </p>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Status Category</th><th>Capabilities & Components</th><th>Verification Details</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Verified Implementation</strong></td>
              <td>Document processing and syllabus cleaning (Units 1–5); ChatML instruction tuning dataset preparation; Qwen3-8B 4-bit NF4 quantized loading test harness with VRAM allocation telemetry; local QLoRA training script with 8 GB VRAM stability constraints; offline evaluation benchmark script (<code>evaluate_accuracy.py</code>) assessing academic accuracy and concept coverage.</td>
              <td>Implemented in local repository (<code>LLM_LMS_PROJECT</code>); adapter trained and evaluated locally against 15 academic benchmark questions.</td>
            </tr>
            <tr>
              <td><strong>In Progress / Planned</strong></td>
              <td>Teacher-managed upload interface for course plans, lecture slides, notes, assignments, and question papers; active vector store document chunking and real-time similarity retrieval; online evaluation of answer correctness, groundedness, hallucination mitigation, response latency, and live VRAM usage.</td>
              <td>Conceptual and planned for upcoming integration phases.</td>
            </tr>
            <tr>
              <td><strong>Not Deployed</strong></td>
              <td>Production server deployment and live student-facing learning management system (LMS) web portal.</td>
              <td>Offline research and development build; no public production deployment.</td>
            </tr>
          </tbody>
        </table>

        <h4 class="drawer-section-heading">4. Technology Stack & Repository</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology Stack</th></tr>
          </thead>
          <tbody>
            <tr><td>Base Language Model</td><td>Qwen3-8B</td></tr>
            <tr><td>Fine-Tuning & Quantization</td><td>QLoRA (PEFT), BitsAndBytes 4-bit NF4, PyTorch</td></tr>
            <tr><td>Architecture Approach</td><td>Document Processing, RAG (Planned), QLoRA Adaptation</td></tr>
            <tr><td>Hardware Target</td><td>NVIDIA RTX 4060 (8 GB VRAM optimization)</td></tr>
            <tr><td>Repository</td><td><a href="https://github.com/AbhigyanNeog/LLM_LMS_PROJECT" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">AbhigyanNeog/LLM_LMS_PROJECT ↗</a></td></tr>
          </tbody>
        </table>
      `
    },

    tracex: {
      number: 'CASE STUDY 05 / 08',
      badge: 'CYBERCRIME ANALYTICS & TRANSACTION RISK',
      title: 'TRACE-X — Transaction Risk & Analytics for Cybercrime Enforcement',
      subtitle: 'Predict. Prioritize. Prevent.',
      content: `
        <h4 class="drawer-section-heading">1. Operational Problem & Platform Scope</h4>
        <p class="drawer-p">
          Financial cybercrime schemes funnel illicit funds across multi-layered mule account networks, attempting rapid cash extractions before victims can register formal complaints or banking compliance teams can intervene.
        </p>
        <p class="drawer-p">
          <strong>Platform Scope:</strong> TRACE-X is a cybercrime analytics platform designed to support transaction-risk analysis, investigative prioritization, and visual exploration of suspicious activity.
        </p>
        <p class="drawer-p">
          <strong>Demonstration Status:</strong> The platform is an engineering prototype evaluated on synthetic demonstration datasets to model end-to-end investigative workflows without exposing real-world financial records or classified operational data.
        </p>

        <h4 class="drawer-section-heading">2. Frontend Analytics & Map Visualizations</h4>
        <p class="drawer-p">
          The user interface is engineered with React, TypeScript, and Vite, organizing operational data across 11 synchronized views managed via a centralized React Context (<code>AppContext.tsx</code>):
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Geospatial Map Exploration:</strong> Interactive mapping powered by Leaflet (<code>InteractiveMap.tsx</code>) featuring custom cluster markers, terminal risk heatmaps, and spatial hotspot filtering.</li>
          <li><strong>Telemetry & Analytics:</strong> Temporal transaction volume trends and investigative charts rendered with Recharts across <code>HistoricalAnalyticsView.tsx</code> and <code>PredictionAnalysisView.tsx</code>.</li>
          <li><strong>Investigative Platform Views:</strong> Operational modules for Command Center tracking, Alerts & Intervention, High-Risk Locations, Investigation Cases, Audit Trails, and System Health.</li>
        </ul>

        <h4 class="drawer-section-heading">3. Transaction-Risk Analysis & Investigative Workflows</h4>
        <p class="drawer-p">
          The platform integrates decision-support tooling to help analysts triage and prioritize suspicious incidents:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Mule Network Tracking:</strong> Multi-hop transaction visualization mapping transfer layers from initial victim complaints through intermediate mule accounts to suspected withdrawal clusters.</li>
          <li><strong>Explainable AI (XAI) Risk Factors:</strong> Evidentiary factor decomposition in <code>XAIExplanation.tsx</code> and <code>RiskScoreGauge.tsx</code> detailing transaction velocity spikes, geospatial proximity, and account dormancy indicators.</li>
          <li><strong>Investigative Interventions:</strong> Modal workflows for generating operational alerts, assigning field teams, recording resolution notes, and exporting Section 65B-compliant audit trail records.</li>
        </ul>

        <h4 class="drawer-section-heading">4. Architecture & Implementation Status Audit</h4>
        <p class="drawer-p">
          To maintain technical rigor, current implementation progress is distinguished across frontend, backend, and integration subsystems:
        </p>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Subsystem</th><th>Technologies</th><th>Implementation & Verification Status</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Frontend Dashboard</strong></td>
              <td>React, TypeScript, Vite, Leaflet, Recharts</td>
              <td><strong>Implemented:</strong> 11 operational views, interactive Leaflet maps, XAI gauges, and modals operating locally via modular in-memory mock services (<code>src/services/</code>, <code>src/data/</code>).</td>
            </tr>
            <tr>
              <td><strong>Backend APIs & DB</strong></td>
              <td>Express, Prisma, PostgreSQL</td>
              <td><strong>Architected / Decoupled:</strong> Backend architecture designed with role-based access control (RBAC), rate limiting, and relational schema modeling; decoupled from the active frontend prototype repository.</td>
            </tr>
            <tr>
              <td><strong>Live Integration</strong></td>
              <td>HTTP REST / WebSockets</td>
              <td><strong>In Progress:</strong> Frontend currently operates on client-side mock services; direct HTTP/WebSocket integration with live backend endpoints is pending.</td>
            </tr>
            <tr>
              <td><strong>Data & Deployment</strong></td>
              <td>Synthetic Datasets</td>
              <td><strong>Prototype Only:</strong> Evaluated using synthetic demonstration data; not deployed in production law enforcement environments.</td>
            </tr>
          </tbody>
        </table>

        <h4 class="drawer-section-heading">5. Technology Stack & Repository</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology Stack</th></tr>
          </thead>
          <tbody>
            <tr><td>Frontend Framework</td><td>React, TypeScript, Vite</td></tr>
            <tr><td>Mapping & Data Visualization</td><td>Leaflet, Recharts</td></tr>
            <tr><td>Backend API & Database (Decoupled)</td><td>Express, Prisma, PostgreSQL</td></tr>
            <tr><td>Access Control & Security Model</td><td>Role-Based Access Control (RBAC), Rate Limiting</td></tr>
            <tr><td>Repository</td><td><a href="https://github.com/AbhigyanNeog/SIH-2026_Fraud-detection" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">AbhigyanNeog/SIH-2026_Fraud-detection ↗</a></td></tr>
          </tbody>
        </table>
      `
    },

    loganalyzer: {
      number: 'CASE STUDY 06 / 08',
      badge: 'LOG ANALYTICS & TEXT ANALYSIS',
      title: 'Log Analyzer',
      subtitle: 'Python Log Parsing, Pattern Visualization & Text-Analysis Web Application',
      content: `
        <h4 class="drawer-section-heading">1. Project Overview & Identity Clarification</h4>
        <p class="drawer-p">
          Log Analyzer is a Python-based web application that parses log data, categorizes entries, visualizes patterns, and provides text-analysis capabilities.
        </p>
        <p class="drawer-p">
          <strong>Identity & Scope Clarification:</strong> Formally verified in repository <code>log_analyzer_tool</code>. This project focuses on log parsing, text analysis, and interaction simulation; it is not SentinelLog, and makes no claim of enterprise SIEM functionality or production security monitoring.
        </p>

        <h4 class="drawer-section-heading">2. Log Parsing & Regular Expressions Pipeline</h4>
        <p class="drawer-p">
          Unstructured log data is transformed into typed Pandas DataFrames via <code>src/parser.py</code> using compiled regular expressions with named capture groups:
        </p>
        <div class="drawer-code-block">
log_pattern = re.compile(
    r'^(?P&lt;timestamp&gt;\\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}:\\d{2})\\s*\\|\\s*'
    r'(?P&lt;username&gt;[^|]+)\\s*\\|\\s*'
    r'"(?P&lt;prompt&gt;[^"]+)"\\s*\\|\\s*'
    r'(?P&lt;category&gt;.+)$'
)
        </div>
        <p class="drawer-p">
          This extracts timestamps (converted to Pandas DatetimeIndex), usernames, prompt strings, and topical categories, enabling structured querying and pattern identification.
        </p>

        <h4 class="drawer-section-heading">3. Analytical Visualizations & Sentiment Analysis</h4>
        <p class="drawer-p">
          The processing pipeline enriches each record using NLTK and TextBlob (<code>src/nlp.py</code>) and generates visual summaries:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Polarity & Subjectivity Scoring:</strong> Evaluates prompt text sentiment, classifying entries into Positive (> 0.1), Negative (< -0.1), or Neutral.</li>
          <li><strong>Noun-Phrase Extraction:</strong> Identifies recurring key terminology across logged user entries.</li>
          <li><strong>Spam Detection Heuristic:</strong> Flags burst submissions (≥ 2 identical prompts) to highlight repetitive inputs.</li>
          <li><strong>Analytical Visual Summaries:</strong> Chart.js dashboards visualize hourly prompt volume, sentiment distributions, and category breakdowns.</li>
        </ul>

        <h4 class="drawer-section-heading">4. Session Simulation & Gemini-Based Assistance</h4>
        <p class="drawer-p">
          The Flask backend integrates the Google Gemini SDK (<code>google.generativeai</code>) for interactive testing:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Session-Activity Simulation:</strong> Retains multi-turn conversation memory in a key-value store (<code>chat_sessions[username_apikey]</code>) to simulate user dialogue streams.</li>
          <li><strong>LLM-Assisted Categorization:</strong> Leverages Gemini to classify incoming prompts into predefined topic domains when heuristic rules are inconclusive.</li>
        </ul>

        <h4 class="drawer-section-heading">5. Technology Stack & Repository</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology Stack</th></tr>
          </thead>
          <tbody>
            <tr><td>Backend & Parsing</td><td>Python, Flask, Pandas, Regular Expressions</td></tr>
            <tr><td>Text & Sentiment Analysis</td><td>TextBlob, NLTK</td></tr>
            <tr><td>Visualizations</td><td>Chart.js</td></tr>
            <tr><td>AI Assistance</td><td>Google Gemini SDK</td></tr>
            <tr><td>Repository</td><td><a href="https://github.com/AbhigyanNeog/log_analyzer_tool" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">AbhigyanNeog/log_analyzer_tool ↗</a></td></tr>
          </tbody>
        </table>
      `
    },

    phishguard: {
      number: 'CASE STUDY 07 / 08',
      badge: 'MACHINE LEARNING SECURITY',
      title: 'Phish Guard',
      subtitle: 'Lexical URL Analysis, Random Forest Classification & Multi-Stage Exploration',
      content: `
        <h4 class="drawer-section-heading">1. Threat Problem & Development Phases</h4>
        <p class="drawer-p">
          Phishing websites frequently disguise credential-theft pages using newly registered domains, domain-generation algorithms (DGAs), or raw IPv4 hostnames designed to evade static blacklists.
        </p>
        <p class="drawer-p">
          <strong>Project Scope:</strong> Phish Guard is a phishing-detection project combining lexical URL analysis, machine learning, and browser-extension functionality, with later development exploring external safety checks and LLM-assisted analysis.
        </p>
        <p class="drawer-p">
          <strong>Development Phase Distinction:</strong> The project developed across two distinct rounds: an original client-side Machine Learning prototype with a browser extension, and later exploratory development testing external threat intelligence and LLM analysis. These iterations reflect progressive research rather than a single production deployment.
        </p>

        <h4 class="drawer-section-heading">2. Original ML Prototype: Lexical Analysis & Shannon Entropy</h4>
        <p class="drawer-p">
          In the initial prototype, <code>train_model.py</code> extracts 10 structural and lexical URL features, including <strong>Shannon Informational Entropy</strong> to measure character randomness:
        </p>
        <div class="drawer-code-block">
def shannon_entropy(s: str) -> float:
    if not s:
        return 0.0
    probs = [float(s.count(c)) / len(s) for c in set(s)]
    return -sum(p * math.log(p, 2) for p in probs)
        </div>
        <p class="drawer-p">
          <strong>Extracted Features & Classification:</strong>
        </p>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Feature</th><th>Heuristic / Rationale</th></tr>
          </thead>
          <tbody>
            <tr><td><code>entropy_url</code></td><td>Measures character randomness to identify DGA domains and obfuscated tokens</td></tr>
            <tr><td><code>has_ip_host</code></td><td>Detects raw IPv4 hostnames used to bypass domain reputation checks</td></tr>
            <tr><td><code>num_at</code></td><td>Detects '@' symbols used in URL credential confusion tricks</td></tr>
            <tr><td><code>num_hyphens</code></td><td>Flags high hyphen frequency common in brand-impersonation URLs</td></tr>
            <tr><td><code>num_dots</code></td><td>Identifies excessive multi-level subdomain chaining</td></tr>
            <tr><td><code>url_len / host_len / path_len</code></td><td>Captures abnormally long URL structures typical of phishing landing pages</td></tr>
            <tr><td><code>uses_https</code></td><td>Verifies encrypted transport protocol</td></tr>
            <tr><td><code>num_digits</code></td><td>Counts numerical digit density in hostname and path segments</td></tr>
          </tbody>
        </table>
        <p class="drawer-p">
          Features are trained on a Scikit-Learn <strong>Random Forest</strong> classifier and serialized with Joblib for local model inference.
        </p>

        <h4 class="drawer-section-heading">3. Browser-Extension Functionality</h4>
        <p class="drawer-p">
          The prototype includes a browser-extension interface (located in <code>1st round/extension/</code>) that inspects active tab URLs and queries the local prediction service to display risk scores and security badges directly to the user.
        </p>

        <h4 class="drawer-section-heading">4. Later Development: External Safety Checks & LLM Analysis</h4>
        <p class="drawer-p">
          A secondary exploratory Node.js service (located in <code>2nd round/server.js</code>) investigates multi-tier external safety checks:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Google Safe Browsing API v4:</strong> Querying global malware and social-engineering threat registries.</li>
          <li><strong>Gemini API Integration:</strong> Exploring LLM-assisted semantic analysis of page content and linguistic deception cues.</li>
        </ul>

        <h4 class="drawer-section-heading">5. Technology Stack & Repository</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology Stack</th></tr>
          </thead>
          <tbody>
            <tr><td>ML Prototype</td><td>Python, scikit-learn, Random Forest, Shannon Entropy</td></tr>
            <tr><td>Client Interface</td><td>Browser Extension</td></tr>
            <tr><td>Later Exploratory Development</td><td>Node.js, Google Safe Browsing API, Gemini API</td></tr>
            <tr><td>Development Status</td><td>Dual-phase research build (ML prototype + cloud exploration)</td></tr>
            <tr><td>Repository</td><td><a href="https://github.com/AbhigyanNeog/PhishGuard" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">AbhigyanNeog/PhishGuard ↗</a></td></tr>
          </tbody>
        </table>
      `
    },

    eplatform: {
      number: 'CASE STUDY 08 / 08',
      badge: 'REACTIVE E-COMMERCE & CLIENT STATE',
      title: 'E-Platform',
      subtitle: 'Angular 17 Standalone Architecture with RxJS Reactive Streams',
      content: `
        <h4 class="drawer-section-heading">1. Project Scope & Architecture Goals</h4>
        <p class="drawer-p">
          E-Platform is an Angular-based e-commerce interface featuring product browsing, shopping-cart state management, and a simulated checkout workflow.
        </p>
        <p class="drawer-p">
          <strong>Simulated Checkout Scope:</strong> The platform is hosted as a client-side web application on GitHub Pages. The checkout pipeline is fully simulated on the client without external payment-gateway integration or live payment processing.
        </p>

        <h4 class="drawer-section-heading">2. Standalone Components & Lazy Loading</h4>
        <p class="drawer-p">
          Built using modern Angular 17 standalone components and functional routing in <code>app.routes.ts</code>, removing NgModule boilerplate:
        </p>
        <div class="drawer-code-block">
export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/landing').then(m => m.LandingComponent) },
  { path: 'product/:id', loadComponent: () => import('./components/product').then(m => m.ProductComponent) },
  { path: 'checkout', loadComponent: () => import('./components/checkout').then(m => m.CheckoutComponent) },
  { path: 'order-success', loadComponent: () => import('./components/order-success').then(m => m.OrderSuccessComponent) },
  { path: '**', redirectTo: '' }
];
        </div>
        <p class="drawer-p">
          This structure provides route-level code splitting, loading only the necessary bundles for product browsing, cart views, and checkout phases.
        </p>

        <h4 class="drawer-section-heading">3. Reactive State Management via BehaviorSubject</h4>
        <p class="drawer-p">
          Client state is organized through reactive RxJS streams in dedicated services:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><code>CartService</code>: Uses <code>BehaviorSubject</code> to broadcast cart items, quantities, and subtotal calculations across components, with automatic LocalStorage synchronization.</li>
          <li><code>CheckoutService</code>: Manages checkout wizard navigation via an observable <code>currentStep$</code> stream.</li>
        </ul>

        <h4 class="drawer-section-heading">4. Simulated Checkout Flow</h4>
        <p class="drawer-p">
          The checkout flow executes client-side business logic to simulate order processing:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Tiered Shipping Calculations:</strong> Evaluates cart value for free shipping thresholds ($200+) alongside standard, express, and overnight rates.</li>
          <li><strong>Tax & Promo Code Validation:</strong> Calculates dynamic 8% tax and applies discount deductions for promo codes (<code>SAVE10</code>, <code>SAVE20</code>).</li>
          <li><strong>Simulated Order Generation:</strong> Generates a unique <code>GP-</code> prefixed confirmation ID and commits order details to client-side storage.</li>
        </ul>

        <h4 class="drawer-section-heading">5. Technology Stack, Live Demo & Repository</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology Stack</th></tr>
          </thead>
          <tbody>
            <tr><td>Framework</td><td>Angular 17</td></tr>
            <tr><td>Language & State</td><td>TypeScript, RxJS (BehaviorSubject)</td></tr>
            <tr><td>Styling</td><td>Bootstrap 5</td></tr>
            <tr><td>Features</td><td>Product Catalog, Cart State, Standalone Components, Simulated Checkout</td></tr>
            <tr><td>Live Demo</td><td><a href="https://abhigyanneog.github.io/e-platform/" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">abhigyanneog.github.io/e-platform/ ↗</a></td></tr>
            <tr><td>Repository</td><td><a href="https://github.com/AbhigyanNeog/e-platform" target="_blank" rel="noopener noreferrer" style="color: var(--color-electric-blue);">AbhigyanNeog/e-platform ↗</a></td></tr>
          </tbody>
        </table>
      `
    }
  };

  // ===========================================================================
  // 4. BROWSER & MODULE EXPORTS
  // ===========================================================================
  if (typeof window !== 'undefined') {
    window.PROJECTS_DATA = PROJECTS_DATA;
    window.WELCOME_REEL_PROJECTS = WELCOME_REEL_PROJECTS;
    window.CASE_STUDIES = CASE_STUDIES;
    // Backwards-compatible aliases
    window.PROJECT_CASE_STUDIES = CASE_STUDIES;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      PROJECTS_DATA,
      WELCOME_REEL_PROJECTS,
      CASE_STUDIES
    };
  }

})();
