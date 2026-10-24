/**
 * =============================================================================
 * ABHIGYAN NEOG PORTFOLIO — EXPERIENCE & TIMELINE DATA STORE
 * =============================================================================
 *
 * HOW TO EDIT YOUR EXPERIENCE IN THE FUTURE:
 * -----------------------------------------------------------------------------
 * - To add or edit internships, degrees, hackathons, or open-source deployments,
 *   update the items in `EXPERIENCE_DATA`.
 * - Each timeline entry includes:
 *     - `id`: Unique identifier
 *     - `date`: Time range (e.g. '2024 – PRESENT', '7 APR 2026 – 7 MAY 2026')
 *     - `badge`: Status tag (e.g. 'UNDERGRADUATE', 'INTERNSHIP', 'HACKATHON COMPETITION')
 *     - `badgeClass`: Badge CSS styling ('badge-citrus', 'badge-coral', 'badge-cobalt')
 *     - `title`: Position / Achievement title
 *     - `organization`: Institution, company, or event
 *     - `description`: Narrative of work, scope, and technologies used
 *
 * =============================================================================
 */

(function () {
  'use strict';

  const EXPERIENCE_DATA = [
    {
      id: 'christ-university',
      date: '2024 – PRESENT',
      badge: 'UNDERGRADUATE',
      badgeClass: 'badge-citrus',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'Christ University, Bangalore',
      description: 'Core coursework spanning Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Software Design. Active contributor to student software development initiatives and technical competitive challenges.'
    },
    {
      id: 'samsung-internship',
      date: '7 APR 2026 – 7 MAY 2026',
      badge: 'INTERNSHIP',
      badgeClass: 'badge-citrus',
      title: 'Samsung Innovation Campus — Coding and Programming Internship',
      organization: 'Samsung Innovation Campus (SIC) · One-Month Internship',
      description: 'Completed a one-month internship comprising 18 days of offline instructor-led training at CHRIST University and 12 days of guided online project development. Focused on coding fundamentals, algorithms, fundamental data structures, debugging techniques, laboratory programming exercises, and software project testing and documentation.'
    },
    {
      id: 'sih-tracex',
      date: '2026',
      badge: 'HACKATHON COMPETITION',
      badgeClass: 'badge-coral',
      title: 'Smart India Hackathon (SIH 2026) — TRACE-X',
      organization: 'National Cybersecurity & Fraud Interception Track',
      description: 'Architected the law enforcement command center interface in React 19 and TypeScript, integrating predictive ATM cash-out hotspot maps, Explainable AI risk gauges, and field dispatch operations to intercept mule accounts in financial fraud syndicates.'
    },
    {
      id: 'hackathon-copilot',
      date: '2026',
      badge: 'INTENSIVE HACKATHON',
      badgeClass: 'badge-cobalt',
      title: '5-Hour Hackathon — Campus Copilot',
      organization: 'Collaborative Sprint (Team of 5)',
      description: 'Developed by a team of five during a five-hour hackathon, using algorithms (Levenshtein Distance, Activity Selection, 0/1 Knapsack, Binary Search) and data visualization to support campus-related workflows.'
    },
    {
      id: 'deployments',
      date: '2026',
      badge: 'OPEN-SOURCE DEPLOYMENT',
      badgeClass: 'badge-citrus',
      title: 'VeriClass & E-Platform Cloud Deployments',
      organization: 'Render (Web Service & PostgreSQL) & GitHub Pages',
      description: 'Authored complete deployment architectures including PostgreSQL database linking on Render for Flask/SQLAlchemy, and automated continuous deployment of the Angular 17 E-Platform on GitHub Pages.'
    }
  ];

  if (typeof window !== 'undefined') {
    window.EXPERIENCE_DATA = EXPERIENCE_DATA;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EXPERIENCE_DATA };
  }

})();
