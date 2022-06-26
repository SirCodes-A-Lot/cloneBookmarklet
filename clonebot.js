javascript: (() => {
    const CLONE_OF = "Clone of ";
    const TITLE_ID = "edit-title-0-value";

    const WHEN_AND_WHERE_SECTION_ID = "edit-group-when-and-where";

    const LEADER_SECTION_ID = "edit-group-leader-information";

    const READY_TO_PUBLISH_ID = "edit-field-ready-for-publication-value";
    const PUBLISH_CHECKBOX_ID = "edit-status-value";

    const startDateElement = document.getElementById("edit-field-event-start-date-0-value-date");
    const endDateElement =  document.getElementById("edit-field-event-end-date-0-value-date");
    const cutOffDateElement =  document.getElementById("edit-field-event-purchase-cut-off-0-value-date");


    function removeCloneOf() { 
        const titleBox = document.getElementById(TITLE_ID);
        const titleText = titleBox.value;
        if (titleText.indexOf(CLONE_OF) != -1) {
            titleBox.value = titleBox.value = titleText.substring('Clone of '.length);
        }
    };

    function scrollToWhen() {
        document.getElementById(WHEN_AND_WHERE_SECTION_ID).scrollIntoView({
            behavior: 'smooth'
        });
    };

    function makeAllDatesStartDate(){
        const newDate = startDateElement.value;
        endDateElement.value = newDate;
        cutOffDateElement.value = newDate;
    };

    function checkReadyToPublishAndPublish(){
        document.getElementById(READY_TO_PUBLISH_ID).click();
        document.getElementById(PUBLISH_CHECKBOX_ID).click();
    };

    function scrollToLeader() {
        document.getElementById(LEADER_SECTION_ID).scrollIntoView({
            behavior: 'smooth'
        });
    };

    if (startDateElement.value == cutOffDateElement.value) {
        removeCloneOf();
        scrollToWhen();
    } else {
        makeAllDatesStartDate();
        scrollToLeader();
        checkReadyToPublishAndPublish();
    };
  })();