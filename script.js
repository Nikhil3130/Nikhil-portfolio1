/* ==========================================================================
   Thomandru Nikhil - Personal Portfolio Design System & Stylesheet
   Advanced Graphical Edition: Neural Canvas, 3D Tilt, Cursor Spotlight,
   Glassmorphism, Dynamic Animations, and Recruiter-Ready UI.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Design Variables & Color Themes
   -------------------------------------------------------------------------- */
:root {
  /* Color Palette - Dark Mode (Default) */
  --bg-main: #0B0F19;
  --bg-surface: #111827;
  --bg-surface-elevated: #1F2937;
  --bg-surface-glass: rgba(17, 24, 39, 0.75);
  --border-color: rgba(255, 255, 255, 0.08);
  --border-color-hover: rgba(99, 102, 241, 0.4);
  --border-subtle: rgba(255, 255, 255, 0.04);

  --text-primary: #F9FAFB;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;
  --text-inverse: #0B0F19;

  /* Brand Accents & Gradients */
  --accent-primary: #6366F1;       /* Indigo */
  --accent-primary-hover: #4F46E5;
  --accent-secondary: #06B6D4;     /* Cyan */
  --accent-secondary-hover: #0891B2;
  --accent-emerald: #10B981;       /* Emerald */
  --accent-amber: #F59E0B;
  --accent-purple: #A855F7;

  --gradient-primary: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%);
  --gradient-secondary: linear-gradient(135deg, #06B6D4 0%, #10B981 100%);
  --gradient-card: linear-gradient(180deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.6) 100%);
  --gradient-hero-glow: radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.18), transparent 70%);
  --gradient-spotlight: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.12), transparent 40%);

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.35);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 25px rgba(99, 102, 241, 0.3);
  --shadow-cyan-glow: 0 0 25px rgba(6, 182, 212, 0.3);

  /* Typography */
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Dimensions & Spacing */
  --header-height: 72px;
  --container-max-width: 1200px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  /* Dynamic Canvas Settings */
  --canvas-node-color: rgba(99, 102, 241, 0.65);
  --canvas-line-color: rgba(6, 182, 212, 0.18);
  --canvas-accent-color: rgba(56, 189, 248, 0.85);
}

/* Light Theme Override */
[data-theme="light"] {
  --bg-main: #F8FAFC;
  --bg-surface: #FFFFFF;
  --bg-surface-elevated: #F1F5F9;
  --bg-surface-glass: rgba(255, 255, 255, 0.88);
  --border-color: rgba(15, 23, 42, 0.08);
  --border-color-hover: rgba(99, 102, 241, 0.45);
  --border-subtle: rgba(15, 23, 42, 0.04);

  --text-primary: #0F172A;
  --text-secondary: #334155;
  --text-muted: #64748B;
  --text-inverse: #FFFFFF;

  --gradient-card: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
  --gradient-hero-glow: radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.1), transparent 70%);
  --gradient-spotlight: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.08), transparent 40%);

  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.06);
  --shadow-lg: 0 20px 40px rgba(15, 23, 42, 0.08);
  --shadow-glow: 0 0 25px rgba(99, 102, 241, 0.18);
  --shadow-cyan-glow: 0 0 25px rgba(6, 182, 212, 0.18);

  --canvas-node-color: rgba(99, 102, 241, 0.45);
  --canvas-line-color: rgba(59, 130, 246, 0.12);
  --canvas-accent-color: rgba(14, 165, 233, 0.7);
}

/* --------------------------------------------------------------------------
   2. Reset & Global Base
   -------------------------------------------------------------------------- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-height) + 20px);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-main);
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 1rem;
  overflow-x: hidden;
  transition: background-color var(--transition-normal), color var(--transition-normal);
  position: relative;
}

/* Background Ambient Glow */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--gradient-hero-glow);
  pointer-events: none;
  z-index: -1;
}

/* Scroll Reading Progress Bar */
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5px;
  width: 0%;
  background: var(--gradient-primary);
  z-index: 9999;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.7);
  transition: width 0.1s linear;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  color: var(--text-primary);
  font-weight: 700;
  line-height: 1.25;
}

a {
  color: var(--accent-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--accent-secondary);
}

ul {
  list-style: none;
}

