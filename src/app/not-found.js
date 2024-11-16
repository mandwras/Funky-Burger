// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  );
}
