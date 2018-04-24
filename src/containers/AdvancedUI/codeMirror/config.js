const switchOptions = [
  {
    id: 'lineNumbers',
    title: 'Line Numbers',
    trueValue: true,
    falseValue: false,
    value: true
  },
  {
    id: 'readOnly',
    title: 'Read Only',
    trueValue: false,
    falseValue: true,
    value: true
  }
];
const selectOptions = [
  {
    id: 'tabSize',
    title: 'Tab Size',
    options: ['2', '4', '6', '8'],
    value: 2
  },
  {
    id: 'mode',
    title: 'Language',
    options: ['javascript', 'xml', 'markdown', 'php', 'python', 'ruby'],
    value: 'javascript'
  },
  {
    id: 'theme',
    title: 'Select themes',
    options: [
      'default',
      'zenburn',
      'solarized',
      'rubyblue',
      'paraiso-dark',
      'midnight',
      'material',
      'hopscotch',
      'twilight'
    ],
    value: 'zenburn'
  }
];

const defaultValues = {
  basic: `const component = {
    name: 'Insights',
    author: 'RedQ Team',
    website: 'https://Insights.redq.io/'
};`,
  javascript: `const component = {
    name: 'Insights',
    author: 'RedQ Team',
    website: 'https://Insights.redq.io/'
};`,
  markdown: `# Insights
###This is a RedQ Team production
[have a look](https://Insights.redq.io/)
  `,
  xml: `<isomprphic>
    <to>Tove</to>
    <name>Insights</name>
    <author>RedQ Team</author>
    <website>Insights.redq.io</website>
</isomprphic>`,
  php: `<html>
 <head>
  <title> v</title>
 </head>
 <body>
 <h1>https://Insights.redq.io/</h1>
 <p>This is a RedQ Team production</p>
 <a href="https://Insights.redq.io/">visit ou site</a>
 </body>
</html>
`,
  python: `
print("Insights")
print("This is a RedQ Team production")
print("visit us https://Insights.redq.io ")
`,
  ruby: `rint "Insights"
print "This is a RedQ Team production"
print "visit us https://Insights.redq.io "
`
};

export { switchOptions, selectOptions, defaultValues };
