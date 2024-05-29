const PrivacyPolicy = () => {
  return (
    <iframe 
      src={process.env.PUBLIC_URL + '/files/privacy.html'} 
      title="Privacy Policy"
      style={{width: '100%', height: '100vh'}}
    />
  );
}

export default PrivacyPolicy;