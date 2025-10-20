import React from "react";

export default function PortfolioPreview() {
  return (
    <div>
      <style>{`
        :root{--bg:linear-gradient(to bottom,#fff7ed,#ffffff);--accent:#fb923c;--muted:#475569;--text:#0f172a}
        [data-theme='dark']{--bg:linear-gradient(to bottom,#071226,#000);--text:#f8fafc}
        body{margin:0;font-family:'Poppins',sans-serif}
        .page{min-height:100vh;background:var(--bg);color:var(--text)}
        header{position:sticky;top:0;backdrop-filter:blur(12px);background:rgba(255,255,255,0.6);border-bottom:1px solid #f1f5f9;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;z-index:50}
        header h1{color:var(--accent);font-size:1.25rem;margin:0}
        nav a{margin-left:1rem;color:#334155;text-decoration:none;font-weight:500}
        nav a:hover{color:var(--accent)}
        section{padding:4rem 2rem;max-width:1000px;margin:0 auto}
        .hero{display:flex;flex-direction:column;align-items:center;text-align:center}
        .hero img{width:200px;height:200px;border-radius:20px;margin-top:1.5rem;box-shadow:0 10px 25px rgba(0,0,0,0.1)}
        .hero h2 span{background:linear-gradient(90deg,#fb923c,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .btns a{display:inline-block;margin:1rem;padding:0.75rem 1.5rem;border-radius:1rem;text-decoration:none;font-weight:500;transition:0.3s}
        .btns .primary{background:linear-gradient(90deg,#fb923c,#ec4899);color:#fff}
        .btns .outline{border:2px solid var(--accent);color:var(--accent)}
        .section-title{text-align:center;font-size:2rem;color:var(--accent);margin-bottom:1rem}
        .projects{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2rem}
        .project-card{background:#fff;border-radius:1rem;box-shadow:0 4px 12px rgba(0,0,0,0.05);overflow:hidden;transition:transform .3s}
        .project-card:hover{transform:translateY(-5px)}
        .project-card img{width:100%;height:180px;object-fit:cover}
        .project-card .info{padding:1rem}
        .project-card h4{color:var(--accent);margin:0}
        footer{text-align:center;padding:2rem;border-top:1px solid #f1f5f9;font-size:0.9rem;color:#64748b}
        @media (max-width:640px){header{padding:0.75rem 1rem}.hero img{width:160px;height:160px}}
      `}</style>

      <div className="page" role="main">
        <header>
          <h1>Folu Taiwo</h1>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero" id="home" aria-labelledby="hero-title">
          <h2 id="hero-title">Hi, I'm <span>Folu Taiwo</span></h2>
          <p style={{maxWidth:700,color: 'var(--muted)',margin:'0.5rem auto 0'}}>Junior Computer Science student at Clemson University passionate about building bold, modern software.</p>
          <img src="https://via.placeholder.com/400" alt="Folu Taiwo" />
          <div className="btns" style={{display:'flex',justifyContent:'center',gap:'0.5rem'}}>
            <a className="primary" href="#projects">View Projects</a>
            <a className="outline" href="#contact">Contact Me</a>
          </div>
        </section>

        <section id="about">
          <h3 className="section-title">About Me</h3>
          <p style={{textAlign:'center',maxWidth:700,margin:'0 auto',color:'var(--muted)'}}>I'm a third-year CS student who enjoys solving problems through programming. My interests include algorithms, system design, and front-end development. Outside of tech, I love art, music, and spending time with friends and family.</p>
        </section>

        <section id="projects">
          <h3 className="section-title">Projects</h3>
          <div className="projects">
            <article className="project-card">
              <img src="https://via.placeholder.com/800x400?text=Spotify+API" alt="Spotify Project" />
              <div className="info">
                <h4>Spotify Artist Top Tracks</h4>
                <p>Uses Spotify API to display top tracks of any artist.</p>
              </div>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/800x400?text=Portfolio+Website" alt="Portfolio Project" />
              <div className="info">
                <h4>Portfolio Website</h4>
                <p>Personal portfolio built using HTML, CSS, and JS (now redesigned).</p>
              </div>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/800x400?text=Strands+Project" alt="Strands Project" />
              <div className="info">
                <h4>Strands Project</h4>
                <p>Algorithmic design and collaboration focused class project.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="experience">
          <h3 className="section-title">Experience</h3>
          <p style={{textAlign:'center',maxWidth:700,margin:'0 auto',color:'var(--muted)'}}>Software Tester — Eleos Technologies<br/>Executed test cases for mobile and web trucking apps, ensuring quality and performance. Collaborated with developers to resolve issues efficiently.</p>
        </section>

        <section id="contact">
          <h3 className="section-title">Get In Touch</h3>
          <p style={{textAlign:'center',color:'var(--muted)'}}>Reach out for collaborations, internship opportunities, or to connect!</p>
          <div style={{textAlign:'center',marginTop:16}}>
            <a href="mailto:folutaiwo5@gmail.com" className="primary">Email Me</a>
          </div>
        </section>

        <footer>
          © 2025 Folu Taiwo — Built with ❤️ in HTML & CSS
        </footer>
      </div>
    </div>
  );
}
