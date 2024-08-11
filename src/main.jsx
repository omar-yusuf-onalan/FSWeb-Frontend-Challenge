import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkModeProvider from './context/darkmode/DarkModeProvider';
import LanguageProvider from './context/language/LanguageProvider.jsx';

createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </DarkModeProvider>
)
