import { ref } from "vue";

const hashLinkRegex = /\[(.*?)]\((#.*?)\)/g;
const mutedLinkRegex = /\[!(.*?)]\((.*?)\)/g;
const linkRegex = /\[(.*?)]\((.*?)\)/g;
const emRegex = /_(.*?)_/g;
const boldRegex = /\*(.*?)\*/g;

export function formatString(work: string) {
  return work
    .replaceAll(hashLinkRegex, '<a href="$2">$1</a>')
    .replaceAll(emRegex, "<em>$1</em>")
    .replaceAll(
      mutedLinkRegex,
      `<a href="$2" target="_blank"
        ><span style="color: var(--bs-body-color)" >$1</span></a
      >`,
    )
    .replaceAll(linkRegex, '<a href="$2" target="_blank">$1</a>')
    .replaceAll(boldRegex, "<strong>$1</strong>");
}

export const inHomePage = ref(true);
