/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: { '2xl': '1400px' },
        },
        extend: {
            colors: {
                background: '#020617',
                foreground: '#f8fafc',
                card: 'rgba(15, 23, 42, 0.8)',
                primary: {
                    DEFAULT: '#06b6d4',
                    foreground: '#ffffff',
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                    950: '#083344',
                },
                accent: {
                    DEFAULT: '#3b82f6',
                    foreground: '#ffffff',
                }
            },
            backgroundImage: {
                'mesh-gradient': 'radial-gradient(at 0% 0%, hsla(199, 89%, 48%, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(217, 91%, 60%, 0.15) 0px, transparent 50%)',
                'holographic': 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
            },
            animation: {
                'slow-pulse': 'slow-pulse 8s infinite ease-in-out',
                'float': 'float 6s infinite ease-in-out',
                'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                'slow-pulse': {
                    '0%, 100%': { opacity: 0.2 },
                    '50%': { opacity: 0.5 },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
