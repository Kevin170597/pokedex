import { create } from "zustand"
import { Pokemon } from "../models/pokemon.model"

interface PokemonStore {
    pokemons?: Pokemon[],
    setPokemonsStore: (value: Pokemon[]) => void
}

export const usePokemonStore = create<PokemonStore>((set) => ({
    pokemons: undefined,
    setPokemonsStore: (pokemons: Pokemon[]) => {
        set(() => ({
            pokemons
        }))
    }
}))