import {useContext} from "react";
import DarkModeContext from "./DarkModeContext.jsx";

const useDarkModeContext = () => {
    return useContext(DarkModeContext);
}

export default useDarkModeContext;