import { ref } from "vue";

const hashLinkRegex = /\[(.*?)]\((#.*?)\)/g;
const linkRegex = /\[(.*?)]\((.*?)\)/g;
const emRegex = /_(.*?)_/g;

export function formatString(work: string) {
  return work
    .replaceAll(hashLinkRegex, '<a href="$2">$1</a>')
    .replaceAll(linkRegex, '<a href="$2" target="_blank">$1</a>')
    .replaceAll(emRegex, "<em>$1</em>");
}

export const inHomePage = ref(true);
