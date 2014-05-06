(function() {


    var DateModule = {
        isRangeOverlap: function(startDate1, endDate1, startDate2, endDate2) {

            return (startDate1 >= startDate2 && startDate1 <= endDate2 && endDate2 != startDate1) ||
                    (startDate2 >= startDate1 && startDate2 <= endDate1 && endDate2 != startDate1);


        }

    };



    window.inapp = window.inapp || {};

    window.inapp.Date = DateModule;


})();