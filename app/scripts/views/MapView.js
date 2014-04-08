Emberworkshop.MapView = Ember.View.extend({
    template: '',
    classNames: 'map',

    didInsertElement: function () {
        var map = new google.maps.Map(Ember.$(this.get('element')).get(0), {
            center: new google.maps.LatLng(this.get('coords').get('lat'), this.get('coords').get('lon')),
            zoom: 8
        });
    }
});
