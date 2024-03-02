import './Buttons.css';

function Button(props) {
    return(
        <button className='btn'>{props.start}</button>
    );
}

export default Button;