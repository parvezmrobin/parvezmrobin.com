import { ref } from "vue";

const hashLinkRegex = /\[(.*?)]\((#.*?)\)/g;
const linkRegex = /\[(.*?)]\((.*?)\)/g;
const emRegex = /_(.*?)_/g;
const boldRegex = /\*(.*?)\*/g;

export function formatString(work: string) {
  return work
    .replaceAll(hashLinkRegex, '<a href="$2">$1</a>')
    .replaceAll(linkRegex, '<a href="$2" target="_blank">$1</a>')
    .replaceAll(boldRegex, "<strong>$1</strong>")
    .replaceAll(emRegex, "<em>$1</em>");
}

export const inHomePage = ref(true);
