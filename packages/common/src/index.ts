import { LoremIpsum } from "lorem-ipsum";

export default function helloWorld() {
  return new LoremIpsum().generateParagraphs(1);
}
