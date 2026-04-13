import { ImageComponent } from '../components/image.js';
export function SelectedCountry(name, code) {
    const flagUrl = code ? `./src/imgs/${code}.png` : null;
    return `
        <div class="flex flex-col items-center justify-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 class="font-sans text-xl text-gray-700 font-medium">Your selected country is...</h3>
            
            ${ImageComponent({
        src: flagUrl,
        alt: `${name} Flag`,
        widthClass: 'w-[300px]',
        aspectRatioClass: 'aspect-video'
    })}
            
            <!-- Country Name (Century Gothic, 40px) -->
            <p style="font-family: 'Century Gothic', 'AppleGothic', sans-serif; font-size: 40px;" class="text-gray-900 font-bold tracking-tight">
                ${name || 'No country selected'}
            </p>
        </div>
    `;
}
