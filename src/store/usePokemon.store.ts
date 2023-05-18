import { create } from "zustand"
import { Pokemon } from "../models"

interface PokemonStore {
    pokemons: Pokemon[],
    setPokemonsStore: (value: Pokemon[]) => void
}

export const usePokemonStore = create<PokemonStore>((set) => ({
    pokemons: [],
    setPokemonsStore: (pokemons: Pokemon[]) => {
        set(() => ({
            pokemons
        }))
    }
}))