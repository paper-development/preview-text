# preview-text
preview-text is a JavaScript utility to create preview texts from HTML.
## Usage
```javascript
PreviewText.make(html, length, appendDots);
```
### Parameters
 - `html` is the HTML to create the preview text from.
 - `length` is the length of the preview text, this parameter is optional and if ommited, the `make` method will return the full preview text.
 - `appendDots` sets whether to add `...` at the end of preview text if it was truncated by the `length` parameter.

### Disclaimer
**This should not be used as a way to avoid XSS injections.**
Even though it uses the method normally used to display user inputs safely, it is not made for that purpose.  
It was originally designed designed to provide previews of HTML content without the risk of including unclosed tags that could change the content/appearance of the page.  
The software is provided "as is" without warranty of any kind, as stated by the MIT license.