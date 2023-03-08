import React from 'react'
import { NavLink } from "react-router-dom";

export const Liste = () => {
    const elements = ['element1', 'element2', 'element3'];

    return (
        <div>
            <h1>Liste des éléments</h1>
            <ul>
                {elements.map((element) => (
                    <li key={element}>
                        <NavLink to={`/liste/${element}`}>{element}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};