import { useEffect } from "react"
import { PokeContainer } from "./AppStyles"
import { PokeCard } from "./components/PokeCard/PokeCard"
import { usePokemonStore } from "./store/usePokemon.store"
import { getPokemons } from "./services/Pokemon.service"

function App() {
  const setPokemonsStore = usePokemonStore((state) => state.setPokemonsStore)
  const pokemonsStore = usePokemonStore((state) => state.pokemons)

  const handleGetPokemons = async () => {
    const pokemons = await getPokemons()
    setPokemonsStore(pokemons)
  }

  useEffect(() => {
    handleGetPokemons()
  }, [])

  return (
    <div className="App">
      <PokeContainer>
        {pokemonsStore && pokemonsStore.map((pokemon) =>
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        )}
      </PokeContainer>
    </div>
  )
}

export default App
