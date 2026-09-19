const stats = [
  { value: '1B+', label: 'emails sent' },
  { value: '99.99%', label: 'uptime' },
  { value: '<100ms', label: 'API response time' },
]

export function StatsStrip() {
  return <div className="stats-strip">{stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
}
