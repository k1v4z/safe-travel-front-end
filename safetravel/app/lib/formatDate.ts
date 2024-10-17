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