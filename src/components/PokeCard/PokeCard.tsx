import { Pokemon } from "../../models/pokemon.model"
import { Card, Head, Name, Body, Data, Image} from "./PokeCard.styles"

interface Props {
    pokemon: Pokemon
}

export const PokeCard = ({ pokemon }: Props) => {

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
        psychic: '#be7373',
        bug: '#678643',
        rock: '#975a32',
        ghost: '#501692',
        dark: '#4d2c19',
        dragon: '#2a37b3',
        steel: '#636161',
        fairy: '#f07f7f'
    }

    return (
        <Card background={colors[pokemon.types[0].type.name]}>
            <Head>
                <Name>#{pokemon.id} {pokemon.name}</Name>
            </Head>
            <Body>
                <Data>
                    <p>{pokemon.weight}</p>
                    <p>abilitie</p>
                </Data>
                <Image src={pokemon.sprites.front_default} alt="" />
            </Body>
        </Card>
    )
}