export function imagePrompt({
  subject,
  setting = '',
  purpose = 'editorial',
  aspectRatio = '3:2',
  branding = 'PEAK.Energy',
  notes = '',
}) {
  if (!subject) throw new TypeError('PEAK.Editorial: imagePrompt.subject fehlt.')

  return [
    `Subject: ${subject}`,
    setting ? `Setting: ${setting}` : null,
    `Purpose: ${purpose}`,
    `Aspect ratio: ${aspectRatio}`,
    `Branding: ${branding}`,
    'Visual language: premium German craftsmanship, technically credible, modern, natural light, no generic stock-photo look',
    notes ? `Notes: ${notes}` : null,
  ]
    .filter(Boolean)
    .join('\n')
}