img, svg {
  display: block;
  max-width: 100%;
}

button, input, textarea {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

::selection {
  background: rgba(99, 102, 241, 0.4);
  color: var(--text-primary);
}

/* Container */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

.section {
  padding: 100px 0;
  position: relative;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 56px auto;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: var(--radius-full);
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-primary);
  border: 1px solid rgba(99, 102, 241, 0.25);
  font-family: var(--font-sans);
  font-size: 0.825rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 14px;
  backdrop-filter: blur(8px);
}

[data-theme="light"] .section-badge {
  background: rgba(99, 102, 241, 0.08);
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 2.85rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}

.section-title span.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* --------------------------------------------------------------------------
   3. Navigation Bar (Sticky Glassmorphism)
   -------------------------------------------------------------------------- */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--bg-surface-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: all var(--transition-normal);
}

.header.scrolled {
  box-shadow: var(--shadow-md);
  height: 64px;
  border-bottom-color: rgba(99, 102, 241, 0.15);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-primary);
}

.logo-monogram {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  background: var(--gradient-primary);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-glow);
  position: relative;
  overflow: hidden;
}

.logo-monogram::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(45deg);
  animation: logo-shine 5s infinite linear;
}

@keyframes logo-shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  20%, 100% { transform: translateX(100%) rotate(45deg); }
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.2px;
  color: var(--text-primary);
}

.brand-role {
  font-size: 0.725rem;
  color: var(--accent-secondary);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Nav Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  position: relative;
  padding: 6px 0;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--accent-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--gradient-primary);
  transition: width var(--transition-fast);
  border-radius: var(--radius-full);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* Nav Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.btn-theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.05rem;
  transition: all var(--transition-fast);
}

.btn-theme-toggle:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: rotate(15deg);
}

.btn-nav-resume {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: var(--radius-full);
  background: var(--gradient-primary);
  color: #FFFFFF !important;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn-nav-resume:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.55);
}

.hamburger-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.4rem;
  cursor: pointer;
  padding: 6px;
}

/* --------------------------------------------------------------------------
   4. Buttons, Badges & Spotlight System
   -------------------------------------------------------------------------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 26px;
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-fast);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--gradient-primary);
  color: #FFFFFF !important;
  box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.45);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary) !important;
  border-color: var(--border-color);
}

.btn-outline:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary) !important;
  background: rgba(99, 102, 241, 0.08);
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--bg-surface-elevated);
  color: var(--text-primary) !important;
  border-color: var(--border-color);
}

.btn-secondary:hover {
  background: var(--border-color-hover);
  border-color: var(--accent-secondary);
  color: var(--accent-secondary) !important;
  transform: translateY(-2px);
}

.btn-sm {
  padding: 8px 16px;
  font-size: 0.85rem;
  border-radius: var(--radius-sm);
}

.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.badge-placeholder {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(245, 158, 11, 0.12);
  color: #F59E0B;
  border: 1px dashed rgba(245, 158, 11, 0.4);
}

/* Spotlight & 3D Tilt Card Base */
[data-spotlight="true"] {
  position: relative;
  overflow: hidden;
}

[data-spotlight="true"]::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-spotlight);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

[data-spotlight="true"]:hover::before {
  opacity: 1;
}

[data-tilt="true"] {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.15s ease-out, box-shadow 0.25s ease-out;
}

/* --------------------------------------------------------------------------
   5. Hero Section & Interactive Neural Canvas
   -------------------------------------------------------------------------- */
.hero {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  padding-top: calc(var(--header-height) + 30px);
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;
}

