Emberworkshop.IndexController = Ember.Controller.extend({
    name: 'Rosenheim',

    actions: {
        create: function () {
            var newLocation = Emberworkshop.Location.create({
                name: this.get('name')
            });

            Emberworkshop.Storage.get('locations').pushObject(newLocation);

            this.set('name', '');
        }
    }
});
