/**
 * ABHIGYAN NEOG — EDITORIAL PORTFOLIO MOTION & INTERACTION ENGINE
 * Experimental Motion Meets Premium Light Editorial Design
 *
 * Core Systems:
 *  1. Custom Dual-Stage Cobalt Cursor with Semantic Context Badges
 *  2. Ambient Canvas Particles with Delicate Butterfly/Geometry Flutter
 *  3. Kinetic Headline Typography Slot-Roller
 *  4. 3D Tilt Physics & Parallax for Project Showcase Cards
 *  5. Magnetic Button Physics with Spring Snapping
 *  6. Staggered IntersectionObserver Scroll Storyteller & Telemetry Counters
 *  7. Scroll Progress Tracking Bar
 *  8. Deep-Dive Case Study Drawer Controller with Hash Navigation
 *  9. Project Category Filter
 * 10. Live Bangalore (IST) Station Clock
 * 11. Clipboard Email Copy & Contact Inquiries
 */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  // =========================================================================
  // =========================================================================
  // 0. SIGNATURE OPENING EXPERIENCE: 3D LAPTOP INTRO & STAGE C WELCOME SCREEN
  // =========================================================================
  const introEl = document.getElementById('cinematic-intro');
  const laptopRig = document.getElementById('laptop-rig');
  const laptopDisplay = document.getElementById('laptop-display');
  const displayOs = document.getElementById('display-os');
  const cobaltTunnel = document.getElementById('cobalt-tunnel');
  const introSkipBtn = document.getElementById('intro-skip-btn');
  const introPlayBtn = document.getElementById('intro-play-btn');
  const laptopScreenVideo = document.getElementById('laptop-screen-video');
  const introWelcomeScreen = document.getElementById('intro-welcome-screen');
  const welcomeExploreBtn = document.getElementById('welcome-explore-btn');
  const welcomeSkipBtn = document.getElementById('welcome-skip-btn');
  const footerReplayBtn = document.getElementById('footer-replay-btn');
  const introScreenClock = document.getElementById('intro-screen-clock');
  const kbEnterKey = document.getElementById('kb-enter-key');
  const kbTravelPulse = document.getElementById('kb-travel-pulse');

  let introActive = false;
  let introTimers = [];

  function updateIntroClock() {
    if (!introScreenClock) return;
    try {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      introScreenClock.textContent = `${new Intl.DateTimeFormat([], options).format(now)} IST`;
    } catch {
      introScreenClock.textContent = '12:00:00 IST';
    }
  }
  updateIntroClock();

  function clearIntroTimers() {
    introTimers.forEach(t => clearTimeout(t));
    introTimers = [];
  }

  function finishIntro(immediate = false, scrollToProjects = false, targetId = null) {
    if (!introEl) return;
    clearIntroTimers();
    introActive = false;
    document.body.style.overflow = '';
    if (introWelcomeScreen) {
      introWelcomeScreen.classList.remove('active');
    }

    if (particlesAnimId) {
      cancelAnimationFrame(particlesAnimId);
      particlesAnimId = null;
    }
    if (introParticlesCanvas) {
      const pCtx = introParticlesCanvas.getContext('2d');
      if (pCtx) pCtx.clearRect(0, 0, introParticlesCanvas.width, introParticlesCanvas.height);
    }
    const studioBackdrop = document.querySelector('.intro-studio-backdrop');
    if (studioBackdrop) {
      studioBackdrop.classList.remove('screen-lit');
    }

    const kbEnterKey = document.getElementById('kb-enter-key');
    if (kbEnterKey) kbEnterKey.classList.remove('pressed');
    const kbTravelPulse = document.getElementById('kb-travel-pulse');
    if (kbTravelPulse) kbTravelPulse.classList.remove('traveling');

    if (laptopScreenVideo && !laptopScreenVideo.paused) {
      laptopScreenVideo.pause();
    }

    const executeDestination = () => {
      if (targetId) {
        const targetEl = document.getElementById(targetId);
        const projSection = document.getElementById('projects');
        const projectIndexMap = {
          'project-attendance': 0,
          'project-copilot': 1,
          'project-nexora': 2,
          'project-llmassistant': 3,
          'project-tracex': 4,
          'project-loganalyzer': 5,
          'project-phishguard': 6,
          'project-eplatform': 7
        };
        const slideIndex = projectIndexMap[targetId];
        if (typeof window.goToGallerySlide === 'function' && slideIndex !== undefined) {
          window.goToGallerySlide(slideIndex);
        }
        if (projSection) {
          projSection.scrollIntoView({ behavior: 'smooth' });
        } else if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      if (scrollToProjects) {
        const projSection = document.getElementById('projects');
        if (projSection) {
          projSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (immediate) {
      introEl.classList.add('hidden');
      introEl.classList.remove('fade-out');
      if (laptopRig) laptopRig.classList.remove('diving', 'scene-opened', 'scene-closed', 'scene-arriving');
      if (laptopDisplay) laptopDisplay.classList.remove('illuminated', 'anticipating');
      if (cobaltTunnel) cobaltTunnel.classList.remove('active');
      executeDestination();
    } else {
      introEl.classList.add('fade-out');
      setTimeout(() => {
        introEl.classList.add('hidden');
        introEl.classList.remove('fade-out');
        if (laptopRig) laptopRig.classList.remove('diving', 'scene-opened', 'scene-closed', 'scene-arriving');
        if (laptopDisplay) laptopDisplay.classList.remove('illuminated', 'anticipating');
        if (cobaltTunnel) cobaltTunnel.classList.remove('active');
        executeDestination();
      }, 650);
    }
  }

  // =========================================================================
  // ATMOSPHERIC DUST MOTES PARTICLE FIELD (Cinema Studio Depth)
  // Restrained, slow-floating micro particles that simulate stage lighting
  // =========================================================================
  const introParticlesCanvas = document.getElementById('intro-particles-canvas');
  let particlesAnimId = null;
  let introMotes = [];

  function initIntroParticles() {
    if (!introParticlesCanvas || prefersReducedMotion) return;
    const ctx = introParticlesCanvas.getContext('2d');
    if (!ctx) return;

    let width = introParticlesCanvas.width = window.innerWidth;
    let height = introParticlesCanvas.height = window.innerHeight;

    const handleResize = () => {
      if (!introParticlesCanvas) return;
      width = introParticlesCanvas.width = window.innerWidth;
      height = introParticlesCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Restrained count: ~24 motes total for quiet atmospheric depth without visual clutter
    const numMotes = Math.min(26, Math.max(16, Math.floor((width * height) / 45000)));
    introMotes = [];
    for (let i = 0; i < numMotes; i++) {
      introMotes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: -0.06 - Math.random() * 0.14, // slow upward thermal drift
        radius: Math.random() * 1.2 + 0.8,
        baseAlpha: Math.random() * 0.35 + 0.15,
        phase: Math.random() * Math.PI * 2,
        isBlue: Math.random() > 0.4
      });
    }

    function renderParticles() {
      if (!introActive) {
        if (particlesAnimId) {
          cancelAnimationFrame(particlesAnimId);
          particlesAnimId = null;
        }
        ctx.clearRect(0, 0, width, height);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < introMotes.length; i++) {
        const m = introMotes[i];

        // In Scene D anticipation: particles gently converge toward screen center
        if (laptopDisplay && laptopDisplay.classList.contains('anticipating')) {
          const targetX = width / 2;
          const targetY = height * 0.42; // slightly above vertical center to match laptop screen position
          m.vx += (targetX - m.x) * 0.00018;
          m.vy += (targetY - m.y) * 0.00018;
        }

        m.x += m.vx;
        m.y += m.vy;
        m.phase += 0.015;

        // Wrap around boundaries
        if (m.x < 0) m.x = width;
        else if (m.x > width) m.x = 0;
        if (m.y < 0) m.y = height;
        else if (m.y > height) m.y = 0;

        const currentAlpha = Math.max(0.05, m.baseAlpha + Math.sin(m.phase) * 0.12);
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fillStyle = m.isBlue
          ? `rgba(130, 185, 255, ${currentAlpha})`
          : `rgba(240, 244, 255, ${currentAlpha * 0.85})`;
        ctx.shadowColor = m.isBlue ? 'rgba(85, 214, 255, 0.4)' : 'transparent';
        ctx.shadowBlur = m.isBlue ? 4 : 0;
        ctx.fill();
      }

      particlesAnimId = requestAnimationFrame(renderParticles);
    }

    if (particlesAnimId) {
      cancelAnimationFrame(particlesAnimId);
    }
    particlesAnimId = requestAnimationFrame(renderParticles);
  }

  function runCinematicIntro() {
    if (!introEl) return;

    clearIntroTimers();
    introActive = true;
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';

    // Reset all intro elements to initial frame state (Scene A: Laptop Arrival from Studio Darkness)
    introEl.classList.remove('hidden', 'fade-out');
    if (introWelcomeScreen) {
      introWelcomeScreen.classList.remove('active');
    }
    if (laptopRig) {
      laptopRig.classList.remove('scene-opened', 'diving', 'scene-closed');
      laptopRig.classList.add('scene-arriving');
      laptopRig.style.transition = '';
      laptopRig.style.animationPlayState = '';
    }
    const lidEl = document.getElementById('laptop-lid');
    if (lidEl) {
      lidEl.style.transition = '';
      lidEl.style.transform = '';
    }
    if (kbEnterKey) kbEnterKey.classList.remove('pressed');
    if (kbTravelPulse) kbTravelPulse.classList.remove('traveling');
    if (laptopDisplay) laptopDisplay.classList.remove('illuminated', 'anticipating');
    const displayComp = document.getElementById('display-computational');
    if (displayComp) displayComp.classList.remove('active');
    if (cobaltTunnel) cobaltTunnel.classList.remove('active');
    const studioBackdrop = document.querySelector('.intro-studio-backdrop');
    if (studioBackdrop) studioBackdrop.classList.remove('screen-lit');

    // Laptop Video Handling: start from frame 0 and handle autoplay restrictions gracefully
    if (laptopScreenVideo) {
      laptopScreenVideo.currentTime = 0;
      const playPromise = laptopScreenVideo.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (introPlayBtn) introPlayBtn.classList.add('hidden');
        }).catch(() => {
          if (introPlayBtn) introPlayBtn.classList.remove('hidden');
        });
      }
    }

    // Launch atmospheric dust particle field
    initIntroParticles();

    // Force browser reflow to reset transition states
    void introEl.offsetWidth;

    // Respect reduced motion preference: immediately show Swiss Editorial welcome screen
    if (prefersReducedMotion) {
      if (introWelcomeScreen) {
        introWelcomeScreen.classList.add('active');
      }
      if (welcomeExploreBtn) {
        welcomeExploreBtn.focus();
      }
      return;
    }

    // Diagnostic / Visual Verification query param hook
    const urlParams = new URLSearchParams(window.location.search);
    const freezeStage = urlParams.get('freeze');
    if (freezeStage) {
      if (freezeStage === 'arriving') {
        if (laptopRig) {
          laptopRig.classList.remove('scene-closed', 'scene-opened', 'diving');
          laptopRig.classList.add('scene-arriving');
          laptopRig.style.animationPlayState = 'paused';
        }
        return;
      }
      if (freezeStage === 'closed') {
        if (laptopRig) {
          laptopRig.classList.remove('scene-arriving', 'scene-opened', 'diving');
          laptopRig.classList.add('scene-closed');
        }
        return;
      }
      if (freezeStage === 'halfway') {
        if (laptopRig) {
          laptopRig.classList.remove('scene-arriving', 'scene-closed');
          laptopRig.classList.add('scene-opened');
          laptopRig.style.transition = 'none';
        }
        if (lidEl) {
          lidEl.style.transition = 'none';
          lidEl.style.transform = 'rotateX(-35deg)';
        }
        return;
      }
      if (freezeStage === 'enter') {
        if (laptopRig) {
          laptopRig.classList.remove('scene-arriving', 'scene-closed');
          laptopRig.classList.add('scene-opened');
          laptopRig.style.transition = 'none';
        }
        if (kbEnterKey) kbEnterKey.classList.add('pressed');
        return;
      }
      if (freezeStage === 'pulse') {
        if (laptopRig) {
          laptopRig.classList.remove('scene-arriving', 'scene-closed');
          laptopRig.classList.add('scene-opened');
          laptopRig.style.transition = 'none';
        }
        if (kbTravelPulse) kbTravelPulse.classList.add('traveling');
        return;
      }
      if (freezeStage === 'open') {
        if (laptopRig) {
          laptopRig.classList.remove('scene-arriving', 'scene-closed');
          laptopRig.classList.add('scene-opened');
          laptopRig.style.transition = 'none';
        }
        if (laptopDisplay) laptopDisplay.classList.add('illuminated');
        if (displayComp) displayComp.classList.add('active');
        if (studioBackdrop) studioBackdrop.classList.add('screen-lit');
        return;
      }
      if (freezeStage === 'anticipation') {
        if (laptopRig) {
          laptopRig.classList.remove('scene-arriving', 'scene-closed');
          laptopRig.classList.add('scene-opened');
          laptopRig.style.transition = 'none';
        }
        if (laptopDisplay) laptopDisplay.classList.add('illuminated', 'anticipating');
        if (displayComp) displayComp.classList.add('active');
        if (studioBackdrop) studioBackdrop.classList.add('screen-lit');
        return;
      }
      if (freezeStage === 'dive') {
        if (laptopRig) {
          laptopRig.className = 'laptop-rig diving';
          laptopRig.style.transition = 'none';
        }
        if (laptopDisplay) laptopDisplay.classList.add('illuminated', 'anticipating');
        if (displayComp) displayComp.classList.add('active');
        if (studioBackdrop) studioBackdrop.classList.add('screen-lit');
        return;
      }
      if (freezeStage === 'welcome') {
        if (introWelcomeScreen) {
          introWelcomeScreen.classList.add('active');
        }
        return;
      }
    }

    // =========================================================================
    // SCENE A (0.0s – 1.5s): Laptop Arrival from Studio Darkness & Grounding
    // =========================================================================

    // =========================================================================
    // SCENE B (1.5s – 3.8s): Physical Lid Opens on Hinge & Camera Faces Display
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopRig) {
        laptopRig.classList.remove('scene-arriving', 'scene-closed');
        laptopRig.classList.add('scene-opened');
      }
    }, 1500));

    // =========================================================================
    // SCENE C (3.8s – 4.6s): Automatic Enter-Key Press & Light Pulse to Display
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (kbEnterKey) kbEnterKey.classList.add('pressed');
    }, 3800));

    introTimers.push(setTimeout(() => {
      if (kbEnterKey) kbEnterKey.classList.remove('pressed');
      if (kbTravelPulse) kbTravelPulse.classList.add('traveling');
    }, 4050));

    // =========================================================================
    // SCENE E (4.5s – 5.8s): Screen Power-Up, Network Routes, Display Illumination
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopDisplay) laptopDisplay.classList.add('illuminated');
      if (displayComp) displayComp.classList.add('active');
      if (studioBackdrop) studioBackdrop.classList.add('screen-lit');
    }, 4500));

    // =========================================================================
    // SCENE D (5.8s – 6.8s): Anticipation Glow, Inward Rays & Particle Convergence
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopDisplay) laptopDisplay.classList.add('anticipating');
    }, 5800));

    // =========================================================================
    // SCENE F (6.8s – 8.0s): Camera Dives into Display Center -> Perspective Tunnel
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopRig) laptopRig.classList.add('diving');
    }, 6800));

    introTimers.push(setTimeout(() => {
      if (cobaltTunnel) cobaltTunnel.classList.add('active');
    }, 7400));

    // =========================================================================
    // STAGE C (8.0s): Seamless Reveal of Swiss Editorial Welcome Screen
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (introWelcomeScreen) {
        introWelcomeScreen.classList.add('active');
      }
      if (welcomeExploreBtn) {
        welcomeExploreBtn.focus();
      }
    }, 8000));
  }

  // Refresh behavior: Every full page refresh restarts the cinematic intro from its first frame.
  // Normal in-page navigation (clicking anchor links) does not reload the page or restart the intro.
  runCinematicIntro();

  // Manual Play Intro Control (fallback when browser blocks autoplay)
  if (introPlayBtn) {
    introPlayBtn.addEventListener('click', () => {
      if (laptopScreenVideo) {
        laptopScreenVideo.play().then(() => {
          introPlayBtn.classList.add('hidden');
        }).catch(() => {});
      }
    });
  }

  // =========================================================================
  // SINGLE SWISS EDITORIAL THEME ENFORCEMENT (Phase 15.3)
  // =========================================================================
  // Clear any legacy saved theme so visitors always enjoy the warm Swiss Editorial design
  try {
    localStorage.removeItem('portfolio_theme');
  } catch (_) {}
  document.documentElement.setAttribute('data-theme', 'editorial');
  document.body.setAttribute('data-theme', 'editorial');

  // =========================================================================
  // WELCOME REEL PROJECTS CONFIGURATION & INTERACTION (Phase 15.4)
  // Maintainable single configuration array for the 6 welcome reel projects.
  // Facilitates rapid replacement of images and clearly marks temporary placeholders.
  // =========================================================================
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

  // Wire Welcome Reel Card Click Interactions (Dismiss Intro & Scroll to Project)
  const welcomeReelCards = document.querySelectorAll('.welcome-reel-card');
  welcomeReelCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = card.getAttribute('data-project-id');
      if (targetId) {
        finishIntro(false, false, targetId);
      }
    });
  });

  // Stage C Primary Action: Explore Portfolio Button (Enters Swiss Editorial Portfolio)
  if (welcomeExploreBtn) {
    welcomeExploreBtn.addEventListener('click', () => finishIntro(false, false));
  }

  // Stage C Secondary Action: Skip Directly to Projects
  if (welcomeSkipBtn) {
    welcomeSkipBtn.addEventListener('click', () => finishIntro(false, true));
  }

  function skipToWelcome() {
    clearIntroTimers();
    if (laptopRig) {
      laptopRig.className = 'laptop-rig scene-opened';
    }
    if (introWelcomeScreen) {
      introWelcomeScreen.classList.add('active');
    }
    if (welcomeExploreBtn) {
      welcomeExploreBtn.focus();
    }
  }

  // Persistent Top-Right Skip Intro Button
  if (introSkipBtn) {
    introSkipBtn.addEventListener('click', () => {
      if (introWelcomeScreen && !introWelcomeScreen.classList.contains('active')) {
        skipToWelcome();
      } else {
        finishIntro(true, false);
      }
    });
  }

  // Global Keyboard Shortcuts (Escape to Skip Intro, Enter on Welcome to Explore Portfolio)
  document.addEventListener('keydown', (e) => {
    if (!introActive) return;
    if (e.key === 'Escape') {
      if (introWelcomeScreen && !introWelcomeScreen.classList.contains('active')) {
        skipToWelcome();
      } else {
        finishIntro(true, false);
      }
    } else if (e.key === 'Enter') {
      if (introWelcomeScreen && introWelcomeScreen.classList.contains('active')) {
        // If an interactive child element (button or link) is currently focused, let native event dispatch
        if (document.activeElement && (document.activeElement.tagName === 'A' || document.activeElement.tagName === 'BUTTON')) {
          return;
        }
        finishIntro(false, false);
      }
    }
  });

  // Replay Intro Trigger (Footer Colophon)
  function triggerReplay(e) {
    if (e && e.preventDefault) e.preventDefault();
    clearIntroTimers();
    window.scrollTo({ top: 0, behavior: 'instant' });
    runCinematicIntro();
  }

  if (footerReplayBtn) footerReplayBtn.addEventListener('click', triggerReplay);

  // =========================================================================
  // =========================================================================
  // 1. SCROLL PROGRESS TRACKER & STICKY NAV ACTIVE PILL
  // =========================================================================
  const scrollProgressBar = document.getElementById('scroll-progress');
  const navIndicatorPill = document.getElementById('nav-indicator-pill');
  const trackedSections = document.querySelectorAll('section[id]');
  const mainNav = document.getElementById('main-nav');

  function updateNavPill(activeLink) {
    if (!navIndicatorPill || !activeLink || !mainNav) return;
    const rect = activeLink.getBoundingClientRect();
    const parentRect = mainNav.getBoundingClientRect();
    navIndicatorPill.style.left = `${rect.left - parentRect.left}px`;
    navIndicatorPill.style.width = `${rect.width}px`;
    navIndicatorPill.style.opacity = '1';
  }

  function updateScrollSystems() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    // Sticky Nav Active Link Spy
    let currentSectionId = '';
    trackedSections.forEach(section => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;
      if (scrollTop >= top && scrollTop < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      const activeLink = document.querySelector(`.nav-link[data-nav="${currentSectionId}"]`);
      if (activeLink) {
        updateNavPill(activeLink);
      }
    } else if (scrollTop < 250 && navIndicatorPill) {
      navIndicatorPill.style.opacity = '0';
    }

    // Layered Parallax for Background Project Numbers
    if (!isTouchDevice && !prefersReducedMotion) {
      document.querySelectorAll('.project-card').forEach(card => {
        const bgNum = card.querySelector('.project-bg-number');
        if (!bgNum) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const distFromCenter = rect.top - (window.innerHeight / 2);
          bgNum.style.transform = `translate3d(0, ${distFromCenter * 0.1}px, 0)`;
        }
      });
    }
  }

  window.addEventListener('scroll', updateScrollSystems, { passive: true });
  window.addEventListener('resize', updateScrollSystems, { passive: true });
  setTimeout(updateScrollSystems, 250);

  // =========================================================================
  // 2. KINETIC HEADLINE TYPOGRAPHY ROTATOR (SEAMLESS SEQUENTIAL ROTATION)
  // =========================================================================
  const kineticWrapper = document.getElementById('kinetic-wrapper');
  if (kineticWrapper) {
    const words = Array.from(kineticWrapper.querySelectorAll('.kinetic-word'));
    let currentIndex = 0;

    function updateHeadlineWidth(idx) {
      if (!words[idx]) return;
      const targetWord = words[idx];
      const wordWidth = Math.ceil(targetWord.getBoundingClientRect().width || targetWord.scrollWidth || targetWord.offsetWidth);
      if (wordWidth > 0) {
        kineticWrapper.style.width = `${wordWidth + 6}px`;
      }
    }

    // Set initial width to match active word
    updateHeadlineWidth(0);

    // Recalculate on web font load and viewport resize
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => updateHeadlineWidth(currentIndex));
    }
    window.addEventListener('resize', () => updateHeadlineWidth(currentIndex), { passive: true });

    if (!prefersReducedMotion && words.length > 1) {
      setInterval(() => {
        const currentWord = words[currentIndex];
        currentWord.classList.remove('active');
        currentWord.classList.add('exit-up');

        currentIndex = (currentIndex + 1) % words.length;
        const nextWord = words[currentIndex];

        // Smoothly adjust container width for next word to prevent clipping or text overlap
        updateHeadlineWidth(currentIndex);

        nextWord.classList.remove('exit-up');
        nextWord.classList.add('active');

        setTimeout(() => {
          currentWord.classList.remove('exit-up');
        }, 650);
      }, 2800);
    }
  }

  // =========================================================================
  // 4. NATIVE RESTRAINED CURSOR (Clean native pointers across interactive elements)
  // Obsolete custom cursor and butterfly event listeners removed.
  // =========================================================================

  // =========================================================================
  // 6. 3D TILT & PARALLAX PHYSICS FOR PROJECT CARDS
  // =========================================================================
  if (!isTouchDevice && !prefersReducedMotion) {
    document.querySelectorAll('.tilt-card').forEach(card => {
      const media = card.querySelector('.tilt-media-target');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((cardY - centerY) / centerY) * -3.2;
        const rotateY = ((cardX - centerX) / centerX) * 3.2;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        if (media) {
          const moveX = ((cardX - centerX) / centerX) * 9;
          const moveY = ((cardY - centerY) / centerY) * 9;
          media.style.transform = `translate3d(${moveX}px, ${moveY}px, 16px)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        if (media) {
          media.style.transform = 'translate3d(0, 0, 0)';
        }
      });
    });
  }

  // =========================================================================
  // 7. MAGNETIC BUTTON PHYSICS WITH INNER 3D DEPTH
  // =========================================================================
  if (!isTouchDevice && !prefersReducedMotion) {
    document.querySelectorAll('.magnetic-target').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.24}px, ${y * 0.24}px)`;
        
        // Inner depth offset for icon/label
        Array.from(btn.children).forEach(child => {
          child.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
        });
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        Array.from(btn.children).forEach(child => {
          child.style.transform = 'translate(0, 0)';
        });
      });
    });
  }

  // =========================================================================
  // 8. STAGGERED SCROLL STORYTELLER & COUNTER ANIMATION
  // =========================================================================
  const revealElements = document.querySelectorAll('[data-reveal]');
  const dividerElements = document.querySelectorAll('.editorial-divider');
  const counterElements = document.querySelectorAll('.counter');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const isPlus = counter.textContent.includes('+');
      let count = 0;
      const speed = 25;
      const increment = Math.max(1, Math.ceil(target / speed));
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          counter.textContent = (target < 10 && !isPlus ? `0${target}` : target) + (isPlus ? '+' : '');
          clearInterval(timer);
        } else {
          counter.textContent = (count < 10 && !isPlus ? `0${count}` : count) + (isPlus ? '+' : '');
        }
      }, 35);
    });
  }

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);

          if (entry.target.contains(document.querySelector('.counter'))) {
            animateCounters();
          }

          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Editorial Divider Line Animator
    const dividerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('drawn');
        }
      });
    }, { threshold: 0.2 });

    dividerElements.forEach(d => dividerObserver.observe(d));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
    dividerElements.forEach(d => d.classList.add('drawn'));
    animateCounters();
  }

  // =========================================================================
  // 8. VERIFIED TECHNICAL CASE STUDIES DICTIONARY
  // =========================================================================
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
              <td>Implemented in local repository (<code>E:\\LLM_LMS_PROJECT</code>); adapter trained and evaluated locally against 15 academic benchmark questions.</td>
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

  // =========================================================================
  // 9. CASE STUDY DRAWER CONTROLLER
  // =========================================================================
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('case-study-drawer');
  const drawerNum = document.getElementById('drawer-num');
  const drawerBadge = document.getElementById('drawer-badge');
  const drawerBody = document.getElementById('drawer-body');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerFooterClose = document.getElementById('drawer-footer-close');

  function openCaseStudy(projectId) {
    const data = CASE_STUDIES[projectId];
    if (!data) return;

    drawerNum.textContent = data.number;
    drawerBadge.textContent = data.badge;
    
    drawerBody.innerHTML = `
      <h2 class="drawer-title-large" id="drawer-title">${data.title}</h2>
      <h3 class="drawer-sub-large">${data.subtitle}</h3>
      ${data.content}
    `;

    drawerBackdrop.classList.add('active');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Accessible focus management: focus close button
    setTimeout(() => {
      if (drawerCloseBtn) drawerCloseBtn.focus();
    }, 60);

    // Update URL hash without jumping
    history.replaceState(null, '', `#case-study-${projectId}`);
  }

  function closeCaseStudy() {
    drawerBackdrop.classList.remove('active');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Clear hash if it was a case study
    if (window.location.hash.startsWith('#case-study-')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  // Attach click listeners to case study triggers
  document.querySelectorAll('.open-case-study').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project');
      if (projectId) {
        openCaseStudy(projectId);
      }
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const projectId = trigger.getAttribute('data-project');
        if (projectId) {
          openCaseStudy(projectId);
        }
      }
    });
  });

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeCaseStudy);
  if (drawerFooterClose) drawerFooterClose.addEventListener('click', closeCaseStudy);
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        closeCaseStudy();
      }
    });
  }

  // Escape key listener to close drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerBackdrop.classList.contains('active')) {
      closeCaseStudy();
    }
  });

  // Check URL on load for hash navigation
  if (window.location.hash.startsWith('#case-study-')) {
    const id = window.location.hash.replace('#case-study-', '');
    if (CASE_STUDIES[id]) {
      openCaseStudy(id);
    }
  }

  // =========================================================================
  // 10. PROJECT CATEGORY FILTER
  // =========================================================================
  // 10. PROJECT CATEGORY FILTER (Integrated with Phase 9 Horizontal Gallery)
  // Handled dynamically in Phase 9 Horizontal Gallery Controller below

  // =========================================================================
  // 11. COPY EMAIL TO CLIPBOARD WITH TOAST FEEDBACK
  // =========================================================================
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const emailText = 'abhineog06@gmail.com';

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText).then(() => {
        const copySpan = copyBtn.querySelector('.copy-text');
        if (copySpan) copySpan.textContent = 'Copied!';
        showToast('Email address copied to clipboard: abhineog06@gmail.com');
        setTimeout(() => {
          if (copySpan) copySpan.textContent = 'Copy';
        }, 2000);
      }).catch(() => {
        showToast('Failed to copy. Please write to abhineog06@gmail.com');
      });
    });
  }

  // =========================================================================
  // 12. LIVE BANGALORE (IST) STATION CLOCK
  // =========================================================================
  const clockElement = document.getElementById('live-bangalore-clock');

  function updateBangaloreTime() {
    if (!clockElement) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      clockElement.textContent = `${formatter.format(now)} IST`;
    } catch {
      clockElement.textContent = new Date().toLocaleTimeString();
    }
  }

  updateBangaloreTime();
  setInterval(updateBangaloreTime, 1000);

  // =========================================================================
  // 13. CONTACT FORM SUBMISSION HANDLER
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        formFeedback.textContent = 'Please fill in all required fields.';
        formFeedback.style.color = 'var(--color-coral)';
        return;
      }

      formFeedback.textContent = `Thank you, ${name}. Your message regarding "${subject}" has been received. I will respond to ${email} promptly.`;
      formFeedback.className = 'form-feedback success';
      contactForm.reset();
      showToast('Message sent successfully!');
    });
  }

  // =========================================================================
  // 14. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('active');
      mobileMenu.setAttribute('aria-hidden', String(expanded));
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // =========================================================================
  // 15. STICKY HEADER SHADOW ON SCROLL
  // =========================================================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // =========================================================================
  // 16. PHASE 8: INTERACTIVE PROJECT SHOWCASES (TABS, SCANNERS, RXJS STATE)
  // =========================================================================

  // A. Generic Preview Tabs Handler (TRACE-X, Campus Copilot, Log Analyzer, Phish Guard)
  document.querySelectorAll('.preview-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-tab-group');
      const targetId = btn.getAttribute('data-tab-target');
      if (!group || !targetId) return;

      // Update button states in same group
      document.querySelectorAll(`.preview-tab-btn[data-tab-group="${group}"]`).forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panels in same card
      const card = btn.closest('.preview-frame');
      if (card) {
        card.querySelectorAll('.preview-view-panel').forEach(p => {
          p.classList.remove('active');
          // If switching away from a video panel, pause it
          const v = p.querySelector('video');
          if (v && !v.paused) {
            v.pause();
            const toggle = p.querySelector('.video-play-toggle-btn');
            if (toggle) {
              const icon = toggle.querySelector('.video-play-icon');
              const label = toggle.querySelector('.video-play-label');
              if (icon) icon.textContent = '▶';
              if (label) label.textContent = 'Play Video';
            }
          }
        });
        const targetPanel = card.querySelector(`#${targetId}`);
        if (targetPanel) targetPanel.classList.add('active');
      }
    });
  });

  // Authentic Video Demonstration Playback Controls
  document.querySelectorAll('.video-play-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const container = btn.closest('.preview-media-container');
      if (!container) return;
      const video = container.querySelector('video');
      const icon = btn.querySelector('.video-play-icon');
      const label = btn.querySelector('.video-play-label');
      if (!video) return;

      if (video.paused) {
        video.play().then(() => {
          if (icon) icon.textContent = '⏸';
          if (label) label.textContent = 'Pause Video';
        }).catch(() => {});
      } else {
        video.pause();
        if (icon) icon.textContent = '▶';
        if (label) label.textContent = 'Play Video';
      }
    });
  });

  // SFAS OpenCV Real-time Camera Feed Toggle
  const sfasStreamToggle = document.getElementById('sfas-stream-toggle');
  const sfasFaceVideo = document.getElementById('sfas-face-video');
  if (sfasStreamToggle && sfasFaceVideo) {
    sfasStreamToggle.addEventListener('click', () => {
      if (sfasFaceVideo.paused) {
        sfasFaceVideo.play().then(() => {
          sfasStreamToggle.querySelector('span:last-child').textContent = 'STREAM LIVE';
          const dot = sfasStreamToggle.querySelector('.stream-live-dot');
          if (dot) dot.style.animation = 'liveDotPulse 1.5s infinite';
        }).catch(() => {});
      } else {
        sfasFaceVideo.pause();
        sfasStreamToggle.querySelector('span:last-child').textContent = 'STREAM PAUSED';
        const dot = sfasStreamToggle.querySelector('.stream-live-dot');
        if (dot) dot.style.animation = 'none';
      }
    });
  }

  // B. Phish Guard Interactive Shannon Entropy Simulator
  const btnScanSafe = document.getElementById('btn-scan-safe');
  const btnScanPhish = document.getElementById('btn-scan-phish');
  const scannerUrlText = document.getElementById('scanner-url-text');
  const metricEntropy = document.getElementById('metric-entropy');
  const metricFeatures = document.getElementById('metric-features');
  const scannerVerdict = document.getElementById('scanner-verdict');

  if (btnScanSafe && btnScanPhish && scannerUrlText) {
    btnScanSafe.addEventListener('click', () => {
      btnScanSafe.className = 'scanner-btn active-safe';
      btnScanPhish.className = 'scanner-btn';
      scannerUrlText.textContent = 'https://github.com/AbhigyanNeog/PhishGuard';
      if (metricEntropy) metricEntropy.textContent = '3.64 bits';
      if (metricFeatures) metricFeatures.textContent = 'Len: 42 • IPv4: No';
      if (scannerVerdict) {
        scannerVerdict.className = 'scanner-verdict-banner verdict-safe';
        scannerVerdict.innerHTML = '<span>CLASSIFICATION: 98.1% LEGITIMATE (SAFE)</span><span>RANDOM FOREST</span>';
      }
    });

    btnScanPhish.addEventListener('click', () => {
      btnScanPhish.className = 'scanner-btn active-phish';
      btnScanSafe.className = 'scanner-btn';
      scannerUrlText.textContent = 'http://paypal-security-login.update-token.xyz/auth?id=99281';
      if (metricEntropy) metricEntropy.textContent = '4.89 bits';
      if (metricFeatures) metricFeatures.textContent = 'Len: 68 • IPv4: Yes';
      if (scannerVerdict) {
        scannerVerdict.className = 'scanner-verdict-banner verdict-phish';
        scannerVerdict.innerHTML = '<span>CLASSIFICATION: 94.2% PHISHING PROBABILITY</span><span>FLAGGED ⚠</span>';
      }
    });
  }

  // C. E-Platform RxJS Cart State Inspector
  const cartState = {
    item1: { qty: 1, price: 129.99 },
    item2: { qty: 1, price: 199.99 },
    promo: null
  };

  function updateCartInspectorUI() {
    const qty1El = document.getElementById('qty-item1');
    const qty2El = document.getElementById('qty-item2');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const discountRow = document.getElementById('promo-discount-row');
    const discountEl = document.getElementById('cart-discount');
    const totalEl = document.getElementById('cart-net-total');

    if (qty1El) qty1El.textContent = cartState.item1.qty;
    if (qty2El) qty2El.textContent = cartState.item2.qty;

    const subtotal = (cartState.item1.qty * cartState.item1.price) + (cartState.item2.qty * cartState.item2.price);
    const tax = subtotal * 0.08;
    let discount = 0;

    if (cartState.promo === 'SAVE10') discount = subtotal * 0.10;
    else if (cartState.promo === 'SAVE20') discount = subtotal * 0.20;
    else if (cartState.promo === 'WELCOME') discount = Math.min(15.00, subtotal);

    const netTotal = Math.max(0, subtotal + tax - discount);

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (discountRow && discountEl) {
      if (discount > 0) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `-$${discount.toFixed(2)} (${cartState.promo})`;
      } else {
        discountRow.style.display = 'none';
      }
    }
    if (totalEl) totalEl.textContent = `$${netTotal.toFixed(2)}`;
  }

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemKey = btn.getAttribute('data-item');
      if (!itemKey || !cartState[itemKey]) return;
      if (btn.classList.contains('btn-inc')) {
        if (cartState[itemKey].qty < 9) cartState[itemKey].qty++;
      } else if (btn.classList.contains('btn-dec')) {
        if (cartState[itemKey].qty > 0) cartState[itemKey].qty--;
      }
      updateCartInspectorUI();
    });
  });

  document.querySelectorAll('.promo-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-promo');
      cartState.promo = code === 'RESET' ? null : code;
      updateCartInspectorUI();
      if (code !== 'RESET') {
        showToast(`RxJS Stream: promo applied "${code}"`);
      }
    });
  });
  // =========================================================================
  // PHASE 9: STAGE E — HORIZONTAL PROJECT GALLERY & CONTROLS
  // =========================================================================
  const galleryTrack = document.getElementById('gallery-track');
  const galleryViewport = document.getElementById('gallery-viewport');
  const galleryPrevBtn = document.getElementById('gallery-prev-btn');
  const galleryNextBtn = document.getElementById('gallery-next-btn');
  const galleryCounterCurr = document.getElementById('gallery-counter-curr');
  const galleryProgressFill = document.getElementById('gallery-progress-fill');
  const galleryPills = document.querySelectorAll('.gallery-pill');
  const allProjectArticles = galleryTrack ? galleryTrack.querySelectorAll('.project-card') : [];
  const TOTAL_PROJECTS = allProjectArticles.length || 8;
  let currentProjectSlide = 0;

  function syncGalleryViewportHeight() {
    if (!galleryViewport || !allProjectArticles.length) return;
    const activeCard = allProjectArticles[currentProjectSlide];
    if (activeCard) {
      const cardHeight = activeCard.offsetHeight;
      if (cardHeight > 0) {
        galleryViewport.style.height = `${cardHeight}px`;
      }
    }
  }

  function updateGalleryUI(index) {
    currentProjectSlide = Math.max(0, Math.min(index, TOTAL_PROJECTS - 1));

    if (galleryTrack) {
      galleryTrack.style.transform = `translateX(-${currentProjectSlide * 100}%)`;
    }

    syncGalleryViewportHeight();

    if (galleryCounterCurr) {
      galleryCounterCurr.textContent = String(currentProjectSlide + 1).padStart(2, '0');
    }

    if (galleryProgressFill) {
      const pct = ((currentProjectSlide + 1) / TOTAL_PROJECTS) * 100;
      galleryProgressFill.style.width = `${pct}%`;
    }

    galleryPills.forEach((pill, idx) => {
      const isActive = idx === currentProjectSlide;
      pill.classList.toggle('active', isActive);
      pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) {
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    });

    if (galleryPrevBtn) {
      galleryPrevBtn.disabled = currentProjectSlide === 0;
    }
    if (galleryNextBtn) {
      galleryNextBtn.disabled = currentProjectSlide === TOTAL_PROJECTS - 1;
    }

    // Auto-pause video playback on inactive slides
    if (galleryTrack) {
      const cards = galleryTrack.querySelectorAll('.project-card');
      cards.forEach((card, idx) => {
        if (idx !== currentProjectSlide) {
          const videos = card.querySelectorAll('video');
          videos.forEach(v => {
            if (!v.paused) {
              v.pause();
              const toggle = card.querySelector('.video-play-toggle-btn');
              if (toggle) {
                const icon = toggle.querySelector('.video-play-icon');
                const label = toggle.querySelector('.video-play-label');
                if (icon) icon.textContent = '▶';
                if (label) label.textContent = 'Play Video';
              }
            }
          });
        }
      });
    }
  }
  window.goToGallerySlide = updateGalleryUI;

  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener('click', () => {
      if (currentProjectSlide > 0) {
        updateGalleryUI(currentProjectSlide - 1);
      }
    });
  }

  if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', () => {
      if (currentProjectSlide < TOTAL_PROJECTS - 1) {
        updateGalleryUI(currentProjectSlide + 1);
      }
    });
  }

  galleryPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const slideIdx = parseInt(pill.getAttribute('data-slide'), 10);
      if (!isNaN(slideIdx)) {
        updateGalleryUI(slideIdx);
      }
    });
  });

  // Category filter buttons integration with horizontal slider
  const categoryFilters = document.querySelectorAll('.filter-btn');
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      categoryFilters.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      if (filter === 'all') {
        updateGalleryUI(0);
      } else {
        let foundIdx = -1;
        allProjectArticles.forEach((card, idx) => {
          if (foundIdx === -1 && card.getAttribute('data-category') === filter) {
            foundIdx = idx;
          }
        });
        if (foundIdx !== -1) {
          updateGalleryUI(foundIdx);
        }
      }
    });
  });

  // Arrow Keys Navigation when viewing project gallery
  document.addEventListener('keydown', (e) => {
    if (!galleryViewport) return;
    if (introActive) return;
    if (drawerBackdrop && drawerBackdrop.classList.contains('active')) return;

    const rect = galleryViewport.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
    if (!isVisible) return;

    if (e.key === 'ArrowRight') {
      if (currentProjectSlide < TOTAL_PROJECTS - 1) {
        e.preventDefault();
        updateGalleryUI(currentProjectSlide + 1);
      }
    } else if (e.key === 'ArrowLeft') {
      if (currentProjectSlide > 0) {
        e.preventDefault();
        updateGalleryUI(currentProjectSlide - 1);
      }
    }
  });

  // Touch Swipe for mobile navigation
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  if (galleryViewport) {
    galleryViewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    galleryViewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX > 0 && currentProjectSlide < TOTAL_PROJECTS - 1) {
          updateGalleryUI(currentProjectSlide + 1);
        } else if (diffX < 0 && currentProjectSlide > 0) {
          updateGalleryUI(currentProjectSlide - 1);
        }
      }
    }, { passive: true });
  }

  // Scoped horizontal trackpad gesture exclusively for gallery viewport
  // Uses passive wheel listener, strictly respecting vertical scroll without trapping users
  let trackpadWheelTimeout = null;
  if (galleryViewport) {
    galleryViewport.addEventListener('wheel', (e) => {
      // Gesture must be dominantly horizontal (deltaX > 1.4 * deltaY)
      const isHorizontalDominant = Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.4 && Math.abs(e.deltaX) > 22;
      if (!isHorizontalDominant) return; // Allow normal vertical scrolling!

      if (trackpadWheelTimeout) return;

      if (e.deltaX > 22 && currentProjectSlide < TOTAL_PROJECTS - 1) {
        updateGalleryUI(currentProjectSlide + 1);
        trackpadWheelTimeout = setTimeout(() => { trackpadWheelTimeout = null; }, 400);
      } else if (e.deltaX < -22 && currentProjectSlide > 0) {
        updateGalleryUI(currentProjectSlide - 1);
        trackpadWheelTimeout = setTimeout(() => { trackpadWheelTimeout = null; }, 400);
      }
    }, { passive: true });
  }

  // Initial gallery position & viewport height synchronization
  updateGalleryUI(0);
  window.addEventListener('resize', syncGalleryViewportHeight);
  window.addEventListener('load', syncGalleryViewportHeight);
  setTimeout(syncGalleryViewportHeight, 150);
  setTimeout(syncGalleryViewportHeight, 500);

});


