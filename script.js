var eventsData;
//Question: Why don't we have to assign a value to eventsData or why don't we have to create an argument ()?

function setHourColors() {
    var now = dayjs();
    for (var i = 9; i < 18; i++) {
        // $("hour-" + i + " textarea").removeClass("future")
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past")
        } else if (i === now.hour()) {
            $("#hour-" + i + " textarea").addClass("present")
        }
    }
}

function loadStoredData() {
    eventData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: ""
            //etc.
        };
    }
    //The hour9, hour10, and hour11 are for storing from local storage.
    //ToDo load existing data from Local Storage
}

function handleSaveClick() {
    var hourBlock = $(event.targert).parent();
    var value = saveButton.parent().children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    eventsData["hour" + hour] = value;
    //ToDO Stores this hours data in Local Storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$('.saveBtn').on('click', handleSaveClick);

$(function () {
    loadStoredData();
    setHourColors();
});
