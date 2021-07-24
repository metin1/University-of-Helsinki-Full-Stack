
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa

server-->browser: spa data

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js

server-->browser: main.css

server-->browser: spa.js


note over browser:
browser starts executing js-codes
that request JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{"content":"EXPECTO PATRNOUM!!!!!!","date":"2021-07-24T08:37:33.299Z"}, 65Z"},...]

note over browser:
Last request for favicon and
server send favicon data
end note
browser->server: https://studies.cs.helsinki.fi/favicon.ico
server-->browser: favicon.ico
