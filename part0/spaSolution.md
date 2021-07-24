
# Solution SPA
[solution websequencediagrams link](
https://www.websequencediagrams.com/cgi-bin/cdraw?lz=Cgpicm93c2VyLT5zZXJ2ZXI6IEhUVFAgR0VUIGh0dHBzOi8vc3R1ZGllcy5jcy5oZWxzaW5raS5maS9leGFtcGxlYXBwL3NwYQoKADoGLS0-AEsHOiBzcGEgZGF0YQAfRm1haW4uY3NzAGpJLmpzAIEiFABeCgCBPRUAMQUKCm5vdGUgb3ZlciAAgWcIAIJCCSBzdGFydHMgZXhlY3V0aW5nIGpzLWNvZGVzCgp0aGF0IHJlcXVlc3QgSlNPTgCCHAUgZnJvbSAAgnsGCgplbmQgbm90ZQoKAIJYRmRhdGEuanNvbgCDEBRbeyJjb250ZW50IjoiRVhQRUNUTyBQQVRSTk9VTSEhISEhISIsImRhdGUiOiIyMDIxLTA3LTI0VDA4OjM3OjMzLjI5OVoifSwgNjVaIn0sLi4uXQCCBxhMYXMAgXIKZm9yIGZhdmljb24gYW5kAIQ3CCBzZW5kABAJAIQ3BgCCBgoAhRsRAIUEHwBaBy5pY28AhQwUABIN&s=default)


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
