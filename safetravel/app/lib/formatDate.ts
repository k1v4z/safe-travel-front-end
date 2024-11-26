export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // Define options for the desired format
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    };

    // Format the date using toLocaleDateString with the options
    return date.toLocaleDateString('en-US', options);
};

export function convertISOToDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}