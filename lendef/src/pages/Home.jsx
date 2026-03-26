export default function Home() {
  return (
    <div style={{
      display: 'flex',
      height: '80vh',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{
        flex: 1,
        textAlign: 'center',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        margin: '1rem',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          marginBottom: '1rem'
        }}>HINDU SWARAJ</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          Ignite Your Potential • Embrace Freedom • Shape Your Destiny
        </p>
      </div>
      <div style={{
        flex: 1,
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        margin: '1rem',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ color: '#ffd700', marginBottom: '1.5rem' }}>About Hindu Swaraj</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          <strong>Hindu Swaraj</strong> is a seminal work by Mahatma Gandhi, written in 1909 during his time in South Africa.
          It outlines Gandhi's vision for India's independence and self-rule, emphasizing non-violence, self-reliance,
          and the importance of moral and ethical governance.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          The book critiques modern civilization and advocates for a return to traditional Indian values,
          sustainable living, and the empowerment of villages as the foundation of a free India.
          It remains a cornerstone of Gandhian philosophy and India's freedom struggle.
        </p>
        <p style={{ fontWeight: 'bold', color: '#ffd700' }}>
          Key themes include:
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
            <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>★</span>
            Non-violent resistance (Satyagraha)
          </li>
          <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
            <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>★</span>
            Self-sufficiency and village economy
          </li>
          <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
            <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>★</span>
            Critique of industrialization and Western influence
          </li>
          <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
            <span style={{ position: 'absolute', left: 0, color: '#ff6b6b' }}>★</span>
            Spiritual and moral development
          </li>
        </ul>
      </div>
    </div>
  );
}