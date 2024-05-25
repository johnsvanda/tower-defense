import { create } from 'zustand'


class Tower {
    public health: number = 100
    public damage: number = 10
    public range: number = 10

    constructor(public position: [number, number, number]) {}
}

type Store = {
    towers: Tower[]
    // updateTower: () => void
}

/**
 * Store used when game is being played.
 */
export const usePlayStore = create<Store>()(() => ({
    towers: [new Tower([0, 0, 0]), new Tower([0, 0, 0]), new Tower([0, 0, 0])],
}))
