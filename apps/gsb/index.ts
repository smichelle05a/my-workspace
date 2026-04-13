import { getCountries, CountryType } from "./backend/index.js";
import { Spinner } from "./frontend/components/spinner.js";
import { SelectComponent } from "./frontend/components/selectComponent/index.js";
import { SelectedCountry } from "./frontend/features/selectedCountry.js";
import { APP_CONFIG } from "./frontend/config/constants.js";

const ROOT_ELEMENT = document.getElementById("app");

/**
 * Renderizador principal de la aplicación.
 */
async function bootstrap() {
  if (!ROOT_ELEMENT) return;

  // Estado inicial: Cargando
  ROOT_ELEMENT.innerHTML = Spinner();

  try {
    const countries = await getCountries();

    // Optimizamos la búsqueda de países usando un Map O(1)
    const countryMap = new Map(countries.map((c) => [c.code, c]));

    const countryOptions = countries.map((c) => ({
      label: c.name,
      value: c.code,
    }));

    // Inyectamos la estructura base
    ROOT_ELEMENT.innerHTML = renderAppLayout(countryOptions);

    // Referencias a elementos del DOM recién creados
    const select = document.getElementById("countries") as HTMLSelectElement;
    const reservedSpace = document.getElementById("selected-country-container");

    // Manejador de eventos para el cambio de país
    select?.addEventListener("change", (event) => {
      const selectedCode = (event.target as HTMLSelectElement).value;
      const countryData = countryMap.get(selectedCode);

      if (countryData && reservedSpace) {
        reservedSpace.innerHTML = SelectedCountry(
          countryData.name,
          countryData.code,
        );
      }
    });
  } catch (error) {
    ROOT_ELEMENT.innerHTML = renderErrorState();
    console.error("[App Error]:", error);
  }
}

/**
 * Ayudante para renderizar la estructura principal de la aplicación.
 */
function renderAppLayout(options: { label: string; value: string }[]) {
  return `
        <h1 class="text-3xl font-extrabold font-sans mb-8 text-center text-gray-800 leading-tight">
            ${APP_CONFIG.DEFAULTS.COUNTRY_PLACEHOLDER}
        </h1>
        <div class="w-full flex justify-center mb-10">
            ${SelectComponent({
              placeholder: APP_CONFIG.DEFAULTS.COUNTRY_PLACEHOLDER,
              name: "countries",
              id: "countries",
              options: options,
            })}
        </div>
        <hr class="w-full max-w-[400px] border-t border-dashed border-gray-200 py-6" />
        <div id="selected-country-container" class="w-full h-[350px] flex items-center justify-center transition-all duration-500">
            ${SelectedCountry("", "")}
        </div>
    `;
}

/**
 * Ayudante para renderizar los estados de error.
 */
function renderErrorState() {
  return `
        <p class="text-red-500 font-sans font-semibold text-center py-4">
            ${APP_CONFIG.DEFAULTS.ERROR_MESSAGE}
        </p>
    `;
}

// Inicia la aplicación
bootstrap();
