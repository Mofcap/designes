import { loginSuccess, loginFailure } from '../account/authSlice';

export function handleSubmit(event, setError, navigate, dispatch) {
  event.preventDefault();

  const email = event.target.username.value;
  const password = event.target.password.value;

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
        throw new Error('Réponse réseau non OK');
      }
      return response.json();
    })
    .then(data => {
      console.log('Réponse de l\'API:', data); // Débogage

      // Assumons que `data` a la structure suivante :
      // { status: 200, message: '...', body: { ... } }
      if (data.status === 200 && data.message === 'User successfully logged in') {
        // Assurez-vous que `data.body` contient les informations de l'utilisateur
        dispatch(loginSuccess(data.body.user)); // Ajustez selon la structure réelle
        navigate('/user');
      } else {
        // Si le message de l'API n'est pas celui attendu, considérez cela comme une erreur
        dispatch(loginFailure('Une erreur est survenue. Veuillez réessayer.'));
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    })
    .catch(error => {
      // Gestion des erreurs réseau ou autres exceptions
      dispatch(loginFailure('Une erreur est survenue. Veuillez réessayer.'));
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error('Erreur de soumission du formulaire:', error);
    });
}
