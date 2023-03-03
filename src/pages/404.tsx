import { useEffect } from 'react';

const Custom404 = () => {
  useEffect(() => {
    window.location.replace('/');
  });

  return null;
};

export default Custom404;
