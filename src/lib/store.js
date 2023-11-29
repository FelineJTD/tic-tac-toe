"use client";

import { create } from 'zustand'

const useTicTacToeStore = create((set) => ({
  currentPlayer: 'x',
  changePlayer: () => set(state => ({
    currentPlayer: state.currentPlayer === 'x' ? 'o' : 'x'
  })),
}))

export default useTicTacToeStore;