export interface OptionProps {
    label: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
}

/**
 * Componente individual para opciones de un Select.
 */
export function OptionComponent({ label, value, disabled = false, selected = false }: OptionProps) {
    return `
        <option value="${value}" ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''}>
            ${label}
        </option>
    `.trim();
}
