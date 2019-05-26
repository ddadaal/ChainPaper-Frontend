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
