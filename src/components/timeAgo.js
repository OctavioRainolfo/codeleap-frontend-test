export const calculateTimeAgo = (created_datetime) => {
    
    const createdDate = new Date(created_datetime);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - createdDate.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let timeAgo = '';

    if (days > 0) {
        timeAgo = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        timeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        timeAgo = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        timeAgo = `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }

    return timeAgo;
};
