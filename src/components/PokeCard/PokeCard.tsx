import { useState } from "react"
import { Pokemon } from "../../models"
import { Card, Head, Name, Body, Data, Image} from "./PokeCard.styles"
import { usePokemonStore } from "../../store"

interface Props {
    pokemon: Pokemon
}

export const PokeCard = ({ pokemon }: Props) => {
    const setIdsToDelete = usePokemonStore((state) => state.setIdsToDelete)
    const unSetIdsToDelete = usePokemonStore((state) => state.unSetIdsToDelete)

    const [selected, setSelected] = useState<boolean>(false)

    const select = () => {
        setSelected(!selected)
        console.log(pokemon.id)
        setIdsToDelete(pokemon.id)
    }

    const unSelect = () => {
        setSelected(!select)
        console.log(pokemon.id)
        unSetIdsToDelete(pokemon.id)
    }

    const colors = {
        normal: '#bcad9a',
        fire: '#c7715c',
        water: '#46b6ca',
        grass: '#46cc79',
        electric: '#ccb637',
        ice: '#51b0bd',
        fighting: '#943232',
        poison: '#7036b3',
        ground: '#b88644',
        flying: '#895fb9',
        psychic: '#d596b9',
        bug: '#678643',
        rock: '#975a32',
        ghost: '#501692',
        dark: '#4d2c19',
        dragon: '#7384fd',
        steel: '#636161',
        fairy: '#f07f7f'
    }

    return (
        <Card background={colors[pokemon.types[0].type.name]}>
            <Head>
                <Name>#{pokemon.id} {pokemon.name}</Name>
                <button onClick={() => select()}>y</button>
                {selected && 
                    <button onClick={() => unSelect()}>selected</button>
                }
            </Head>
            <Body>
                <Data>
                    <p>{pokemon.types[0].type.name}</p>
                    <p>{pokemon.weight}</p>
                    <p>abilitie</p>
                </Data>
                <Image src={pokemon.sprites.front_default} alt="" />
            </Body>
        </Card>
    )
}