import { useTheme } from '../context/ThemeContext';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 border-none cursor-pointer flex items-center p-0.5"
            aria-label="Toggle theme"
        >
            <div
                className={`w-6 h-6 rounded-full bg-white dark:bg-yellow-200 shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                    }`}
            >
                {theme === 'dark' ? (
                    <img src={moonIcon} alt="Moon" className="w-4 h-4" />
                ) : (
                    <img src={sunIcon} alt="Sun" className="w-4 h-4" />
                )}
            </div>
        </button>
    );
}