/* Interactive Canvas Background */
.neural-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: auto;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: var(--radius-full);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.28);
  color: var(--accent-emerald);
  font-family: var(--font-sans);
  font-size: 0.825rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  backdrop-filter: blur(8px);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-emerald);
  box-shadow: 0 0 10px var(--accent-emerald);
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.hero-greeting {
  font-size: 1.15rem;
  color: var(--accent-secondary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
}

.hero-name {
  font-size: clamp(2.6rem, 5.2vw, 4.2rem);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero-name span.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Dynamic Role Headline & Typewriter */
.hero-headline {
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 2.2rem;
}

.dynamic-role {
  color: var(--accent-secondary);
  font-weight: 700;
  background: linear-gradient(135deg, #38BDF8 0%, #818CF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.typing-cursor {
  display: inline-block;
  color: var(--accent-primary);
  font-weight: 800;
  font-size: 1.3rem;
  animation: blink 0.9s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 580px;
  margin-bottom: 32px;
}

.hero-ctas {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 36px;
}

.hero-socials {
  display: flex;
  align-items: center;
  gap: 16px;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  transition: all var(--transition-fast);
}

.social-link:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

/* Hero Visual / Interactive Code Card */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero-card {
  width: 100%;
  max-width: 440px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
  backdrop-filter: blur(12px);
}

.hero-card:hover {
  border-color: var(--border-color-hover);
  box-shadow: var(--shadow-glow);
}

.card-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 14px;
  margin-bottom: 20px;
}

.traffic-dots {
  display: flex;
  gap: 6px;
}

.traffic-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.traffic-dots span:nth-child(1) { background: #EF4444; }
.traffic-dots span:nth-child(2) { background: #F59E0B; }
.traffic-dots span:nth-child(3) { background: #10B981; }

.card-tab {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent-secondary);
  font-weight: 600;
}

.avatar-wrapper {
  text-align: center;
  margin-bottom: 18px;
}

.avatar-wrapper img {
  width: 130px;
  height: 130px;
  margin: 0 auto;
  border-radius: 50%;
  border: 3px solid var(--accent-primary);
  box-shadow: var(--shadow-glow);
  transition: transform var(--transition-normal);
}

.hero-card:hover .avatar-wrapper img {
  transform: scale(1.04);
}

.code-snippet {
  background: var(--bg-surface-elevated);
  border-radius: var(--radius-md);
  padding: 14px;
  font-family: var(--font-mono);
  font-size: 0.825rem;
  line-height: 1.6;
  border: 1px solid var(--border-color);
}

.code-snippet .keyword { color: #818CF8; }
.code-snippet .property { color: #38BDF8; }
.code-snippet .string { color: #34D399; }
.code-snippet .number { color: #F59E0B; }

/* Floating Tech Pills */
.floating-pill {
  position: absolute;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.825rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  animation: float 4s ease-in-out infinite;
  z-index: 2;
}

.pill-ai {
  top: -12px;
  right: -10px;
  border-color: rgba(99, 102, 241, 0.4);
  color: var(--accent-primary);
}

.pill-edu {
  bottom: -10px;
  left: -10px;
  border-color: rgba(6, 182, 212, 0.4);
  color: var(--accent-secondary);
  animation-delay: 2s;
}

.pill-python {
  top: 45%;
  right: -24px;
  border-color: rgba(56, 189, 248, 0.35);
  color: #38BDF8;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* --------------------------------------------------------------------------
   6. Metrics Bar & Number Counter
   -------------------------------------------------------------------------- */
.metrics-bar {
  padding: 24px 0;
  margin-top: -20px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.metric-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 22px;
  text-align: center;
  transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.metric-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-color-hover);
  box-shadow: var(--shadow-sm);
}

.metric-val {
  font-family: var(--font-sans);
  font-size: 2.35rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  margin-bottom: 6px;
  letter-spacing: -0.5px;
}

.metric-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-muted);
}

/* --------------------------------------------------------------------------
   7. About Section
   -------------------------------------------------------------------------- */
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 36px;
  align-items: start;
}

.about-bio-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 36px;
  box-shadow: var(--shadow-sm);
}

.about-bio-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.about-strengths-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.strength-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  background: var(--bg-surface-elevated);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.strength-item:hover {
  transform: translateY(-2px);
  border-color: var(--border-color-hover);
}

.strength-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: rgba(99, 102, 241, 0.12);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.strength-item h4 {
  font-size: 0.925rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.strength-item p {
  font-size: 0.825rem;
  color: var(--text-muted);
}

/* Sidebar */
.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.side-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
}

.side-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.side-card h3 i {
  color: var(--accent-secondary);
}

.languages-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lang-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--bg-surface-elevated);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.lang-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.lang-pill {
  font-size: 0.78rem;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  background: rgba(6, 182, 212, 0.12);
  color: var(--accent-secondary);
  font-weight: 700;
}

.soft-skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.soft-skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: var(--radius-full);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}

.soft-skill-tag:hover {
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.soft-skill-tag i {
  color: var(--accent-primary);
  font-size: 0.85rem;
}

/* --------------------------------------------------------------------------
   8. Education Section (Vertical Timeline)
   -------------------------------------------------------------------------- */
.education-timeline {
  position: relative;
  max-width: 850px;
  margin: 0 auto;
  padding-left: 36px;
}

.education-timeline::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 11px;
  width: 2px;
  background: linear-gradient(180deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -36px;
  top: 18px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bg-main);
  border: 3px solid var(--accent-primary);
  box-shadow: 0 0 12px var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.timeline-marker::after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-secondary);
}

.timeline-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.timeline-card:hover {
  transform: translateX(4px);
  border-color: var(--border-color-hover);
}

.timeline-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.edu-degree {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.3;
}

.edu-institution {
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-secondary);
  margin-top: 4px;
}

