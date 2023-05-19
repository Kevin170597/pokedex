import { usePokemonStore } from "../store"

export const getPokemons = async (offset: number, limit: number) => {
    const prevState = usePokemonStore.getState().pokemons

    const req = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const res = await req.json()

    const promises = res.results.map(async (pokemon: any) => {
        const req = await fetch(pokemon.url)
        const res = await req.json()
        return res
    })
    const pokemons = await Promise.all(promises)

    usePokemonStore.setState({ pokemons: [...prevState, ...pokemons ] })
}

export const deletePokemons = () => {
    const pokemons = usePokemonStore.getState().pokemons
    const toDelete = usePokemonStore.getState().idsToDelete

    const filteredPokemons = []

    for (let i = 0; i < pokemons.length; i++) {
        if (!toDelete.includes(pokemons[i].id)) {
            filteredPokemons.push(pokemons[i])
        }
    }

    usePokemonStore.setState({ pokemons: filteredPokemons })
}