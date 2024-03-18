

const TermsAndConditions = () => {
  return (
    <iframe 
      src={process.env.PUBLIC_URL + '/files/tos.html'} 
      title="Terms of Service"
      style={{width: '100%', height: '100vh'}}
    />
  );
}

export default TermsAndConditions;