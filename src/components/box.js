"use client";

import { useState } from "react"
import useTicTacToeStore from "@/lib/store"

export default function Box({ }) {
  const [fill, setFill] = useState('')
  const changePlayer = useTicTacToeStore((state) => state.changePlayer)
  const currentPlayer = useTicTacToeStore((state) => state.currentPlayer)

  return (
    <button 
      className="w-[10vw] h-[10vw] lg:w-24 lg:h-24 border"
      onClick={() => fill === '' && (setFill(currentPlayer) || changePlayer())}
      onDoubleClick={() => setFill('')}
    >
      <p>{fill}</p>
    </button>
  )
}