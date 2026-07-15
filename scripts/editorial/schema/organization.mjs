export function organizationSchema({
  name = 'PEAK.Energy GmbH',
  url = 'https://www.peak-energy.gmbh',
  logo,
  telephone,
  address,
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    telephone,
    address,
  }
}
