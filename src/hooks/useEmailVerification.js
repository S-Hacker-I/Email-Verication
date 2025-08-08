import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import supabase from '../utils/supabase';

const MONTHLY_LIMIT = 25;

export const useEmailVerification = () => {
  const { user } = useAuth();
  const [verificationCount, setVerificationCount] = useState(0);
  const [remainingVerifications, setRemainingVerifications] = useState(MONTHLY_LIMIT);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      fetchVerificationCount();
    }
  }, [user]);

  const fetchVerificationCount = async () => {
    try {
      const { data, error } = await supabase.rpc('get_monthly_verification_count', {
        user_id: user.id
      });

      if (error) throw error;

      setVerificationCount(data);
      setRemainingVerifications(MONTHLY_LIMIT - data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (email) => {
    if (!user) {
      throw new Error('User must be authenticated to verify emails');
    }

    if (verificationCount >= MONTHLY_LIMIT) {
      throw new Error('Monthly verification limit reached');
    }

    try {
      setLoading(true);
      
      // Here you would implement your email verification logic
      // For example, calling an email verification service API
      const isValid = await checkEmailValidity(email);
      
      // Record the verification attempt
      const { error } = await supabase
        .from('email_verifications')
        .insert({
          user_id: user.id,
          email,
          status: isValid ? 'valid' : 'invalid'
        });

      if (error) throw error;

      // Update counts
      await fetchVerificationCount();

      return { isValid, error: null };
    } catch (err) {
      return { isValid: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Mock email validation function - replace with actual validation service
  const checkEmailValidity = async (email) => {
    // Simple regex validation for demonstration
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return {
    verifyEmail,
    verificationCount,
    remainingVerifications,
    loading,
    error,
  };
};