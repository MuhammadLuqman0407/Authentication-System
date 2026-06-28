import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const {
    user,
    fetchMe,
    refreshAccessToken,
    logout,
    logoutAll,
    accessToken,
  } = useAuth();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadUser() {
      setLoading(true);
      setError('');

      try {
        await fetchMe(accessToken);
      } catch {
        try {
          await refreshAccessToken();
          await fetchMe();
        } catch (err) {
          if (!cancelled) {
            setError(err.message || 'Session expired. Please login again.');
            navigate('/login');
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadUser();
    return () => {
      cancelled = true;
    };
  }, [accessToken, fetchMe, refreshAccessToken, navigate]);

  const handleLogout = async () => {
    setActionLoading('logout');
    setError('');
    setSuccess('');
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Logout failed');
    } finally {
      setActionLoading('');
    }
  };

  const handleLogoutAll = async () => {
    setActionLoading('logoutAll');
    setError('');
    setSuccess('');
    try {
      await logoutAll();
      setSuccess('Logged out from all devices.');
      setTimeout(() => navigate('/login'), 1200);
    } catch (err) {
      setError(err.message || 'Logout failed');
    } finally {
      setActionLoading('');
    }
  };

  const handleRefreshToken = async () => {
    setActionLoading('refresh');
    setError('');
    setSuccess('');
    try {
      await refreshAccessToken();
      setSuccess('Access token refreshed successfully.');
    } catch (err) {
      setError(err.message || 'Failed to refresh token');
    } finally {
      setActionLoading('');
    }
  };

  return (
    <div className="relative min-h-screen p-4 sm:p-8">
      <div className="auth-bg" aria-hidden="true">
        <div className="auth-bg__orb auth-bg__orb--1" />
        <div className="auth-bg__orb auth-bg__orb--2" />
        <div className="auth-bg__orb auth-bg__orb--3" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              AuthFlow
            </Link>
            <p className="text-[var(--text-muted)] text-sm mt-1">Protected dashboard</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link to="/login" className="auth-link">
              Login
            </Link>
            <Link to="/register" className="auth-link">
              Register
            </Link>
            <Link to="/verify-otp" className="auth-link">
              Verify OTP
            </Link>
          </nav>
        </header>

        <div className="glass-strong rounded-[var(--radius-2xl)] p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Your Profile</h1>
          <p className="text-[var(--text-secondary)] mb-8">
            You are authenticated. Data loaded from the backend.
          </p>

          <Alert type="error" message={error} />
          <Alert type="success" message={success} />

          {loading ? (
            <div className="glass rounded-[var(--radius-lg)] p-8 text-center text-[var(--text-muted)]">
              Loading profile...
            </div>
          ) : (
            <div className="glass rounded-[var(--radius-lg)] m-3 p-6 sm:p-8 space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-lg text-[var(--text-muted)] w-24 font-bold">Username</span>
                <span className="text-lg font-medium">{user?.username || '—'}</span>
              </div>
              <div className="h-px bg-[var(--glass-border)]" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-lg text-[var(--text-muted)] w-24 font-bold">Email</span>
                <span className="text-lg font-medium">{user?.email || '—'}</span>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <Button
              variant="outline"
              disabled={actionLoading !== ''}
              onClick={handleRefreshToken}
            >
              {actionLoading === 'refresh' ? 'Refreshing...' : 'Refresh Token'}
            </Button>
            <Button
              variant="outline"
              disabled={actionLoading !== ''}
              onClick={handleLogout}
            >
              {actionLoading === 'logout' ? 'Logging out...' : 'Logout'}
            </Button>
            <div className="sm:col-span-2">
              <Button
                disabled={actionLoading !== ''}
                onClick={handleLogoutAll}
              >
                {actionLoading === 'logoutAll'
                  ? 'Logging out...'
                  : 'Logout from All Devices'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
