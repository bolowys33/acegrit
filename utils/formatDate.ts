export function formatTime(timeString: string): string {
    const dateObj = new Date(timeString);

    const month = dateObj.toLocaleString("default", { month: "long" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedTime = `${month} ${day}, ${year} at ${formattedHours}:${formattedMinutes} ${ampm}`;

    return formattedTime;
}