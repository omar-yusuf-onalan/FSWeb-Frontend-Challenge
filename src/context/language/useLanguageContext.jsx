import {useContext} from "react";
import LanguageContext from "./LanguageContext.jsx";

const useLanguageContext = () => {
    return useContext(LanguageContext);
}

export default useLanguageContext;