import { useState } from 'react';
import { FiMail, FiLock, FiLoader } from 'react-icons/fi';
import { useAuth } from '../context/authcontext';

const Auth = ({ mode = 'signin' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, signInWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = mode === 'signin'
        ? await signIn(email, password)
        : await signUp(email, password);

      if (error) throw error;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);

    try {
      const { error } = await signInWithGoogle();
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-200/50 backdrop-blur-lg border border-accent/10 w-full max-w-sm mx-auto">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-center mb-6">
          {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
            </div>
          </div>

          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <FiLoader className="animate-spin mr-2" />
                {mode === 'signin' ? 'Signing in...' : 'Creating account...'}
              </>
            ) : (
              mode === 'signin' ? 'Sign In' : 'Sign Up'
            )}
          </button>

          <div className="divider">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
            disabled={loading}
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;