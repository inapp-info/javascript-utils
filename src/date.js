(function() {

    /**
     * This is the description for my class.
     *
     * @class MyClass
     * @constructor
     */
    var DateModule = {
        /**
         * My method description.  Like other pieces of your comment blocks, 
         * this can span multiple lines.
         *
         * @method methodName
         * @param {String} foo Argument 1
         * @param {Object} config A config object
         * @param {String} config.name The name on the config object
         * @param {Function} config.callback A callback function on the config object
         * @param {Boolean} [extra=false] Do extra, optional work
         * @return {Boolean} Returns true on success
         */

        isRangeOverlap: function(startDate1, endDate1, startDate2, endDate2) {

            return (startDate1 >= startDate2 && startDate1 <= endDate2 && endDate2 != startDate1) ||
                    (startDate2 >= startDate1 && startDate2 <= endDate1 && endDate2 != startDate1);


        }

    };



    window.inapp = window.inapp || {};

    window.inapp.Date = DateModule;


})();