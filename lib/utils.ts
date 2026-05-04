import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeInput(value: string): string {
  return value.trim().replace(/[<>]/g, "").slice(0, 2000);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  return /^(\+?234|0)[789]\d{9}$/.test(phone.replace(/\s/g, ""));
}

export function staggerDelay(index: number, base = 0.1): number {
  return index * base;
}