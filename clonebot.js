javascript: (() => {
    const CLONE_OF = "Clone of ";
    const TITLE_ID = "edit-title-0-value";

    const WHEN_AND_WHERE_ID = "edit-group-when-and-where";

    function removeCloneOf() { 
        const titleBox = document.getElementById(TITLE_ID);
        const titleText = titleBox.value;
        if (titleText.indexOf(CLONE_OF) != -1) {
            titleBox.value = titleBox.value = titleText.substring('Clone of '.length);
        }
    };

    function scrollToWhen() {
        document.getElementById(WHEN_AND_WHERE_ID).scrollIntoView({
            behavior: 'smooth'
        });
    };

    removeCloneOf();
    scrollToWhen();
  })();