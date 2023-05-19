import { useState } from "react"
import { Pokemon } from "../../models"
import { Checkbox } from "../Checkbox/Checkbox"
import { Card, Head, Name, Body, Data, PokeType, Weight, Ability, AbilityTitle, Image } from "./PokeCard.styles"
import { usePokemonStore } from "../../store"
import { colors } from "./bgColor"

interface Props {
    pokemon: Pokemon
}

export const PokeCard = ({ pokemon }: Props) => {
    const setIdsToDelete = usePokemonStore((state) => state.setIdsToDelete)
    const unSetIdsToDelete = usePokemonStore((state) => state.unSetIdsToDelete)

    const [selected, setSelected] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)

    const handleCheckbox = () => {
        if (selected) {
            setSelected(false)
            unSetIdsToDelete(pokemon.id)
        } else {
            setSelected(true)
            setIdsToDelete(pokemon.id)
        }
    }

    return (
        <Card
            background={colors[pokemon.types[0].type.name]}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Head>
                <Name>#{pokemon.id} {pokemon.name}</Name>
                {hover || selected ? (
                    <Checkbox checked={selected} handleCheckbox={handleCheckbox} />
                ) : (
                    null
                )
                }
            </Head>
            <Body>
                <Data>
                    <PokeType>{pokemon.types[0].type.name}</PokeType>
                    <Weight>{pokemon.weight / 10}kg</Weight>
                    <AbilityTitle>Ability:</AbilityTitle>
                    <Ability>{pokemon.abilities[0].ability.name}</Ability>
                </Data>
                <Image src={pokemon.sprites.front_default} alt="" />
            </Body>
        </Card>
    )
}