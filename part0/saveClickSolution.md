

# Solution Normal Click
[solution websequencediagrams link](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=bm90ZSBvdmVyIGJyb3dzZXI6CldoZW4gY2xpY2sgIlNhdmUiCnBvc3QgcmVxdWVzdCBzZW5kIHRvIHRoZSBzZXJ2ZXIKZW5kIG5vdGUKCgA-By0-ABQGOiBIVFRQIFBPU1QgaHR0cHM6Ly9zdHVkaWVzLmNzLmhlbHNpbmtpLmZpL2V4YW1wbGVhcHAvbmV3XwBJBgBaBi0tPgCBFQggU3RhdHVzIENvZGU6IDMwMgoKAIEvE0FmdGVyIHJlc3BvbnNlClBhZ2UgcmVsb2FkcyBhbmQgYWxsAIE0GyBhZ2FpbgCBNCFHRQCBJy1vdGVzAIE9FACBYwoAI0RtYWluLmNzAFUVABIKACFJagBPGmpzAIMGFQCEXwcgc3RhcnRzIGV4ZWN1dGluZyBqcy1jb2RlCnRoYQCEYwlzIEpTT04gZGF0YSBmcm9tAIRIKACCbS5kYXRhLmpzb24AhFwUW3siY29udGVudCI6IkVYUEVDVE8gUEFUUk5PVU0hISEhISEiLCJkYXRlIjoiMjAyMS0wNy0yNFQwODozNzozMy4yNjVaIn0sLi4uXQoAhRgVTGEAhlILZm9yIGZhdmljb24gYW5kAIV6BwCGbgYAEQcAhlIcAIZFHwBTBy5pY28AhkgUABMM&s=default)

note over browser:

When click "Save"

post request send to the server

end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

server-->browser: Status Code: 302

note over browser:

After response

Page reloads and all request send to the server again

end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes

server-->browser: new_note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

server-->browser: main.css

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js

server-->browser: main.js

note over browser:

browser starts executing js-code

that requests JSON data from server

end note



browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

server-->browser: [{"content":"EXPECTO PATRNOUM!!!!!!","date":"2021-07-24T08:37:33.265Z"},...]



note over browser:

Last request for favicon and

server send favicon

end note

browser->server: https://studies.cs.helsinki.fi/favicon.ico

server-->browser: favicon.ico
