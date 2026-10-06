import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CertificateVerifyProxy() {
  const location = useLocation();

  useEffect(() => {
    // If entered via client-side routing, forward request to server so reverse-proxy resolves it
    window.location.href = location.pathname + location.search;
  }, [location]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F7F7F4',
        color: '#0F2A3A',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1E5F7E', letterSpacing: '0.05em' }}>
        FRAYLON TECHNOLOGIES
      </div>
      <div style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#0B1A24', opacity: 0.7 }}>
        Loading Certificate Verification...
      </div>
    </div>
  );
}
