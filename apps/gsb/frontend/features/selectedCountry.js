import { ImageComponent } from '../components/image.js';
import { APP_CONFIG } from '../config/constants.js';
/**
 * Componente para mostrar los detalles del país seleccionado.
 * @param name Nombre del país
 * @param code Código del país para la bandera
 */
export function SelectedCountry(name, code) {
    const flagUrl = code ? `${APP_CONFIG.PATHS.FLAGS}${code}.png` : null;
    return `
        <div class="flex flex-col items-center justify-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 class="font-sans text-xl text-gray-700 font-medium">Your selected country is...</h3>
            
            ${ImageComponent({
        src: flagUrl,
        alt: `${name} Flag`,
        widthClass: 'w-[300px]',
        aspectRatioClass: 'aspect-video'
    })}
            
            <!-- Nombre del País -->
            <p class="font-gothic text-[40px] text-gray-900 font-bold tracking-tight">
                ${name || 'No country selected'}
            </p>
        </div>
    `;
}
