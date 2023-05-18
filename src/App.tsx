import { useEffect, useState, useRef } from "react"
import { PokeContainer } from "./App.styles"
import { PokeCard } from "./components/PokeCard/PokeCard"
import { Header } from "./components/Header/Header"
import { usePokemonStore } from "./store/usePokemon.store"
import { getPokemons } from "./services/Pokemon.service"

function App() {
  const setPokemonsStore = usePokemonStore((state) => state.setPokemonsStore)
  const pokemonsStore = usePokemonStore((state) => state.pokemons)

  const [pagination, setPagination] = useState<{ offset: number, limit: number }>({ offset: 0, limit: 31 })

  const handleGetPokemons = async () => {
    const pokemons = await getPokemons(pagination.offset, pagination.limit)
    setPokemonsStore([...pokemonsStore, ...pokemons])
  }

  const loadMorePokemons = async () => {
    if (pokemonsStore.length >= 151) return
    setPagination({ ...pagination, limit: 30, offset: pokemonsStore.length })
  }

  const PokemonListRef = useRef<HTMLDivElement>(null)

  const onScroll = () => {
    if (PokemonListRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = PokemonListRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        loadMorePokemons()
      }
    }
  }

  useEffect(() => {
    handleGetPokemons()
  }, [pagination])

  return (
    <div className="App">
      <Header />
      <PokeContainer onScroll={onScroll} ref={PokemonListRef}>
        {pokemonsStore && pokemonsStore.map((pokemon) =>
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        )}
      </PokeContainer>
    </div>
  )
}

export default App
