import { updateUsername } from '../../store/authSlice'; // Assurez-vous que cette action existe

export function handleUserFormSubmit(event, newUsername, dispatch, token) {
  event.preventDefault();

  // Requête pour mettre à jour le username sur le serveur
  fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Ajouter le token pour l'autorisation
    },
    body: JSON.stringify({ userName: newUsername })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('La mise à jour du profil a échoué');
      }
      return response.json();
    })
    .then(data => {
      // Vérifiez que la mise à jour a réussi et mettez à jour le store Redux
      if (data.status === 200) {
        dispatch(updateUsername(newUsername));
      } else {
        console.error('Erreur lors de la mise à jour du profil:', data.message);
      }
    })
    .catch(error => {
      console.error('Erreur lors de la requête de mise à jour:', error);
    });
}