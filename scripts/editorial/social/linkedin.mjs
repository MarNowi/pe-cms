export function linkedinPost({
  hook,
  body,
  cta = '',
  hashtags = [],
}) {
  return [
    hook,
    '',
    body,
    cta ? `\n${cta}` : '',
    hashtags.length ? `\n${hashtags.map((tag) => `#${tag.replace(/^#/, '')}`).join(' ')}` : '',
  ]
    .filter((part) => part !== '')
    .join('\n')
    .trim()
}
