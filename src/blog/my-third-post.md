---
title: Cookie & Session Based Attacks
author: Jan Rejas II
date: 2023-01-04
keyword: OWASP 10
featuredImage: ../assets/images/cyberImageTwo.jpg

---

| January 4th, 2023 | 

<br/>

__Cookie__ and __session-based__ attacks are all about manipulating elements of an HTTP request. Cyber threat actors use cookie and session-based attacks to achieve authentication of a user account(s) and gain unauthorized access to private information. To grasp the concept of this form of a cyber-attack, it is essential to understand the fundamentals of HTTP requests and different ways that client requests (usually web browsers) are stored on a web server.

<br/>
<br/>

### | Disclaimer |

<br/>

*  * \- Don't blatantly attack public sites! There are plenty of CTFs and other challenges available online.
*  * \- If you find a vulnerability on a website or application, __REPORT IT!__ Do NOT exploit it.
*  * \- Never download any accidentally exposed private user data.
*  * \- Never publicly disclose a discovered vulnerability until the company agrees.
*  * \- Remember that failed attempts at hacking are still punishable by law (or other hackers).

<br/>

### | HTTP Request |
<br/>

__HyperText Transfer Protocol__ (HTTP) requests are used to fetch data between web browsers and servers. The general structure of a HTTP request contains a request line, HTTP header, and a message body. 

<br/>
<br/>

*  * \- __| Request Line |__

<br/>

*  *  *  *  \- HTTP Methods such as GET, POST, PUT, etc...
*  *  *  *  \- Request Target that either is a URI (Uniform Resource Identifier) or URL (Uniform Resource Locator).

<br/>

*  * \- __| HTTP Header |__

<br/>

*  *  *  *  \- Supporting information that provides a web client’s (web browser) request with more detail for the web server.

<br/>

*  * \- __| Message Body |__

<br/>

*  *  *  *  \- While not all request have a body, it is typically used to send information back to the client.

<br/>

*  * \- __| HTTP Request Example |__

<br/>

*  *  *  *  1\. User wants to visit a webpage on a site by using a web browser which results in an HTTP request sent to the web server .

*  *  *  *  2\. With the request, the web server sends over a file containing information that is pertinent to the webpage.

*  *  *  *  3\. The file sent by the web server is then rendered on the user's web browser on their computer.

*  *  *  *  4\. If more information is missing or needs to be loaded at a certain point in time, then another HTTP request will be sent.

<br/>

It’s important to note that HTTP requests are a stateless protocol, meaning that each request sent over and response received are independent of each other (i.e., every request is new). To have a personal and convenient browsing experience, mechanisms like cookies and sessions are incorporated within HTTP requests.

<br/>

### | Cookies vs. Sessions |
<br/>

__Cookies__ are small pieces of information in a file sent over by a web server and stored on the client side (user’s web browser). Unlike cookies, __sessions__ are stored on the server side and only references a unique identifier, called a “session ID”, which is sent to the user’s browser as a cookie or appended to the URL. Both Cookie and Session files contain identity and browser state information for a variety of purposes such as: 

<br/>

*  *  * \- Authentication
*  *  * \- Record items/Recall information (cart of E-Commerce site)
*  *  * \- Record webpages visited
*  *  * \- Record user information

<br/>

  * \- __| Cookies |__

<br/>

*  *  * \- Lifetime set by the user
*  *  * \- Store certain and limited amount of information or it will reduce load time
*  *  * \- Not secured
*  *  * \- Stored in a text file

<br/>

 * \- __| Sessions |__

<br/>

*  *  * \- When browser logs out or exits the session is over
*  *  * \- Holds indefinite amount of data
*  *  * \- Information stored are encrypted

<br/>

 * \- __| Why and when to use either |__

<br/>

*  *  * \- Sensitive actions like email changes or passwords = never
*  *  * \- Sensitive data = sessions
*  *  * \- Remember-me data = cookies

<br/>

Although this is not necessarily absolute, an important question to ask is that must the __persistent data__ remain when the user closes the browser?

<br/>

*  *  * \- Persistent data are information on a webpage that is infrequently accessed and not likely to be modified

*  *  * \- yes = cookies
*  *  * \- no = sessions

<br/>

### | Cookie and Session Based Attacks |
<br/>

HTTP requests to web servers can be faked because it is simply a string of formatted data. With that in mind, cyber threat actors can send HTTP requests with malicious modifications to sites that have authentication vulnerabilities. As noted, cookies and/or sessions files are part of HTTP request contained in the header.


<br/>

*  * \- __| Forms of Attack |__

<br/>

*  *  *  *  1\. Cross-Site Request Forgery (CSRF) - when a user is tricked into performing actions to another site by inadvertently clicking a link or submitting a form.

*  *  *  *  2\. Cookie Theft and Manipulation - when a cyber threat actor steals a sensitive data stored in a cookie and sends a modified HTTP request to impersonate the victim.

*  *  *  *  3\. Session Hijacking - when a cyber threat actor steals a user's session id and sends a modified HTTP request to impersonate the victim.

*  *  *  *  4\. Session Fixation - unlike hijacking, cyber threat actor issues a session id to a user's browser forcing to use the chosen session id.

<br/>

*  * \- __| Preventative Methods |__

<br/>

*  *  *  *  \- Vigilance with faked request

*  *  *  *  \- Session ID need to be random

*  *  *  *  \- Practicing correct usage of HTTP methods

*  *  *  *  \- Security focused usage of cookies and sessions

*  *  *  *  \- Honeypots in which a security mechanism is put in place to counteract cyber-attack attempts



<br/>