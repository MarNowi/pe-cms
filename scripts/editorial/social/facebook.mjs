export function facebookPost({
  intro,
  body,
  cta = '',
}) {
  return [intro, '', body, cta ? `\n${cta}` : '']
    .filter((part) => part !== '')
    .join('\n')
    .trim()
}
