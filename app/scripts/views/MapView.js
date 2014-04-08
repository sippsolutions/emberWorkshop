Emberworkshop.MapView = Ember.View.extend({
    template: '',
    classNames: 'map',

    didInsertElement: function () {
        var _this = this;
        var position = new google.maps.LatLng(this.get('coords.lat'), this.get('coords.lon'));

        // Map
        var map = new google.maps.Map(Ember.$(this.get('element')).get(0), {
            center: position,
            zoom: 8
        });

        // Marker
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: this.get('name')
        });

        // infowindow
        var info = null;

        // open marker on click
        google.maps.event.addListener(marker, 'click', function () {
            // close old window
            if (info) {
                info.close();
                info.setMap(null);
            }

            info = new google.maps.InfoWindow({
                content: _this.get('name')
            });

            info.open(map, marker);
        });

        // open marker on click
        google.maps.event.addListener(map, 'dragend', function () {
            // close old window
            if (info) {
                info.close();
                info.setMap(null);
            }

            var mapCenter = map.getCenter();
            marker.setPosition(mapCenter);
            _this.set('coords', Ember.Object.create({lat: mapCenter.k, lon: mapCenter.A}));
        });
    }
});
