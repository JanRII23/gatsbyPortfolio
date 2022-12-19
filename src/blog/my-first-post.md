---
title: Sensitive Data Exposure & IDOR
author: Jan Rejas II
date: 2022-12-17
keyword: OWASP 10
featuredImage: ../assets/images/cyberImage.jpg

---

| December 18th, 2022 | 

<br/>

Sensitive Data Exposure occurs when a company or individual inadvertently exposes their personal data by __accident__. Cyber threat actors can take advantage of this "__accident__" by utilizing different types of access control vulnerabilities to invade privacy, steal information, and commit crimes. This section aims to provide an overview of how Insecure Direct Object Reference (IDOR), an access control vulnerability, can target some common examples of sensitive data exposure.
<br/>
<br/>

### | Disclaimer |

<br/>

*  * \- Don't blatantly attack public sites! There are plenty of CTFs and other challenges available online
*  * \- If you find a vulnerability on a website or application, __REPORT IT!__ Do NOT exploit it
*  * \- Never download any accidentally exposed private user data
*  * \- Never publicly disclose a discovered vulnerability until the company agrees.
*  * \- Remember that failed attempts at hacking are still punishable by law (or other hackers)

<br/>

### | Sensitive Data |
<br/>

The three tenets that serves the foundation of developing a security system are __Confidentiality__ , __Integrity__ , and __Availability__ which are also known as the "CIA Triad". 
<br/>
<br/>

*  * \- __| Confidentiality |__ = information is not disclosed to unauthorized individuals, processes, or devices

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

*  * \- __| Integrity |__ = protection against unauthorized creation, modification, or destruction of information

<br/>

*  *  *  *  \- Common Threats

<br/>

*  *  *  *  *  *  \- Human Error 
*  *  *  *  *  *  \- No end to end encryption in server -> end to end meaning that only trusted individuals are the ones that can access and change sensitive data
*  *  *  *  *  *  \- Physical device compromised -> malware and viruses

<br/>

*  *  *  *  \- Ensuring Integrity

<br/>

*  *  *  *  *  *  \- Authorization -> put the principle of least privilege in place in which a individual should only be allowed access that are essential to overall usage/experience
*  *  *  *  *  *  \- Testing and Validation -> dalidate that the security system performs as expected and test whether the security system handles unexpected information appropriately
*  *  *  *  *  *  \- Monitoring -> real-time observation of events and activities stored that is recorded
*  *  *  *  *  *  \- Hashing Algorithms -> unlike encryption, hashing is one-way scrambling of data 

<br/>

*  * \- __| Availability |__ = reliable access to data and information services for authorized users

<br/>

*  *  *  *  \- Common Threats

<br/>

*  *  *  *  *  *  \- Denial of Service (DOS) -> a type of security attack in which users are unable to access information systems, devices, and other network resources
*  *  *  *  *  *  \- Malicious Code

<br/>

*  *  *  *  \- Ensuring Availability

<br/>

*  *  *  *  *  *  \- Monitoring -> real-time observation of events and activities stored in a log
*  *  *  *  *  *  \- Redundancy -> providing alternative data transfer and have backup equipment
*  *  *  *  *  *  \- Incident Response Capability -> a robust plan of action when a threat attack occurs

<br/>

Incorporating each tenet of the CIA triad is important, however it may not be alike for each security system. There are instances where one of the tenet may be prioritized. However, it is of the utmost importance to provide sufficient privacy protection while achieving service goals.


<br/>

### | Access Control |

<br/>

Access control is a fundamental component of data security principles that entails the right access of information and resources through user authentication and authorization. Essentially, proper data access. 

<br/>

*  *  *  *  \- Access Control Types

<br/>

*  *  *  *  *  *  \- Mandatory Access Control (MAC) -> regulation/rules based system access (strictest)
*  *  *  *  *  *  \- Discretionary Access Control (DAC) -> owner manages the system access 
*  *  *  *  *  *  \- Role Based Access Control (RBAC) -> position based system access, least privilege
*  *  *  *  *  *  \- Rule-Based Access Control -> day and/or location based system access

<br/>

*  *  *  *  \- Ensuring Access Control

<br/>

*  *  *  *  *  *  \- Session Management -> HTTP requests are made by the same user
*  *  *  *  *  *  \- Authentication -> verification of identity
*  *  *  *  *  *  \- Authorization -> verification of access levels

<br/>

Although different access control types can manage the visibility of sensitive data, it does not completely prevent the exposure of sensitive data. Any vulnerabilities should be resolved as soon as possible because an experienced threat actor will take full advantage whether it be minor or critical.

<br/>

When an application has a low performing authorization checks and takes in user input, a threat actor can utilize a type of access control vulnerability called Insecure Direct Object Reference (IDOR). IDOR attacks avoid required authorization and allows the threat actor to view database records. Thus, applications that can be target with different IDOR attacks is achieved merely by creating an account.

<br/>

*  *  *  *  \- IDOR attacks

<br/>

*  *  *  *  *  *  \- Body Manipulation -> modification of input fields, such as checkboxes, radio buttons, and form fields. 
*  *  *  *  *  *  \- URL Tampering -> modification of HTTP requests


<br/>

*  *  *  *  \- Preventing IDOR

<br/>

*  *  *  *  *  *  \- Change direct references to indirect references
*  *  *  *  *  *  \- Alerts in place on restricted access by user with given privileges
*  *  *  *  *  *  \- Strong authorization checks and properly structured access controls
*  *  *  *  *  *  \- If a indirect reference is needed, then limit the parameter value or have non-predictable string

<br/>

	