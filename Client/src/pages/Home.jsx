import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="auth-bg" aria-hidden="true">
        <div className="auth-bg__orb auth-bg__orb--1" />
        <div className="auth-bg__orb auth-bg__orb--2" />
        <div className="auth-bg__orb auth-bg__orb--3" />
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        <div className="glass-strong rounded-[var(--radius-2xl)] p-10 sm:p-14">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            Secure Authentication
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Welcome to AuthFlow
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg mb-10 max-w-lg mx-auto">
            Register, verify your email with OTP, and sign in to access your
            protected dashboard — all with a modern glass UI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="flex-1 max-w-xs mx-auto sm:mx-0">
              <Button type="button">Get Started</Button>
            </Link>
            <Link to="/login" className="flex-1 max-w-xs mx-auto sm:mx-0">
              <Button type="button" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--glass-border)] flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/register" className="auth-link">
              Create account
            </Link>
            <Link to="/verify-otp" className="auth-link">
              Verify email OTP
            </Link>
            <Link to="/dashboard" className="auth-link">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
