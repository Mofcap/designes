import { loginSuccess, loginFailure } from '../account/authSlice';

export function handleSubmit(event, setError, navigate, dispatch) {
  event.preventDefault();

  const email = event.target.username.value;
  const password = event.target.password.value;

  // Connexion de l'utilisateur
  fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      if (!response.ok) {
        if (response.status === 400) {
          // Si l'erreur est liée à une mauvaise requête (ex: mauvais email ou mot de passe)
          throw new Error('email ou mot de passe incorrect');
        } else {
          // Autres erreurs réseau ou serveur
          throw new Error('Erreur avec votre connexion à l\'API');
        }
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 200 && data.message === 'User successfully logged in') {
        const token = data.body.token;
        localStorage.setItem('authToken', token); // Stockage du token

        // Récupération du profil utilisateur avec le token
        return fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Inclure le token dans l'en-tête Authorization
          }
        });
      } else {
        // Si l'API retourne une réponse inattendue lors de la connexion
        throw new Error('Erreur lors de la connexion');
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur avec votre connexion à l\'API');
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 200 && data.message === 'Successfully got user profile data') {
        const userProfile = data.body;
        // Mettez à jour le store avec le profil utilisateur et le token
        dispatch(loginSuccess({ ...userProfile, token: localStorage.getItem('authToken') }));
        navigate('/user');
      } else {
        throw new Error('Erreur lors de la récupération du profil');
      }
    })
    .catch(error => {
      // Gérer les erreurs selon le message d'erreur
      if (error.message === 'email ou mot de passe incorrect') {
        setError('Email ou mot de passe incorrect.');
      } else if (error.message.includes('connexion à l\'API')) {
        setError('Erreur avec votre connexion à l\'API. Veuillez vérifier votre connexion.');
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }

      // Mettre à jour le store Redux avec une erreur de connexion
      dispatch(loginFailure(error.message));
      console.error('Erreur de soumission du formulaire:', error);
    });
}
