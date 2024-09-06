const timestamp = Date.now();
const dateObject = new Date(timestamp);
const hour = dateObject.getHours();
const minute = dateObject.getMinutes();
const month = dateObject.getMonth() + 1; // Tambah 1 untuk mendapatkan bulan yang benar
const date = dateObject.getDate();
const day = dateObject.getDay(); // Anda mungkin ingin mengganti ini dengan getDay()
const year = dateObject.getFullYear();

const time = `${hour}:${minute}`;
const formattedDate = `${year}-${month}-${date}-${day}`;
export { time, formattedDate };
