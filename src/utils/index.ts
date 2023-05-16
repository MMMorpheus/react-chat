import { isToday, formatDistanceToNow, format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import tinycolor from "tinycolor2";

export const formatTime = (createdAt: string): string => {
  if (isToday(parseISO(createdAt))) {
    return formatDistanceToNow(parseISO(createdAt), {
      addSuffix: true,
      locale: ru,
    });
  } else {
    return format(parseISO(createdAt), "dd.MM.yy", { locale: ru });
  }
};

export const convertTime = (num: number): string => {
  const mins = Math.floor(num / 60);
  const secs = Number((num % 60).toFixed());
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const isValidRGB = (num: number): number => {
  if (num > 255) {
    return 255;
  }
  if (num < 0) {
    return 0;
  }
  return num;
};

export type TGradient = {
  readonly color: string;
  readonly lightColor: string;
};

export const colorGenerator = (hash: string): TGradient => {
  const [r, g, b] = hash
    .substring(0, 3)
    .split("")
    .map((char) => isValidRGB(char.charCodeAt(0)));
  return {
    color: tinycolor({ r, g, b }).lighten(10).saturate(30).toHexString(),
    lightColor: tinycolor({ r, g, b }).lighten(40).saturate(30).toHexString(),
  };
};
