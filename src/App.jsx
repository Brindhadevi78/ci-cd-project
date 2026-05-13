import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">DevOps<span>Pro</span></div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="btn-primary">Get Started</a>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-badge">🚀 CI/CD Powered</div>
        <h1>DHARSHANA... <span className="gradient-text">Scale.</span></h1>
        <p className="hero-sub">
          Modern cloud infrastructure with AWS, Docker, and automated pipelines.
          Ship faster with confidence.
        </p>
        <div className="hero-actions">
          <a href="#features" className="btn-primary">Explore Features</a>
          <a href="#stack" className="btn-outline">View Stack</a>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Features */}
      <section className="section" id="features">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-sub">Everything you need to ship production-ready apps</p>
        <div className="cards-grid">
          {[
            { icon: '⚡', title: 'Fast Deployments', desc: 'Automated CI/CD pipelines that deploy in seconds, not hours.' },
            { icon: '🔒', title: 'Secure by Default', desc: 'IAM roles, secrets management, and encrypted storage out of the box.' },
            { icon: '📈', title: 'Auto Scaling', desc: 'Handle any traffic spike with AWS auto-scaling groups.' },
            { icon: '🐳', title: 'Containerized', desc: 'Docker-first approach for consistent environments everywhere.' },
            { icon: '🌍', title: 'Global CDN', desc: 'CloudFront distribution for low-latency worldwide delivery.' },
            { icon: '📊', title: 'Monitoring', desc: 'Real-time metrics and alerts with CloudWatch dashboards.' },
          ].map((f) => (
            <div className="card" key={f.title}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section stack-section" id="stack">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-sub">Powered by industry-leading tools</p>
        <div className="stack-grid">
          {['AWS', 'Docker', 'React', 'Vite', 'Nginx', 'GitHub Actions'].map((tech) => (
            <div className="stack-pill" key={tech}>{tech}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <h2>Ready to get started?</h2>
        <p>Deploy your first app in minutes with our streamlined workflow.</p>
        <a href="mailto:hello@example.com" className="btn-primary btn-lg">Contact Us →</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© 2025 DevOpsPro. Built with React + Vite on AWS.</span>
      </footer>
    </>
  )
}

export default App
