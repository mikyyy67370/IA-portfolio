import React, { useState, useEffect } from 'react';

/**
 * TechIcon - Renders an SVG icon for a given technology or social platform.
 * Supports both inline SVG icons and external SVG files.
 *
 * @param {string} name - Name of the technology or platform (e.g., 'Python', 'LinkedIn')
 * @param {number} size - Size of the icon in pixels
 * @param {string} className - Additional CSS classes
 * @param {string} title - Accessible label for the icon
 */
const toKebabCase = (str) =>
  str && str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

const TechIcon = ({ name, icon, size = 32, className = '', title = '' }) => {
  const [imgError, setImgError] = useState(false);
  const [isExternalIcon, setIsExternalIcon] = useState(false);
  
  // Vérifie si l'icône est un chemin externe (commence par '/')
  useEffect(() => {
    if (icon && icon.startsWith('/')) {
      setIsExternalIcon(true);
    }
  }, [icon]);
  
  // Icônes SVG inline pour une meilleure fiabilité
  const iconMap = {
    // Technologies
    'python': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 112.701c-74.291 0-69.686 32.267-69.686 32.267l.082 33.41h70.94v10.023H155.713s-47.781-5.4-47.781 69.95c0 75.35 41.716 72.645 41.716 72.645h24.891v-34.934s-1.342-41.72 41.049-41.72h70.663s39.706.662 39.706-38.369v-64.548s6.003-38.724-69.957-38.724zm-39.374 22.419c7.057 0 12.768 5.711 12.768 12.768 0 7.057-5.711 12.768-12.768 12.768-7.057 0-12.768-5.711-12.768-12.768 0-7.057 5.711-12.768 12.768-12.768z" fill="#3776AB"/>
        <path d="M256 399.299c74.291 0 69.686-32.267 69.686-32.267l-.082-33.41h-70.94v-10.023h101.623s47.781 5.4 47.781-69.95c0-75.35-41.716-72.645-41.716-72.645h-24.891v34.934s1.342 41.72-41.049 41.72h-70.663s-39.706-.662-39.706 38.369v64.548s-6.003 38.724 69.957 38.724zm39.374-22.419c-7.057 0-12.768-5.711-12.768-12.768 0-7.057 5.711-12.768 12.768-12.768 7.057 0 12.768 5.711 12.768 12.768 0 7.057-5.711 12.768-12.768 12.768z" fill="#FFD43B"/>
      </svg>
    ),
    'typescript': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="50" fill="#3178C6"/>
        <path d="M317.219 354.184V380.667C325.478 385.449 335.187 389.001 346.346 391.323C357.504 393.645 369.336 394.806 381.84 394.806C394.033 394.806 405.192 393.438 415.317 390.701C425.441 387.965 434.115 383.804 441.339 378.219C448.563 372.634 454.148 365.617 458.094 357.168C462.04 348.719 464.013 338.7 464.013 327.111C464.013 318.868 462.874 311.435 460.597 304.812C458.319 298.189 454.871 292.189 450.253 286.812C445.635 281.435 439.892 276.472 433.024 271.923C426.156 267.374 418.021 263.136 408.616 259.21C401.392 256.266 394.997 253.53 389.429 251.001C383.862 248.472 379.123 246.049 375.212 243.731C371.301 241.413 368.253 239.095 366.066 236.777C363.879 234.459 362.786 231.93 362.786 229.19C362.786 226.659 363.6 224.341 365.227 222.231C366.855 220.121 369.111 218.323 371.99 216.836C374.869 215.349 378.366 214.188 382.482 213.354C386.598 212.519 391.216 212.102 396.368 212.102C400.28 212.102 404.396 212.415 408.718 213.041C413.04 213.667 417.362 214.605 421.683 215.856C426.005 217.107 430.224 218.671 434.339 220.547C438.455 222.423 442.262 224.549 445.761 226.927V202.18C438.115 199.653 430.021 197.752 421.478 196.478C412.935 195.204 403.143 194.567 392.102 194.567C380.114 194.567 369.16 195.935 359.241 198.671C349.321 201.407 340.647 205.463 333.218 210.841C325.789 216.218 319.9 222.84 315.55 230.706C311.2 238.572 309.025 247.591 309.025 257.764C309.025 271.506 313.244 283.199 321.683 292.845C330.122 302.49 343.058 310.511 360.493 316.907C367.717 319.851 374.214 322.587 379.987 325.116C385.76 327.645 390.704 330.173 394.82 332.7C398.936 335.227 402.155 337.858 404.478 340.593C406.8 343.329 407.961 346.377 407.961 349.738C407.961 352.269 407.147 354.587 405.519 356.697C403.891 358.807 401.636 360.605 398.757 362.092C395.878 363.579 392.38 364.74 388.264 365.574C384.148 366.409 379.53 366.826 374.378 366.826C363.879 366.826 353.754 364.714 344.003 360.488C334.252 356.262 325.272 350.573 317.219 343.419V354.184ZM212.832 239.199H264.832V221.664H128V239.199H179.897V394.806H212.832V239.199Z" fill="white"/>
      </svg>
    ),
    'node-js': (
      <svg width={size} height={size} viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.3 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" fill="#8CC84B"/>
      </svg>
    ),
    'ethers-js': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="50" fill="#24336A"/>
        <path d="M256 96L142 220.5L256 296L370 220.5L256 96Z" fill="#C2A7F9"/>
        <path d="M256 96L142 220.5L256 296L256 96Z" fill="#9980F5"/>
        <path d="M256 320L142 244.5L256 416L370 244.5L256 320Z" fill="#C2A7F9"/>
        <path d="M256 320L142 244.5L256 416L256 320Z" fill="#9980F5"/>
        <path d="M142 232.5L256 308L370 232.5L256 156.5L142 232.5Z" fill="#7160F2"/>
      </svg>
    ),
    'web3': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="256" fill="#F16822"/>
        <path d="M106.666 256L181.333 128H330.666L256 256L330.666 384H181.333L106.666 256Z" fill="white"/>
        <path d="M256 256L330.667 128H405.334L256 384L106.667 128H181.334L256 256Z" fill="white"/>
      </svg>
    ),
    'tensorflow': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 42.667L64 138.667V330.667L128 367.787V175.787L256 256V42.667Z" fill="#FF6F00"/>
        <path d="M256 42.667V256L384 175.787V367.787L448 330.667V138.667L256 42.667Z" fill="#FF6F00"/>
        <path d="M256 469.333L448 373.333L384 336.213L256 416.213L128 336.213L64 373.333L256 469.333Z" fill="#FF6F00"/>
      </svg>
    ),
    'pytorch': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="50" fill="#EE4C2C"/>
        <path d="M376 256c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm-192-96c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm96 0c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm-96 192c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm96 0c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm96-96c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32z" fill="white"/>
      </svg>
    ),
    'streamlit': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="50" fill="#FF4B4B"/>
        <path d="M128 352c0-8.837 7.163-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm0-96c0-8.837 7.163-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm0-96c0-8.837 7.163-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16H144c-8.837 0-16-7.163-16-16z" fill="white"/>
      </svg>
    ),
    'pandas': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="50" fill="#150458"/>
        <path d="M256 64v384M128 128h64v64h-64zM128 320h64v64h-64zM320 128h64v64h-64zM320 320h64v64h-64z" stroke="#FFCA00" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'scikit-learn': (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="50" fill="#F7931E"/>
        <path d="M256 128c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128zm0 224c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z" fill="white"/>
        <path d="M256 192c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm0 96c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="white"/>
      </svg>
    ),
    // Ajouter d'autres icônes au besoin
  };

  // Icône de secours si l'icône demandée n'est pas trouvée
  const fallbackIcon = (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#444" />
      <text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">?</text>
    </svg>
  );

  // Préparer le chemin de l'icône externe si nécessaire
  let externalIconPath = '';
  if (isExternalIcon) {
    externalIconPath = icon; // Utiliser le chemin fourni directement
  }
  
  // Déterminer quelle icône afficher pour les icônes inline
  const iconKey = !isExternalIcon && icon ? icon.replace('.svg', '').toLowerCase() : toKebabCase(name).toLowerCase();
  const selectedInlineIcon = iconMap[iconKey] || null;

  return (
    <span className={`tech-icon ${className}`} title={title || name} style={{ display: 'inline-block', width: size, height: size }}>
      {isExternalIcon ? (
        !imgError ? (
          <img
            src={externalIconPath}
            alt={title || name}
            width={size}
            height={size}
            style={{ display: 'block' }}
            onError={() => setImgError(true)}
          />
        ) : fallbackIcon
      ) : (selectedInlineIcon || fallbackIcon)}
    </span>
  );
};

export default TechIcon;
