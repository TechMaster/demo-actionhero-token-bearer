exports.add = {
  name: 'math.add',
  description: 'Add two numbers',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  authenticated: true,
  middleware: [],

  inputs: {
    a: {required: true},
    b: {required: true}
  },

  run: function (api, data, next) {
    data.response.number = Number(data.params.a) + Number(data.params.b);
    next()
  }
};

exports.minus = {
  name: 'math.minus',
  description: 'Subtract two numbers',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],

  inputs: {
    a: {required: true},
    b: {required: true}
  },

  run: function (api, data, next) {
    data.response.number = Number(data.params.a) - Number(data.params.b);
    next()
  }
};

exports.action = {
  name: 'math.random',
  description: 'Generate random number',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: ['token-authentication'],  //Bổ xung middle ware here
  authenticated: true,
  inputs: {},

  run: function (api, data, next) {
    data.response.number = Math.random() * 100;
    next();
  }
};
