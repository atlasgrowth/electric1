import { useState, useLocation } from 'react';

export default function Admin() {
  const [isDeploying, setIsDeploying] = useState(false);
  const location = useLocation();
  const site = location.pathname.split('/')[1] || new URLSearchParams(window.location.search).get('s');

  // ... rest of the Admin component remains unchanged ...

  return (
    <div>
      {/* ... JSX for the Admin component ... */}
    </div>
  );
}