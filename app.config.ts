export default defineAppConfig({
  ui: {
    primary: 'purple',
    gray: 'zinc',
    colors: ['violet', 'purple', 'blue', 'green', 'yellow', 'red'],
    // Définition explicite des couleurs primaires
    variables: {
      light: {
        primary: {
          '50': 'rgb(245, 243, 255)',
          '100': 'rgb(237, 233, 254)',
          '200': 'rgb(221, 214, 254)',
          '300': 'rgb(196, 181, 253)',
          '400': 'rgb(167, 139, 250)',
          '500': 'rgb(139, 92, 246)',
          '600': 'rgb(124, 58, 237)',
          '700': 'rgb(109, 40, 217)',
          '800': 'rgb(91, 33, 182)',
          '900': 'rgb(76, 29, 149)',
          '950': 'rgb(46, 16, 101)'
        }
      },
      dark: {
        primary: {
          '50': 'rgb(245, 243, 255)',
          '100': 'rgb(237, 233, 254)',
          '200': 'rgb(221, 214, 254)',
          '300': 'rgb(196, 181, 253)',
          '400': 'rgb(167, 139, 250)',
          '500': 'rgb(139, 92, 246)',
          '600': 'rgb(124, 58, 237)',
          '700': 'rgb(109, 40, 217)',
          '800': 'rgb(91, 33, 182)',
          '900': 'rgb(76, 29, 149)',
          '950': 'rgb(46, 16, 101)'
        }
      }
    },
    strategy: 'merge',
    
    // Configuration globale
    button: {
      default: {
        size: 'md',
        color: 'primary',
        variant: 'soft',
        rounded: 'md'
      }
    },
    
    card: {
      default: {
        ui: {
          base: 'overflow-hidden',
          background: 'bg-gray-950 dark:bg-gray-900',
          divide: 'divide-y divide-gray-800',
          ring: 'ring-1 ring-gray-800',
          rounded: 'rounded-lg',
          shadow: 'shadow-sm'
        }
      }
    },
    
    container: {
      base: 'mx-auto px-4 sm:px-6 lg:px-8',
      padding: 'px-4 sm:px-6 lg:px-8',
      constrained: 'max-w-7xl'
    }
  }
})
