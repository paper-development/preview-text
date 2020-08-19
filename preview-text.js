/**
 * Class providing a function to quickly create preview texts from HTML content.
 * @author Noah Boegli
 * @licence MIT
 */
class PreviewText {

    /**
     * Strips all HTML tags from a string.
     * @param html                  The HTML string to create a preview from.
     * @param length [OPTIONAL]     The length of the preview. If omitted or longer than the generated preview string,
     *                              the string returned will be the full generated preview string.
     * @param appendDots [OPTIONAL] If the returned string is not the full generated preview string,
     *                              whether to append `...` at the end.
     * @returns string
     * @link https://stackoverflow.com/a/47140708/6086785
     */
    static make(html, length = null, appendDots = false) {
        let doc = new DOMParser().parseFromString(html, 'text/html');

        let previewText = doc.body.textContent || "";

        return length === null
            ? previewText
            : length >= previewText.length
                ? previewText.slice(0, previewText.length)
                : previewText.slice(0, length) + (appendDots ? "..." : "")
    }
}