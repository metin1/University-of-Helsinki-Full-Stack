
# Solution SPA Click
[solution websequencediagrams link](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=bm90ZSBvdmVyIGJyb3dzZXI6CldoZW4gY2xpY2sgIlNhdmUiCnBvc3QgcmVxdWVzdCBzZW5kIHRvIHRoZSBzZXJ2ZXIKZW5kIG5vdGUKCgA-By0-ABQGOiBQT1NUIGh0dHBzOi8vc3R1ZGllcy5jcy5oZWxzaW5raS5maS9leGFtcGxlYXBwL25ld19ub3RlX3NwYQoAWAYtLT4AgRMIIHsibWVzc2FnZSI6IgCBNQVjcmVhdGVkIn0KCgCBNxNUaGUgcGFnZSBkb2Vzbid0IHJlZnJlc2hlZCAKb25seQCBMAUAPAggAFQHIGdldCBhbmQgbGlzdCB1cGRhdGVkAIFYCwoKCgoAAQUKCg&s=default)

note over browser:

When click "Save"

post request send to the server

end note



browser->server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

server-->browser: {"message":"note created"}



note over browser:

The page doesn't refresh

only note created message get and list updated

end note
