import en from "./en.json";
import es from "./es.json";

const translations: Record<string, Record<string, unknown>> = { es, en };

export function useTranslations(locale: string) {
  const dict = translations[locale] || translations.es;

  function resolve(key: string): unknown {
    const keys = key.split(".");
    let value: unknown = dict;
    for (const k of keys) {
      if (value == null || typeof value !== "object") return undefined;
      value = (value as Record<string, unknown>)[k];
    }
    return value;
  }

  function t(key: string): string {
    const value = resolve(key);
    return typeof value === "string" ? value : key;
  }

  function raw<T = unknown>(key: string): T {
    return resolve(key) as T;
  }

  return { t, raw };
}
