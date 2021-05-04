export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 10,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 10,
    group: 'artboard',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 10,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 10,
    group: 'artboard',
  },

  nodesWidth: {
    type: 'number',
    label: 'Nodes width',
    default: 5,
    group: 'chart',
  },

  nodesPadding: {
    type: 'number',
    label: 'Padding',
    default: 5,
    group: 'chart',
  },

  linksOpacity: {
    type: 'number',
    label: 'Links opacity (0-1)',
    default: 1,
    step: 0.1,
    min: 0,
    max: 1,
    group: 'chart',
  },

  linksBlendMode: {
    type: 'text',
    label: 'Overlapping links blend mode',
    group: 'chart',
    options: ['normal', 'multiply'],
    default: 'multiply',
  },

  sortNodesBy: {
    type: 'text',
    label: 'Sort nodes by',
    group: 'chart',
    options: [
      'Total value (descending)',
      'Total value (ascending)',
      'Name',
      'Minimize Overlaps',
    ],
    default: 'Total value (ascending)',
  },

  verticalAlignment: {
    type: 'text',
    label: 'Flows alignment',
    group: 'chart',
    options: ['Top', 'Center', 'Bottom'],
    default: 'Center',
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'source',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },

  showValues: {
    type: 'boolean',
    label: 'show nodes values',
    default: false,
    group: 'Labels',
  },
}
