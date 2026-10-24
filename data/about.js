/**
 * =============================================================================
 * ABHIGYAN NEOG PORTFOLIO — ABOUT & BIOGRAPHICAL DATA STORE
 * =============================================================================
 *
 * HOW TO EDIT YOUR ABOUT CONTENT IN THE FUTURE:
 * -----------------------------------------------------------------------------
 * - Headline: Edit `headline` for your main statement in the About section.
 * - Narrative: Edit the array of strings in `paragraphs` for your bio text.
 * - Education: Edit `education` for degree, university, and status.
 * - Location: Edit `location` for city and country.
 * - Telemetry: Edit `statistics` for hero and counter stats.
 *
 * =============================================================================
 */

(function () {
  'use strict';

  const ABOUT_DATA = {
    name: 'Abhigyan Neog',
    role: 'Computer Science Undergraduate & Systems Engineer',
    institution: 'CHRIST (Deemed to be University), Bangalore',
    degree: 'B.Tech in Computer Science & Engineering',
    graduationYear: '2027',
    currentPeriod: '2024 – Present',
    location: 'Bangalore, Karnataka, India',
    timezone: 'Asia/Kolkata (IST)',

    headline: 'Software is most powerful when theoretical computer science directly enhances human decision-making.',

    heroIntroduction: 'I’m a Computer Science undergraduate at CHRIST University, interested in building practical software systems, intelligent applications, and tools that solve real problems.',

    paragraphs: [
      'I am driven by the intersection of rigorous systems programming and purposeful interface design. Whether formulating a dynamic programming matrix to resolve messy user queries in real time, or computing mathematical Haversine spherical distances to enforce physical campus attendance without intrusive hardware, I treat software engineering as an exact discipline.',
      'During my academic journey at Christ University and competitive hackathons, I have developed a strong bias toward verified code quality: writing isolated unit tests, defining strict API schemas, and structuring maintainable architectures. I avoid black-box shortcuts when a mathematically transparent algorithm can solve the problem with predictable complexity.',
      'I am actively preparing for summer software engineering internships where I can contribute to mission-critical backend systems, distributed architectures, or full-stack platforms alongside senior engineering mentors.'
    ],

    education: {
      institution: 'Christ University, Bangalore',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2024 – Present',
      status: 'UNDERGRADUATE',
      description: 'Core coursework spanning Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Software Design. Active contributor to student software development initiatives and technical competitive challenges.'
    },

    statistics: [
      { id: 'projects', label: 'Verified Projects', value: 8, formatted: '08', suffix: '' },
      { id: 'hackathons', label: 'Hackathon Recognitions', value: 2, formatted: '02', suffix: '' },
      { id: 'technologies', label: 'Core Competencies', value: 24, formatted: '24+', suffix: '+' }
    ],

    focusAreas: [
      'Cybercrime Analytics & Fraud Interception (TRACE-X)',
      'Systems Engineering & Geofencing (VeriClass)',
      'Classical Algorithms & Optimization (Campus Copilot)',
      'Machine Learning & Lexical Forensics (Phish Guard)',
      'Modular Microservice Architectures (NEXORA)',
      'Language Model Fine-Tuning & Quantization (LLM Assistant)'
    ]
  };

  if (typeof window !== 'undefined') {
    window.ABOUT_DATA = ABOUT_DATA;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ABOUT_DATA };
  }

})();
