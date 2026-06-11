export interface SelectOption {
    label: string;
    value: string;
}

export interface SelectProps {
    placeholder: string;
    name: string;
    id: string;
    options: SelectOption[];
}

export function SelectComponent({ placeholder, name, id, options }: SelectProps) {
    return `
        <select name="${name}" id="${id}" class="w-full max-w-xs h-12 text-lg px-4 rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-700 outline-none focus:border-green-dark focus:ring-4 focus:ring-green-dark/10 transition-all cursor-pointer">
            <option value="" disabled selected>${placeholder}</option>
            ${options.map(option => `
                <option value="${option.value}">${option.label}</option>
            `).join('')}
        </select>
    `;
}
