/**
 * =============================================================================
 * ABHIGYAN NEOG PORTFOLIO — CERTIFICATIONS & LEARNING CREDENTIALS DATA STORE
 * =============================================================================
 *
 * HOW TO EDIT YOUR CERTIFICATIONS IN THE FUTURE:
 * -----------------------------------------------------------------------------
 * - Featured Global Certification: Edit `FEATURED_CERTIFICATION`.
 * - Coursework & Simulations: Edit `SPECIALIZED_COURSES`, `SECURITY_SIMULATIONS`,
 *   and `SYSTEMS_PROGRAMMING` arrays in `CERTIFICATIONS_DATA`.
 * - Each item contains:
 *     - `id`: Unique identifier
 *     - `number`: Sequence number ('01', '02', etc.)
 *     - `title`: Credential / Course title
 *     - `issuer`: Issuing body or platform (Microsoft, NPTEL, Coursera, etc.)
 *     - `date`: Month and year earned
 *     - `description`: Scope of skills and syllabus covered
 *     - `tag`: Category / domain badge label
 *
 * =============================================================================
 */

(function () {
  'use strict';

  const CERTIFICATIONS_DATA = {
    featured: {
      id: 'azure-ai-fundamentals',
      badgeCategory: 'GLOBAL CLOUD CERTIFICATION',
      badgeStatus: '● VERIFIED EXAM SCORE REPORT',
      title: 'Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft · Delivery via Certiport (Pearson VUE)',
      badgeImage: 'assets/images/ms_azure_badge.png',
      badgeCaption: 'Microsoft Certified',
      description: 'Demonstrated foundational knowledge of machine learning and artificial intelligence concepts along with hands-on capabilities implementing solutions using Microsoft Azure AI Foundry, cognitive services, computer vision, natural language processing, and conversational AI workloads.',
      candidateName: 'ABHIGYAN NEOG',
      examCode: 'Microsoft Azure AI Fundamentals (AI-901 / AI-900)',
      dateEarned: 'September 28, 2026',
      referenceId: 'Ref #: 51642788 · Candidate ID: 29757765',
      score: '983 / 1000',
      passingScore: '700',
      result: 'PASS',
      sectionAnalysis: 'AI Concepts & Capabilities: 100% · Microsoft Foundry Solutions: 97%',
      verificationUrl: 'https://www.starttest.com/ITDVersions/24.2.0.0/ITDStart.aspx?SVC=eac7aa93-7b41-41b6-bbcd-73a47b834284&programid=208&Json=1'
    },

    specializedCourses: [
      {
        id: 'nptel-llm',
        number: '01',
        date: 'NOV 2025',
        title: 'Introduction to Large Language Models (LLMs)',
        issuer: 'NPTEL',
        description: 'Coursework covering transformer neural network architectures, attention mechanisms, tokenization strategies, contextual embeddings, prompt formulation, and adaptation techniques for foundational models.',
        status: 'Completed Course',
        domain: 'Online Learning'
      },
      {
        id: 'gcp-fundamentals',
        number: '02',
        date: 'APR 2025',
        title: 'Google Cloud Platform Fundamentals',
        issuer: 'Coursera / Google Cloud',
        description: 'Foundational study of Google Cloud infrastructure, Compute Engine virtual machines, Google Cloud Storage, VPC networks, Identity & Access Management (IAM), and containerized deployments.',
        status: 'Completed Course',
        domain: 'Cloud Infrastructure'
      },
      {
        id: 'mongodb-basics',
        number: '03',
        date: 'JUN 2025',
        title: 'MongoDB Basics for Students',
        issuer: 'MongoDB',
        description: 'Document-oriented NoSQL database architecture, JSON and BSON data schemas, CRUD operations, indexing mechanisms, and query optimization for scalable data pipelines.',
        status: 'Completed Course',
        domain: 'Data Systems'
      },
      {
        id: 'infosys-ai',
        number: '04',
        date: 'APR 2025',
        title: 'Artificial Intelligence',
        issuer: 'Infosys Springboard',
        description: 'Exploration of core AI principles, state-space search algorithms (A*, BFS, DFS), heuristic evaluation, knowledge representation, logic inference, and machine learning foundations.',
        status: 'Completed Course',
        domain: 'AI Foundations'
      }
    ],

    securitySimulations: [
      {
        id: 'deloitte-cyber',
        number: '05',
        date: 'OCT 2025',
        title: 'Cyber Job Simulation',
        issuer: 'Deloitte (via Forage)',
        description: 'Virtual experience program simulating cybersecurity consulting engagements: assessing client infrastructure vulnerabilities, analyzing threat vectors, recommending security controls, and formulating incident briefings.',
        status: 'Job Simulation',
        domain: 'Professional Practice',
        highlightColor: 'var(--color-vermilion)'
      },
      {
        id: 'ethical-hacking',
        number: '06',
        date: 'MAY 2025',
        title: 'Ethical Hacking for Beginners',
        issuer: 'Infosys Springboard',
        description: 'Methodologies of security auditing: footprinting, network reconnaissance, port scanning, identifying web application vulnerabilities, and understanding preventive security postures.',
        status: 'Completed Course',
        domain: 'Offensive Security'
      },
      {
        id: 'os-security',
        number: '07',
        date: '2025',
        title: 'Introduction to Computers and Operating Systems Security',
        issuer: 'Microsoft / Coursera',
        description: 'Study of operating system security mechanisms, process isolation, access control models, user account hardening, and threat mitigation across Windows and UNIX environments.',
        status: 'Completed Course',
        domain: 'OS Security'
      }
    ],

    systemsProgramming: [
      {
        id: 'c-functions-memory',
        number: '08',
        date: 'MAY 2025',
        title: 'Functions & Memory in C',
        issuer: 'Infosys Springboard',
        description: 'Rigorous study of low-level memory layout in C, pointer arithmetic, stack frames, heap allocation using malloc/free, pass-by-reference semantics, and avoiding memory leaks.',
        status: 'Completed Course',
        domain: 'C Programming'
      },
      {
        id: 'c-control-structures',
        number: '09',
        date: 'MAY 2025',
        title: 'Control Structures in C',
        issuer: 'Infosys Springboard',
        description: 'Control-flow engineering: decision trees, multi-way branch logic (switch/case), iterative loop structures, recursion mechanics, and algorithmic efficiency in procedural languages.',
        status: 'Completed Course',
        domain: 'Algorithms in C'
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.CERTIFICATIONS_DATA = CERTIFICATIONS_DATA;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CERTIFICATIONS_DATA };
  }

})();
