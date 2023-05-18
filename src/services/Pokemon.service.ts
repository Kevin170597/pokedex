export const getPokemons = async () => {
    const req = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    const res = await req.json()

    const promises = res.results.map(async (pokemon: any) => {
        const req = await fetch(pokemon.url)
        const res = await req.json()
        return res
    })
    const pokemons = await Promise.all(promises)
    return pokemons
}