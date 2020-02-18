# Open Search Safari
Safari Extension that allows for any custom search engine to be used within Safari's smart search bar. Implemented via js injection code. Made by [Tom Faber](https://TomFaber.id).

## Unique Features
- Use any 3rd party search engine within Safari’s smart address bar
- Smooth Integration: no flashes or partial loading of the default search engine
- works with any version of Safari (new safari extension model required)
- Smart Detection: by comparing the inherent differences in the requests send from the address bar vs typing directly into a search engine's search field, the extension can 'intelligently’ discern between search queries that are native to the address bar or come from a website. This allows users to still navigate to other search engine websites and use their service whenever they like.

## License
You can distribute, remix, tweak, and build upon this work,
even commercially, as long as credit is given for the original creation.
[Attribution 4.0 International CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## How to Use
Compile with xCode, then activate the 'Open Search' extension in Safari.

## How to change Search Engine
All the functionality is within the customSearch.js file. You just have to define your search engine with its query string in 'customSearchEngineQueryLink' var (the default is Ecosia).

## Build with
Swift Safari Extension Wrapper Code:
[RedirectPlease by Alex Perathoner (GNU GPL 3)](https://github.com/AlexPerathoner/RedirectPlease)
