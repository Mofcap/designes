import React, { useState  } from 'react';
import { useSelector} from 'react-redux';
import UserForm from '../../components/Forms/UserForm';  // Assurez-vous d'importer votre composant UserForm
import '../../assets/css/main.css';
import UserAccounts from '../../components/account/UserAccounts';

function User() {
  const [isEditing, setIsEditing] = useState(false); // État pour gérer l'affichage du formulaire
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <p>Vous n'êtes pas connecté.</p>;
  }

  const handleEditClick = () => {
    setIsEditing(true); // Afficher le formulaire lorsqu'on clique sur "Edit Name"
  };

  const handleCancel = () => {
    setIsEditing(false); // Cacher le formulaire lorsqu'on clique sur "Cancel"
  };

  return (
    <div className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
        <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
      </div>

      {/* Afficher le formulaire si isEditing est true */}
      {isEditing && <UserForm onCancel={handleCancel} />} 

      <h2 className="sr-only">Accounts</h2>
      <UserAccounts />
    </div>
  );
}

export default User;
