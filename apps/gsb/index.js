import { getCountries } from './backend/index.js';
import { Spinner } from './frontend/components/spinner.js';
import { SelectComponent } from './frontend/components/accordion.js';
import { SelectedCountry } from './frontend/features/selectedCountry.js';
const app = document.getElementById('app');
async function render() {
    if (!app)
        return;
    // Muestra el estado de carga con el nuevo spinner de burbuja (blob)
    app.innerHTML = Spinner();
    try {
        const countries = await getCountries();
        const countryOptions = countries.map(c => ({
            label: c.name,
            value: c.code
        }));
        // Renderiza el contenido dinámico utilizando el componente genérico
        app.innerHTML = `
            <h1 class="text-3xl font-extrabold font-sans mb-8 text-center text-gray-800 leading-tight">
                Please select your country
            </h1>
            <div class="w-full flex justify-center mb-10">
                ${SelectComponent({
            placeholder: 'Select your country',
            name: 'countries',
            id: 'countries',
            options: countryOptions
        })}
            </div>
            <hr class="w-full max-w-[400px] border-t border-dashed border-gray-200 py-6" />
            <!-- Reserved space for future component -->
            <div id="reserved-space" class="w-full h-[350px] flex items-center justify-center transition-all duration-500">
                ${SelectedCountry('', '')}
            </div>
        `;
        const select = document.getElementById('countries');
        const reservedSpace = document.getElementById('reserved-space');
        select?.addEventListener('change', (e) => {
            const code = e.target.value;
            const country = countries.find(c => c.code === code);
            if (country && reservedSpace) {
                // Update the reserved space with the SelectedCountry component
                reservedSpace.innerHTML = SelectedCountry(country.name, country.code);
            }
        });
    }
    catch (error) {
        app.innerHTML = `<p class="text-red-500 font-sans font-semibold text-center py-4">Error loading countries. Please refresh the page.</p>`;
        console.error('Failed to load countries:', error);
    }
}
// Inicia el proceso de renderizado
render();