.edu-score-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  background: rgba(16, 185, 129, 0.12);
  color: var(--accent-emerald);
  border: 1px solid rgba(16, 185, 129, 0.3);
  font-weight: 700;
  font-size: 0.9rem;
  white-space: nowrap;
}

.edu-details {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* --------------------------------------------------------------------------
   9. Skills Section
   -------------------------------------------------------------------------- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.skill-category-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 30px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), border-color var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.skill-category-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-color-hover);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}

.category-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(99, 102, 241, 0.12);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.skill-category-card:nth-child(2) .category-icon {
  background: rgba(6, 182, 212, 0.12);
  color: var(--accent-secondary);
}

.skill-category-card:nth-child(3) .category-icon {
  background: rgba(16, 185, 129, 0.12);
  color: var(--accent-emerald);
}

.category-title {
  font-size: 1.15rem;
  font-weight: 700;
}

.skills-pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.skill-chip:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.category-footer-note {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--border-subtle);
  font-size: 0.825rem;
  color: var(--text-muted);
}

/* --------------------------------------------------------------------------
   10. Projects Section
   -------------------------------------------------------------------------- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-color-hover);
  box-shadow: var(--shadow-lg);
}

.project-thumb-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: var(--bg-surface-elevated);
  overflow: hidden;
}

.project-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-thumb {
  transform: scale(1.05);
}

.project-status-tag {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
}

.project-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.project-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-secondary);
  background: rgba(6, 182, 212, 0.1);
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.project-desc {
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.project-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.project-btn-details {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--accent-primary);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  transition: gap var(--transition-fast);
}

.project-btn-details:hover {
  gap: 10px;
  color: var(--accent-secondary);
}

.project-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-icon-link {
  width: 34px;
  height: 34px;
  border-radius: var(--radius-sm);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: all var(--transition-fast);
}

.project-icon-link:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
}

/* --------------------------------------------------------------------------
   11. Certifications & Achievements Section
   -------------------------------------------------------------------------- */
.cert-achieve-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
}

.col-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.col-title {
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 10px;
}

.col-title i {
  color: var(--accent-primary);
}

.cert-card, .achieve-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 20px;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.cert-card:hover, .achieve-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-color-hover);
}

.cert-card.verified {
  border-left: 4px solid var(--accent-emerald);
}

.cert-card.placeholder, .achieve-card.placeholder {
  border-style: dashed;
  background: rgba(31, 41, 55, 0.3);
}

[data-theme="light"] .cert-card.placeholder,
[data-theme="light"] .achieve-card.placeholder {
  background: rgba(241, 245, 249, 0.6);
}

.item-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.org-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-secondary);
}

.card-heading {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-summary {
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.placeholder-note {
  margin-top: 10px;
  font-size: 0.8rem;
  color: var(--accent-amber);
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* --------------------------------------------------------------------------
   12. Resume Section
   -------------------------------------------------------------------------- */
.resume-showcase-box {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 44px;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.resume-showcase-grid {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 40px;
  align-items: center;
}

.resume-info h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.resume-info p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 28px;
}

.resume-highlights-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 32px;
}

.res-highlight-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 600;
}

.res-highlight-item i {
  color: var(--accent-emerald);
}

.resume-cta-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

/* Mini Resume Card Mockup */
.resume-preview-card {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  position: relative;
}

.preview-header-line {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 12px;
  margin-bottom: 14px;
}

.preview-name {
  font-family: var(--font-sans);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-primary);
}

