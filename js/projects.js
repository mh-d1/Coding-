export const PROJECTS = {
    starter: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Orbit · Product Platform</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">Orbit</div>
      <nav class="nav">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </nav>
      <a href="#" class="btn btn-primary">Get Started</a>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-content">
          <h1 class="hero-title">Build better ideas.</h1>
          <p class="hero-desc">Orbit helps teams ship products faster with modern tools, clear workflows, and real-time collaboration.</p>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary">Start building</a>
            <a href="#" class="btn btn-secondary">Learn more</a>
          </div>
        </div>
        <div class="hero-card">
          <div class="hero-card-inner">
            <span class="hero-card-badge">⭐ Featured</span>
            <h3>Product Launch</h3>
            <p>Ship your next big thing with Orbit.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <h2 class="features-title">Everything you need</h2>
        <div class="features-grid">
          <div class="feature-card"><div class="feature-icon">⚡</div><h3>Lightning fast</h3><p>Built for speed. Instant updates, zero waiting.</p></div>
          <div class="feature-card"><div class="feature-icon">🎨</div><h3>Beautiful design</h3><p>Pixel-perfect components that feel like magic.</p></div>
          <div class="feature-card"><div class="feature-icon">🔒</div><h3>Secure by default</h3><p>Enterprise-grade security, built right in.</p></div>
          <div class="feature-card"><div class="feature-icon">📈</div><h3>Scale infinitely</h3><p>From startup to global enterprise, we grow with you.</p></div>
        </div>
      </div>
    </section>
    <section class="cta">
      <div class="container cta-inner">
        <h2>Ready to build something great?</h2>
        <p>Join thousands of teams already using Orbit.</p>
        <a href="#" class="btn btn-primary btn-large">Get started free</a>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container footer-inner">
      <span>© 2026 Orbit. Built with ❤️</span>
      <nav class="footer-nav"><a href="#">Twitter</a><a href="#">GitHub</a><a href="#">Docs</a></nav>
    </div>
  </footer>
</body>
</html>`,
        css: `/* RESET */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, system-ui, sans-serif; background: #fafafa; color: #111; line-height: 1.6; }
a { text-decoration: none; color: inherit; }
.container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
.site-header { background: #fff; border-bottom: 1px solid #eaeaea; padding: 16px 0; position: sticky; top: 0; z-index: 10; }
.header-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.logo { font-weight: 700; font-size: 20px; letter-spacing: -0.5px; }
.nav { display: flex; gap: 24px; font-size: 14px; color: #555; }
.nav a:hover { color: #000; }
.btn { display: inline-block; padding: 8px 20px; border-radius: 6px; font-weight: 500; font-size: 14px; transition: 160ms ease; cursor: pointer; border: 1px solid transparent; }
.btn-primary { background: #1ed760; color: #000; border-color: #1ed760; }
.btn-primary:hover { background: #17c454; border-color: #17c454; }
.btn-secondary { background: transparent; color: #111; border-color: #d0d0d0; }
.btn-secondary:hover { background: #f0f0f0; border-color: #b0b0b0; }
.btn-large { padding: 12px 32px; font-size: 16px; }
.hero { padding: 80px 0; background: #fff; }
.hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.hero-title { font-size: 48px; font-weight: 700; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 16px; }
.hero-desc { font-size: 18px; color: #555; max-width: 480px; margin-bottom: 24px; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-card { background: #f5f5f5; border-radius: 12px; padding: 32px; border: 1px solid #eaeaea; }
.hero-card-inner h3 { font-size: 20px; margin-bottom: 4px; }
.hero-card-inner p { color: #666; }
.hero-card-badge { display: inline-block; font-size: 12px; font-weight: 600; background: #1ed760; color: #000; padding: 2px 12px; border-radius: 12px; margin-bottom: 8px; }
.features { padding: 80px 0; background: #fafafa; }
.features-title { font-size: 32px; font-weight: 700; text-align: center; margin-bottom: 48px; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; }
.feature-card { background: #fff; padding: 24px; border-radius: 10px; border: 1px solid #eaeaea; text-align: center; transition: 160ms ease; }
.feature-card:hover { border-color: #1ed760; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
.feature-icon { font-size: 32px; margin-bottom: 8px; }
.feature-card h3 { font-size: 18px; margin-bottom: 4px; }
.feature-card p { color: #666; font-size: 14px; }
.cta { padding: 80px 0; background: #111; color: #fff; text-align: center; }
.cta h2 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
.cta p { color: #aaa; font-size: 18px; margin-bottom: 24px; }
.cta .btn-primary { background: #1ed760; color: #000; }
.site-footer { padding: 32px 0; background: #fff; border-top: 1px solid #eaeaea; }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 14px; color: #777; }
.footer-nav { display: flex; gap: 20px; }
.footer-nav a { color: #555; }
.footer-nav a:hover { color: #000; }
@media (max-width: 820px) {
  .hero-inner { grid-template-columns: 1fr; gap: 32px; }
  .hero-title { font-size: 36px; }
  .hero-desc { font-size: 16px; max-width: 100%; }
}
@media (max-width: 480px) {
  .header-inner { flex-direction: column; align-items: stretch; }
  .nav { justify-content: center; gap: 16px; font-size: 13px; }
  .hero { padding: 48px 0; }
  .hero-title { font-size: 28px; }
  .features-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
  .feature-card { padding: 16px; }
  .cta { padding: 48px 0; }
  .cta h2 { font-size: 24px; }
}
@media (max-width: 380px) {
  .features-grid { grid-template-columns: 1fr; }
}`,
        js: `console.log('🚀 Orbit ready!');
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-title');
  if (hero) {
    hero.addEventListener('click', () => {
      hero.textContent = '✨ You clicked me!';
      hero.style.color = '#1ed760';
      setTimeout(() => {
        hero.textContent = 'Build better ideas.';
        hero.style.color = '';
      }, 1200);
    });
  }
  document.querySelectorAll('.feature-card').forEach((card, i) => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.feature-icon');
      if (icon) icon.textContent = ['🚀','✨','🔐','📊'][i % 4];
    });
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.feature-icon');
      if (icon) icon.textContent = ['⚡','🎨','🔒','📈'][i % 4];
    });
  });
  console.log('✅ Interactive features loaded.');
});`
    },
    portfolio: {
        html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My Portfolio</title><link rel="stylesheet" href="style.css"></head><body><header><h1>My Portfolio</h1><nav><a href="#">Work</a><a href="#">About</a><a href="#">Contact</a></nav></header><main><section class="hero"><h2>Hi, I'm Alex</h2><p>I build digital experiences.</p></section><section class="work"><h3>Selected Work</h3><div class="grid"><div class="card"><h4>Project One</h4><p>A beautiful web app.</p></div><div class="card"><h4>Project Two</h4><p>Mobile-first design.</p></div><div class="card"><h4>Project Three</h4><p>Full-stack solution.</p></div></div></section></main><footer><p>© 2026 Alex</p></footer></body></html>`,
        css: `*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;background:#f8f8f8;color:#111;padding:24px}header{display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:1px solid #ddd}nav{display:flex;gap:16px}nav a{color:#555;text-decoration:none}nav a:hover{color:#000}.hero{padding:48px 0;text-align:center}.hero h2{font-size:36px;font-weight:700}.hero p{color:#666;font-size:18px}.work{padding:24px 0}.work h3{font-size:24px;margin-bottom:16px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px}.card{background:#fff;padding:20px;border-radius:8px;border:1px solid #eaeaea;transition:160ms ease}.card:hover{border-color:#1ed760;transform:translateY(-2px)}.card h4{margin-bottom:4px}.card p{color:#666;font-size:14px}footer{padding-top:24px;border-top:1px solid #ddd;margin-top:24px;text-align:center;color:#777}@media(max-width:480px){header{flex-direction:column;gap:8px;align-items:stretch;text-align:center}nav{justify-content:center}.hero h2{font-size:28px}}`,
        js: `console.log('Portfolio ready!');`
    },
    landing: {
        html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>LaunchPad</title><link rel="stylesheet" href="style.css"></head><body><header><div class="logo">LaunchPad</div><nav><a href="#">Product</a><a href="#">Pricing</a><a href="#">Sign in</a></nav></header><main><section class="hero"><h1>Launch your product.</h1><p>Everything you need to go from idea to market.</p><a href="#" class="btn">Start free trial</a></section><section class="features"><h2>Why LaunchPad?</h2><div class="grid"><div><h3>Fast</h3><p>Get started in minutes.</p></div><div><h3>Simple</h3><p>No complexity, just results.</p></div><div><h3>Scalable</h3><p>Grow without limits.</p></div></div></section></main><footer><p>© 2026 LaunchPad</p></footer></body></html>`,
        css: `*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;background:#fff;color:#111}header{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:1px solid #eee}.logo{font-weight:700;font-size:20px}nav{display:flex;gap:20px}nav a{color:#555;text-decoration:none}nav a:hover{color:#000}.hero{text-align:center;padding:80px 24px;background:#fafafa}.hero h1{font-size:48px;font-weight:700;letter-spacing:-1px}.hero p{font-size:20px;color:#555;margin:12px 0 24px}.btn{display:inline-block;padding:12px 32px;background:#1ed760;color:#000;border-radius:6px;font-weight:600;text-decoration:none;border:1px solid #1ed760}.btn:hover{background:#17c454}.features{padding:60px 24px;max-width:900px;margin:0 auto}.features h2{text-align:center;font-size:28px;margin-bottom:32px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:24px;text-align:center}.grid h3{font-size:20px}.grid p{color:#666}footer{padding:24px;text-align:center;border-top:1px solid #eee;color:#777;margin-top:24px}@media(max-width:480px){.hero h1{font-size:32px}.hero{padding:48px 16px}}`,
        js: `console.log('LaunchPad ready!');`
    }
};
