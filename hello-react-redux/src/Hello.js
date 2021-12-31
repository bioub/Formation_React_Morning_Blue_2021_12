import React from "react";

// function Hello() {
//   /*
//   <div class="Hello">
//     Hello <span id="prenom">Romain</span>
//   </div>
//   */
//   const divEl = document.createElement('div');
//   divEl.className = "Hello";

//   const textNode = document.createTextNode('Hello ');
//   divEl.appendChild(textNode);

//   const spanEl = document.createElement('span');
//   spanEl.id = "prenom";
//   spanEl.innerText = 'Romain';
//   divEl.appendChild(spanEl)

//   return divEl;
// }

// function Hello() {
//   /*
//   <div class="Hello">
//     Hello <span id="prenom">Romain</span>
//   </div>
//   */
//   return React.createElement(
//     "div",
//     { className: "Hello" },
//     "Hello ",
//     React.createElement("span", { id: "prenom" }, "Romain")
//   );
// }

function Hello({ name = 'Romain' }) {
  /*
  <div class="Hello">
    Hello <span id="prenom">Romain</span>
  </div>
  */
  return (
    <div className="Hello">
      Hello <span id="prenom" className="selected">{name}</span>
    </div>
  );
}

export default Hello;
