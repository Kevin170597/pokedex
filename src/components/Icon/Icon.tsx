import { icons } from "./icons"

interface Props {
    name: "checkboxUnchecked" | "checkboxChecked" | "delete",
    color?: string
}

export const Icon = ({ name, color }: Props) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 96 960 960"
            fill={color ? color : '#000'}
        >
            <path d={icons[name]} />
        </svg>
    )
}