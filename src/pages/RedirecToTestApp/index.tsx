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

      const isAndroid = /android/.test(navigator.userAgent.toLowerCase());
    
      if (isIOS) {
      // Redirect to Apple App Store or open the app if installed
      history.replace('/');
      window.location.href = 'https://testflight.apple.com/join/Xw09I53z';
    } else if (isAndroid) {
      // Redirect to Google Play Store
      history.replace('/');
      window.location.href = 'https://play.google.com/apps/testing/com.pyramid.snacc';
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
