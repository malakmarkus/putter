/* TAILWIND MEDIA QUERIES FOR SMALLER DESKTOP SCREENS AND SMALLER */

module.exports = {
    theme: {
        screens: {
            'lg': {'max': '980px'},
            // => @media (max-width: 980px) { ... }

            'md': {'max': '768px'},
            // => @media (max-width: 768px) { ... }

            'sm': {'max': '575px'},
            // => @media (max-width: 575px) { ... }
        },
    }
}