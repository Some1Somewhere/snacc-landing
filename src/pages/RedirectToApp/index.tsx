import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RedirectToApp: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    
    // Detect if the user is on iOS
    const isIOS = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)

    if (isIOS) {
      // Redirect to Apple App Store or open the app if installed
      history.replace('/');
      window.location.href = 'https://apps.apple.com/us/app/snacc-nutrition-guide/id6478940556';
    } else {
      // Redirect to a fallback page or do nothing
      history.replace('/');
      window.location.href = 'https://app.snacc.fit';
    }
  }, [history]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectToApp;
