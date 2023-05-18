import { useEffect, useState, useRef } from "react"
import { PokeContainer } from "./App.styles"
import { Header, PokeCard } from "./components"
import { usePokemonStore } from "./store"
import { getPokemons } from "./services"

function App() {
  const setPokemonsStore = usePokemonStore((state) => state.setPokemonsStore)
  const pokemonsStore = usePokemonStore((state) => state.pokemons)

  const [pagination, setPagination] = useState<{ offset: number, limit: number }>({
    offset: 0,
    limit: 31
  })

  const handleGetPokemons = async () => {
    const pokemons = await getPokemons(pagination.offset, pagination.limit)
    setPokemonsStore([...pokemonsStore, ...pokemons])
  }

  const loadMorePokemons = async () => {
    if (pokemonsStore.length >= 151) return
    setPagination({ ...pagination, limit: 30, offset: pokemonsStore.length })
  }

  const PokemonListRef = useRef<HTMLDivElement>(null)

  const handleLoadMore = () => {
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
      <PokeContainer onScroll={handleLoadMore} ref={PokemonListRef}>
        {pokemonsStore && pokemonsStore.map((pokemon) =>
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        )}
      </PokeContainer>
    </div>
  )
}

export default App
