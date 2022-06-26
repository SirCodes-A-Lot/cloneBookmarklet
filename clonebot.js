javascript: (() => {
    const CLONE_OF = "Clone of ";
    const TITLE_ID = "edit-title-0-value";
    var titleBox = document.getElementById(TITLE_ID);
    var titleText = titleBox.value;
    if (titleText.indexOf(CLONE_OF) != -1) {
        titleBox.value = titleBox.value = titleText.substring('Clone of '.length);
    }
  })();