import { Icon } from "../Icon/Icon"
import { CheckboxWrapper } from "./Checkbox.styles"

interface Props {
    checked: boolean,
    handleCheckbox: () => void
}

export const Checkbox = ({ checked, handleCheckbox }: Props) => {

    return (
        <CheckboxWrapper onClick={() => handleCheckbox()}>
            {checked ?
                <Icon name="checkboxChecked" color="#fff" /> :
                <Icon name="checkboxUnchecked" color="#fff" />
            }
        </CheckboxWrapper>
    )
}