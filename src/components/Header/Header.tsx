import { Head, Logo, DeleteButton } from "./Header.styles"
import logo from "../../assets/Pokédex_logo.png"
import { Icon } from "../Icon/Icon"
import { Search } from "../Search/Search"
import { deletePokemons, getPokemons } from "../../services"
import { usePokemonStore } from "../../store"

export const Header = () => {
    const idsToDelete = usePokemonStore((state) => state.idsToDelete)

    return (
        <Head>
            <Logo src={logo} alt="logo" onClick={() => getPokemons(0, 31)} />
            <Search />
            {idsToDelete.length > 0 &&
                <DeleteButton onClick={() => deletePokemons()}>
                    <Icon name="delete" color="#333333" />
                </DeleteButton>
            }
        </Head>
    )
}