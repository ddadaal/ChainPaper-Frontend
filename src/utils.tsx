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

export const DEFAULT_AVATAR = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540823688873&di=18f09cc1a41075294d1c12e67d178594&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F06%2F05%2F155753d94b715a2.jpg";

export function sleepMs(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

