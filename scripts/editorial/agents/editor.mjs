export function editorBrief({
  audience,
  tone = 'klar, fachlich, ruhig',
  goals = [],
  forbidden = [],
}) {
  return {
    agent: 'editor',
    audience,
    tone,
    goals,
    forbidden,
    status: 'pending',
  }
}
