import { useEffect, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, RefreshCw } from 'lucide-react'

type Phase = 'north-south' | 'east-west'

const directions = [
  { name: 'North', position: 'north' },
  { name: 'South', position: 'south' },
  { name: 'East', position: 'east' },
  { name: 'West', position: 'west' },
] as const

export default function TrafficIntersection({ running }: { running: boolean }) {
  const [phase, setPhase] = useState<Phase>('north-south')

  useEffect(() => {
    if (!running) return

    const timer = window.setInterval(() => {
      setPhase(current => current === 'north-south' ? 'east-west' : 'north-south')
    }, 4000)

    return () => window.clearInterval(timer)
  }, [running])

  const switchPhase = () => {
    setPhase(current => current === 'north-south' ? 'east-west' : 'north-south')
  }

  return (
    <div className="traffic-scene">
      <div className="traffic-count count-north"><strong>North</strong><span>12 vehicles</span></div>
      <div className="traffic-count count-south"><strong>South</strong><span>8 vehicles</span></div>
      <div className="traffic-count count-east"><strong>East</strong><span>16 vehicles</span></div>
      <div className="traffic-count count-west"><strong>West</strong><span>10 vehicles</span></div>

      <div className="traffic-road traffic-road-horizontal" />
      <div className="traffic-road traffic-road-vertical" />
      <div className="traffic-center">
        <span className="lane-divider lane-divider-horizontal" />
        <span className="lane-divider lane-divider-vertical" />
      </div>

      {directions.map(({ name, position }) => {
        const green = position === 'north' || position === 'south'
          ? phase === 'north-south'
          : phase === 'east-west'

        return (
          <div key={name} className={`traffic-signal signal-${position}`} title={`${name}: ${green ? 'Green' : 'Red'}`}>
            <span className={`signal-light ${green ? 'light-green' : 'light-red'}`} />
            <span className="signal-light light-amber" />
          </div>
        )
      })}

      <div className="traffic-vehicles vehicles-north">
        <span className="traffic-car car-blue"><ArrowDown size={13} /></span>
        <span className="traffic-car car-white"><ArrowDown size={13} /></span>
        <span className="traffic-car car-amber"><ArrowDown size={13} /></span>
      </div>
      <div className="traffic-vehicles vehicles-south">
        <span className="traffic-car car-white"><ArrowUp size={13} /></span>
        <span className="traffic-car car-blue"><ArrowUp size={13} /></span>
      </div>
      <div className="traffic-vehicles vehicles-east">
        <span className="traffic-car car-amber"><ArrowLeft size={13} /></span>
        <span className="traffic-car car-white"><ArrowLeft size={13} /></span>
        <span className="traffic-car car-blue"><ArrowLeft size={13} /></span>
      </div>
      <div className="traffic-vehicles vehicles-west">
        <span className="traffic-car car-blue"><ArrowRight size={13} /></span>
        <span className="traffic-car car-white"><ArrowRight size={13} /></span>
      </div>

      <div className="traffic-phase">
        <span className={`status-dot ${running ? 'phase-active' : ''}`} />
        <span>{running ? 'Automatic phase cycling' : 'Manual demo phase'}</span>
        <button
          type="button"
          onClick={switchPhase}
          aria-label="Switch traffic signal phase"
          title="Switch signal phase"
        >
          <RefreshCw size={14} />
        </button>
      </div>
      <div className="traffic-scene-caption">ILLUSTRATIVE FOUR-WAY JUNCTION · SIMULATED COUNTS</div>
    </div>
  )
}
