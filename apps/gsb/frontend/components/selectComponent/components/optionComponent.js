/**
 * Componente individual para opciones de un Select.
 */
export function OptionComponent({ label, value, disabled = false, selected = false }) {
    return `
        <option value="${value}" ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''}>
            ${label}
        </option>
    `.trim();
}
