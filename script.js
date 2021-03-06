let gameTable = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

let turn = 0;
$('.popup-container').show();
$('.start-game-again').hide();
let x = $('.playerX').val();
let o = $('.playerO').val();

function displayTable() {
  console.log(gameTable);
}

function newGame() {
  for (let i = 0; i < gameTable.length; i++) {
    for (let j = 0; j < gameTable[i].length; j++) {
      gameTable[i][j] = 0;
    }
  };
  $('.symbol').empty();
  $('.popup-container').hide();
  turn = 0;
  x = $('.playerX').val();
  o = $('.playerO').val();
}

function anotherGame() {
  $('.players').show();
  $('.start-game').show();
  $('.start-game-again').hide();
  $('.winner-popup').hide();
}

function congrats(winner) {
  $('.popup-container').show();
  $('.start-game').hide()
  $('.start-game-again').show();
  $('.winner-popup').show();
  $('.players').hide();
  $('.playerX').val('');
  $('.playerO').val('');
  $('.winner-popup').text(`${winner} wins!`);
}

function checkWin () {
  // Rows
  if (gameTable[0][0] + gameTable[0][1] + gameTable[0][2] === 3) {
    congrats(x);
  } else if (gameTable[0][0] + gameTable[0][1] + gameTable[0][2] === -3) {
    congrats(o);
  }

  if (gameTable[1][0] + gameTable[1][1] + gameTable[1][2] === 3) {
    congrats(x);
  } else if (gameTable[1][0] + gameTable[1][1] + gameTable[1][2] === -3) {
    congrats(o);
  }

  if (gameTable[2][0] + gameTable[2][1] + gameTable[2][2] === 3) {
    congrats(x);
  } else if (gameTable[2][0] + gameTable[2][1] + gameTable[2][2] === -3) {
    congrats(o);
  }

  // Columns
  if (gameTable[0][0] + gameTable[1][0] + gameTable[2][0] === 3) {
    congrats(x);
  } else if (gameTable[0][0] + gameTable[1][0] + gameTable[2][0] === -3) {
    congrats(o);
  }

  if (gameTable[0][1] + gameTable[1][1] + gameTable[2][1] === 3) {
    congrats(x);
  } else if (gameTable[0][1] + gameTable[1][1] + gameTable[2][1] === -3) {
    congrats(o);
  }

  if (gameTable[0][2] + gameTable[1][2] + gameTable[2][2] === 3) {
    congrats(x);
  } else if (gameTable[0][2] + gameTable[1][2] + gameTable[2][2] === -3) {
    congrats(o);
  }

  // Diagonal
  if (gameTable[0][0] + gameTable[1][1] + gameTable[2][2] === 3) {
    congrats(x);
  } else if (gameTable[0][0] + gameTable[1][1] + gameTable[2][2] === -3) {
    congrats(o);
  }

  if (gameTable[0][2] + gameTable[1][1] + gameTable[2][0] === 3) {
    congrats(x);
  } else if (gameTable[0][2] + gameTable[1][1] + gameTable[2][0] === -3) {
    congrats(o);
  }
}

function gameTurn(event) {
  let row = event.target.id.split('-')[1];
  let column = event.target.id.split('-')[2];
  if (turn % 2 === 0) {
    let x = 1;
    gameTable[row].splice(column, 1, x);
    $(`#cell-${row}-${column} > div`).text('X');
    turn++;
  } else {
    let o = -1;
    gameTable[row].splice(column, 1, o);
    $(`#cell-${row}-${column} > div`).text('O');
    turn++;
  }

  displayTable();
  checkWin();
}

$('.start-game').click(newGame);
$('.game-cell').click(gameTurn);
$('.start-game-again').click(anotherGame);
