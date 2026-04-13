import { OptionComponent } from './components/optionComponent.js';
export function SelectComponent({ placeholder, name, id, options }) {
    const optionList = options
        .map(opt => OptionComponent({ label: opt.label, value: opt.value }))
        .join('');
    return `
        <select 
            name="${name}" 
            id="${id}" 
            class="w-[300px] h-12 px-4 shadow-sm border border-gray-200 rounded-2xl bg-gray-50 text-gray-700 font-sans text-lg focus:ring-4 focus:ring-green-dark/10 focus:border-green-dark outline-none cursor-pointer transition-all"
        >
            ${OptionComponent({ label: placeholder, value: '', disabled: true, selected: true })}
            ${optionList}
        </select>
    `;
}
