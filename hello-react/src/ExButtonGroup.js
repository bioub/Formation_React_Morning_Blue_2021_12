// Au niveau de App, utiliser ExButtonGroup comme Select :
// <ExButtonGroup items={["Jean", "Romain", "Antonin"]} selected={prenom} onSelected={setPrenom} />
// Donc tout vient des props (items, selected et onSelected)
// Créer une boucle pour afficher items
// La valeur sélectionnée doit être disabled
// Remonter la valeur au clic du bouton

function ExButtonGroup() {
  return (
    <div className="ExButtonGroup">
      <button>A</button>
      <button>B</button>
      <button>C</button>
    </div>
  );
}

export default ExButtonGroup;
