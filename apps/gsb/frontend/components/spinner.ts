export function Spinner() {
    return `
        <div class="flex flex-col items-center justify-center space-y-4 py-10">
            <div class="relative w-16 h-16">
                <!-- Main Blob -->
                <div class="absolute inset-0 bg-green-dark opacity-75 blur-sm animate-blob"></div>
                <!-- Secondary Blob -->
                <div class="absolute inset-0 bg-gradient-to-tr from-green-dark to-green-neon animate-blob shadow-lg" style="animation-delay: -1.5s; animation-duration: 2.5s;"></div>
            </div>
            <p class="font-sans text-gray-600 font-medium animate-pulse">Loading countries...</p>
        </div>
    `;
}
