import React from 'react';
import { Link } from 'react-router-dom';

const DeleteAccountPage: React.FC = () => {
  return (
    <div style={{ padding: '50px', paddingLeft: '200px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Account Deletion Information</h1>
      <p>
        If you wish to delete your account, please follow these steps:
      </p>
      <ol>
      <li><Link to="/get">Login to the app</Link>.</li>
        <li>Go to your settings page.</li>
        <li>Click on "Delete Account".</li>
      </ol>
      <p>
        Upon clicking "Delete Account", all your data will be deleted immediately.
      </p>
      <h2>Data Deletion Details</h2>
      <p>
        The following types of data will be deleted:
      </p>
      <ul>
        <li>Personal information such as name, email, and address.</li>
        <li>Usage data including preferences and settings.</li>
        <li>Any other data associated with your account.</li>
      </ul>
      <p>
        Note that some data may be retained for a limited period due to legal or regulatory requirements.
      </p>
    </div>
  );
};

export default DeleteAccountPage;
