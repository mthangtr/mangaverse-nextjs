export default function timeAgo(releaseDate: any) {
  const currentDate = new Date();
  const releaseDateObj = new Date(releaseDate);
  const timeDiff = currentDate.getTime() - releaseDateObj.getTime();

  const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
  const daysAgo = Math.floor(hoursAgo / 24);

  if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else if (daysAgo < 7) {
    return `${daysAgo} days ago`;
  } else if (daysAgo < 30) {
    return `${daysAgo} days ago`;
  } else if (daysAgo < 365) {
    return `${Math.floor(daysAgo / 30)} months ago`;
  } else {
    return `${Math.floor(daysAgo / 365)} years ago`;
  }
}
