import useLocalStorage from './useLocalStorage';
import language from '../data/language/language';
import {postLanguage} from "../service/languageService.js";

function useLanguage(defaultLanguage = 'english') {
    const [selectedLanguage, setSelectedLanguage] = useLocalStorage('language', defaultLanguage);

    const currentLanguage = language[selectedLanguage] || language[defaultLanguage];

    const toggleLanguage = () => {
        postLanguage(selectedLanguage === 'english' ? 'turkish' : 'english').then(data => {
            setSelectedLanguage(data.language);
        })
    };

    return [currentLanguage, toggleLanguage];
}

export default useLanguage;
