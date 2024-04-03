export function getMessage(title, isbookmarked) {
  const message = !isbookmarked
    ? `${title}: added to bookmarks`
    : `${title}: Removed from bookmarks`;

  return message;
}
