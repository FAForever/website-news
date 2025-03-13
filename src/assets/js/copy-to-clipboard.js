document.addEventListener("DOMContentLoaded", () => {
  // Find all copy buttons
  const buttons = document.querySelectorAll(".copy-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the associated text to copy
      const dataTitle = this.getAttribute("data-share-title");
      const dataText = this.getAttribute("data-share-description");
      const dataURL = this.getAttribute("data-share-url");

      if (navigator.share) {
        navigator
          .share({
            title: dataTitle,
            text: dataText,
            url: dataURL,
          })
          .then(() => console.log("Shared successfully!"))
          .catch((error) => console.error("Error sharing:", error));

        return;
      }

      if (navigator.clipboard) {
        // Use the Clipboard API
        navigator.clipboard
          .writeText(dataURL)
          .then(() => {
            // Flash the button green
            this.classList.add("show-msg");

            // Remove the class after the animation ends
            setTimeout(() => {
              this.classList.remove("show-msg");
            }, 1000); // Match the animation duration
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });

        return;
      }
    });
  });
});
