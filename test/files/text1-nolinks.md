The File interface provides archives' informations and allows JavaScript to access it's content.

They are usually requested by an object that is returned as a result of the user's selection of archives through the element, from the object used in dragging and releasing operations, or from the API `mozGetAsFile()` in a HTMLCanvasElement. In Gecko, scrypts with privileges can create File objects representing any local file without the user's interaction (see Implementation Notes for more information).