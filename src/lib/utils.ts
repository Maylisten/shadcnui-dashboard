import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function arrayJoin<T, P>(arr: T[], wall: P) {
  return arr.flatMap((item, index) => (index < arr.length - 1 ? [item, typeof wall === "function" ? wall(index, item) : wall] : [item]))
}
