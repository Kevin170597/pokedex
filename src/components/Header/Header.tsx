import { Head, Logo } from "./Header.styles"
import logo from "../../assets/Pokédex_logo.png"
import { deletePokemons } from "../../services"

export const Header = () => {

    return (
        <Head>
            <Logo src={logo} alt="logo" />
            <button onClick={() => deletePokemons()}>Delete</button>
        </Head>
    )
}