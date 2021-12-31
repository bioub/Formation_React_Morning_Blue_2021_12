// Ex
// Avec les hooks créer un state name
// L'afficher à la place de AFFICHER_LE_NOM
// Récupérer la saisi du champ pour mettre à jour le state
// Utiliser ExHelloworld dans App.js comme ceci
// <ExHelloworld />

function ExHelloworld() {
  return (
    <div className="ExHelloworld">
      <label>Name:</label>
      <input type="text" placeholder="Enter a name here" />
      <hr />
      <h1>Hello AFFICHER_LE_NOM!</h1>
    </div>
  );
}

export default ExHelloworld;
