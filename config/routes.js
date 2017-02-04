exports.default = {
  routes: function (api) {
    return {

      get: [
        { path: '/randomNumber', action: 'math.random' },
        { path: '/add/:a/:b', action: 'math.add' }
      ],

      post: [
        { path: '/minus', action: 'math.minus' }
      ]

    }
  }
};