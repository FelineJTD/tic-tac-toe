"use client";

import Box from "@/components/box"
import useTicTacToeStore from "@/lib/store"

export default function Home() {
  const currentPlayer = useTicTacToeStore((state) => state.currentPlayer)

  return (
    <main>
      <h1 className="mb-4">Current player: {currentPlayer}</h1>
      <div className="flex flex-wrap w-[300vw]">
        {[...Array(1800)].map((_, i) => <Box key={i} />)}
      </div>
    </main>
  )
}
