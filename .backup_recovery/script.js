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
  const introWelcomeScreen = document.getElementById('intro-welcome-screen');
  const welcomeExploreBtn = document.getElementById('welcome-explore-btn');
  const welcomeSkipBtn = document.getElementById('welcome-skip-btn');
  const introSkipBtn = document.getElementById('intro-skip-btn');
  const tickerReplayBtn = document.getElementById('ticker-replay-btn');
  const footerReplayBtn = document.getElementById('footer-replay-btn');
  const introScreenClock = document.getElementById('intro-screen-clock');

  const STORAGE_KEY = 'abhigyan_portfolio_intro_seen';
  const hasSeenIntro = sessionStorage.getItem(STORAGE_KEY) === 'true';
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

  function finishIntro(immediate = false, scrollToProjects = false, openUniverse = false) {
    if (!introEl) return;
    clearIntroTimers();
    introActive = false;
    sessionStorage.setItem(STORAGE_KEY, 'true');
    document.body.style.overflow = '';

    const executeDestination = () => {
      if (scrollToProjects) {
        const projSection = document.getElementById('projects');
        if (projSection) {
          projSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (openUniverse) {
        openUniverseHub();
      }
    };

    if (immediate) {
      introEl.classList.add('hidden');
      introEl.classList.remove('fade-out');
      if (laptopRig) laptopRig.classList.remove('diving');
      if (cobaltTunnel) cobaltTunnel.classList.remove('active');
      if (introWelcomeScreen) introWelcomeScreen.classList.remove('active');
      executeDestination();
    } else {
      introEl.classList.add('fade-out');
      setTimeout(() => {
        introEl.classList.add('hidden');
        introEl.classList.remove('fade-out');
        if (laptopRig) laptopRig.classList.remove('diving');
        if (cobaltTunnel) cobaltTunnel.classList.remove('active');
        if (introWelcomeScreen) introWelcomeScreen.classList.remove('active');
        executeDestination();
      }, 650);
    }
  }

  // =========================================================================
  // WELCOME STAGE C: INTERACTIVE NEURAL LATTICE DATA CANVAS
  // =========================================================================
  const neuralCanvas = document.getElementById('welcome-neural-canvas');
  let neuralAnimId = null;
  let neuralPoints = [];

  function initNeuralCanvas() {
    if (!neuralCanvas || prefersReducedMotion) return;
    const ctx = neuralCanvas.getContext('2d');
    if (!ctx) return;

    let width = neuralCanvas.width = window.innerWidth;
    let height = neuralCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      if (!neuralCanvas) return;
      width = neuralCanvas.width = window.innerWidth;
      height = neuralCanvas.height = window.innerHeight;
    }, { passive: true });

    const numPoints = Math.min(50, Math.floor((width * height) / 32000));
    neuralPoints = [];
    for (let i = 0; i < numPoints; i++) {
      neuralPoints.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 1.2,
        pulse: Math.random() * Math.PI * 2
      });
    }

    function renderNeural() {
      if (!introActive && (!introWelcomeScreen || !introWelcomeScreen.classList.contains('active'))) {
        neuralAnimId = requestAnimationFrame(renderNeural);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < neuralPoints.length; i++) {
        const pt = neuralPoints[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.pulse += 0.02;

        if (pt.x < 0) pt.x = width;
        else if (pt.x > width) pt.x = 0;
        if (pt.y < 0) pt.y = height;
        else if (pt.y > height) pt.y = 0;

        const currentR = pt.radius + Math.sin(pt.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, currentR, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? 'rgba(85, 214, 255, 0.75)' : 'rgba(65, 105, 255, 0.65)';
        ctx.shadowColor = '#55D6FF';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < neuralPoints.length; j++) {
          const pt2 = neuralPoints[j];
          const dx = pt.x - pt2.x;
          const dy = pt.y - pt2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 135) {
            const alpha = (1 - dist / 135) * 0.32;
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.strokeStyle = `rgba(85, 214, 255, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      neuralAnimId = requestAnimationFrame(renderNeural);
    }

    if (!neuralAnimId) {
      neuralAnimId = requestAnimationFrame(renderNeural);
    }
  }

  function runCinematicIntro() {
    if (!introEl) return;

    // Respect reduced motion preference: immediately show the static Welcome Screen
    if (prefersReducedMotion) {
      introActive = true;
      document.body.style.overflow = 'hidden';
      introEl.classList.remove('hidden', 'fade-out');
      if (introWelcomeScreen) {
        introWelcomeScreen.classList.add('active');
        initNeuralCanvas();
      }
      if (welcomeExploreBtn) welcomeExploreBtn.focus();
      return;
    }

    introActive = true;
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
    introEl.classList.remove('hidden', 'fade-out');
    if (laptopRig) laptopRig.classList.remove('diving');
    if (laptopDisplay) laptopDisplay.classList.remove('illuminated');
    if (displayOs) displayOs.classList.remove('active');
    if (cobaltTunnel) cobaltTunnel.classList.remove('active');
    if (introWelcomeScreen) introWelcomeScreen.classList.remove('active');

    // Force browser reflow to reset transition states
    void introEl.offsetWidth;

    // =========================================================================
    // STAGE A: Cinematic Laptop Workstation Reveal (0s - 2.4s)
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopDisplay) laptopDisplay.classList.add('illuminated');
      if (displayOs) displayOs.classList.add('active');
    }, 280));

    // =========================================================================
    // STAGE B: Smooth, Deliberate Camera Dive into Screen (2.4s - 5.6s)
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (laptopRig) laptopRig.classList.add('diving');
    }, 2400));

    introTimers.push(setTimeout(() => {
      if (cobaltTunnel) cobaltTunnel.classList.add('active');
    }, 3600));

    // =========================================================================
    // STAGE C: Welcome & Explore Screen Reveal (5.6s — PAUSES HERE!)
    // =========================================================================
    introTimers.push(setTimeout(() => {
      if (introWelcomeScreen) {
        introWelcomeScreen.classList.add('active');
        initNeuralCanvas();
      }
      if (welcomeExploreBtn) {
        welcomeExploreBtn.focus();
      }
      // Note: We do NOT auto-dismiss! The experience pauses here for the visitor.
    }, 5600));
  }

  // Initial Boot Check: Session Storage & Reduced Motion
  if (hasSeenIntro) {
    if (introEl) introEl.classList.add('hidden');
  } else {
    runCinematicIntro();
  }

  // Stage C Primary Action: Explore Portfolio Button (Opens 3D Engineering Universe)
  if (welcomeExploreBtn) {
    welcomeExploreBtn.addEventListener('click', () => finishIntro(false, false, true));
  }

  // Stage C Secondary Action: Skip Directly to Projects
  if (welcomeSkipBtn) {
    welcomeSkipBtn.addEventListener('click', () => finishIntro(false, true, false));
  }

  // Persistent Top-Right Skip Intro Button
  if (introSkipBtn) {
    introSkipBtn.addEventListener('click', () => finishIntro(false, false, false));
  }

  // Global Keyboard Shortcuts (Escape to Skip, Enter on Welcome to Explore Universe)
  document.addEventListener('keydown', (e) => {
    if (!introActive) return;
    if (e.key === 'Escape') {
      finishIntro(false, false, false);
    } else if (e.key === 'Enter') {
      const activeEl = document.activeElement;
      if (activeEl === welcomeSkipBtn) {
        finishIntro(false, true, false);
      } else if (introWelcomeScreen && introWelcomeScreen.classList.contains('active')) {
        finishIntro(false, false, true);
      }
    }
  });

  // Replay Intro Triggers (Ticker & Footer)
  function triggerReplay(e) {
    if (e && e.preventDefault) e.preventDefault();
    clearIntroTimers();
    sessionStorage.removeItem(STORAGE_KEY);
    window.scrollTo({ top: 0, behavior: 'instant' });
    runCinematicIntro();
  }

  if (tickerReplayBtn) tickerReplayBtn.addEventListener('click', triggerReplay);
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
  // 2. KINETIC HEADLINE TYPOGRAPHY ROTATOR (3D SLOT-ROLLER)
  // =========================================================================
  const kineticWrapper = document.getElementById('kinetic-wrapper');
  if (kineticWrapper && !prefersReducedMotion) {
    const words = kineticWrapper.querySelectorAll('.kinetic-word');
    let currentIndex = 0;

    setInterval(() => {
      const currentWord = words[currentIndex];
      currentWord.classList.remove('active');
      currentWord.classList.add('exit-up');

      currentIndex = (currentIndex + 1) % words.length;
      const nextWord = words[currentIndex];
      nextWord.classList.remove('exit-up');
      nextWord.classList.add('active');

      setTimeout(() => {
        currentWord.classList.remove('exit-up');
      }, 650);
    }, 2500);
  }

  // =========================================================================
  // 3. REAL-TIME OSCILLOSCOPE WAVEFORM & STUDIO TELEMETRY MONITOR
  // =========================================================================
  const waveCanvas = document.getElementById('stream-waveform');
  const studioComp = document.getElementById('studio-comp');
  const streamText = document.getElementById('stream-telemetry-text');
  const hudFps = document.getElementById('hud-fps');

  if (waveCanvas && !prefersReducedMotion) {
    const wCtx = waveCanvas.getContext('2d');
    let wWidth = waveCanvas.width;
    let wHeight = waveCanvas.height;
    let phase = 0;
    let scanX = 0;
    let isHovered = false;
    let targetSpeed = 0.04;
    let currentSpeed = 0.04;
    let targetAmp = 8;
    let currentAmp = 8;

    if (studioComp) {
      studioComp.addEventListener('mouseenter', () => {
        isHovered = true;
        targetSpeed = 0.09;
        targetAmp = 13;
        if (streamText) streamText.textContent = 'HIGH_SAMPLE_RATE // 120 FPS SCAN // BUFFER: OPTIMAL';
      });
      studioComp.addEventListener('mouseleave', () => {
        isHovered = false;
        targetSpeed = 0.04;
        targetAmp = 8;
        if (streamText) streamText.textContent = 'BUFFER_STREAM // 60.0 FPS // 0 ERRORS';
      });
    }

    let waveActive = !document.hidden;
    document.addEventListener('visibilitychange', () => {
      waveActive = !document.hidden;
      if (waveActive) requestAnimationFrame(renderWaveform);
    });

    function renderWaveform() {
      if (!waveActive) return;
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;
      currentAmp += (targetAmp - currentAmp) * 0.08;
      phase += currentSpeed;
      scanX = (scanX + 2.5) % wWidth;

      wCtx.clearRect(0, 0, wWidth, wHeight);

      // Center subtle guideline
      wCtx.strokeStyle = 'rgba(226, 218, 205, 0.45)';
      wCtx.lineWidth = 1;
      wCtx.setLineDash([2, 4]);
      wCtx.beginPath();
      wCtx.moveTo(0, wHeight / 2);
      wCtx.lineTo(wWidth, wHeight / 2);
      wCtx.stroke();
      wCtx.setLineDash([]);

      // Multi-harmonic synthesized waveform
      wCtx.beginPath();
      wCtx.lineWidth = 1.75;
      wCtx.strokeStyle = isHovered ? '#FF765B' : '#2449E8';

      for (let x = 0; x < wWidth; x++) {
        const norm = x / wWidth;
        const wave1 = Math.sin(norm * 14 + phase) * currentAmp;
        const wave2 = Math.sin(norm * 28 + phase * 1.6) * (currentAmp * 0.35);
        const y = (wHeight / 2) + wave1 + wave2;

        if (x === 0) {
          wCtx.moveTo(x, y);
        } else {
          wCtx.lineTo(x, y);
        }
      }
      wCtx.stroke();

      // Sweeping radar scan pulse line
      wCtx.fillStyle = 'rgba(36, 73, 232, 0.08)';
      wCtx.fillRect(scanX - 15, 0, 30, wHeight);

      wCtx.strokeStyle = isHovered ? '#FF765B' : 'rgba(36, 73, 232, 0.7)';
      wCtx.lineWidth = 1.5;
      wCtx.beginPath();
      wCtx.moveTo(scanX, 0);
      wCtx.lineTo(scanX, wHeight);
      wCtx.stroke();

      requestAnimationFrame(renderWaveform);
    }
    requestAnimationFrame(renderWaveform);
  }

  // =========================================================================
  // 4. CUSTOM DUAL-STAGE COBALT CURSOR WITH TRAIL & CONTEXT BADGES
  // =========================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorText = document.getElementById('cursor-text');

  // Mouse trajectory history for smooth cursor trail
  const trailHistory = [];
  const TRAIL_LENGTH = 7;

  if (cursorDot && cursorRing && !isTouchDevice && !prefersReducedMotion) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
        isVisible = true;
      }

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      // Update trail points
      trailHistory.push({ x: mouseX, y: mouseY, time: performance.now() });
      if (trailHistory.length > TRAIL_LENGTH) {
        trailHistory.shift();
      }
    });

    window.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
      isVisible = false;
      trailHistory.length = 0;
    });

    // Smooth Lerp loop for follower ring
    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Mouse click feedback
    window.addEventListener('mousedown', () => cursorRing.classList.add('clicking'));
    window.addEventListener('mouseup', () => cursorRing.classList.remove('clicking'));

    // Contextual Hover Detection
    function bindCursorContext(selector, text) {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorRing.classList.add('hovering');
          if (text && cursorText) {
            cursorText.textContent = text;
            cursorRing.classList.add('has-text');
          }
        });
        el.addEventListener('mouseleave', () => {
          cursorRing.classList.remove('hovering');
          if (cursorText) {
            cursorText.textContent = '';
            cursorRing.classList.remove('has-text');
          }
        });
      });
    }

    bindCursorContext('a, button, .mobile-toggle', '');
    bindCursorContext('.open-case-study', 'CASE STUDY');
    bindCursorContext('.project-card', 'VIEW');
    bindCursorContext('.preview-frame', 'INSPECT');
    bindCursorContext('#copy-email-btn, .email-link', 'COPY');
    bindCursorContext('.filter-btn', 'FILTER');
  }

  // =========================================================================
  // 5. SIGNATURE VECTOR BUTTERFLY INTERACTION SYSTEM
  // =========================================================================
  const butterflies = document.querySelectorAll('.butterfly');
  if (butterflies.length > 0 && !prefersReducedMotion && !isTouchDevice) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Subtle organic deflection when cursor comes near
      butterflies.forEach(b => {
        const rect = b.getBoundingClientRect();
        const bX = rect.left + rect.width / 2;
        const bY = rect.top + rect.height / 2;
        const dist = Math.hypot(mouseX - bX, mouseY - bY);

        if (dist < 160) {
          const angle = Math.atan2(bY - mouseY, bX - mouseX);
          const push = (160 - dist) * 0.16;
          b.style.transform = `translate3d(${Math.cos(angle) * push}px, ${Math.sin(angle) * push}px, 0)`;
        } else {
          b.style.transform = '';
        }
      });
    }, { passive: true });
  }

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
    tracex: {
      number: 'CASE STUDY 01 / 06',
      badge: 'CYBERCRIME INTELLIGENCE',
      title: 'TRACE-X',
      subtitle: 'Predictive Cybercrime Intelligence & Mule Cash-Withdrawal Interception Dashboard',
      content: `
        <h4 class="drawer-section-heading">1. Operational Problem & Context</h4>
        <p class="drawer-p">
          Financial cybercrime syndicates in India funnel stolen victim funds through complex, multi-layered "mule account" networks. These illicit funds are systematically withdrawn as physical currency at ATMs and retail branches before victims report the fraud or banking compliance teams can freeze the accounts. Law enforcement agencies traditionally respond reactively hours or days after cash is siphoned.
        </p>
        <p class="drawer-p">
          <strong>The Objective:</strong> Develop an operational command dashboard enabling cybercrime intelligence units to ingest complaints, run predictive spatial heuristics, visualize high-risk cash-out hotspots, and dispatch intervention teams within the critical 30-to-90-minute operational window.
        </p>

        <h4 class="drawer-section-heading">2. Architecture & Implementation Decisions</h4>
        <p class="drawer-p">
          TRACE-X is engineered with a high-throughput, decoupled architecture. The frontend was developed in React 19, TypeScript, and Vite with zero runtime CSS overhead.
        </p>
        <div class="drawer-code-block">
[Citizen Incident Ingestion] 
       ↓ 
[Complaint Registry & Parsing] 
       ↓ 
[Predictive ATM Hotspot Clustering Engine] 
       ↓ 
[Explainable AI (XAI) Risk Scorer] 
       ↓ 
[Leaflet Geospatial Map + Dispatch Intervention Unit]
        </div>
        <p class="drawer-p">
          <strong>Frontend Architecture:</strong> Structured across 11 synchronized views managed via React Context API (<code>AppContext.tsx</code>). Implements Leaflet interactive geospatial clustering, custom SVG markers for flagged banking nodes, and Recharts for temporal telemetry.
        </p>
        <p class="drawer-p">
          <strong>Backend Architecture:</strong> An independent Express 5 & Prisma TypeScript backend located in the repository provides 34 role-based permissions (Admin, Investigator, Analyst, Officer), rotating JWT authentication with Argon2 password hashing, and real-time Socket.io notification feeds.
        </p>

        <h4 class="drawer-section-heading">3. Explainable AI (XAI) & Transparency</h4>
        <p class="drawer-p">
          A fundamental requirement for law enforcement tooling is evidentiary defensibility. TRACE-X embeds an Explainable AI panel (<code>XAIExplanation.tsx</code>) and <code>RiskScoreGauge.tsx</code> that decomposes risk scores into concrete, transparent factors: recurring mule withdrawal proximity (42%), complaint volume spike (31%), and off-hours timing heuristics (27%).
        </p>

        <h4 class="drawer-section-heading">4. Current Implementation Status & Verification</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Component</th><th>Technology</th><th>Verified Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Frontend Dashboard</td><td>React 19, TS, Vite, Leaflet</td><td>Complete (Operating on in-memory mock services)</td></tr>
            <tr><td>Backend API</td><td>Node.js, Express 5, Prisma</td><td>Complete & independently verified</td></tr>
            <tr><td>Test Coverage</td><td>Vitest</td><td>59 passing unit tests + 77 live integration scenarios</td></tr>
            <tr><td>Live Integration</td><td>Axios / Socket.io</td><td>Decoupled; live API hookup pending</td></tr>
          </tbody>
        </table>
      `
    },

    attendance: {
      number: 'CASE STUDY 02 / 06',
      badge: 'INSTITUTIONAL GEOFENCING',
      title: 'Smart Faculty Attendance System (VeriClass)',
      subtitle: 'Haversine GPS Geofencing, Live Photo Capture & Timetable Schedule OCR Ingestion',
      content: `
        <h4 class="drawer-section-heading">1. Institutional Problem Formulation</h4>
        <p class="drawer-p">
          University faculty attendance recording typically suffers from two vulnerabilities: static biometric fingerprint readers placed at central building entrances (which prove arrival on campus, but not presence in the scheduled classroom) and manual registers prone to buddy-punching or discrepancies.
        </p>
        <p class="drawer-p">
          <strong>The Objective:</strong> Automate presence verification directly inside classrooms by marrying physical coordinates (GPS geofencing) with optical evidence (compressed classroom photo) and comparing both against an automated timetable parser.
        </p>

        <h4 class="drawer-section-heading">2. Mathematical Formulation: Haversine Geofencing</h4>
        <p class="drawer-p">
          To verify faculty presence without relying on proprietary hardware beacons, VeriClass calculates the great-circle distance between the faculty device's HTML5 GPS coordinates and the institution's geographical center using the Haversine formula in <code>utils.py</code>:
        </p>
        <div class="drawer-code-block">
def calculate_distance(lat1, lon1, lat2, lon2):
    R = 6371000.0  # Earth's radius in meters
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lon2 - lon1)
    
    a = (math.sin(delta_phi / 2.0) ** 2) + \\
        math.cos(phi1) * math.cos(phi2) * (math.sin(delta_lambda / 2.0) ** 2)
    c = 2.0 * math.atan2(math.sqrt(a), math.sqrt(1.0 - a))
    return R * c
        </div>
        <p class="drawer-p">
          If <code>distance <= CampusSetting.radius_meters</code>, the location check passes; otherwise, the check-in is logged as <code>Out of Bounds</code>.
        </p>

        <h4 class="drawer-section-heading">3. Timetable Document Ingestion Pipeline</h4>
        <p class="drawer-p">
          College departments distribute timetables in wildly heterogeneous formats: Excel spreadsheets, multi-column PDFs, and Word documents. The 23 KB <code>timetable_parser.py</code> leverages:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><code>pdfplumber</code>: Extracting complex cell grids and time slot columns from PDF files.</li>
          <li><code>openpyxl</code>: Reading multi-sheet institutional schedules.</li>
          <li><code>pytesseract</code>: Optical Character Recognition (OCR) fallback for scanned schedules.</li>
          <li><code>difflib</code>: Fuzzy string matching resolving naming variations in course and teacher profiles.</li>
        </ul>

        <h4 class="drawer-section-heading">4. Architectural Verification</h4>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Metric</th><th>Details</th></tr>
          </thead>
          <tbody>
            <tr><td>Image Pipeline</td><td>Base64 capture → OpenCV array conversion → Pillow 75% JPEG compression</td></tr>
            <tr><td>Database Architecture</td><td>SQLAlchemy supporting local SQLite (WAL mode) and Render PostgreSQL</td></tr>
            <tr><td>Automated Tests</td><td>13.8 KB test suite in <code>test_database_flows.py</code> with isolated in-memory DB</td></tr>
            <tr><td>Security Alerts</td><td>Automated SMTP email notifications to administrators on credential changes</td></tr>
          </tbody>
        </table>
      `
    },

    copilot: {
      number: 'CASE STUDY 03 / 06',
      badge: 'CLASSICAL ALGORITHMS',
      title: 'Campus Copilot',
      subtitle: 'Algorithmic University Assistant with 4 Classical DSA Implementations',
      content: `
        <h4 class="drawer-section-heading">1. Hackathon Challenge & Engineering Philosophy</h4>
        <p class="drawer-p">
          Built during an intensive 5-hour hackathon by a 5-member team. The project goal was to deliver an explainable, responsive campus assistant without deploying opaque deep-learning models that cannot be mathematically proven or traced in real time.
        </p>
        <p class="drawer-p">
          <strong>Verified Personal Attribution:</strong> Served as <strong>Core Algorithm & NLP Engineer</strong>, architecting the classical algorithmic models in <code>src/algorithms.py</code> and the tokenized fuzzy intent resolver in <code>src/chatbot.py</code>.
        </p>

        <h4 class="drawer-section-heading">2. The Four Classical Algorithms</h4>
        <p class="drawer-p">
          Each algorithm was specifically mapped to a concrete, real-world user feature:
        </p>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Algorithm</th><th>Paradigm</th><th>Complexity</th><th>Concrete Feature</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Levenshtein Distance</strong></td>
              <td>Dynamic Programming</td>
              <td>O(m · n) time & space</td>
              <td>Typo-tolerant chatbot intent matching ("evnts" → "events", "scedule" → "schedule")</td>
            </tr>
            <tr>
              <td><strong>Activity Selection</strong></td>
              <td>Greedy Algorithm</td>
              <td>O(n log n) time</td>
              <td>Optimizes daily student itinerary to attend maximum non-overlapping campus events</td>
            </tr>
            <tr>
              <td><strong>0/1 Knapsack</strong></td>
              <td>Dynamic Programming</td>
              <td>O(n · W) pseudo-poly</td>
              <td>Maximizes total student footfall given a finite event sponsorship budget W</td>
            </tr>
            <tr>
              <td><strong>Binary Search</strong></td>
              <td>Divide & Conquer</td>
              <td>O(log n) time</td>
              <td>Rapid target date retrieval across pre-sorted academic calendar datasets</td>
            </tr>
          </tbody>
        </table>

        <h4 class="drawer-section-heading">3. Fuzzy Intent Dispatch Architecture</h4>
        <p class="drawer-p">
          In <code>src/chatbot.py</code>, user queries are lower-cased and tokenized. Tokens are tested against an O(1) hash set of known keywords. Any word missing the hash table falls through to the Levenshtein dynamic programming matrix. Action intents (like <code>optimize</code>) are prioritized over noun intents in tie situations.
        </p>
        <p class="drawer-p">
          <strong>Visual & Geospatial Engine:</strong> Connected to a Folium map generator producing an interactive HTML venue map (<code>campus_map.html</code>) and Matplotlib scripts outputting budget and attendance charts.
        </p>
      `
    },

    loganalyzer: {
      number: 'CASE STUDY 04 / 06',
      badge: 'AI OBSERVABILITY',
      title: 'Log Analyzer',
      subtitle: 'AI Interaction Telemetry, Sentiment NLP Pipeline & Gemini Chat Simulator',
      content: `
        <h4 class="drawer-section-heading">1. The Observability Challenge in AI Systems</h4>
        <p class="drawer-p">
          As enterprise applications integrate Large Language Models, engineering teams lack observability into prompt volumes, user sentiment shifts, repetitive prompt injection, and conversational churn.
        </p>
        <p class="drawer-p">
          <strong>Identity Clarification:</strong> Formally verified in the audit as <code>log_analyzer_tool</code>. It is focused specifically on AI prompt streams, sentiment extraction, and LLM simulation, completely distinct from generic syslog/SIEM systems.
        </p>

        <h4 class="drawer-section-heading">2. Named-Group Regex Parsing Pipeline</h4>
        <p class="drawer-p">
          Unstructured log files are transformed into typed Pandas DataFrames via <code>src/parser.py</code> using compiled regular expressions with named capture groups:
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
          This extracts timestamps (converted to Pandas DatetimeIndex), usernames, raw prompt bodies, and topical categories with zero data loss.
        </p>

        <h4 class="drawer-section-heading">3. Linguistic Sentiment & Anomaly Heuristics</h4>
        <p class="drawer-p">
          The processing pipeline enriches each record using NLTK and TextBlob (<code>src/nlp.py</code>):
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Polarity & Subjectivity:</strong> Classifies prompts into Positive (> 0.1), Negative (< -0.1), or Neutral.</li>
          <li><strong>Noun-Phrase Extraction:</strong> Surfaces top recurring prompt keywords.</li>
          <li><strong>Spam Detection Heuristic:</strong> Flags repeated prompt bursts (≥ 2 identical submissions) to detect automated spamming.</li>
          <li><strong>AI Dependency Index:</strong> Calculates ratio of prompt volume to active unique users over sliding hourly windows.</li>
        </ul>

        <h4 class="drawer-section-heading">4. Dual-State Gemini AI Simulator</h4>
        <p class="drawer-p">
          The Flask backend integrates Google Generative AI (<code>google.generativeai</code>). It stores user session history in a global key-value memory store (<code>chat_sessions[username_apikey]</code>) and executes a secondary asynchronous Gemini call to auto-categorize user prompts strictly into predefined business domains.
        </p>
      `
    },

    phishguard: {
      number: 'CASE STUDY 05 / 06',
      badge: 'MACHINE LEARNING SECURITY',
      title: 'Phish Guard',
      subtitle: '10-Feature Structural ML Classifier & Hybrid Cloud Threat Intelligence',
      content: `
        <h4 class="drawer-section-heading">1. Threat Landscape & Engineering Goals</h4>
        <p class="drawer-p">
          Phishing websites increasingly evade static blacklists by registering ephemeral domains, using automated domain generation algorithms (DGAs), or disguising credential theft portals under IPv4 hostnames and high-entropy subdomains.
        </p>
        <p class="drawer-p">
          <strong>The Dual-Phase Architecture:</strong> Phish Guard was built in two distinct phases: Phase 1 engineered a local, client-side Machine Learning model deployed via a Chrome Extension; Phase 2 complemented it with cloud-based threat intelligence.
        </p>

        <h4 class="drawer-section-heading">2. Phase 1: 10 Engineered Features & Shannon Entropy</h4>
        <p class="drawer-p">
          Rather than treating the URL as a raw bag of words, <code>train_model.py</code> extracts 10 structural and lexical features. Crucially, it formulates <strong>Shannon Informational Entropy</strong> to measure the character randomness of domain strings:
        </p>
        <div class="drawer-code-block">
def shannon_entropy(s: str) -> float:
    if not s:
        return 0.0
    probs = [float(s.count(c)) / len(s) for c in set(s)]
    return -sum(p * math.log(p, 2) for p in probs)
        </div>
        <p class="drawer-p">
          <strong>The 10 Extracted Features:</strong>
        </p>
        <table class="drawer-metrics-table">
          <thead>
            <tr><th>Feature</th><th>Rationale</th></tr>
          </thead>
          <tbody>
            <tr><td><code>entropy_url</code></td><td>Measures character randomness to expose DGA and obfuscated strings</td></tr>
            <tr><td><code>has_ip_host</code></td><td>Regex checks whether host is an IPv4 address (common in malicious bypasses)</td></tr>
            <tr><td><code>num_at</code></td><td>Presence of '@' used in URL credential confusion tricks</td></tr>
            <tr><td><code>num_hyphens</code></td><td>High hyphen frequency indicates domain brand impersonation</td></tr>
            <tr><td><code>num_dots</code></td><td>Detects multi-tier subdomain chaining</td></tr>
            <tr><td><code>url_len / host_len / path_len</code></td><td>Phishing URLs tend to be substantially longer than benign URLs</td></tr>
            <tr><td><code>uses_https</code></td><td>Verifies encrypted transport protocol</td></tr>
            <tr><td><code>num_digits</code></td><td>Counts suspicious numerical digits in hostname and path</td></tr>
          </tbody>
        </table>

        <h4 class="drawer-section-heading">3. Phase 2: Hybrid Cloud Intelligence Engine</h4>
        <p class="drawer-p">
          The secondary Node.js backend (<code>server.js</code>) bridges real-time threat intelligence:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Known IOC Pattern Matching:</strong> Static lookups of typosquatted domains and urgency triggers ("verify immediately", "account suspended").</li>
          <li><strong>Google Safe Browsing API v4:</strong> Querying global malware threat lists.</li>
          <li><strong>Google Gemini 2.5 Flash:</strong> Semantic evaluation of linguistic deception and social engineering patterns.</li>
        </ul>
      `
    },

    eplatform: {
      number: 'CASE STUDY 06 / 06',
      badge: 'FRONTEND ARCHITECTURE',
      title: 'E-Platform (GadgetPro)',
      subtitle: 'High-Performance E-Commerce Application with Angular 17 Standalone Architecture',
      content: `
        <h4 class="drawer-section-heading">1. Technical Objective & Constraints</h4>
        <p class="drawer-p">
          Modern single-page applications often suffer from complex state synchronization between product catalogs, shopping carts, and multi-step checkout funnels.
        </p>
        <p class="drawer-p">
          <strong>The Objective:</strong> Architect a zero-backend consumer electronics storefront that maintains full state resilience, reactive cart subscriptions, and order persistence entirely in the client using Angular 17 and RxJS.
        </p>

        <h4 class="drawer-section-heading">2. Angular 17 Standalone Component Architecture</h4>
        <p class="drawer-p">
          GadgetPro rejects legacy Angular <code>NgModule</code> hierarchies in favor of modern standalone components and functional routing in <code>app.routes.ts</code>:
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
          This achieves optimal route-level code splitting, loading only the necessary JavaScript bundle for the active viewport.
        </p>

        <h4 class="drawer-section-heading">3. Reactive State Streams via RxJS</h4>
        <p class="drawer-p">
          State management is decoupled into two primary injectable services:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><code>CartService</code>: Uses <code>BehaviorSubject</code> to broadcast cart items, quantities, and subtotal recalculations. Automatically synchronizes mutations with <code>localStorage</code>.</li>
          <li><code>CheckoutService</code>: Drives a 4-step wizard (Shipping, Billing, Payment, Review) using an observable <code>currentStep$</code> stream.</li>
        </ul>

        <h4 class="drawer-section-heading">4. Simulated Order Fulfillment Pipeline</h4>
        <p class="drawer-p">
          The <code>CheckoutService.createOrder()</code> method executes business rules before confirming an order:
        </p>
        <ul class="drawer-p" style="padding-left: 1.25rem;">
          <li><strong>Tiered Shipping:</strong> Free shipping threshold calculated for carts over $200; standard ($9.99), express ($19.99), and overnight ($29.99) fee curves.</li>
          <li><strong>Dynamic Tax & Promo Codes:</strong> 8% sales tax calculation, with real-time discount deduction for valid codes (<code>SAVE10</code>, <code>SAVE20</code>, <code>WELCOME</code>).</li>
          <li><strong>Order Persistence:</strong> Generates a unique <code>GP-</code> prefixed order ID, commits the record to local storage, and clears sensitive checkout forms.</li>
        </ul>
        <p class="drawer-p">
          <strong>Production Deployment:</strong> Hosted and live at <a href="https://abhigyanneog.github.io/e-platform/" target="_blank" rel="noopener noreferrer" style="color: var(--color-cobalt); font-weight: 600;">abhigyanneog.github.io/e-platform/</a>.
        </p>
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

  // A. Generic Preview Tabs Handler (TRACE-X & Campus Copilot)
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
        card.querySelectorAll('.preview-view-panel').forEach(p => p.classList.remove('active'));
        const targetPanel = card.querySelector(`#${targetId}`);
        if (targetPanel) targetPanel.classList.add('active');
      }
    });
  });

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

  // C. GadgetPro RxJS Cart State Inspector
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
  // PHASE 9: STAGE C — 3D INTERACTIVE ENGINEERING UNIVERSE HUB
  // =========================================================================
  const universeOverlay = document.getElementById('engineering-universe');
  const universeCloseBtn = document.getElementById('universe-close-btn');
  const universeNavBtn = document.getElementById('universe-nav-btn');
  const inlineUniverseBtn = document.getElementById('inline-universe-btn');
  const universeNodes = document.querySelectorAll('.universe-node, .u-pill');

  function openUniverseHub() {
    if (!universeOverlay) return;
    universeOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const firstNode = universeOverlay.querySelector('.universe-node');
    if (firstNode) {
      setTimeout(() => firstNode.focus(), 50);
    }
  }

  function closeUniverseHub() {
    if (!universeOverlay) return;
    universeOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (universeNavBtn) {
    universeNavBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openUniverseHub();
    });
  }

  if (inlineUniverseBtn) {
    inlineUniverseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openUniverseHub();
    });
  }

  if (universeCloseBtn) {
    universeCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeUniverseHub();
    });
  }

  universeNodes.forEach(node => {
    node.addEventListener('click', (e) => {
      const targetHash = node.getAttribute('href') || (node.getAttribute('data-dest') ? `#${node.getAttribute('data-dest')}` : null);
      if (targetHash && targetHash.startsWith('#')) {
        e.preventDefault();
        closeUniverseHub();
        setTimeout(() => {
          const targetEl = document.querySelector(targetHash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    });
  });

  // Global Keydown for Universe: 'U' to open/toggle, 'Escape' to close
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

    if (e.key === 'Escape' && universeOverlay && universeOverlay.classList.contains('active')) {
      e.preventDefault();
      closeUniverseHub();
    } else if ((e.key === 'u' || e.key === 'U') && !introActive && (!universeOverlay || !universeOverlay.classList.contains('active'))) {
      const modal = document.getElementById('case-study-modal');
      if (!modal || !modal.classList.contains('active')) {
        openUniverseHub();
      }
    }
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
  const TOTAL_PROJECTS = allProjectArticles.length || 6;
  let currentProjectSlide = 0;

  function updateGalleryUI(index) {
    currentProjectSlide = Math.max(0, Math.min(index, TOTAL_PROJECTS - 1));

    if (galleryTrack) {
      galleryTrack.style.transform = `translateX(-${currentProjectSlide * 100}%)`;
    }

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
  }

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
    if (universeOverlay && universeOverlay.classList.contains('active')) return;
    const modal = document.getElementById('case-study-modal');
    if (modal && modal.classList.contains('active')) return;

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

  // Bind cursor context if cursor system is active
  if (typeof bindCursorContext === 'function') {
    bindCursorContext('.gallery-arrow-btn', 'NAVIGATE');
    bindCursorContext('.gallery-pill', 'PROJECT');
    bindCursorContext('.universe-node', 'WARP');
    bindCursorContext('.universe-close-btn', 'RESUME');
    bindCursorContext('#universe-nav-btn', 'UNIVERSE');
  }

  // Initial gallery position
  updateGalleryUI(0);

});


