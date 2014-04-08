Emberworkshop.Location = Ember.Object.extend({
    name: 'Flintsbach am Inn',
    coords: Ember.Object.create(),
    weather: Ember.Object.create(),

    init: function () {
        this.updateWeather();
    },

    updateWeather: function () {
        var _this = this;

        Ember.$.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {
                units: 'metric',
                q: this.get('name')
            }
        }).done(function (data) {
            _this.set('coords', Ember.Object.create(data.coord));
            _this.set('weather', Ember.Object.create(data.main));
        });
    }.observes('name')
});
