// calendar variables
const calendarLabel = document.querySelector(".calendar-label")
const calendarSpan = calendarLabel.querySelector("span")
// end calendar variables


// calendar logic
$(function () {
    $("#datepicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        currentText: "Done", 
        closeText: "Cancel",
        onSelect: function () {
            const currentDate = $("#datepicker").datepicker("getDate");
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();
            calendarSpan.textContent = day + "/" + month + "/" + year;
        }
    });
});
// end calendar logic