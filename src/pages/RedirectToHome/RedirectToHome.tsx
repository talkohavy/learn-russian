import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectToHome() {
  const navigateTo = useNavigate();

  useEffect(() => {
    navigateTo('/learn-russian');
  }, [navigateTo]);

  return null;
}
