import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { merge } from 'ts-deepmerge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isObject(item: unknown): item is object {
    return !!item && typeof item === 'object' && !Array.isArray(item);
}

export const deepMerge: typeof merge = merge;

export function flatFn<T>(fn: T | (() => T), ...args: Parameters<() => T>): T {
    return typeof fn === 'function' ? (fn as () => T)(...args) : fn;
}

export function isCpf(cpf: string) {
    let sum: number;
    let rest: number;
    sum = 0;

    cpf = cpf.replace(/\D+/g, '');

    if (cpf === '00000000000') return false;

    for (let i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

export function isCnpj(cnpj: string) {
    if (cnpj === '00000000000000') return false;
    if (cnpj.length !== 14) return false;

    cnpj = cnpj.replace(/\D+/g, '');

    let size = cnpj.length - 2;
    let numbers = cnpj.substring(0, size);
    const digits = cnpj.substring(size);
    let sum = 0;
    let pos = size - 7;

    for (let i = size; i >= 1; i--) {
        sum += parseInt(numbers.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) return false;

    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;

    for (let i = size; i >= 1; i--) {
        sum += parseInt(numbers.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(1))) return false;

    return true;
}
