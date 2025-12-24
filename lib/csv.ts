export const escapeCsvField = (value: string | number | null | undefined): string => {
  if (value === null || value === undefined) return '""';

  const stringValue = String(value)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/"/g, '""');

  return `"${stringValue}"`;
};
