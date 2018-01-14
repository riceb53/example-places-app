
/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      places: [],
      placeName: "",
      placeAddress: ""
    };
  },
  created: function() {
    // make an http request
    axios.get('/places').then(function(response) {
      this.places = response.data;
    }.bind(this))
  },
  methods: {
    addPlace: function() {
      var params = {name: this.placeName, address: this.placeAddress}
      axios.post('/places', params).then(function(response) {
        this.places.push(response.data);
      }.bind(this));
    }
  },
  computed: {}
};



var ExamplePage = {
  template: "#example-template",
  data: function() {
    return {
      message2: "I'm on another route",
    };
  },
  created: function() {
    // make an http request

  },
  methods: {
  },
  computed: {}
};

var router = new VueRouter({
  routes: [
    {path: "/", component: HomePage },
    {path: "/example", component: ExamplePage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
