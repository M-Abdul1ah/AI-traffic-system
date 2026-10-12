import { useState } from 'react'
import { Activity, BarChart3, Brain, CarFront, CirclePlay, Clock3, Gauge, LayoutDashboard, Map, Moon, Settings, ShieldCheck, Sun, Wifi } from 'lucide-react'
import './App.css'
import TrafficIntersection from './TrafficIntersection'

function App() {
  const [page, setPage] = useState('Overview')
  const [dark, setDark] = useState(true)
  const [running, setRunning] = useState(false)

  const nav = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Traffic World', icon: Map },
    { name: 'Simulation Lab', icon: CirclePlay },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'AI Insights', icon: Brain },
    { name: 'Settings', icon: Settings },
  ]

  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <aside className="sidebar">
        <div className="brand"><div className="brand-icon"><Activity size={22} /></div><div><strong>TRAFFIC<span>AI</span></strong><small>INTELLIGENCE PLATFORM</small></div></div>
        <div className="workspace-label">WORKSPACE</div>
        <nav>
          {nav.map(({ name, icon: Icon }) => (
            <button key={name} className={page === name ? 'nav-item active' : 'nav-item'} onClick={() => setPage(name)}>
              <Icon size={18} /><span>{name}</span>{name === 'AI Insights' && <i className="nav-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom"><div className="system-status"><span className="status-dot" /><div><strong>Local environment</strong><small>Ready for simulation</small></div></div><div className="version">AI TRAFFIC SYSTEM Â· V0.1</div></div>
      </aside>

      <main className="main">
        <header className="topbar"><div className="breadcrumb">Workspace <span>/</span> <strong>{page}</strong></div><div className="top-actions"><div className="env-chip"><span className="status-dot" /> DEMO ENVIRONMENT</div><button className="icon-button" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button><div className="avatar">AT</div></div></header>
        <div className="content">
          <section className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> TRAFFIC OPERATIONS</div><h1>{page === 'Overview' ? 'Traffic Overview' : page}</h1><p>{page === 'Overview' ? 'Your command center for intelligent traffic management.' : `Explore ${page.toLowerCase()} in your local demo environment.`}</p></div><button className={running ? 'primary-button running' : 'primary-button'} onClick={() => setRunning(!running)}>{running ? <><Activity size={17} /> Stop demo</> : <><CirclePlay size={17} /> Run demo</>}</button></section>

          <section className="notice"><div className="notice-icon"><ShieldCheck size={18} /></div><div><strong>Development environment</strong><p>These are illustrative demo values, not live traffic data. Backend integration comes in a later milestone.</p></div><span className="demo-tag">MOCK DATA</span></section>

          <section className="metrics">
            <article className="metric-card"><div className="metric-top"><span>Network flow</span><div className="metric-icon blue"><CarFront size={19} /></div></div><div className="metric-value">1,284 <small>veh/hr</small></div><div className="metric-foot"><span className="metric-neutral">DEMO VALUE</span><span>Simulated throughput</span></div><div className="sparkline blue-line"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
            <article className="metric-card"><div className="metric-top"><span>Avg. travel time</span><div className="metric-icon violet"><Clock3 size={19} /></div></div><div className="metric-value">4.8 <small>min</small></div><div className="metric-foot"><span className="metric-neutral">DEMO VALUE</span><span>Per road segment</span></div><div className="sparkline violet-line"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
            <article className="metric-card"><div className="metric-top"><span>Congestion index</span><div className="metric-icon amber"><Gauge size={19} /></div></div><div className="metric-value">32<small>/100</small></div><div className="metric-foot"><span className="metric-neutral">DEMO VALUE</span><span>Illustrative index</span></div><div className="progress"><span /></div></article>
            <article className="metric-card"><div className="metric-top"><span>Active scenarios</span><div className="metric-icon green"><Activity size={19} /></div></div><div className="metric-value">{running ? '1' : '0'} <small>running</small></div><div className="metric-foot"><span className={running ? 'state-running' : 'metric-neutral'}>{running ? 'DEMO RUNNING' : 'IDLE'}</span><span>Local UI state only</span></div><div className="progress green-progress"><span style={{ width: running ? '62%' : '0%' }} /></div></article>
          </section>

          <section className="dashboard-grid">
            <article className="panel network-panel"><div className="panel-heading"><div><h2>Network visualization</h2><p>Illustrative intersection Â· Not a live map</p></div><span className="panel-label"><span className="status-dot" /> PREVIEW</span></div><TrafficIntersection running={running} /><div className="map-legend"><span><i className="legend-dot green-dot" /> Low congestion</span><span><i className="legend-dot yellow-dot" /> Moderate</span><span><i className="legend-dot red-dot" /> High congestion</span></div></article>
            <article className="panel activity-panel"><div className="panel-heading"><div><h2>System activity</h2><p>Local application events</p></div><Wifi size={17} className="muted-icon" /></div><div className="activity-list"><div className="activity-item"><span className="activity-symbol green"><ShieldCheck size={16}/></span><div><strong>Frontend initialized</strong><p>Dashboard components loaded</p><small>SESSION START</small></div><span className="event-check">?</span></div><div className="activity-item"><span className="activity-symbol blue"><BarChart3 size={16}/></span><div><strong>Demo metrics available</strong><p>Sample data displayed</p><small>MOCK DATA</small></div><span className="event-check">?</span></div><div className="activity-item"><span className="activity-symbol violet"><Brain size={16}/></span><div><strong>AI integration pending</strong><p>Model pipeline not connected</p><small>UPCOMING</small></div><span className="event-pending">?</span></div><div className="activity-item"><span className="activity-symbol amber"><Map size={16}/></span><div><strong>3D traffic world pending</strong><p>Visualization milestone</p><small>UPCOMING</small></div><span className="event-pending">?</span></div></div></article>
          </section>

          <section className="panel milestones"><div className="panel-heading"><div><h2>Development milestones</h2><p>Building in small, testable increments</p></div><span className="milestone-count">V0.1</span></div><div className="milestone-grid"><div className="milestone-item complete"><span className="milestone-number">01</span><div><strong>Project foundation</strong><p>Python + React + TypeScript</p></div><span className="milestone-state">FOUNDATION</span></div><div className="milestone-item current"><span className="milestone-number">02</span><div><strong>Dashboard UI</strong><p>Components and responsive layout</p></div><span className="milestone-state">IN PROGRESS</span></div><div className="milestone-item"><span className="milestone-number">03</span><div><strong>3D traffic world</strong><p>Interactive road network</p></div><span className="milestone-state">PLANNED</span></div><div className="milestone-item"><span className="milestone-number">04</span><div><strong>Simulation backend</strong><p>Traffic engine and API</p></div><span className="milestone-state">PLANNED</span></div></div></section>
          <footer><span>AI TRAFFIC SYSTEM <span className="footer-separator">/</span> LEARNING BUILD</span><span><span className="status-dot" /> LOCAL UI Â· NO LIVE DATA CONNECTED</span></footer>
        </div>
      </main>
    </div>
  )
}

export default App
