module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'merge',
        'revert',
        'build',
        'release',
        'struct'
      ]
    ]
  },
  types: [
    { value: ':sparkles: feature', name: '✨ feature' },
    { value: ':wrench: fix', name: '🔧 fix' },
    { value: ':memo: docs', name: '📝 docs' },
    { value: ':art: style', name: '🎨 style' },
    { value: ':recycle: refactor', name: '♻️  refactor' },
    { value: ':muscle: perf', name: '💪 perf' },
    { value: ':test_tube: test', name: '🧪 test' },
    { value: ':jigsaw: chore', name: '🧩 chore' },
    { value: ':cyclone: merge', name: '🌀 merge' },
    { value: ':dizzy: revert', name: '💫 revert' },
    { value: ':package: build', name: '📦 build' },
    { value: ':rocket: release', name: '🚀 release' },
    { value: ':house: architecture', name: '🏠 architecture' }
  ],
  scopes: [
    [':zap: Api', '⚡ Api'],
    [':fire: Front Page', '🔥 Front Page'],
    [':droplet: Admin Page', '💧 Admin Page'],
    [':rainbow: Project Work', '🌈 Project Work'],
    [':fog: Other', '🌫️  Other']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} ${description}`
    };
  }),
  messages: {
    type: '🌌 choose the type :',
    scope: '☀️  choose the scope :',
    subject: '🌏 describe the subject :',
    body: '🗻 describe the detail :',
    footer: '🌊  issue to close :',
    confirmCommit: '⌛ confirm ?'
  },
  subjectLimit: 72
};
