import styles from './Button.module.css';

const {container, darkMode, lightMode} = styles;

const Button = ({hasBorder, width, height, content}) => {
    return (
        <button className={`${container}`}>

        </button>
    )
}

export default Button;