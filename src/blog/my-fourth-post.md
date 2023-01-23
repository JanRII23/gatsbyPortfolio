---
title: Cross Site Scripting (XSS) & Clickjacking
author: Jan Rejas II
date: 2023-01-23
keyword: OWASP 10
featuredImage: ../assets/images/cyberImage.jpg

---

| January 23th, 2023 | 

Cross-Site Scripting (XSS) and Clickjacking are when cyber threat actors inject malicious JavaScript to a website which can retrieve private information and control the website display to other users. XSS and Clickjacking violates an important web security mechanism within web browsers called the “Same Origin Policy” (SOP), indicating that webpages are supposed to be independent of each other. Before understanding these forms of attack, it is important to  briefly explore the fundamental components of a website. 

| Disclaimer |

- Don't blatantly attack public sites! There are plenty of CTFs and other challenges available online.
- If you find a vulnerability on a website or application, REPORT IT! Do NOT exploit it.
- Never download any accidentally exposed private user data.
- Never publicly disclose a discovered vulnerability until the company agrees.
- Remember that failed attempts at hacking are still punishable by law (or other hackers).

| Components of a Website |

To a degree, modern website are fundamentally built with Hypertext Markup Language (HTML), Cascading Style Sheets (CSS), and JavaScript (JS)

-	HTML, the basic structure of a webpage
-	CSS, controls the presentation, formatting, and layout of a webpage
-	JS, controls the behavior of a webpage

As mentioned, web browsers have a SOP as a security feature. SOP prevents one website from reading and writing data from another website. Web browsers only allow read and write among websites if both have the same protocol, host, and port (if specified)

-	Protocol, system of rules that define how data is exchanged
-	Host, device connected to the internet (or local network)
-	Port , communication endpoint for computer connected to a network with an IP address

XSS violates SOP by injecting malicious JavaScript wherever possible, such as the input field, search bars, etc.… typically found in most modern webpages. 

| Cross-Site Scripting (XSS) and Clickjacking |

The XSS attack vector does not directly target a victim, but the site's vulnerability. 
