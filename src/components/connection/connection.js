import React from 'react'
import { useHistory } from 'react-router-dom';

export const Connection = () => {
  const history = useHistory();

  const handleConnection = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    // Vérifiez ici les informations d'identification de l'utilisateur
    // et effectuez la connexion si elles sont valides
    history.push('/myAccount');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '5rem' }}>Se connecter</h1>
      <form onSubmit={handleConnection}>
        <label htmlFor="username" style={{ display: 'block', fontSize: '2rem', marginBottom: '10px' }}>Nom d'utilisateur :</label>
        <input type="text" name="username" style={{ fontSize: '2rem', marginBottom: '20px' }} />
        <br />
        <label htmlFor="password" style={{ display: 'block', fontSize: '2rem', marginBottom: '10px' }}>Mot de passe :</label>
        <input type="password" name="password" style={{ fontSize: '2rem', marginBottom: '20px' }} />
        <br />
        <button type="submit" style={{ fontSize: '2rem', padding: '10px 20px' }}>Se connecter</button>
      </form>
    </div>
  );
};
