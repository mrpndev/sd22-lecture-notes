// How does the Internet Work

/* 
    Browser - has a built in set of rules on how to render a file.

    The rules are governeed by the W3C organization.

    HTTP - protocol that governs transmission of data across the web
    HTTP Methods:
        * GET - sends OR retrieves data (no body)
        * POST - adds data (has body)
        * PUT - replaces data (has body)
        * DELETE - deletes data (no body)
    
    HTTP Request and Response lifecycle:

    * Endpoint (URI/L) - uniform resource identifier/ locator
    * Headers - metadata of info about the request
    * Method (GET POST PUT DELETE) - stipulates the rules for the request
    * Body (sometimes) - holds our information in a JSON format.
    * Status Code - handles health of the response
    

    Before HTTP request reaches a server, it goes thru the Domain Name Server (DNS) to resolve the URL into an IP address.

    HTTP requests require TCP connection, meaning there's a handshake for information.

*/