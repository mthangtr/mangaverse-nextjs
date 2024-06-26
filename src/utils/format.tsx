export function formatCount(count?: number) {
  if (!count) return "0";
  if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}k`;
  return count.toString();
}

export function titleUrlFormat(title: string) {
  return title
    .normalize("NFD")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .toLowerCase();
}

export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function convertGsToHttps(gsUrl: string) {
  const bucketRegex = /^gs:\/\/([^\/]+)\/(.+)$/;
  const match = gsUrl.match(bucketRegex);
  if (match) {
    const bucketName = match[1];
    const filePath = match[2].replace(/\//g, "%2F"); // Encoding the slashes
    return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filePath}?alt=media`;
  } else {
    throw new Error("Invalid GS URL");
  }
}
