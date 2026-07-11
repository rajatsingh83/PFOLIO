/* Main app entry — Rajat Singh Portfolio */

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('rs-theme') || 'dark'; }
    catch { return 'dark'; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('rs-theme', theme); } catch {}
  }, [theme]);

  useRevealObserver();

  return (
    <>
      <ScrollProgress />
      <ParticleBackground />
      <CursorGlow />

      <Nav theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <AchievementsCerts />
        <Journey />
        <Contact />
      </main>

      <Footer />
      <ScrollTopFab />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
