import './Buttons.css';

// function Button(props) {
//     const styleBlack = {
//         backgroundColor: "var(--black)"
//     }

//     const styleWhite = {
//         backgroundColor: "transparent",
//         border: "2px solid var(--white)"
//     }

//     const btnWidth = {
//         width: "15rem"
//     }

//     const buttonStyle = props.black ? styleBlack : styleWhite;
//     const cardsBtn = props.width ? btnWidth : "";

//     return(
//         <button className='btn' style={{...buttonStyle, ...cardsBtn}}>{props.text}</button>
//     );
// }

function Button({children, ...props}) {
    const classNames = {
        primary: "primary",
        secondary: "secondary",
        primaryWide: "primary-wide"
    }

    const className = classNames[props.type] || classNames.primary;
    
    return(
        props.onClick ? <button {...props} onClick={props.onClick} className={`${className} ${props.className}`}>{children}</button>
            :
        <a href="#" className={`${className} ${props.className}`}>{children}</a>
    )
}

export default Button;