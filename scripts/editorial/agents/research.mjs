export function researchBrief({
  topic,
  questions = [],
  sources = [],
  constraints = [],
}) {
  return {
    agent: 'research',
    topic,
    questions,
    sources,
    constraints,
    status: 'pending',
  }
}
