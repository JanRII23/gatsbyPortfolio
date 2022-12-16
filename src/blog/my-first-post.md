---
title: Sensitive Data Exposure & IDOR
author: Jan Rejas II
date: 2022-08-22
keyword: SUBCATEGORY
featuredImage: ../assets/images/powMovement.png

---

<!-- ## Introduction to my blog  -->

DECEMBER 16, 2022 | #CYBERSEC <br/>
<br/>
Disclaimer
* \- Test
* \- Test
* \- Test
* \- Test
* \- Test

2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget interdum erat. Curabitur eu tortor at ante congue blandit congue vitae ex. Quisque elementum ut est quis elementum. Curabitur diam nulla, interdum a viverra eu, mollis at erat. Proin vehicula lorem nec maximus congue. Vivamus pretium arcu eu magna rhoncus, et gravida augue fermentum. Morbi nisi elit, ultrices et dolor vitae, fringilla pellentesque magna. Vestibulum leo mauris, rutrum id eros id, volutpat sagittis sem. Nulla facilisi. Curabitur tincidunt feugiat mauris auctor fermentum. Duis quis mauris eget ante elementum pretium venenatis eu purus. Donec ut tellus id ante tristique porttitor eget a metus. Maecenas pellentesque est vel nulla ultrices iaculis. Integer hendrerit sit amet erat eget facilisis.


-	Disclaimer
o	Don’t attack public sites! There are plenty of available ctfs and challenges on a sandbox
o	If you find a public vulnerability, report it – do NOT exploit it
o	Never actually (i.e. download) any accidentally exposed private user data
o	Do not publicly disclose a discovered vulnerability until the company agrees, which they often do
o	Remember that failed attempts at hacking are still punishable by law (or other hackers)

-	Provide visuals and analogies and possibly counter-examples/misunderstanding, provide a lab walk through of security shepherd, lists tools that are used to hack/guard against these vulnerabilities

-	Provide code examples, provide how a hacker might approach these vulnerabilities


Sensitive Data Exposure (means that somebody should not be able to see information when passing it onto a site)
-	Sensitive Data  CIA Triad
o	Confidentiality
	Encryption, people authorized to view should see it 
	Only I should now about it

	Information is not disclosed to unauthorized individuals, processes, or devices
	Threat
•	Data disclosure
•	Masquerading
•	Privilege escalation
	How to achieve
•	Access control
•	Authentication, If I am Jan I should be Jan
•	Authorization, what I can see
•	Encryption
•	Data minimization
o	Integrity
	File hashing, messages sent online should be the exact message
	Information should stay the same/ data

	Protection against unauthorized creation, modification, or destruction of information
	Threat
•	Alteration / data modification
	How to achieve
•	Authorization
•	Testing and validation
•	Monitoring
•	Hashing algorithm
•	Message digests
o	Availability
	Means I should be able to access it

	Timely, reliable access to data and information services for authorized users
	Threat
•	Disruption
•	DOS (Denial of Service)  != to DDOS means attack from other areas
	How to Achieve
•	Redundancy
•	Monitoring
•	Incident Response capability
•	Operational excellence
-	Access Control
o	Access control is a fundamental component of data security that dictates who’s allowed to access and use company information and resources
o	Access control policies ensure that users are who they say they are and have proper access to data through authentication and authorization
-	Access control types
o	Discretionary access control
	Owner of the data defines the rules and controls access
o	Mandatory access control
	Regulation decide access
o	Role based access control
	Based on user’s role, least privilege
o	Attribute based access control
	Decisions based on time of day, position, and location
-	Implement access control based on:
o	Authentication
	Identify user
	Confirms that they are who they say they are
o	Session management:
	Identifies which subsequent HTTP requests are being made by that same user
o	Access control
	Determines whether the user is allowed to carry out the action that they are attempting to perform
-	Sensitive Data Exposure:
o	Sensitive data exposure occurs when an application, company, or other entity inadvertently exposes personal data
o	Information such as 
	Credit card data
	Medical history
	Session tokens
	Or other authentication credentials
o	Most common flaw is failing to encrypt data

URL Manipulation and IDOR
-	IDOR = insecure direct object reference (IDOR)
o	When code accesses a restricted resource based on user input, but fails to verify user’s authorization to access that resource
o	 A type of access control vulnerability that arises when an application uses user-supplied input to access objects directly
o	Allows attackers to bypass authorization and access resources in the system directly, for example database records or files
o	Allows attackers to bypass authorization and access resources directly by modifying the value of a parameter used to directly point to an object
o	Such resource can be database entries belonging to other users, files in the system, and more
o	Caused by the application taking user-supplied input and using it to retrieve and object without performing sufficient authorization checks
-	How does IDOR work?
o	This involves session management where the user hast to be authenticated and/or authorized

-	IDOR types
o	Body manipulation: attackers modify the value of a checkbox, radio buttons, and form fields. This lets them access information from other users with ease
o	URL tampering: The url is modified client side by tweaking the parameters in the HTTP request. HTTP verbs GET and POST are typically vulnerable to a URL tampering IDOR attack

Mitigation
-	Sensitive Data Exposure Prevention
o	Data classification
o	Encrypt the data at rest and data in motion
o	Use strong ciphers
o	Alert on errors
o	Auditing
o	Gather only required data
-	IDOR Mitigation
o	Change direct reference to indirect reference
o	Authorization and access control – with the exception of public resources, deny by default
o	Reusage – implement access control mechanisms once and re-use them throughout the application
o	Alerts – log access control failures, alert admins, when appropriate
o	Indirect object reference – limit meaning of the parameter to the user’s scope or non-predictable character string
-	IDOR / URL Manipulation Case Studies

Pre-reading
Fundamental Security Principles
-	Never trust users, even the most trusted individuals can have their information stolen
-	Least Privilege
o	The principle holds the idea that a user should only be allowed/privilege of access which are essential to the user’s work or overall experience
o	Code should also follow the same principle thus OOP
-	Simple is more secure  complex systems is a double edged sword, meaning that it can introduce bugs and security vulnerabilities
-	Expect the unexpected  security is proactive, not reactive. Always think of ways in which a hacker might think. Provide a template of edge cases to consider when thinking of a system vulnerability
-	Defense in depth  have layers of security in place People, technology, and process. Think how a skydiver doesn’t just jump with one parachute
-	Security through obscurity  instead of username found, but password wrong. Place username or password wrong this give the hacker no information of either or was correct
-	Prefer whitelisting over blacklisting  listing what or who is permitted over what is forbidden. That way make everything private and just allow access better to manage the distribution of information “i.e. secure by default”
-	Map data movement and exposure, data is a commodity take note of how data is entered into the system, moves within the system, where it is stored, and how it returned/used

HTTP Request Types
-	HEAD, PUT, DELETE, CONNECT, and OPTIONS are other examples but the most common is GET and POST
-	Get request 
o	Sent when url is submitted in the browser location bar or a user clicks a link
o	Send data in the URL and query string
o	Reloadable
o	Can bookmark
o	User for read-only operations
	View, search, sort, or filter data
	Data does not change
POST request
-	Sent when web form is submitted 
-	Send data in the URL and as an attachment
-	Semi-reloadable
-	Can not bookmark
-	Used for write operations
o	Create, update, or delete data
o	Data does not change

The most common web based attack is URL Manipulation
-	List common types of manipulation
-	What exactly is a URL??


