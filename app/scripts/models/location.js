Emberworkshop.Location = Ember.Object.extend({
    name: 'Flintsbach am Inn',
    coords: Ember.Object.create(),
    weather: Ember.Object.create(),

    init: function () {
        this.updateWeather();
    },

    updateWeather: function () {
        var _this = this;

        // data for query string
        var data = {
            units: 'metric'
        }

        // we got coordinates
        if (this.get('coords.lat')) {
            data.lat = this.get('coords.lat');
            data.lon = this.get('coords.lon');
        }
        // we only got the place's name
        else {
            data.q = this.get('name');
        }

        // send the request
        Ember.$.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: data
        }).done(function (data) {
            _this.set('name', data.name);

            if (!_this.get('coords.lat')) {
                _this.set('coords', Ember.Object.create(data.coord));
            }

            _this.set('weather', Ember.Object.create(data.main));
        });
    }.observes('coords')
});
