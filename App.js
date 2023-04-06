import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity, Button } from "react-native";
import Board from "./components/Board";
import { mainApp } from "./styles/styles";

export default function App() {
  //Player, game, dan modal states
  const [playerTurn, changeTurn] = useState(true);
  const [end, endGame] = useState(false);
  const [modal, toggleModal] = useState(false);

  //Notifikasi hasil game , pemenang dan seri
  const [result, setResult] = useState("");

  //Penampung giliran
  const [turns, setTurn] = useState({});

  //Hook toggles untuk menampung component dan mengganti giliran pemain
  const togglePlayer = () => changeTurn(!playerTurn);
  const toggleGame = () => endGame(!end);
  const triggerModal = () => toggleModal(!modal);

  //Hook untuk memulai game baru
  const newGame = () => {
    setTurn({});
    endGame(false);
    toggleModal(false);
    changeTurn(true);
  };

  //Hook untuk mengakhiri permainan dan merender komponen yg  dibutuhkan
  const finishGame = () => {
    endGame();
    triggerModal();
  };

  function checkWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (turns[a] === turns[b] && turns[b] === turns[c] && a in turns && b in turns && c in turns) {
        //Pemenang diputuskan
        setResult(playerTurn ? "Congratulations Player 1!" : "Nice going Player 2!");
        finishGame();
      }
    }

    //Saat Board penuh dan tidak ada pemenang, makan hasil seri
    if (Object.keys(turns).length === 9) {
      setResult("Tie Game!");
      finishGame();
    }
  }

  function checkTurn(value) {
    const tempTurns = turns;
    tempTurns[value] = playerTurn ? "X" : "O";

    // set nilai baru
    setTurn({ ...tempTurns });

    //pengecekan kondisi menang dan ganti giliran pemain
    checkWinner();
    togglePlayer();
  }

  return (
    <View style={mainApp.container}>
      <Text style={mainApp.paragraph}>TikiTaka</Text>
      <View style={mainApp.legend}>
        <Text style={mainApp.subheader}>X - Player 1</Text>
        <Text style={mainApp.subheader}>O - Player 2</Text>
      </View>
      {!end && <Board turns={turns} checkTurn={checkTurn} />}
      <Modal animationType={"slide"} visible={modal}>
        <View style={mainApp.centeredView}>
          <View style={mainApp.modalView}>
            <Text style={mainApp.h2}>{result}</Text>

            <TouchableOpacity style={mainApp.purpleButton} onPress={newGame}>
              <Text style={mainApp.whiteButtonText}>Start a new game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={mainApp.restartButton} onPress={newGame}>
        <Text style={mainApp.restartText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
