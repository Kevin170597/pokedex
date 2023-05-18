export const getPokemons = async (offset: number, limit: number) => {
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const res = await req.json()

    const promises = res.results.map(async (pokemon: any) => {
        const req = await fetch(pokemon.url)
        const res = await req.json()
        return res
    })
    const pokemons = await Promise.all(promises)
    return pokemons
}