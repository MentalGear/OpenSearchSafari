//
//  ##### SAFARI OPEN SEARCH #####
//  by Tom Faber
//  https://TomFaber.id
//
//
//  # DESC
//  Javascript Injection Code that allows for any search engine
//  to be used within Safari's standard smart search bar
//
//
//  # LICENSE
//  You can distribute, remix, tweak, and build upon this work,
//  even commercially, as long as credit is given for the original creation.
//  Attribution 4.0 International (CC BY 4.0)
//  (https://creativecommons.org/licenses/by/4.0/)
//
//
//  # HOW TO USE
//  All the functionality is within this file.
//  You just have to define your search engine
//  with it's query string in 'customSearchEngineQueryLink'
//
//
//  # LICENSE (extension wrapper)
//  Swift Safari Extension Wrapper Code:
//  RedirectPlease by Alex Perathoner (GNU GPL 3)
//  https://github.com/AlexPerathoner/RedirectPlease
//

function customSearch() {
    
    // Add the query link of the custom search engine you would like to use
    var customSearchEngineQueryLink = "https://www.ecosia.org/search?q="
    
    var url = window.location
    //    console.log('url', url)
    var hostName = url.hostname
    hostName = hostName.toLowerCase()
    
    var query = url.search
    //    console.log('query', query)
    var uniqueSegment = ''
    var queryParameter = 'q'

 
     function isAddressBarSearch ( query, uniqueSegment ) {
         //   console.log('query, uniqueSegment', query, uniqueSegment)
         //   can't use this, because some unquie parameters, like duckduck, are not just param, but also values
         //   return searchParams.has( uniqueSegment )
         return query.includes(uniqueSegment)
     }

     function getCustomSearchEngineLink ( query, queryParameter ) {
        var searchParams = new URLSearchParams( query );
        searchQuery = searchParams.get( queryParameter )
        
        var searchEngineLink = customSearchEngineQueryLink + searchQuery
         
        return searchEngineLink
     }
     
    // Safari's default search engine's url queries
    // IMPORTANT: hostnames must be the same as in
    // Info.plist / 'SFSafariWebsiteAccess' / 'Allowed Domains'
    var hostnameLookup = [
        // hostnames as defined by the url safari uses inside the smart search field
        { hostname: 'www.google.', uniqueSegment: 'ie=', queryParameter: 'q' },
        { hostname: 'www.bing.', uniqueSegment: 'PC=', queryParameter: 'q' },
        { hostname: 'search.yahoo.', uniqueSegment: 'fr=aaplw', queryParameter: 'p' },
        { hostname: 'duckduckgo.', uniqueSegment: 't=osx', queryParameter: 'q' },
    ]

    index = 0
    var hostNameMatch = false
    while ((hostNameMatch == false) && ( index < hostnameLookup.length )) {

        // console.log("hostname", hostnameLookup[index]['hostname'])
         if ( hostName.includes( hostnameLookup[index]['hostname'] ) ) {
            queryParameter = hostnameLookup[index]['queryParameter']
            uniqueSegment = hostnameLookup[index]['uniqueSegment']
            hostNameMatch = true
         }

        index++
 
    }

    // console.log( 'hostNameMatch', hostNameMatch )
    // console.log( 'isAddressBarSearch', isAddressBarSearch( query, uniqueSegment ) )
    if ( hostNameMatch == true ) {
        if ( isAddressBarSearch( query, uniqueSegment ) == true ) {
            window.stop(); // keeps page from loading parts of the default search engine website
            var searchEngineLink = getCustomSearchEngineLink ( query, queryParameter )
            // redirect search to custom engine
            window.location.replace( searchEngineLink ) // directs to a new location, withtout saving the current one to history (user won't be able to use the back button to navigate to it)
        }
        
    }
    
 }

// init custom search
customSearch()



//document.addEventListener("DOMContentLoaded", function(event) {
//    safari.extension.dispatchMessage("Hello World!");
//});
