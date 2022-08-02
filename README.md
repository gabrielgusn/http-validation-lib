# HTTP Validation Lib

This is a npm lib project with a script made to detect and validate links in markdown text files.

To run it, you will need to clone this repository and install the local dependencies of the project with

`npm install`

To run the script, in the command line interface, use the following commands:

`npm run cli <path-of-the-directory-you-want-to-validate> validate`

and it will return an array of objects with each link of the markdown files in the directory you have specified. If there are any broken link, it will return an error specifying the broken link and where to find it.

if you run without de 'validate' parameter: 

`npm run cli <path-of-the-directory-you-want-to-validate>`

It will return an array with only the links that exist in the markdown files in the specified directory.