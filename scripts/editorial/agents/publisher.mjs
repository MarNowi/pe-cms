export function publisherBrief({
  targets = [],
  publishAt = null,
  requiresApproval = true,
}) {
  return {
    agent: 'publisher',
    targets,
    publishAt,
    requiresApproval,
    status: 'pending',
  }
}
