import people from "./assets/people.png";

export function limitLength(content: string, maxLength: number = 100) {
  return content.length <= maxLength ? content : content.substring(0, maxLength) + "...";
}

export function range(startIndex: number, endIndex: number): number[] {
  const array  = [] as number[];
  for (let i = startIndex; i < endIndex; i++) {
    array.push(i);
  }
  return array;
}

export const DEFAULT_AVATAR = people;

export function sleepMs(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

