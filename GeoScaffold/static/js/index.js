/* Copy the manuscript citation. The page and expandable figures also work without JavaScript. */
"use strict";

const copyButton = document.querySelector("[data-copy-citation]");
const citation = document.getElementById("citation-text");
const feedback = document.querySelector("[data-copy-feedback]");

if (copyButton && citation && feedback) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      // Clipboard access requires HTTPS or localhost and can be denied by the browser.
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(citation.textContent.trim());
      feedback.textContent = "BibTeX copied to clipboard.";
    } catch {
      // Leave the citation selected so the user can still copy it manually.
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(citation);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      feedback.textContent = "Automatic copy is unavailable. The citation is selected; press Ctrl+C or ⌘C to copy.";
    }
  });
}
