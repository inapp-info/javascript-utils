(function() {

    /**
     * This is the description for my class.
     *
     * @class Date
     * @constructor
     */
    var DateModule = {
        /**
         * Check whether the dates overlap
         *
         * @method isRangeOverlap
         * @param {Date} First_startDate
         * @param {Date} First_endDate
         * @param {Date} Second_startDate
         * @param {Date} Second_endDate
         * @return {Boolean} Returns true on success
         */

        isRangeOverlap: function(startDate1, endDate1, startDate2, endDate2) {

            return (startDate1 >= startDate2 && startDate1 <= endDate2 && endDate2 != startDate1) ||
                    (startDate2 >= startDate1 && startDate2 <= endDate1 && endDate2 != startDate1);
        },
        /**
         * Convert from 24 hour to 12 hour format
         * @method is12HourFormat
         * @param {Date} date
         * @return {String} Returns 24 hour time
         */


        get12HourTimeFormat: function(start) {
            var AMPM;
            var hour;
            var min;
            min = start.getMinutes();
            if (start.getMinutes() == 0) {
                min = "00";
            }
            if (start.getHours() == 12) {
                AMPM = "PM";
                hour = 12;
            }
            else if (start.getHours() < 12) {
                AMPM = "AM";
                hour = start.getHours();
            }

            else {
                AMPM = "PM";
                hour = start.getHours() - 12;
            }

            return(hour + ":" + min + " " + AMPM);
        }

    };
   
    window.inapp = window.inapp || {};
    window.inapp.Date = DateModule;
})();