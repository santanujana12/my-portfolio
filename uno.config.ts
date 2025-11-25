import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
    ],
    shortcuts: {
        'btn-primary': 'px-6 py-2.5 rounded-lg border-none font-medium cursor-pointer transition-all duration-250 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)] bg-[length:200%_auto] text-white shadow-[0_0_10px_var(--primary-color)] hover:bg-right hover:shadow-[0_0_20px_var(--primary-color)] hover:-translate-y-0.5 inline-block no-underline',
        'card-glow': 'bg-[var(--surface-color)] rounded border border-[var(--glass-border)] transition-all duration-300 hover:border-[var(--primary-color)] hover:shadow-[0_0_15px_var(--primary-color),inset_0_0_10px_rgba(100,108,255,0.2)]',
        'nav-link': 'text-[var(--text-color)] no-underline text-base font-medium transition-colors duration-300 ml-8 hover:text-[var(--primary-color)]',
        'glass-header': 'fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center backdrop-blur-md bg-[rgba(15,15,15,0.7)] border-b border-[var(--glass-border)] z-1000 box-border',
        'text-gradient': 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent',
    },
    theme: {
        colors: {
            primary: 'var(--primary-color)',
            secondary: 'var(--secondary-color)',
            bg: 'var(--bg-color)',
            surface: 'var(--surface-color)',
            text: {
                DEFAULT: 'var(--text-color)',
                secondary: 'var(--text-secondary)',
            },
            glass: {
                border: 'var(--glass-border)',
            }
        }
    }
})
