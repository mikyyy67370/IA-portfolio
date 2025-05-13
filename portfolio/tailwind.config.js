/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B132B',
        'neon-green': '#39FF14',
        'tech-blue': '#1E3A8A',
        'deep-black': '#050505',
        'space-gray': '#1A1A2E',
        // Couleurs basées sur les variables CSS
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      boxShadow: {
        'glow-blue-sm': '0 0 15px 2px rgba(59, 130, 246, 0.5)',
        'glow-green-sm': '0 0 15px 2px rgba(16, 185, 129, 0.5)',
        'glow-purple-sm': '0 0 15px 2px rgba(139, 92, 246, 0.5)',
        'glow-pink-sm': '0 0 15px 2px rgba(236, 72, 153, 0.5)',
        'glow-orange-sm': '0 0 15px 2px rgba(249, 115, 22, 0.5)',
        'glow-xs': '0 0 8px 1px rgba(57, 255, 20, 0.3)',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
}
