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

function Button(props) {
    const classNames = {
        primary: "primary",
        secondary: "secondary",
        primaryWide: "primary-wide"
    }

    const className = classNames[props.type] || classNames.primary;
    
    return(
        props.onClick ? <button className={`${className} ${props.className}`}>{props.children}</button>
            :
        <a href="#" className={`${className} ${props.className}`}>{props.children}</a>
    )
}

export default Button;