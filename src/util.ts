const linkRegex = /\[(.*?)]\((.*?)\)/g;
const emRegex = /_(.*?)_/g;

export function formatString(work: string) {
  return work
    .replaceAll(linkRegex, '<a href="$2" target="_blank">$1</a>')
    .replaceAll(emRegex, "<em>$1</em>");
}
