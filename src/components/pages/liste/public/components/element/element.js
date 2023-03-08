import React from 'react'
import { useParams } from 'react-router-dom';

export const Element = () => {
  const { element } = useParams();

  return (
    <div>
      <h1>Page de l'élément {element}</h1>
      <p>Ceci est la page individuelle pour l'élément {element}.</p>
    </div>
  );
};