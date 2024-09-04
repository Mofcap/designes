import React from 'react';
import Account from './Account'; 
function UserAccounts() {
  return (
    <div>
      <Account 
        title="Argent Bank Checking (x8349)" 
        amount="$2,082.79" 
        description="Available Balance" 
      />
      <Account 
        title="Argent Bank Savings (x6712)" 
        amount="$10,928.42" 
        description="Available Balance" 
      />
      <Account 
        title="Argent Bank Credit Card (x8349)" 
        amount="$184.30" 
        description="Current Balance" 
      />
    </div>
  );
}

export default UserAccounts;