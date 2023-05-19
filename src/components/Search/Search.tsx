import React, { useState } from "react"
import { searchPokemon } from "../../services"
import { Form, Input, SearchButton } from "./Search.styles"
import { Icon } from "../Icon/Icon"

export const Search = () => {
    const [pokemonName, setPokemonName] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (pokemonName === '') return
        await searchPokemon(pokemonName)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Search..."
                value={pokemonName}
                onChange={(e) =>
                    setPokemonName(e.target.value)}
            />
            <SearchButton type="submit">
                <Icon name="search" color="#9397cf" />
            </SearchButton>
        </Form>
    )
}