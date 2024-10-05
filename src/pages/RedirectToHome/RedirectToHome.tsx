import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '@src/utils/constants';

export default function RedirectToHome() {
  const navigateTo = useNavigate();

  useEffect(() => {
    navigateTo(BASE_URL);
  }, [navigateTo]);

  return null;
}
