export function newsletter({
  subject,
  preheader = '',
  intro,
  body,
  ctaText,
  ctaUrl,
}) {
  return {
    subject,
    preheader,
    intro,
    body,
    cta: ctaText && ctaUrl
      ? { text: ctaText, url: ctaUrl }
      : null,
  }
}
