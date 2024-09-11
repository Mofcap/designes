import { updateUsernameSuccess } from '../account/authSlice'; 

export function handleUserFormSubmit(event, newUsername, dispatch, token) {
  event.preventDefault();

  
  fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify({ userName: newUsername }) 
  })
    .then(response => {
      // Vérifier si la réponse est valide avant de convertir en JSON
      if (!response.ok) {
        return response.json().then(error => {
          throw new Error(`La mise à jour du profil a échoué: ${error.message}`);
        });
      }
      return response.json();
    })
    .then(data => {
   
      if (data && data.status === 200) {
       
        dispatch(updateUsernameSuccess(newUsername)); 
      } else {
        console.error('Erreur lors de la mise à jour du profil:', data.message);
      }
    })
    .catch(error => {
      
      console.error('Erreur lors de la requête de mise à jour:', error.message || error);
    });
}