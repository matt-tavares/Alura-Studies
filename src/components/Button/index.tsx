import React from "react";
import Style from './Button.module.scss'

class Button extends React.Component<{
    texto: String,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props
        return (
            <button onClick={onClick} type={type} className={Style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button