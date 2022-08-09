import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estimer le prix de votre Bien",
          "Comparer le prix au m2",
          "Consulter les dernier avis des internautes",
          "Calculer votre capacité d'emprunt",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
