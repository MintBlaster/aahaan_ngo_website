// lib/utils/date.ts
export function formatDate(date: Date | string): string {
    return new Date(date).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}
