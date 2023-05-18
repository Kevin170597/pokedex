import { Head, Logo } from "./Header.styles"
import logo from "../../assets/Pokédex_logo.png"

export const Header = () => {

    return (
        <Head>
            <Logo src={logo} alt="logo" />
        </Head>
    )
}