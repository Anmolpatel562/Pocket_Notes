export const getTime = (dateStr) => {
    const dateObj = new Date(dateStr);
    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = hours.toString().padStart(2, '0');
    const time = `${formattedHours}:${minutes} ${amPm}`;
    return time;
};
