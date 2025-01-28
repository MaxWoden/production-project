type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, flag]) => Boolean(flag))
      .map(([className, flag]) => className),
  ].join(' ');
}
