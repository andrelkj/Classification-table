//creating an object
var firstPerson = {
  name: "João",
  wins: 0,
  ties: 0,
  losses: 0,
  score: 0,
};

var secondPerson = {
  nome: "Jonas",
  wins: 0,
  ties: 0,
  losses: 0,
  score: 0,
};

var tableElement = document.getElementById("tabelaJogadores");

showInScreen();

function showInScreen() {
  tableElement.innerHTML = `
    <tr>
        <td>${firstPerson.name}</td>
        <td>${firstPerson.wins}</td>
        <td>${firstPerson.ties}</td>
        <td>${firstPerson.losses}</td>
        <td>${firstPerson.score}</td>
        <td><button onClick="adicionarVitoria(firstPerson)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(firstPerson)">Empate</button></td>
        <td><button onClick="adicionarDerrota(firstPerson)">Derrota</button></td>
    </tr>
`;
}
// var thirdPerson = {
//     nome: 'Paulo',
//     wins: 0,
//     ties: 0,
//     losses: 0,
//     score: 0
// }

// alert(firstPerson.wins)

function adicionarVitoria(player) {
  player.wins++;
  player.score = player.score + 3;
  showInScreen();
}
function adicionarEmpate(player) {
  player.ties++;
  player.score++;
  showInScreen();
}
function adicionarDerrota(player) {
  player.losses++;
  showInScreen();
}

// add new players working with lists to manage the data and a for condition to add points
// personilize page to your prefered game
// share projets