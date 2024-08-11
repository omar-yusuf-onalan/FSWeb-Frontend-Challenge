import useLocalStorage from './useLocalStorage';
import language from '../data/language/language';

function useLanguage(defaultLanguage = 'english') {
    const [selectedLanguage, setSelectedLanguage] = useLocalStorage('language', defaultLanguage);

    const currentLanguage = language[selectedLanguage] || language[defaultLanguage];

    const toggleLanguage = () => {
        const newLanguage = selectedLanguage === 'english' ? 'turkish' : 'english';
        setSelectedLanguage(newLanguage);
    };

    return [currentLanguage, toggleLanguage];
}

export default useLanguage;
