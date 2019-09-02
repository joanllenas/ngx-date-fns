export const removePipe = (name: string) =>
  name
    .substr(0, name.length - 4)
    .replace(/([A-Z])/g, ' $1')
    .trim();
