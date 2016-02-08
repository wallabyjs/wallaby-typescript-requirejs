module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'lib/require.js', instrument: false},
      {pattern: 'lib/*.js', instrument: false, load: false},
      {pattern: 'src/app.ts', load: false},

      'test/test-main.ts'
    ],

    tests: [
      {pattern: 'test/appSpec.ts', load: false}
    ],

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({module: 'amd'})
    }
  };
};