.preview-role {
  font-size: 0.78rem;
  color: var(--accent-primary);
  font-weight: 600;
}

.preview-skeleton-bar {
  height: 8px;
  border-radius: 4px;
  background: var(--border-color);
  margin-bottom: 8px;
}

.preview-skeleton-bar.short { width: 60%; }
.preview-skeleton-bar.medium { width: 80%; }
.preview-skeleton-bar.accent { background: rgba(99, 102, 241, 0.3); }

/* --------------------------------------------------------------------------
   13. Contact Section
   -------------------------------------------------------------------------- */
.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 40px;
}

.contact-info-cards {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.contact-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-color-hover);
}

.contact-card-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-card-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: rgba(99, 102, 241, 0.12);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.contact-card:nth-child(2) .contact-card-icon {
  background: rgba(6, 182, 212, 0.12);
  color: var(--accent-secondary);
}

.contact-card:nth-child(3) .contact-card-icon {
  background: rgba(16, 185, 129, 0.12);
  color: var(--accent-emerald);
}

.contact-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-val {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  word-break: break-all;
}

.contact-btn-action {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.contact-btn-action:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
}

/* Contact Form */
.contact-form-wrapper {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 36px;
  box-shadow: var(--shadow-sm);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.form-input, .form-textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  outline: none;
}

.form-input:focus, .form-textarea:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

/* --------------------------------------------------------------------------
   14. Footer
   -------------------------------------------------------------------------- */
.footer {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  padding: 50px 0 30px 0;
  position: relative;
  z-index: 1;
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border-color);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-nav a {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}

.footer-nav a:hover {
  color: var(--accent-primary);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.btn-back-to-top {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-back-to-top:hover {
  background: var(--accent-primary);
  color: #FFFFFF;
  transform: translateY(-3px);
}

/* --------------------------------------------------------------------------
   15. Modals & Toasts
   -------------------------------------------------------------------------- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 2000;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.modal-overlay.active {
  display: flex;
  opacity: 1;
}

.modal-dialog {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  max-width: 650px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  position: relative;
  padding: 32px;
  transform: scale(0.95);
  transition: transform var(--transition-fast);
}

.modal-overlay.active .modal-dialog {
  transform: scale(1);
}

.modal-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.modal-close-btn:hover {
  color: #EF4444;
  border-color: #EF4444;
}

/* Toast Notifications */
.toast-notification {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color-hover);
  color: var(--text-primary);
  padding: 12px 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 3000;
  transform: translateY(100px);
  opacity: 0;
  transition: all var(--transition-normal);
  pointer-events: none;
}

.toast-notification.show {
  transform: translateY(0);
  opacity: 1;
}

.toast-notification i {
  color: var(--accent-emerald);
}

/* --------------------------------------------------------------------------
   16. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100vh;
  background: var(--bg-surface);
  border-left: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  padding: 30px 24px;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: right var(--transition-normal);
}

.mobile-drawer.open {
  right: 0;
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1400;
  display: none;
}

.drawer-overlay.active {
  display: block;
}

.drawer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.drawer-nav a {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.drawer-nav a.active {
  color: var(--accent-primary);
}

/* --------------------------------------------------------------------------
   17. Responsive Breakpoints
   -------------------------------------------------------------------------- */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-status-badge {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-headline {
    justify-content: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-ctas {
    justify-content: center;
  }

  .hero-socials {
    justify-content: center;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }

  .cert-achieve-wrapper {
    grid-template-columns: 1fr;
  }

  .resume-showcase-grid {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav-menu, .btn-nav-resume {
    display: none;
  }

  .hamburger-btn {
    display: block;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .about-strengths-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 64px 0;
  }

  .contact-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-btn-action {
    width: 100%;
    justify-content: center;
  }

  .floating-pill {
    display: none; /* Hide floating pills on small mobile screens to keep layout clean */
  }
}

@media (max-width: 480px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .resume-highlights-list {
    grid-template-columns: 1fr;
  }

  .resume-showcase-box {
    padding: 24px;
  }

  .contact-form-wrapper {
    padding: 24px;
  }
}
