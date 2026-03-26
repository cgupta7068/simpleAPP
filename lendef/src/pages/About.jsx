export default function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Hindu Kings and Their Kingdoms</h1>
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <strong>Ancient Indian Kings</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            ↓<br />
            <strong>Maurya Dynasty</strong><br />
            (321 BCE - 185 BCE)
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            ↙<br />
            Chandragupta Maurya<br />
            (321-297 BCE)
          </div>
          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            ↘<br />
            Ashoka the Great<br />
            (268-232 BCE)
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            ↓<br />
            <strong>Gupta Dynasty</strong><br />
            (320 CE - 550 CE)
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            ↙<br />
            Chandragupta I<br />
            (320-335 CE)
          </div>
          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            ↘<br />
            Samudragupta<br />
            (335-380 CE)
          </div>
          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            →<br />
            Chandragupta II<br />
            (380-415 CE)
          </div>
        </div>
      </div>
    </div>
  );
}