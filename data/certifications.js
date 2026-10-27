/**
 * =============================================================================
 * ABHIGYAN NEOG PORTFOLIO — CERTIFICATIONS & VERIFIED CREDENTIALS DATA STORE
 * =============================================================================
 *
 * Source: D:\abhi_hp_\Abhigyan\certificate -> assets/certificates/
 * High-skilled software engineering credentials spanning Cloud AI, Systems,
 * Cybersecurity, Networks, Database Architecture, and Industry Simulations.
 *
 * =============================================================================
 */

(function () {
  'use strict';

  const CERTIFICATIONS_DATA = {
    meta: {
      totalCredentials: 16,
      categories: [
        { id: 'all', label: 'All Credentials' },
        { id: 'cloud-ai', label: 'Cloud & AI' },
        { id: 'systems-software', label: 'Software & Systems' },
        { id: 'security-networks', label: 'Security & Networks' },
        { id: 'honors', label: 'Honors & Experience' }
      ]
    },

    featured: {
      id: 'azure-ai-fundamentals',
      title: 'Microsoft Azure AI Fundamentals (AI-900 / AI-901)',
      issuer: 'Microsoft · Delivery via Certiport (Pearson VUE)',
      category: 'cloud-ai',
      categoryLabel: 'Global Cloud Certification',
      date: 'September 28, 2026',
      year: '2026',
      badgeStatus: 'Verified Proctored Exam',
      score: '983 / 1000 (Pass · 98.3%)',
      passingScore: '700',
      credentialId: 'Ref #: 51642788 · Candidate ID: 29757765',
      previewImage: 'assets/certificates/MICROSOFT/ms_azure_certificate_preview.png',
      badgeImage: 'assets/certificates/MICROSOFT/ms_azure_badge.png',
      badgeCaption: 'Microsoft Certified Associate',
      pdfPath: 'assets/certificates/MICROSOFT/ms_azure_certificate.pdf',
      verificationUrl: 'https://www.starttest.com/ITDVersions/24.2.0.0/ITDStart.aspx?SVC=eac7aa93-7b41-41b6-bbcd-73a47b834284&programid=208&Json=1',
      description: 'Global proctored certification validating comprehensive competency across machine learning fundamentals, computer vision, natural language processing, generative AI architectures, and hands-on solution deployment using Microsoft Azure AI Foundry and Cognitive Services.',
      skills: ['Azure AI Foundry', 'Computer Vision API', 'Natural Language Processing', 'Conversational AI', 'Responsible AI Frameworks'],
      metrics: [
        { label: 'Final Score', value: '983 / 1000 (98.3%)' },
        { label: 'Passing Threshold', value: '700 / 1000' },
        { label: 'AI Concepts & Capabilities', value: '100% Mastery' },
        { label: 'Microsoft Foundry Solutions', value: '97% Mastery' },
        { label: 'Verification Provider', value: 'Certiport / Pearson VUE' }
      ]
    },

    credentials: [
      /* ---------------------------------------------------------
       * 1. NPTEL / SWAYAM — Large Language Models (LLMs)
       * --------------------------------------------------------- */
      {
        id: 'nptel-llm',
        number: '01',
        title: 'Introduction to Large Language Models (LLMs)',
        issuer: 'NPTEL · SWAYAM (IIT Madras)',
        category: 'cloud-ai',
        categoryLabel: 'Deep Learning & NLP',
        date: 'Jul–Oct 2025',
        year: '2025',
        status: 'Elite Proctored Certification',
        score: '64% Consolidated (Elite Grade)',
        credentialId: 'Roll No: NPTEL25CS161S1152603667',
        previewImage: 'assets/certificates/swayam/nptel_llm_preview.png',
        pdfPath: 'assets/certificates/swayam/nptel_llm.pdf',
        verificationUrl: 'https://nptel.ac.in/noc',
        skills: ['Transformer Architecture', 'Self-Attention Mechanisms', 'Byte-Pair Encoding (BPE)', 'Contextual Embeddings', 'Prompt Tuning', 'RAG Pipelines'],
        description: 'Rigorous 12-week advanced academic certification funded by MoE Govt. of India and conducted by IIT Madras. Deep mathematical and algorithmic foundations of transformers, self-attention mechanisms, sub-word tokenization, positional embeddings, multi-head attention, fine-tuning, and alignment strategies for large language models.',
        metrics: [
          { label: 'Assignments Score', value: '23.47 / 25' },
          { label: 'Proctored Exam', value: '40.25 / 75' },
          { label: 'Consolidated', value: '64% (Elite)' },
          { label: 'Recommended Credits', value: '3 or 4 Credits' }
        ]
      },

      /* ---------------------------------------------------------
       * 2. Google Cloud — Introduction to Generative AI
       * --------------------------------------------------------- */
      {
        id: 'google-genai',
        number: '02',
        title: 'Introduction to Generative AI',
        issuer: 'Google Cloud (via Coursera)',
        category: 'cloud-ai',
        categoryLabel: 'Generative AI & LLMs',
        date: 'April 24, 2025',
        year: '2025',
        status: 'Verified Course Credential',
        score: 'Passed with Honors',
        credentialId: 'Coursera ID: L5XQWXT47FE1',
        previewImage: 'assets/certificates/google/google_ai_preview.png',
        pdfPath: 'assets/certificates/google/google_ai.pdf',
        verificationUrl: 'https://coursera.org/verify/L5XQWXT47FE1',
        skills: ['Generative AI Concepts', 'Large Language Models', 'Foundational Models', 'Prompt Engineering', 'Vertex AI Ecosystem'],
        description: 'Comprehensive study of Google Cloud generative AI ecosystem, architectural paradigms of foundational models, generative text and vision pipelines, model fine-tuning mechanics, and deploying production-grade AI applications on Google Cloud Infrastructure.',
        metrics: [
          { label: 'Issuer', value: 'Google Cloud Training' },
          { label: 'Verification ID', value: 'L5XQWXT47FE1' },
          { label: 'Domain', value: 'Generative AI Systems' }
        ]
      },

      /* ---------------------------------------------------------
       * 3. Deloitte — Cyber Job Simulation
       * --------------------------------------------------------- */
      {
        id: 'deloitte-cyber',
        number: '03',
        title: 'Cyber Job Simulation',
        issuer: 'Deloitte (via Forage)',
        category: 'security-networks',
        categoryLabel: 'Cybersecurity & Advisory',
        date: 'October 22, 2025',
        year: '2025',
        status: 'Professional Simulation Verified',
        score: 'Practical Tasks Completed',
        credentialId: 'Enrolment: hQMha6xgTB5Wper7o · User: 68ef3be13be5c04800bb2c51',
        previewImage: 'assets/certificates/Deloitte/deloitte_cyber_security_preview.png',
        pdfPath: 'assets/certificates/Deloitte/deloitte_cyber_security.pdf',
        verificationUrl: 'https://www.theforage.com/simulations/deloitte/cyber-security',
        skills: ['Threat Intelligence', 'Network Vulnerability Triage', 'Security Architecture', 'Incident Forensics', 'Executive Briefing'],
        description: 'Hands-on enterprise cybersecurity simulation conducted by Deloitte. Analyzed attack surfaces and security log telemetry, audited client infrastructure against common exploit vectors, formulated defensive perimeter recommendations, and authored technical incident response documentation for C-suite stakeholders.',
        metrics: [
          { label: 'Issuing Officer', value: 'Tina McCreery, CHRO Deloitte' },
          { label: 'Platform', value: 'Forage Enterprise' },
          { label: 'Scope', value: 'Practical Cyber Defense Tasks' }
        ]
      },

      /* ---------------------------------------------------------
       * 4. Oracle Academy — Java Programming
       * --------------------------------------------------------- */
      {
        id: 'oracle-java-programming',
        number: '04',
        title: 'Java Programming — Award of Completion',
        issuer: 'Oracle Academy',
        category: 'systems-software',
        categoryLabel: 'Enterprise Java & JVM',
        date: 'January 20, 2026',
        year: '2026',
        status: 'Official Oracle Award',
        score: '100% Module Mastery Across All Units',
        credentialId: 'Instructor: Karthikeyan H · Oracle Academy',
        previewImage: 'assets/certificates/Oracle_JAVA/java_programming_preview.png',
        pdfPath: 'assets/certificates/Oracle_JAVA/java_programming.pdf',
        verificationUrl: '',
        skills: ['Object-Oriented Design', 'Java Collections Framework', 'Generics', 'JDBC Database Access', 'JVM Architecture & Memory', 'Bytecode & ClassLoaders'],
        description: 'Advanced software engineering curriculum authorized by Oracle Academy. Mastered object-oriented design patterns, inheritance hierarchies, abstract classes, encapsulation, exception resilience, generic data structures, multi-threading paradigms, JDBC connectivity, and JVM internal runtime mechanics (Bytecode, ClassLoaders, Garbage Collection).',
        metrics: [
          { label: 'Curriculum', value: 'Oracle Academy Global Standards' },
          { label: 'All Modules Completed', value: '100% Score across all Sections' },
          { label: 'Key Focus', value: 'JVM Memory, JDBC, Collections & Generics' }
        ]
      },

      /* ---------------------------------------------------------
       * 5. Oracle Academy — Java Fundamentals
       * --------------------------------------------------------- */
      {
        id: 'oracle-java-fundamentals',
        number: '05',
        title: 'Java Fundamentals — Award of Completion',
        issuer: 'Oracle Academy',
        category: 'systems-software',
        categoryLabel: 'Core Programming & Algorithms',
        date: 'January 20, 2026',
        year: '2026',
        status: 'Official Oracle Award',
        score: 'Satisfactory Completion of All Coursework',
        credentialId: 'Instructor: Karthikeyan H · Oracle Academy',
        previewImage: 'assets/certificates/Oracle_JAVA/java_fundamentals_preview.png',
        pdfPath: 'assets/certificates/Oracle_JAVA/java_fundamentals.pdf',
        verificationUrl: '',
        skills: ['Computational Logic', 'Algorithm Flow', 'Object Modeling', 'Syntax & Control Flow', 'Data Types & Expressions', 'Method Overloading'],
        description: 'Rigorous foundational software engineering program in Java. Focused on syntax standards, procedural control flows, arrays and matrices, algorithmic problem solving, method design, class instantiation, and structured debugging.',
        metrics: [
          { label: 'Organization', value: 'Oracle Academy' },
          { label: 'Status', value: 'Award of Completion' },
          { label: 'Core Competency', value: 'Java Software Architecture' }
        ]
      },

      /* ---------------------------------------------------------
       * 6. MongoDB — MongoDB Basics for Students
       * --------------------------------------------------------- */
      {
        id: 'mongodb-basics',
        number: '06',
        title: 'MongoDB Basics for Students',
        issuer: 'MongoDB (Credly Verified)',
        category: 'systems-software',
        categoryLabel: 'NoSQL Distributed Databases',
        date: 'June 13, 2025',
        year: '2025',
        status: 'Verified Digital Credential (Credly)',
        score: 'Verified Badge Issued',
        credentialId: 'Credly ID: cJr6502J',
        previewImage: 'assets/certificates/mongodb/mongodb_certificate.png',
        badgeImage: 'assets/certificates/mongodb/mongodb-basics-for-students.png',
        pdfPath: 'assets/certificates/mongodb/MongoDBBasicsforStudents_Badge20250615-28-sbkgds.pdf',
        verificationUrl: 'https://www.credly.com/go/cJr6502J',
        skills: ['Document Schema Design', 'BSON / JSON Structures', 'Aggregation Framework', 'Compound Indexing', 'CRUD Optimization', 'Cloud Atlas'],
        description: 'NoSQL distributed database engineering credential issued by MongoDB and verified on Credly. Covers document schema design, BSON data types, query execution plans, complex aggregation pipelines ($match, $group, $lookup), indexing strategies for high throughput, and database clustering.',
        metrics: [
          { label: 'Badge Issuer', value: 'MongoDB University' },
          { label: 'Credly Verification', value: 'https://www.credly.com/go/cJr6502J' },
          { label: 'Specialization', value: 'Document-Oriented Database Architecture' }
        ]
      },

      /* ---------------------------------------------------------
       * 7. Microsoft — Introduction to Computers, OS & Security
       * --------------------------------------------------------- */
      {
        id: 'microsoft-os-security',
        number: '07',
        title: 'Introduction to Computers, Operating Systems & Security',
        issuer: 'Microsoft (via Coursera)',
        category: 'security-networks',
        categoryLabel: 'Operating Systems & Security',
        date: 'May 5, 2025',
        year: '2025',
        status: 'Verified Course Credential',
        score: 'Passed with Honors',
        credentialId: 'Coursera ID: UQK81VPM98PZ',
        previewImage: 'assets/certificates/MICROSOFT/operating system.jpg',
        pdfPath: 'assets/certificates/MICROSOFT/operating system.pdf',
        verificationUrl: 'https://coursera.org/verify/UQK81VPM98PZ',
        skills: ['Kernel vs User Space', 'Process Scheduling', 'Virtual Memory Management', 'File System Permissions', 'Access Control Lists (ACL)', 'Endpoint Hardening'],
        description: 'Deep dive into computer architecture, OS internals, process lifecycle management, virtual memory translation, kernel space protection, privilege rings, authentication mechanisms, and mitigating system-level security vectors across Windows and UNIX environments.',
        metrics: [
          { label: 'Authorizing Body', value: 'Microsoft Corporation' },
          { label: 'Verification ID', value: 'UQK81VPM98PZ' },
          { label: 'Key Domains', value: 'Operating Systems, Memory Isolation, Security' }
        ]
      },

      /* ---------------------------------------------------------
       * 8. Infosys Springboard — Fundamentals of Responsible AI
       * --------------------------------------------------------- */
      {
        id: 'infosys-responsible-ai',
        number: '08',
        title: 'Fundamentals of Responsible AI',
        issuer: 'Infosys Springboard',
        category: 'cloud-ai',
        categoryLabel: 'Ethical AI & Governance',
        date: 'June 24, 2026',
        year: '2026',
        status: 'Verified Professional Credential',
        score: 'Course Completed · Certified',
        credentialId: 'Wingspan Verification: verify.onwingspan.com',
        previewImage: 'assets/certificates/infosys/responsible_ai_preview.png',
        pdfPath: 'assets/certificates/infosys/Fundamentals of Responsible AI_24-06-2026.pdf',
        verificationUrl: 'https://verify.onwingspan.com',
        skills: ['AI Governance', 'Algorithmic Fairness', 'Model Explainability (XAI)', 'Data Privacy Preservation', 'Adversarial Robustness', 'Safety Guardrails'],
        description: 'Specialized enterprise training on ethical AI architecture and governance. Focuses on identifying and neutralizing algorithmic bias in training datasets, model explainability frameworks (SHAP, LIME), privacy-preserving machine learning, and regulatory compliance standards for enterprise AI deployments.',
        metrics: [
          { label: 'Executive Officer', value: 'Satheesha B. Nanjappa, SVP Infosys' },
          { label: 'Verification System', value: 'Wingspan Platform' },
          { label: 'Core Principles', value: 'Fairness, Transparency, Explainability, Security' }
        ]
      },

      /* ---------------------------------------------------------
       * 9. Infosys Springboard — Software Engineering
       * --------------------------------------------------------- */
      {
        id: 'infosys-software-engineering',
        number: '09',
        title: 'Software Engineering Principles & Lifecycle',
        issuer: 'Infosys Springboard',
        category: 'systems-software',
        categoryLabel: 'Software Architecture & SDLC',
        date: 'June 17, 2026',
        year: '2026',
        status: 'Verified Professional Credential',
        score: 'Course Completed · Certified',
        credentialId: 'Wingspan Verification: verify.onwingspan.com',
        previewImage: 'assets/certificates/infosys/software_engineering_preview.png',
        pdfPath: 'assets/certificates/infosys/Software Engineering_17-06-2026.pdf',
        verificationUrl: 'https://verify.onwingspan.com',
        skills: ['SDLC Methodologies', 'Agile / Scrum Frameworks', 'Software Architecture Patterns', 'Unit & Integration Testing', 'CI/CD Pipelines', 'Refactoring & Clean Code'],
        description: 'Comprehensive software engineering curriculum covering end-to-end development lifecycles: requirements elicitation, UML structural diagrams, architectural design patterns (MVC, Factory, Observer), test-driven development (TDD), code quality metrics, and continuous deployment workflows.',
        metrics: [
          { label: 'Executive Officer', value: 'Satheesha B. Nanjappa, SVP Infosys' },
          { label: 'Verification System', value: 'Wingspan Platform' },
          { label: 'Key Competencies', value: 'SDLC, Agile, Clean Code, CI/CD' }
        ]
      },

      /* ---------------------------------------------------------
       * 10. Infosys Springboard — Network Fundamentals
       * --------------------------------------------------------- */
      {
        id: 'infosys-network-fundamentals',
        number: '10',
        title: 'Computer Network Fundamentals',
        issuer: 'Infosys Springboard',
        category: 'security-networks',
        categoryLabel: 'Networking & Protocols',
        date: 'January 13, 2026',
        year: '2026',
        status: 'Verified Professional Credential',
        score: 'Course Completed · Certified',
        credentialId: 'Wingspan Verification: verify.onwingspan.com',
        previewImage: 'assets/certificates/infosys/network_fundamentals_preview.png',
        pdfPath: 'assets/certificates/infosys/Network Fundamentals.pdf',
        verificationUrl: 'https://verify.onwingspan.com',
        skills: ['OSI 7-Layer Model', 'TCP/IP Protocol Suite', 'IPv4 & IPv6 Subnetting', 'Routing & Switching', 'DNS / DHCP / NAT', 'Socket Communication'],
        description: 'Deep structural examination of computer networking: OSI model layers, packet encapsulation, TCP three-way handshakes, UDP datagrams, IPv4/IPv6 CIDR subnet calculations, routing algorithms (OSPF, BGP), DNS resolution hierarchies, and low-level socket programming fundamentals.',
        metrics: [
          { label: 'Executive Officer', value: 'Satheesha B. Nanjappa, SVP Infosys' },
          { label: 'Verification System', value: 'Wingspan Platform' },
          { label: 'Network Protocols', value: 'TCP, UDP, IP, HTTP/HTTPS, DNS' }
        ]
      },

      /* ---------------------------------------------------------
       * 11. Infosys Springboard — Ethical Hacking for Beginners
       * --------------------------------------------------------- */
      {
        id: 'infosys-ethical-hacking',
        number: '11',
        title: 'Ethical Hacking for Beginners',
        issuer: 'Infosys Springboard',
        category: 'security-networks',
        categoryLabel: 'Offensive Security & Pentesting',
        date: 'May 1, 2025',
        year: '2025',
        status: 'Verified Professional Credential',
        score: 'Course Completed · Certified',
        credentialId: 'Wingspan Verification: verify.onwingspan.com',
        previewImage: 'assets/certificates/infosys/ethical_hacking_certif.jpg',
        pdfPath: 'assets/certificates/infosys/ethical_hacking.pdf',
        verificationUrl: 'https://verify.onwingspan.com',
        skills: ['Reconnaissance & Footprinting', 'Port Scanning (Nmap)', 'Vulnerability Assessment', 'OWASP Top 10 Exploits', 'Defense Hardening'],
        description: 'Practical offensive security methodology: network discovery, port scanning, identifying web application vulnerabilities (SQL Injection, XSS, CSRF), privilege escalation mechanics, and establishing preventive security postures through system patch auditing.',
        metrics: [
          { label: 'Executive Officer', value: 'Thirumala Arohi, EVP & Global Head ETA' },
          { label: 'Verification System', value: 'Wingspan Platform' },
          { label: 'Domain', value: 'Offensive Security & Reconnaissance' }
        ]
      },

      /* ---------------------------------------------------------
       * 12. Infosys Springboard — Functions & Memory in C
       * --------------------------------------------------------- */
      {
        id: 'infosys-c-memory',
        number: '12',
        title: 'Functions and Memory in C: Leveraging Pointers with Arrays',
        issuer: 'Infosys Springboard',
        category: 'systems-software',
        categoryLabel: 'Systems Programming & Pointers',
        date: 'May 23, 2025',
        year: '2025',
        status: 'Verified Professional Credential',
        score: 'Course Completed · Certified',
        credentialId: 'Wingspan Verification: verify.onwingspan.com',
        previewImage: 'assets/certificates/infosys/function_memory_C.jpg',
        pdfPath: 'assets/certificates/infosys/functions & memory in C.pdf',
        verificationUrl: 'https://verify.onwingspan.com',
        skills: ['Pointer Arithmetic', 'Stack Frames & Heap', 'Dynamic Memory (malloc/free)', 'Pass-by-Reference', 'Memory Leak Prevention', 'Function Pointers'],
        description: 'Low-level systems programming in C: memory address spaces, pointer dereferencing, multi-dimensional array mapping, dynamic memory allocation using malloc/calloc/free, struct padding, stack frame manipulation, and preventing memory leaks and segmentation faults.',
        metrics: [
          { label: 'Executive Officer', value: 'Thirumala Arohi, EVP Infosys' },
          { label: 'Verification System', value: 'Wingspan Platform' },
          { label: 'Core Focus', value: 'Pointer Arithmetic, Dynamic Heap, Stack Frames' }
        ]
      },

      /* ---------------------------------------------------------
       * 13. Infosys Springboard — Control Structures in C
       * --------------------------------------------------------- */
      {
        id: 'infosys-c-control',
        number: '13',
        title: 'Control Structures in C',
        issuer: 'Infosys Springboard',
        category: 'systems-software',
        categoryLabel: 'Algorithmic Flow Control',
        date: 'May 2025',
        year: '2025',
        status: 'Verified Professional Credential',
        score: 'Course Completed · Certified',
        credentialId: 'Wingspan Verification: verify.onwingspan.com',
        previewImage: 'assets/certificates/infosys/control structure in C.jpg',
        pdfPath: 'assets/certificates/infosys/control structure in C.pdf',
        verificationUrl: 'https://verify.onwingspan.com',
        skills: ['Branch Logic Optimization', 'Loop Performance', 'Recursion Engineering', 'Conditional Execution', 'Algorithmic Efficiency'],
        description: 'Procedural control flow architecture: multi-way branch logic (switch/case), nested conditional evaluations, loop performance optimizations, recursive call-stack mechanics, and computational complexity minimization in C.',
        metrics: [
          { label: 'Executive Officer', value: 'Thirumala Arohi, EVP Infosys' },
          { label: 'Verification System', value: 'Wingspan Platform' },
          { label: 'Core Focus', value: 'Control Logic, Branch Prediction, Recursion' }
        ]
      },

      /* ---------------------------------------------------------
       * 14. Infosys Springboard — Artificial Intelligence Primer
       * --------------------------------------------------------- */
      {
        id: 'infosys-ai',
        number: '14',
        title: 'Artificial Intelligence Foundations',
        issuer: 'Infosys Springboard',
        category: 'cloud-ai',
        categoryLabel: 'AI & Knowledge Representation',
        date: 'April 2025',
        year: '2025',
        status: 'Verified Professional Credential',
        score: 'Course Completed · Certified',
        credentialId: 'Wingspan Verification: verify.onwingspan.com',
        previewImage: 'assets/certificates/infosys/artificial_intelligence.jpg',
        pdfPath: 'assets/certificates/infosys/artificial_intelligence.pdf',
        verificationUrl: 'https://verify.onwingspan.com',
        skills: ['State-Space Search (A*, BFS, DFS)', 'Heuristic Evaluation', 'Knowledge Representation', 'Propositional Logic', 'Machine Learning Foundations'],
        description: 'Comprehensive study of symbolic and statistical AI: informed search algorithms (A*, greedy best-first), game tree search (minimax, alpha-beta pruning), knowledge representation schemes, logic inference engines, and machine learning primitives.',
        metrics: [
          { label: 'Organization', value: 'Infosys Springboard' },
          { label: 'Domain', value: 'Artificial Intelligence & Search Algorithms' }
        ]
      },

      /* ---------------------------------------------------------
       * 15. Samsung Innovation Campus — Summer Internship in Coding & AI
       * --------------------------------------------------------- */
      {
        id: 'samsung-sic-internship',
        number: '15',
        title: 'Samsung Innovation Campus — Summer Internship in Coding & AI',
        issuer: 'Samsung Innovation Campus & CHRIST University',
        category: 'honors',
        categoryLabel: 'Industry Internship & AI Training',
        date: 'August 11, 2026',
        year: '2026',
        status: 'Official Completion Letter',
        score: '30-Day Intensive Program Completed',
        credentialId: 'Reg: 2460304 · 5BTCS AIML · Dept of CSE & AI',
        previewImage: 'assets/certificates/samsung/samsung_sic_internship_preview.png',
        pdfPath: 'assets/certificates/samsung/samsung_sic_internship.pdf',
        verificationUrl: '',
        skills: ['Advanced Python Programming', 'Machine Learning Pipelines', 'Data Structures & Algorithms', 'Guided Project Development', 'Collaborative Software Engineering'],
        description: 'Selected for the prestigious 30-Day Samsung Innovation Campus (SIC) Summer Internship in Coding and AI. Completed 18 days of intensive laboratory training on algorithm design, data structures, and debugging techniques, followed by 12 days of guided end-to-end AI project development, model implementation, and mentor evaluations.',
        metrics: [
          { label: 'Program Type', value: 'Samsung Innovation Campus (SIC) Summer Internship' },
          { label: 'Candidate', value: 'Abhigyan Neog (Reg: 2460304)' },
          { label: 'Authorized Signatory', value: 'Prof. Chaitra P C, Assistant Professor ADSE, CHRIST' },
          { label: 'Structure', value: '18 Days Offline Labs + 12 Days Guided Project Work' }
        ]
      },

      /* ---------------------------------------------------------
       * 16. IEEE Computer Society — Presentation Award at Hackathon
       * --------------------------------------------------------- */
      {
        id: 'ieee-hackathon-presentation',
        number: '16',
        title: 'Certificate of Presentation — Design Thinking at Explore & Evolve Hackathon',
        issuer: 'IEEE Computer Society (CHRIST Student Branch Chapter)',
        category: 'honors',
        categoryLabel: 'Hackathon Honors & Leadership',
        date: 'September 4, 2025',
        year: '2025',
        status: 'Official Presentation Award',
        score: 'Invited Talk & Presentation',
        credentialId: 'Faculty Coordinator: Dr. Sandeep Kumar (IEEE CS CU)',
        previewImage: 'assets/certificates/Hackathon/ieee_hackathon_presentation.jpg',
        pdfPath: '',
        verificationUrl: '',
        skills: ['Design Thinking Methodologies', 'System Architecture Pitching', 'Security Solution Prototyping', 'Technical Public Speaking', 'Hackathon Innovation'],
        description: 'Award of Presentation proudly conferred by IEEE Computer Society and CHRIST University for delivering a recognized presentation on "Design Thinking in Software Architecture" at the Explore & Evolve Hackathon. Organized in collaboration with ChipEdge, Happiest Minds, and Brigita.',
        metrics: [
          { label: 'Conferring Body', value: 'IEEE Computer Society Student Branch Chapter' },
          { label: 'Event', value: 'Explore and Evolve Hackathon (Sept 4, 2025)' },
          { label: 'Faculty Coordinator', value: 'Dr. Sandeep Kumar, IEEE CS CU' },
          { label: 'Industry Partners', value: 'ChipEdge · Happiest Minds · Brigita' }
        ]
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
