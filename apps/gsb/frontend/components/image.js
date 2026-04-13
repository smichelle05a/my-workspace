/**
 * Componente de imagen genérico con soporte para placeholder.
 * Si falta el src, solo se renderiza el placeholder.
 */
export function ImageComponent({ src, alt, widthClass, aspectRatioClass }) {
    const containerClasses = `${widthClass} ${aspectRatioClass} bg-gray-100 rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative flex items-center justify-center`;
    const content = src
        ? `<img src="${src}" alt="${alt}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
           <div class="hidden w-full h-full flex items-center justify-center text-gray-400 font-sans text-xs italic">Error loading image</div>`
        : `<div class="w-full h-full flex items-center justify-center text-gray-400 font-sans text-xs italic">No image provided</div>`;
    return `
        <div class="${containerClasses}">
            ${content}
        </div>
    `;
}
