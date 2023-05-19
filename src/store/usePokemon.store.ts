import { create } from "zustand"
import { Pokemon } from "../models"

interface PokemonStore {
    pokemons: Pokemon[],
    setPokemonsStore: (value: Pokemon[]) => void,
    idsToDelete: number[]
    setIdsToDelete: (id: number) => void,
    unSetIdsToDelete: (id: number) => void
}

export const usePokemonStore = create<PokemonStore>((set, get) => ({
    pokemons: [],
    setPokemonsStore: (pokemons: Pokemon[]) => {
        set(() => ({
            pokemons
        }))
    },
    idsToDelete: [],
    setIdsToDelete: (id: number) => {
        const idsToDelete = get().idsToDelete
        set(() => ({
            idsToDelete: [...idsToDelete, id]
        }))
    },
    unSetIdsToDelete: (id: number) => {
        const idsToDelete = get().idsToDelete
        const index = idsToDelete.indexOf(id)
        if (index > -1) idsToDelete.splice(index, 1)
        set(() => ({
            idsToDelete
        }))
    }
}))