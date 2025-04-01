export function formatDate(date) {
  const dateObj = date instanceof Date ? date : new Date(date);

  return dateObj.toLocaleString("en-US", {
    year: "numeric", // "2025"
    month: "short", // "April"
    day: "numeric", // "1"
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // AM/PM format
  });
}
