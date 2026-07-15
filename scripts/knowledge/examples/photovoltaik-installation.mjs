import {
  createGraph,
  createKnowledgeSearch,
  createRegistry,
  createResolver,
  entity,
  relation,
  topic,
} from '../index.mjs'

export function createPhotovoltaikInstallationKnowledge() {
  const registry = createRegistry()

  const entities = [
    entity({
      id: 'photovoltaikanlage',
      name: 'Photovoltaikanlage',
      type: 'system',
      description: 'Ein Energiesystem, das Sonnenlicht in elektrische Energie umwandelt und dauerhaft mit Gebäude und Elektroanlage verbunden wird.',
      aliases: ['PV-Anlage', 'Solaranlage'],
      tags: ['photovoltaik'],
      url: '/energielexikon/photovoltaikanlage',
    }),
    entity({
      id: 'handwerksrolle',
      name: 'Handwerksrolle',
      type: 'recht',
      description: 'Das von der Handwerkskammer geführte Verzeichnis der Betriebe, die ein zulassungspflichtiges Handwerk selbstständig ausüben dürfen.',
      tags: ['recht', 'verbraucherschutz'],
      url: '/energielexikon/handwerksrolle',
    }),
    entity({
      id: 'dachdeckerhandwerk',
      name: 'Dachdeckerhandwerk',
      type: 'gewerk',
      description: 'Das Fachhandwerk für Dachkonstruktion, Dacheindeckung, Abdichtung, Befestigung und dauerhafte Regensicherheit.',
      aliases: ['Dachdecker'],
      tags: ['dach', 'photovoltaik'],
    }),
    entity({
      id: 'elektrotechnikerhandwerk',
      name: 'Elektrotechnikerhandwerk',
      type: 'gewerk',
      description: 'Das Fachhandwerk für Planung, Installation, Prüfung und Inbetriebnahme elektrischer Anlagen.',
      aliases: ['Elektrohandwerk', 'Elektriker'],
      tags: ['elektrotechnik', 'photovoltaik'],
    }),
    entity({
      id: 'olg-koblenz-9-u-1015-25',
      name: 'OLG Koblenz, 9 U 1015/25',
      type: 'entscheidung',
      description: 'Obergerichtliche Entscheidung zur handwerksrechtlichen Einordnung von Planung, Installation, Inbetriebnahme und Wartung von Photovoltaikanlagen.',
      tags: ['recht', 'photovoltaik'],
    }),
  ]

  for (const value of entities) registry.registerEntity(value)

  registry.registerRelation(relation('photovoltaikanlage', 'betrifft', 'dachdeckerhandwerk'))
  registry.registerRelation(relation('photovoltaikanlage', 'betrifft', 'elektrotechnikerhandwerk'))
  registry.registerRelation(relation('handwerksrolle', 'regelt-zugang-zu', 'dachdeckerhandwerk'))
  registry.registerRelation(relation('handwerksrolle', 'regelt-zugang-zu', 'elektrotechnikerhandwerk'))
  registry.registerRelation(relation('olg-koblenz-9-u-1015-25', 'betrifft', 'photovoltaikanlage'))
  registry.registerRelation(relation('olg-koblenz-9-u-1015-25', 'bezieht-sich-auf', 'handwerksrolle'))

  registry.registerTopic(topic({
    slug: 'photovoltaik-installation',
    title: 'Photovoltaikanlagen fachgerecht installieren',
    entities: entities.map((value) => value.id),
    tags: ['photovoltaik', 'recht', 'handwerk'],
  }))

  return {
    registry,
    graph: createGraph(registry),
    resolver: createResolver(registry),
    search: createKnowledgeSearch(registry),
  }
}
