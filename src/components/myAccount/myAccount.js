import React from 'react'

export const MyAccount = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '5rem' }}>Mon compte</h1>
      <p style={{ fontSize: '2rem' }}>Bienvenue, [Nom d'utilisateur] !</p>
      {/* Incluez ici les informations de l'utilisateur connecté */}
    </div>
  );
};
