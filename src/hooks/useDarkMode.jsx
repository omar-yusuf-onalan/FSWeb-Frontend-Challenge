import useLocalStorage from './useLocalStorage';

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('dark-mode', false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevState => !prevState);
    };

    return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
