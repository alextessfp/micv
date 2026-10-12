import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Download, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import './styles.css';

const experience = [
  { period: '2023 — ACTUALIDAD', title: 'Puesto más reciente', company: 'Nombre de la empresa · Ciudad', description: 'Describe aquí tu responsabilidad principal y el impacto que generaste. Añade resultados concretos, cifras o proyectos relevantes.' },
  { period: '2020 — 2023', title: 'Puesto anterior', company: 'Nombre de la empresa · Ciudad', description: 'Resume tus aportaciones más importantes y las habilidades que desarrollaste en este puesto.' },
];

const skills = ['Comunicación', 'Liderazgo', 'Resolución de problemas', 'Gestión de proyectos', 'Trabajo en equipo', 'Pensamiento estratégico'];

function App() {
  return <main className="page-shell">
    <nav className="topbar"><a className="wordmark" href="#inicio">AR<span>.</span></a><div className="nav-links"><a href="#experiencia">Experiencia</a><a href="#sobre-mi">Sobre mí</a><a className="nav-cta" href="mailto:hola@tucorreo.com">Hablemos <ArrowUpRight size={15}/></a></div></nav>
    <section className="hero" id="inicio">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> DISPONIBLE PARA NUEVOS PROYECTOS</p><h1>Hola, soy<br/><span>Alex Ramírez<br/>Galindo.</span></h1><p className="role">Profesión o especialidad <span>·</span> Ciudad, País</p><p className="intro">Una breve presentación que cuente quién eres, qué haces y el valor que aportas. Escribe un par de frases claras y personales.</p><div className="hero-actions"><a className="button button-dark" href="#experiencia">Conoce mi trayectoria <ArrowDown size={16}/></a><a className="text-link" href="mailto:hola@tucorreo.com">Escríbeme <ArrowUpRight size={15}/></a></div><div className="hero-meta"><div><span className="meta-number">05<span>+</span></span><span className="meta-label">AÑOS DE EXPERIENCIA</span></div><div><span className="meta-number">12<span>+</span></span><span className="meta-label">PROYECTOS REALIZADOS</span></div></div></div>
      <div className="portrait-wrap"><div className="portrait-card"><div className="portrait-art"><div className="sun"/><div className="portrait-initials">AR</div><div className="portrait-caption">TU FOTO<br/>AQUÍ</div><Sparkles className="sparkle" size={22}/></div><div className="portrait-footer"><span><MapPin size={14}/> Ciudad, País</span><span>01 / 01</span></div></div><span className="vertical-note">CURRÍCULUM VITAE · 2026</span><div className="deco-stamp">CREATIVO<br/>POR NATURALEZA</div></div>
    </section>
    <section className="experience-section section" id="experiencia"><div className="section-heading"><div><p className="eyebrow">01 — LO QUE HE HECHO</p><h2>Experiencia<span>.</span></h2></div><BriefcaseBusiness className="section-icon" size={26}/></div><div className="experience-list">{experience.map((item, i) => <article className="experience-item" key={item.period}><span className="timeline-index">0{i + 1}</span><div className="experience-main"><p className="period">{item.period}</p><h3>{item.title}</h3><p className="company">{item.company}</p><p className="description">{item.description}</p></div><ArrowUpRight className="item-arrow" size={18}/></article>)}</div></section>
    <section className="about-section section" id="sobre-mi"><div className="about-copy"><p className="eyebrow">02 — UN POCO SOBRE MÍ</p><h2>Ideas claras.<br/><span>Trabajo con intención.</span></h2><p className="description">Comparte qué te mueve profesionalmente, cómo colaboras y qué tipo de retos te gusta resolver. Esta sección le da contexto y personalidad a tu experiencia.</p><a className="text-link" href="mailto:hola@tucorreo.com">Conversemos <ArrowUpRight size={15}/></a></div><div className="about-details"><div className="detail-block"><GraduationCap size={20}/><div><p className="eyebrow">EDUCACIÓN</p><h3>Tu título o carrera</h3><p>Universidad o institución · Año</p></div></div><div className="detail-block"><Sparkles size={20}/><div><p className="eyebrow">HABILIDADES</p><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></div></div></section>
    <footer className="footer"><a className="wordmark" href="#inicio">AR<span>.</span></a><p>¿Tienes un proyecto en mente?</p><a className="footer-email" href="mailto:hola@tucorreo.com">hola@tucorreo.com <ArrowUpRight size={17}/></a><div className="footer-bottom"><span>© 2026 · Alex Ramírez Galindo</span><div><a href="#">LinkedIn</a><a href="#">GitHub</a><a href="#">Descargar CV <Download size={13}/></a></div><span>HECHO CON INTENCIÓN</span></div></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);

