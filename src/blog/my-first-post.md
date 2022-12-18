---
title: Sensitive Data Exposure & IDOR
author: Jan Rejas II
date: 2022-12-17
keyword: OWASP 10
featuredImage: ../assets/images/cyberImage.jpg

---

| December 18th, 2022 | 

<br/>

Sensitive Data Exposure occurs when a company or individual inadvertently exposes their personal data by __accident__. Cyber threat actors can take advantage of this "__accident__" by utilizing different types of access control vulnerabilities to invade privacy, steal information, and commit crimes. This section aims to provide an overview of how Insecure Direct Object Reference (IDOR), an access control vulnerability, can target some common examples of data exposure.
<br/>
<br/>
### Disclaimer
<br/>

*  * \- Don't blatantly attack public sites! There are plenty of CTFs and other challenges available online
*  * \- If you find a vulnerability on a website or application, __REPORT IT!__ Do NOT exploit it
*  * \- Never download any accidentally exposed private user data
*  * \- Never publicly disclose a discovered vulnerability until the company agrees.
*  * \- Remember that failed attempts at hacking are still punishable by law (or other hackers)
*  * \- If you're ignoring this disclaimer, I am not held liable and __don't get caught__

<br/>

### Sensitive Data
<br/>

The three tenets that serves the foundation of developing a security system are __Confidentiality__ , __Integrity__ , and __Availability__ which are also known as the "CIA Triad". 
<br/>
<br/>

*  * \- __Confidentiality__, information is not disclosed to unauthorized individuals, processes, or devices

<br/>

*  *  *  *  \- Common Threats

<br/>

*  *  *  *  *  *  \- Eavesdropping attack -> information theft from a device while the target user is sending or receiving data over the internet (Passive and Observant)
*  *  *  *  *  *  \- Encryption cracking -> breaching network encryptions
*  *  *  *  *  *  \- Malicious insiders -> a person with insider knowledge and uses the information to negatively impact the business
*  *  *  *  *  *  \- Man-in-the-middle attack -> unlike eavesdropping, the target is sending or receiving data from the threat actor instead of the client or server
*  *  *  *  *  *  \- Data disclosure -> the exposure of sensitive and confidential data
*  *  *  *  *  *  \- Masquerading -> the threat actor is posing as an authorized user like admin
*  *  *  *  *  *  \- Privilege Escalation -> unauthorized privilege access into a  system

<br/>

*  *  *  *  \- Ensuring Confidentiality

<br/>

*  *  *  *  *  *  \- Encryption -> scrambling data in which authorized individuals can only read and send information
*  *  *  *  *  *  \- Authentication -> verification of identity
*  *  *  *  *  *  \- Authorization -> verification of access levels

<br/>

*  * \- __Integrity__, protection against unauthorized creation, modification, or destruction of information

<br/>

*  *  *  *  \- Common Threats

<br/>

*  *  *  *  *  *  \- Human Error
*  *  *  *  *  *  \- No end to end encryption in server
*  *  *  *  *  *  \- Physical device compromised
*  *  *  *  *  *  \- Alteration / Data Modification

<br/>

*  *  *  *  \- Ensuring Integrity

<br/>

*  *  *  *  *  *  \- Authorization
*  *  *  *  *  *  \- Testing and Validation
*  *  *  *  *  *  \- Monitoring
*  *  *  *  *  *  \- Hashing Algorithms
*  *  *  *  *  *  \- Message Digests

<br/>

*  * \- __Availability__, reliable access to data and information services for authorized users

<br/>

*  *  *  *  \- Common Threats

<br/>

*  *  *  *  *  *  \- Denial of Service (DOS)
*  *  *  *  *  *  \- Distributed Denial of Service (DDOS)
*  *  *  *  *  *  \- Malicious Code
*  *  *  *  *  *  \- Insufficient Bandwidth

<br/>

*  *  *  *  \- Ensuring Availability

<br/>

*  *  *  *  *  *  \- Monitoring
*  *  *  *  *  *  \- Operational Excellence
*  *  *  *  *  *  \- Redundancy
*  *  *  *  *  *  \- Incident Response Capability

<br/>

The mix between each tenet of the CIA triad is not necessarily the alike for each security system. There are instances where one of the tenet may be prioritized. However, it is of the utmost importance to provide sufficient privacy protection.


<br/>

	Access Control
	Access control is a fundamental component of data security that dictates who’s allowed to access and 
	use company information and resources
	Access control policies ensure that users are who they say they are and have proper access to data 
	through authentication and authorization
	Access control types
	Discretionary access control
	Owner of the data defines the rules and controls access
	Mandatory access control
	Regulation decide access
	Role based access control
	Based on user’s role, least privilege
	Attribute based access control
	Decisions based on time of day, position, and location
	Implement access control based on:
	Authentication
	Identify user
	Confirms that they are who they say they are
	Session management:
	Identifies which subsequent HTTP requests are being made by that same user
	Access control
	Determines whether the user is allowed to carry out the action that they are attempting to perform
	Sensitive Data Exposure:
	Sensitive data exposure occurs when an application, company, or other entity inadvertently exposes personal data
	Information such as 
	Credit card data
	Medical history
	Session tokens
	Or other authentication credentials
	Most common flaw is failing to encrypt data

URL Manipulation and IDOR
	IDOR = insecure direct object reference (IDOR)
	When code accesses a restricted resource based on user input, but fails to verify user’s authorization to access that resource
	 A type of access control vulnerability that arises when an application uses user-supplied input to access objects directly
	Allows attackers to bypass authorization and access resources in the system directly, for example database records or files
	Allows attackers to bypass authorization and access resources directly by modifying the value of a parameter used to directly point to an object
	Such resource can be database entries belonging to other users, files in the system, and more
	Caused by the application taking user-supplied input and using it to retrieve and object without performing sufficient authorization checks
	How does IDOR work?
	This involves session management where the user hast to be authenticated and/or authorized

	IDOR types
	Body manipulation: attackers modify the value of a checkbox, radio buttons, and form fields. 
	This lets them access information from other users with ease
	URL tampering: The url is modified client side by tweaking the parameters in the HTTP request. 
	HTTP verbs GET and POST are typically vulnerable to a URL tampering IDOR attack

Mitigation
	Sensitive Data Exposure Prevention
	Data classification
	Encrypt the data at rest and data in motion
	Use strong ciphers
	Alert on errors
	Auditing
	Gather only required data
	IDOR Mitigation
	Change direct reference to indirect reference
	Authorization and access control – with the exception of public resources, deny by default
	Reusage – implement access control mechanisms once and re-use them throughout the application
	Alerts – log access control failures, alert admins, when appropriate
	Indirect object reference – limit meaning of the parameter to the user’s scope or non-predictable character string
	IDOR / URL Manipulation Case Studies
	
Pre-reading
