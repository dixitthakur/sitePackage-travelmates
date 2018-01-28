/**
 * Created by Dx on 1/5/2018.
 */
$(document).ready(function () {
/*date picker code --start*/
    $('#depart').datetimepicker({
        minDate : moment(),
        allowInputToggle: true,
        format: 'DD/MM/YYYY'});
    $('#return').datetimepicker({
        useCurrent: false,
        minDate : moment(),
        allowInputToggle: true,
        format: 'DD/MM/YYYY'//Important! See issue #1075
    });
    $('#departSearch').datetimepicker({
        allowInputToggle: true,
        format: 'DD/MM/YYYY'});
    $('#returnSearch').datetimepicker({
        useCurrent: false,
        allowInputToggle: true,
        format: 'DD/MM/YYYY'//Important! See issue #1075
    });
    $("#depart").on("dp.change", function (e) {
        $('#return').data("DateTimePicker").minDate(e.date);
    });
    $("#return").on("dp.change", function (e) {
        $('#depart').data("DateTimePicker").maxDate(e.date);
    });
});
