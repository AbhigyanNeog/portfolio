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

    const featuredPlateVideo = document.querySelector('.plate-video');
    if (featuredPlateVideo && featuredPlateVideo.paused) {
      featuredPlateVideo.play().catch(() => {});
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
      if (laptopRig) laptopRig.classList.remove('diving', 'scene-opened', 'scene-closed', 'scene-opening');
      if (laptopDisplay) laptopDisplay.classList.remove('illuminated', 'anticipating');
      if (cobaltTunnel) cobaltTunnel.classList.remove('active');
      executeDestination();
    } else {
      introEl.classList.add('fade-out');
      setTimeout(() => {
        introEl.classList.add('hidden');
        introEl.classList.remove('fade-out');
        if (laptopRig) laptopRig.classList.remove('diving', 'scene-opened', 'scene-closed', 'scene-opening');
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

    // Reset all intro elements to initial frame state: 3/4 grounded studio view (NO arrival from right)
    introEl.classList.remove('hidden', 'fade-out');
    if (introWelcomeScreen) {
      introWelcomeScreen.classList.remove('active');
    }
    if (laptopRig) {
      laptopRig.classList.remove('scene-opened', 'scene-opening', 'diving');
      laptopRig.style.transition = '';
      laptopRig.style.animationPlayState = '';
      // Force layout reflow before setting initial closed state
      void laptopRig.offsetWidth;
      laptopRig.classList.add('scene-closed');
    }
    const lidEl = document.getElementById('laptop-lid');
    if (lidEl) {
      lidEl.style.transition = '';
      lidEl.style.transform = '';
    }
    const hingeEl = document.getElementById('laptop-hinge');
    if (hingeEl) {
      hingeEl.style.transition = '';
      hingeEl.style.transform = '';
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
      if (freezeStage === 'closed') {
        if (laptopRig) {
          laptopRig.className = 'laptop-rig scene-closed';
          laptopRig.style.transition = 'none';
        }
        return;
      }
      if (freezeStage === 'opening' || freezeStage === 'halfway') {
        if (laptopRig) {
          laptopRig.className = 'laptop-rig scene-opening';
          laptopRig.style.transition = 'none';
        }
        return;
      }
      if (freezeStage === 'opened') {
        if (laptopRig) {
          laptopRig.className = 'laptop-rig scene-opened';
          laptopRig.style.transition = 'none';
        }
        return;
      }
      if (freezeStage === 'enter') {
        if (laptopRig) {
          laptopRig.className = 'laptop-rig scene-opened';
          laptopRig.style.transition = 'none';
        }
        if (kbEnterKey) kbEnterKey.classList.add('pressed');
        return;
      }
      if (freezeStage === 'pulse') {
        if (laptopRig) {
          laptopRig.className = 'laptop-rig scene-opened';
          laptopRig.style.transition = 'none';
        }
        if (kbTravelPulse) kbTravelPulse.classList.add('traveling');
        return;
      }
      if (freezeStage === 'open' || freezeStage === 'illuminated') {
        if (laptopRig) {
          laptopRig.className = 'laptop-rig scene-opened';
          laptopRig.style.transition = 'none';
        }
        if (laptopDisplay) laptopDisplay.classList.add('illuminated');
        if (displayComp) displayComp.classList.add('active');
        if (studioBackdrop) studioBackdrop.classList.add('screen-lit');
        return;
      }
      if (freezeStage === 'anticipation') {
        if (laptopRig) {
          laptopRig.className = 'laptop-rig scene-opened';
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
    // SCENE 1 (0.2s – 1.6s): Physical Lid Opens on Hinge in 3/4 Studio View
    // Starts directly in place at 3/4 studio angle (NO arrival from right side)
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopRig) {
        laptopRig.classList.remove('scene-closed');
        laptopRig.classList.add('scene-opening');
      }
    }, 200));

    // =========================================================================
    // SCENE 2 (1.7s – 2.3s): Camera Glides Smoothly to Face Display Center
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopRig) {
        laptopRig.classList.remove('scene-opening');
        laptopRig.classList.add('scene-opened');
      }
    }, 1700));

    // =========================================================================
    // SCENE 3 (2.4s – 3.0s): Automatic Enter-Key Press & Light Pulse to Display
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (kbEnterKey) kbEnterKey.classList.add('pressed');
    }, 2400));

    introTimers.push(setTimeout(() => {
      if (kbEnterKey) kbEnterKey.classList.remove('pressed');
      if (kbTravelPulse) kbTravelPulse.classList.add('traveling');
    }, 2650));

    // =========================================================================
    // SCENE 4 (3.2s – 4.4s): Screen Illumination, Computational Identity & Ambient Pulse
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopDisplay) laptopDisplay.classList.add('illuminated');
      if (displayComp) displayComp.classList.add('active');
      if (studioBackdrop) studioBackdrop.classList.add('screen-lit');
    }, 3200));

    // =========================================================================
    // SCENE 5 (4.4s – 5.6s): Anticipation Glow, Inward Rays & Particle Convergence
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopDisplay) laptopDisplay.classList.add('anticipating');
    }, 4400));

    // =========================================================================
    // SCENE 6 (5.6s – 6.8s): Camera Dives into Display Center -> Perspective Cobalt Tunnel
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopRig) laptopRig.classList.add('diving');
    }, 5600));

    introTimers.push(setTimeout(() => {
      if (cobaltTunnel) cobaltTunnel.classList.add('active');
    }, 6200));

    // =========================================================================
    // STAGE 7 (6.8s): Seamless Reveal of Swiss Editorial Welcome Screen
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (introWelcomeScreen) {
        introWelcomeScreen.classList.add('active');
      }
      if (welcomeExploreBtn) {
        welcomeExploreBtn.focus();
      }
    }, 6800));
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
  // WELCOME REEL PROJECTS CONFIGURATION & INTERACTION
  // Loaded from data/projects.js for clean content separation
  // =========================================================================
  const WELCOME_REEL_PROJECTS = (typeof window !== 'undefined' && window.WELCOME_REEL_PROJECTS)
    ? window.WELCOME_REEL_PROJECTS
    : [];

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
  // Loaded from data/projects.js for clean content separation
  // =========================================================================
  const CASE_STUDIES = (typeof window !== 'undefined' && window.CASE_STUDIES)
    ? window.CASE_STUDIES
    : (typeof window !== 'undefined' && window.PROJECT_CASE_STUDIES ? window.PROJECT_CASE_STUDIES : {});

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
      allProjectArticles.forEach(c => c.classList.add('revealed'));
      const cardHeight = activeCard.offsetHeight;
      if (cardHeight > 100) {
        galleryViewport.style.height = `${cardHeight}px`;
      }
    }
  }

  function updateGalleryUI(index) {
    currentProjectSlide = Math.max(0, Math.min(index, TOTAL_PROJECTS - 1));

    if (galleryTrack) {
      galleryTrack.style.transform = `translateX(-${currentProjectSlide * 100}%)`;
    }

    allProjectArticles.forEach(c => c.classList.add('revealed'));
    syncGalleryViewportHeight();
    requestAnimationFrame(() => syncGalleryViewportHeight());

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


