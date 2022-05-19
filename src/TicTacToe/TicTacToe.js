import React from "react"
import "./TicTacToe.css"

const TicTacToe = () => {
  const [turn, setTurn] = React.useState("X")
  const [cells, setCells] = React.useState(Array(9).fill(""))
  const [winner, setWinner] = React.useState()
  const checkForWinner = (circle) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    }
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          circle[pattern[0]] === "" ||
          circle[pattern[1]] === "" ||
          circle[pattern[2]] === ""
        ) {
          // do nothing
        } else if (
          circle[pattern[0]] === circle[pattern[1]] &&
          circle[pattern[1]] === circle[pattern[2]]
        ) {
          setWinner(circle[pattern[0]])
        }
      })
    }
  }
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Aleady Clicked")
    }
    let circle = [...cells]
    if (turn === "X") {
      circle[num] = "X"
      setTurn("O")
    } else {
      circle[num] = "O"
      setTurn("X")
    }
    checkForWinner(circle)
    setCells(circle)
    // console.log(cells);
  }
  const handleRestart = () => {
    setWinner(null)
    setCells(Array(9).fill(""))
  }
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>
  }
  return (
    <div className='container'>
      <div className='wrapper'>
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        {winner && (
          <div className='results'>
            <p>{winner} is the winner!</p>
          </div>
        )}
        <button className='restart' onClick={() => handleRestart()}>
          {winner ? "Play Again" : "Restart"}
        </button>
      </div>
    </div>
  )
}

export default TicTacToe
