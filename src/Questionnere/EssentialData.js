const essentialData = {
    essential1: {
      description:
        "Application Control is a fundamental cybersecurity practice outlined in the Australian Government's Essential Eight (Essential 8) framework. It aims to manage the execution of applications within an organization's environment, mitigating the risk of unauthorized or malicious software running on systems. The goal of Application Control is to establish control over what applications can run, ensuring that only trusted and necessary applications are allowed while preventing unauthorized and potentially harmful ones from executing.",
        maturity1: {
          question:'Which of the following application control security measures have been implemented to achieve Maturity Level 1, aiming to prevent the execution of various file types in user profiles and temporary folders on workstations?',
          content: [
            [
              0,
              "Restricting the execution of executable files (EXE or COM) in user profiles and temporary folders:",
              "This security measure prevents standard users from running executable files (EXE or COM) within these locations."
            ],
            [
              1,
              "Enforcing limitations on software library files (DLL or OCX) to prevent execution in user profiles and temporary folders:",
              "This control ensures that standard users cannot execute software library files (DLL or OCX) within user profiles and temporary folders."
            ],
            [
              2,
              "Implementing safeguards against script files (PS, VBS, BAT, or JS) execution in user profiles and temporary folders:",
              "This measure disallows standard users from executing script files (PS, VBS, BAT, or JS) in these critical locations."
            ],
            [
              3,
              "Controlling and blocking installer files (MSI, MST, or MSP) from executing in user profiles and temporary folders:",
              "This security measure prevents standard users from running installer files (MSI, MST, or MSP) in user profiles and temporary folders."
            ],
            [
              4,
              "Prohibiting the execution of compiled HTML files (CHM) in user profiles and temporary folders:",
              "This security measure is not currently in place and allows standard users to execute CHM files within these directories."
            ],
            [
              5,
              "Securing against the execution of HTML application files (HTA) in user profiles and temporary folders:",
              "The system does not have security controls in place to block the execution of HTML application files in user profiles and temporary folders."
            ],
            [
              6,
              "Safeguarding against the execution of control panel applet files (CPL) in user profiles and temporary folders:",
              "The implementation of security controls to prevent the execution of control panel applet files in user profiles and temporary folders is not part of the current configuration."
            ]
          ]
        },        
        maturity2: {
          question: "Which of the following mitigation strategies and controls have been implemented to achieve Maturity Level 2 for application control on workstations and internet-facing servers?",
          content: [
            [
              0,
              "Enhanced Security through Application Control:",
              "The implementation of a dedicated application control solution enhances security by allowing organizations to restrict the execution of various file types to an approved set, ensuring only trusted and authorized software runs on the system."
            ],
            [
              1,
              "Preventing Unapproved Executables:",
              "By allowing the system to execute only approved executables, this measure prevents the potential risks associated with unapproved software, enhancing security and reducing the attack surface."
            ],
            [
              2,
              "Secure Use of Approved Software Libraries:",
              "Allowing the execution of approved software libraries only ensures that the organization can control which libraries are used, reducing the risk of vulnerabilities introduced by unapproved libraries."
            ],
            [
              3,
              "Controlled Execution of Approved Scripts:",
              "By permitting the execution of only approved scripts, organizations can prevent unauthorized or malicious scripts from running, thereby bolstering security."
            ],
            [
              4,
              "Secure Handling of Approved Installers:",
              "Executing only approved installers enhances security by ensuring that software installations are limited to trusted sources and versions, reducing the potential for malicious software installation."
            ],
            [
              5,
              "Trusted Execution of Approved Compiled HTML Files:",
              "Allowing only approved compiled HTML files to run ensures that potential security risks associated with unapproved files are mitigated, enhancing the security of the system."
            ],
            [
              6,
              "Controlled Execution of Approved HTML Applications:",
              "By allowing the execution of only approved HTML applications, organizations can prevent unauthorized or potentially malicious applications from running, thus strengthening security."
            ],
            [
              7,
              "Authorized Use of Control Panel Applets:",
              "Permitting the execution of approved control panel applets ensures that only trusted applets run on the system, reducing the risk of unauthorized or malicious changes to system settings and enhancing security."
            ],
            [
              8,
              "Logging allowed and blocked execution events on workstations and internet-facing servers:",
              "Enabling detailed logging of both allowed and blocked execution events on workstations and internet-facing servers is a crucial security measure. This capability provides organizations with valuable insights into the behavior of their systems, allowing them to monitor and track all software executions. By maintaining comprehensive logs, organizations can detect and respond to security incidents more effectively, enhance compliance, and strengthen their overall security posture."
            ]
          ]
        },
        maturity3: {
          question: "Which of the following mitigation strategies and controls have been implemented to achieve Maturity Level 3 for application control on workstations and servers?",
          content: [
            [
              0,
              "Dedicated Application Control Solution Implemented:",
              "The implementation of a dedicated application control solution provides the organization with the ability to restrict the execution of various file types, including executables, software libraries, scripts, installers, compiled HTML, HTML applications, control panel applets, and drivers to an organization-approved set, enhancing security and control."
            ],
            [
              1,
              "Execution of Approved Executables Only:",
              "The system is configured to execute only approved executables, preventing the execution of non-approved executables in directories that are not part of an application control path-based rule. This ensures that only trusted and authorized software runs on the system, reducing security risks."
            ],
            [
              2,
              "Secure Use of Approved Software Libraries:",
              "Allowing the execution of approved software libraries only ensures that the organization can control which libraries are used, reducing the risk of vulnerabilities introduced by unapproved libraries. Attempting to run non-approved DLLs in directories outside of application control path-based rules is part of this measure."
            ],
            [
              3,
              "Controlled Execution of Approved Scripts:",
              "By permitting the execution of only approved scripts, organizations can prevent unauthorized or malicious scripts from running, enhancing security. Testing the system's response to running non-approved scripts in directories not covered by application control path-based rules is essential to assessing this measure."
            ],
            [
              4,
              "Secure Handling of Approved Installers:",
              "Executing only approved installers enhances security by ensuring that software installations are limited to trusted sources and versions. The measure involves attempting to run non-approved installers (MSI) in directories outside of application control path-based rules."
            ],
            [
              5,
              "Trusted Execution of Approved Compiled HTML Files:",
              "Allowing only approved compiled HTML files to run ensures that potential security risks associated with unapproved files are mitigated. Testing the system's response to running non-approved CHM files in directories not covered by application control path-based rules is essential."
            ],
            [
              6,
              "Controlled Execution of Approved HTML Applications:",
              "By allowing the execution of only approved HTML applications, organizations can prevent unauthorized or potentially malicious applications from running, strengthening security. Testing the system's response to running non-approved HTML applications in directories not covered by application control path-based rules is part of this measure."
            ],
            [
              7,
              "Authorized Use of Control Panel Applets:",
              "Permitting the execution of approved control panel applets ensures that only trusted applets run on the system, reducing the risk of unauthorized or malicious changes to system settings. Attempting to run non-approved control panel applets in directories not covered by application control path-based rules is part of this measure."
            ],
            [
              8,
              "Execution of Approved Drivers Only:",
              "This measure involves ensuring that the system can execute only approved drivers. Attempting to run non-approved drivers in directories not covered by application control path-based rules is essential to assess this security control."
            ],
            [
              9,
              "Configuration of Microsoft's recommended Block rules:",
              "Configuring Microsoft's recommended Block rules is an essential part of securing the system. These rules help prevent the execution of known malicious software and enhance the overall security posture."
            ],
            [
              10,
              "Configuration of Microsoft's recommended driver block rules:",
              "Configuring Microsoft's recommended driver block rules is crucial for preventing the execution of potentially harmful drivers and enhancing system security."
            ],
            [
              11,
              "Annual validation of application control rulesets:",
              "Performing an annual validation of application control rulesets is a proactive approach to ensure that the control measures remain effective. It helps identify and address any gaps or changes in the security landscape."
            ],
            [
              12,
              "Centralized logging of allowed and blocked execution events on workstations and servers:",
              "Centralized logging of both allowed and blocked execution events on workstations and servers provides a comprehensive view of system activity. This is valuable for monitoring and security incident detection."
            ],
            [
              13,
              "Protection of application control event logs from unauthorized modification and deletion:",
              "Protecting application control event logs from unauthorized modification and deletion is critical for maintaining the integrity of the logs and ensuring their reliability for security and compliance purposes."
            ],
            [
              14,
              "Monitoring of application control event logs for signs of compromise and appropriate action when signs of compromise are detected:",
              "Regularly monitoring application control event logs for signs of compromise is essential for early threat detection. Taking appropriate action when signs of compromise are detected is crucial for maintaining a secure environment."
            ],
            [
              15,
              "Organizational response to signs of compromise triggered by application control monitoring:",
              "Having a well-defined organizational response to signs of compromise triggered by application control monitoring is essential for effectively addressing security incidents and minimizing their impact."
            ]
          ]
        },
    },
    essential2: {
      description:
        "Patch Applications is a crucial cybersecurity practice outlined in the Australian Government's Essential Eight (Essential 8) framework. This essential focuses on the timely and systematic application of patches to address vulnerabilities present in operating systems and applications. By doing so, organizations can significantly reduce the risk of exploitation by malicious actors who often target unpatched software to gain unauthorized access or cause harm.",
        maturity1: {
          question: "Which of the following mitigation strategies and controls have been implemented to achieve Maturity Level 1 for patching applications?",
          content: [
            [
              0,
              "Implementation of an automated method of asset discovery run and reviewed at least fortnightly:",
              "Organizations utilize an automated method for asset discovery, which is run and reviewed at least fortnightly. This involves confirming the presence of an asset discovery tool or a vulnerability scanner with equivalent functionality, configured for automated bi-weekly operation. It also entails reviewing and addressing any anomalies identified through the discovery process."
            ],
            [
              1,
              "Usage of a vulnerability scanner with an up-to-date vulnerability database for vulnerability scanning activities:",
              "This security measure involves using a vulnerability scanner with an up-to-date vulnerability database for vulnerability scanning activities. Confirmation is required to ensure the existence of the scanner and that it is updated within 24 hours before use."
            ],
            [
              2,
              "Daily use of a vulnerability scanner to identify missing patches or updates for vulnerabilities in internet-facing services:",
              "Organizations conduct daily vulnerability scanning for their internet-facing services. This entails verifying the presence of a configured vulnerability scanner for internet-facing services, daily review of scanner reports by responsible staff, and taking action on identified issues."
            ],
            [
              3,
              "Fortnightly use of a vulnerability scanner to identify missing patches or updates for vulnerabilities in office productivity suites, web browsers, email clients, PDF software, and security products:",
              "A vulnerability scanner is run and reviewed at least fortnightly to scan specific office productivity suites, web browsers, email clients, PDF software, and security products. This includes confirming the existence of the scanner, its configuration for credentialed scans, and the regular review and actioning of scan reports."
            ],
            [
              4,
              "Application of patches, updates, or vendor mitigations for vulnerabilities in internet-facing services within two weeks of release or within 48 hours if an exploit exists:",
              "Patches, updates, or vendor mitigations for vulnerabilities in internet-facing services must be applied within two weeks of release, or within 48 hours if an exploit exists. This measure requires reviewing the process for identifying vulnerabilities in internet-facing systems and requesting evidence of the identification and patching of systems containing exploitable vulnerabilities."
            ],
            [
              5,
              "Patching applications with available exploits older than 48 hours:",
              "Applications with an exploit available for more than 48 hours should be patched or mitigated. This involves the use of a vulnerability scanner to identify vulnerable applications, check patch installation dates, and compare them to patch availability."
            ],
            [
              6,
              "Patching applications within two weeks:",
              "Patches, updates, or other vendor mitigations for vulnerabilities in various software categories should be applied within one month. This measure includes confirming the existence of a software list, its installation status, and the consistent process for identifying vulnerabilities and requesting evidence of patching."
            ],
            [
              7,
              "Application of patches, updates, or vendor mitigations for vulnerabilities in office productivity suites, web browsers, email clients, PDF software, and security products within one month of release:",
              "Patches, updates, or other vendor mitigations for vulnerabilities in various software categories should be applied within one month. This measure includes confirming the existence of a software list, its installation status, and the consistent process for identifying vulnerabilities and requesting evidence of patching."
            ],
            [
              8,
              "Ensuring office productivity suites, web browsers, email clients, PDF software, and security products do not have vulnerabilities older than one month:",
              "Office productivity suites, web browsers, email clients, PDF software, and security products should not have vulnerabilities older than one month. This requires a vulnerability scan to identify listed applications, verify their patch status, and ensure that the gap between patch availability and installation is not greater than one month."
            ],
            [
              9,
              "Removal of unsupported internet-facing services from the environment:",
              "Unsupported internet-facing services should be removed from the environment. Confirmation is needed to ensure that unsupported software is not present on internet-facing systems by using a vulnerability scanner to identify supported applications."
            ],
            [
              10,
              "Removal of unsupported office productivity suites, web browsers, email clients, PDF software, and security products from the environment:",
              "Unsupported office productivity suites, web browsers, email clients, PDF software, and security products should be removed from the environment. This measure involves verifying that unsupported software from the list is not present in the environment by using a vulnerability scanner to identify supported applications."
            ]
          ]
        },
        maturity2: {
          question: "Which of the following mitigation strategies and controls have been implemented to achieve Maturity Level 2 for patching applications?",
          content: [
            [
              0,
              "Usage of a vulnerability scanner run and reviewed at least weekly to scan office productivity suites, web browsers, email clients, PDF software, and security products:",
              "Organizations employ a vulnerability scanner that is used at least weekly to identify missing patches or updates for vulnerabilities in office productivity suites, web browsers, email clients, PDF software, and security products. This includes confirming the presence of the vulnerability scanner, its configuration for scanning specific applications, typically requiring credentialed scans. Additionally, it requires ensuring that the responsible staff reviews scanner reports weekly and takes action on identified issues."
            ],
            [
              1,
              "Usage of a vulnerability scanner run and reviewed at least fortnightly to scan other applications:",
              "A vulnerability scanner is run and reviewed at least fortnightly to scan other applications within the organization. This entails confirming the existence of the vulnerability scanner, its configuration for scanning other applications, typically requiring credentialed scans. It also includes ensuring that reports from the vulnerability scanner are reviewed by responsible staff fortnightly, and that identified issues are addressed."
            ],
            [
              2,
              "Application of patches, updates, or other vendor mitigations for vulnerabilities in office productivity suites, web browsers, email clients, PDF software, and security products within two weeks of release:",
              "The organization maintains an effective process for patching office productivity suites, web browsers, email clients, PDF software, and security products within two weeks of a patch's release. This involves confirming the existence of a list of applications, tracking their installations, and ensuring a consistent process for identifying vulnerabilities and requesting evidence of patching these applications within two weeks."
            ],
            [
              3,
              "Ensuring office productivity suites, web browsers, email clients, PDF software, and security products do not have vulnerabilities older than two weeks:",
              "Office productivity suites, web browsers, email clients, PDF software, and security products should not have vulnerabilities older than two weeks. This requires using a vulnerability scanner to identify the listed applications within the organization's environment, verifying their patch status, and ensuring that the gap between patch availability and installation is not greater than two weeks."
            ],
            [
              4,
              "Application of patches, updates, or other vendor mitigations for vulnerabilities in other applications within one month of release:",
              "For other applications that have vulnerabilities, patches, updates, or other vendor mitigations should be applied within one month of release. This entails using a vulnerability scanner to identify vulnerable applications, checking their patch status, and ensuring that the gap between patch availability and installation is not greater than one month."
            ],
            [
              5,
              "Ensuring that other applications with vulnerabilities are patched or mitigated within one month:",
              "This measure involves ensuring that other applications with vulnerabilities are patched or mitigated within one month of release. It includes verifying that the vulnerability scanner is used to identify vulnerable applications, checking their patch status, and ensuring that the gap between patch availability and installation is not greater than one month."
            ]
          ]
        },
        maturity3: {
          question: "Which of the following mitigation strategies and controls have been implemented for patching office productivity suites, web browsers, email clients, PDF software, and security products?",
          content: [
            [
              0,
              "Rapid Patching for Key Applications:",
              "Organizations maintain an effective process for patching office productivity suites, web browsers, email clients, PDF software, and security products within 48 hours of a patch's release. Additionally, there should be an example where an available exploit has been identified and patched within 48 hours. This measure involves confirming the existence of a list of applications, tracking their installations, and ensuring a consistent process for identifying vulnerabilities and requesting evidence of patching these applications within 48 hours."
            ],
            [
              1,
              "No Vulnerabilities Older than 48 Hours for Key Applications:",
              "Office productivity suites, web browsers, email clients, PDF software, and security products should not have vulnerabilities older than 48 hours. This involves using a vulnerability scanner to identify the listed applications within the organization's environment, verifying their patch status, and ensuring that the gap between patch availability and installation is not greater than 48 hours."
            ],
            [
              2,
              "Removal of Unsupported Applications:",
              "The organization has removed unsupported applications from the environment. This involves confirming that the environment does not contain any software that is no longer supported by the vendor."
            ]
          ]
        },
    },
    essential3: {
      description:
        "Configuring Microsoft Office Macro Settings is a critical cybersecurity practice defined in the Australian Government's Essential Eight (Essential 8) framework. This essential focuses on managing the execution of macros in Microsoft Office documents, thereby mitigating the risks associated with potentially malicious macros embedded in files. By implementing proper configuration, organizations can significantly reduce the likelihood of macro-based attacks, a common vector for malware delivery.",
        maturity1: {
          question: "Which of the following mitigation strategies and controls have been implemented for configuring Microsoft Office macro settings?",
          content: [
            [
              0,
              "Technical solution to block Microsoft Office macros for unauthorized users under the Microsoft Office macro policy:",
              "A technical solution exists to block Microsoft Office macros for users who are not approved under the Microsoft Office macro policy. The security settings should typically be set to 'Disable without notification' and should be enforced via Active Directory security groups. Testing includes running Microsoft Office macros on a user not approved to check if they are blocked."
            ],
            [
              1,
              "Record of approved users for Microsoft Office macro execution matching the technical solution:",
              "A record is kept of users who have been approved to allow Microsoft Office macro execution, and this list should match the list of users within the technical solution. A repository of approved requests for users to execute Microsoft Office macros should be maintained and kept up to date, typically matching the Active Directory Security Group that permits macro use."
            ],
            [
              2,
              "Blocking Microsoft Office macros in files from the internet:",
              "Microsoft Office macros in files originating from the internet are blocked. Attempt to run Microsoft Office macros in files from the internet, and confirm that these files are blocked when received via download or email for all installed Microsoft Office applications. Verification involves checking specific group policy settings and registry values."
            ],
            [
              3,
              "Configuration of Microsoft Office to block macros in files from the internet (Group Policy and Registry settings):",
              "The system has 'macroruntimescope' enabled for Microsoft Office applications in registry settings or has an alternative Microsoft Office macro scanning ability in place. Verification includes checking the relevant group policy setting for Microsoft Office applications."
            ],
            [
              4,
              "Enabled Microsoft Office macro antivirus scanning:",
              "The system has 'macroruntimescope' enabled for Microsoft Office applications in registry settings or has an alternative Microsoft Office macro scanning ability in place. Verification includes checking the relevant group policy setting for Microsoft Office applications."
            ],
            [
              5,
              "Successful detection of a virus test signature inside Microsoft Office macros:",
              "The system should successfully detect a virus test signature inside Microsoft Office macros. Testing this involves running macros with known virus test signatures to verify that they are detected and blocked by the system's security measures."
            ],
            [
              6,
              "Preventing standard users from modifying Microsoft Office macro security settings:",
              "Standard users are unable to modify the security settings for Microsoft Office macros in all Microsoft Office applications. This involves opening the applications and attempting to change the Microsoft Office macro security settings in the Trust Center for all installed Microsoft Office applications."
            ]
          ]
        },
        maturity2: {
          question: "Which of the following mitigation strategies and controls have been implemented for configuring Microsoft Office macro settings?",
          content: [
            [
              0,
              "Blocking Win32 API Calls in Microsoft Office Macros:",
              "Microsoft Office macros in Microsoft Office files are prevented from making Win32 API calls. This verification involves testing Microsoft Office files with macros that make Win32 API calls for all installed Microsoft Office applications."
            ],
            [
              1,
              "Logging Allowed Execution Events of Microsoft Office Macros:",
              "Allowed execution of a Microsoft Office macro within a Microsoft Office file is logged. Ensure that TrustCenter logging is enabled by checking the Enable Logging registry key at HKCU:\\Software\\Microsoft\\Office\\<version>\\Common\\TrustCenter\\ and request evidence of event logs for allowed Microsoft Office macro execution events."
            ],
            [
              2,
              "Logging Blocked Execution Events of Microsoft Office Macros:",
              "Blocked execution of a Microsoft Office macro within a Microsoft Office file is logged. Verify that TrustCenter logging is enabled by checking the Enable Logging registry key at HKCU:\\Software\\Microsoft\\Office\\<version>\\Common\\TrustCenter\\ and request evidence of event logs for blocked Microsoft Office macro execution events. Macros blocked due to antivirus (AV) can be found in the Event Viewer."
            ]
          ]
        },
        maturity3: {
          question: "Which of the following mitigation strategies and controls have been implemented for configuring Microsoft Office macro settings?",
          content: [
            [
              0,
              "Execution of Microsoft Office Macros Only from Trusted Locations:",
              "Microsoft Office is configured to only allow Microsoft Office macros to execute from trusted locations. Test the execution of Microsoft Office macros from untrusted locations and trusted locations (if configured) to validate the setting. Ensure that macros digitally signed by a trusted publisher are allowed to execute, or Microsoft Office macros are only executed from within a sandboxed environment."
            ],
            [
              1,
              "Validation of Microsoft Office Macros in Trusted Locations:",
              "The organization has a defined standard for validating and accepting Microsoft Office macros in Microsoft Office files before adding them to the trusted location. Confirm the existence and use of trusted locations, and ensure there is a process for allowing write access to these locations by users responsible for validating that Microsoft Office macros are free of malicious code."
            ],
            [
              2,
              "Write Access to Trusted Locations by Users:",
              "Ensure that users are not able to write a file into locations contained within the trusted locations list. This involves checking trusted locations in the registry and attempting to write a file into each of these locations."
            ],
            [
              3,
              "Blocking Macros Signed by Untrusted Publishers:",
              "Microsoft Office macros signed by an untrusted publisher are unable to execute, and users cannot change configuration or otherwise allow execution. Verify this by attempting to execute Microsoft Office macros signed by untrusted publishers and checking registry settings."
            ],
            [
              4,
              "Annual Validation of Trusted Publishers:",
              "The organization has a process for validating the list of trusted publishers on an annual or more frequent basis. Confirm the existence of a list of trusted publishers and a process for regular validation of this list."
            ],
            [
              5,
              "Centralized Logging of Macro Execution Events:",
              "Verify that Microsoft Office macro execution event logs are sent to a centralized location and ensure that event logs for each required event are collected centrally."
            ],
            [
              6,
              "Protection of Event Logs from Unauthorized Modification and Deletion:",
              "Ensure that Microsoft Office macro execution event logs are protected from unauthorized modification and deletion by standard and unauthorized users."
            ],
            [
              7,
              "Monitoring of Event Logs for Signs of Compromise:",
              "Verify that a solution or process is in place to monitor the Microsoft Office macro execution event logs for signs of compromise, and check that the organization has a process for detecting and handling any signs of compromise related to Microsoft Office macro execution."
            ],
            [
              8,
              "Response to Signs of Compromise Triggered by Monitoring:",
              "Verify that the organization has responded to a sign of compromise triggered by Microsoft Office macro execution monitoring and provide evidence of this response, such as support tickets, email correspondence, or threat and risk assessments."
            ],
            [
              9,
              "Disallowing users from enabling Microsoft Office macros signed by untrusted publishers via the Message Bar or Backstage View:",
              "Users are not allowed to enable Microsoft Office macros signed by untrusted publishers via the Message Bar or Backstage View. Verify this by attempting to enable macros signed by untrusted publishers using these methods."
            ],
            [
              10,
              "Validating Microsoft Office's list of trusted publishers on an annual or more frequent basis:",
              "The organization has a process for validating the list of trusted publishers on an annual or more frequent basis. Confirm the existence of a list of trusted publishers and a process for regular validation of this list."
            ],
            [
              11,
              "Centrally logging allowed and blocked Microsoft Office macro execution events:",
              "Verify that Microsoft Office macro execution event logs are sent to a centralized location and ensure that event logs for each required event are collected centrally."
            ],
            [
              12,
              "Protecting Microsoft Office macro execution event logs from unauthorized modification and deletion:",
              "Ensure that Microsoft Office macro execution event logs are protected from unauthorized modification and deletion by standard and unauthorized users."
            ]
          ]
        },
    },
    essential4: {
      description:
        "User Application Hardening is a pivotal cybersecurity practice within the Australian Government's Essential Eight (Essential 8) framework. This essential emphasizes the importance of securing user applications to thwart potential cyber threats. By implementing user application hardening practices, organizations can bolster their defenses against attacks that target user-level vulnerabilities.",
        maturity1: {
          question: "Which of the following mitigation strategies and controls have been implemented for user application hardening?",
          content: [
            [
              0,
              "Java Content Blocking in Microsoft Edge:",
              "Confirm that Java content does not execute in Microsoft Edge. Load a website with known Java content and verify that it does not render in the web browser. Check the relevant registry keys for Java content settings in Microsoft Edge."
            ],
            [
              1,
              "Java Content Blocking in Google Chrome:",
              "Confirm that Java content does not execute in Google Chrome. Load a website with known Java content and verify that it does not render in the web browser."
            ],
            [
              2,
              "Java Content Blocking in Mozilla Firefox:",
              "Confirm that Java content does not execute in Mozilla Firefox. Load a website with known Java content and verify that it does not render in the web browser."
            ],
            [
              3,
              "Blocking Web Advertisements in Microsoft Edge:",
              "Confirm that web ads do not display in Microsoft Edge. Load a website with known ads and verify that it does not render in the web browser. Check the 'Block ads on sites that show intrusive or misleading ads' setting and the presence of any ad-blocking plugins."
            ],
            [
              4,
              "Blocking Web Advertisements in Google Chrome:",
              "Confirm that web ads do not display in Google Chrome. Load a website with known ads and verify that it does not render in the web browser. Check the 'Block ads on sites that show intrusive or misleading ads' setting and the presence of any ad-blocking plugins."
            ],
            [
              5,
              "Blocking Web Advertisements in Mozilla Firefox:",
              "Confirm that web ads do not display in Mozilla Firefox. Load a website with known ads and verify that it does not render in the web browser. Check the presence of any ad-blocking plugins."
            ],
            [
              6,
              "Internet Explorer 11 Restricted Access:",
              "Confirm that Internet Explorer 11 is unable to connect to internet sites and may be allowed to access internal web applications only. Check for external website access and ensure it is blocked. Review proxy or firewall configuration for specific rules preventing Internet Explorer 11 from accessing the internet."
            ],
            [
              7,
              "User-Restricted Web Browser Settings in Microsoft Edge:",
              "Ensure that Microsoft Edge settings cannot be changed by a standard user. Check group policy settings for Microsoft Edge and confirm if the browser configuration panel shows a 'Managed by organization' message. Attempt to change a setting related to networking or security, such as blocking ads, proxy settings, or security level."
            ],
            [
              8,
              "User-Restricted Web Browser Settings in Google Chrome:",
              "Ensure that Google Chrome settings cannot be changed by a standard user. Check group policy settings for Google Chrome and confirm if the browser configuration panel shows a 'Managed by organization' message. Attempt to change a setting related to networking or security, such as blocking ads, proxy settings, or security level."
            ],
            [
              9,
              "User-Restricted Web Browser Settings in Mozilla Firefox:",
              "Ensure that Mozilla Firefox settings cannot be changed by a standard user. Check group policy settings for Mozilla Firefox and confirm if the browser configuration panel shows a 'Managed by organization' message. Attempt to change a setting related to networking or security, such as blocking ads, proxy settings, or security level."
            ],
            [
              10,
              "User-Restricted Web Browser Settings in Internet Explorer 11:",
              "Ensure that Internet Explorer 11 settings cannot be changed by a standard user. Check group policy settings for Internet Explorer 11 and confirm if the browser configuration panel shows a 'Managed by organization' message. Attempt to change a setting related to networking or security, such as blocking ads, proxy settings, or security level."
            ]
          ]
        },
        maturity2: {
          question: "Which of the following mitigation strategies and controls have been implemented for user application hardening?",
          content: [
            [
              0,
              "ASD Guidance for Microsoft Edge Hardening:",
              "Confirm that ASD guidance for hardening Microsoft Edge is implemented. Use the Microsoft Policy Analyzer to validate the system against the Microsoft Edge security baseline."
            ],
            [
              1,
              "Google Guidance for Google Chrome Hardening:",
              "Determine if Google Chrome is configured via group policy settings and if the configured settings align with Google's Chrome Browser Enterprise Security Configuration Guide."
            ],
            [
              2,
              "Blocking Microsoft Office Child Process Creation:",
              "Ensure that Microsoft Office files cannot create child processes. Check the ASR rule 'd4f940ab-401b-4efc-aadc-ad5f3c50688a' or equivalent is configured to prevent child process creation."
            ],
            [
              3,
              "Blocking Microsoft Office Executable Content Creation:",
              "Ensure that Microsoft Office files cannot create executable content. Check the ASR rule '3b576869-a4ec-4529-8536-b80a7769e899' or equivalent is configured to prevent the creation of executable content."
            ],
            [
              4,
              "Blocking Microsoft Office Code Injection:",
              "Ensure that Microsoft Office files cannot inject code into other processes. Check the ASR rule '75668C1F-73B5-4CF0-BB93-3ECF5CB7CC84' or equivalent is configured to prevent code injection."
            ]
          ]
        },
        maturity3: {
          question: "Which of the following mitigation strategies and controls have been implemented for user application hardening?",
          content: [
            [
              0,
              "Removing Internet Explorer 11:",
              "Ensure that the Internet Explorer 11 binary (iexplore.exe) does not exist on the system or cannot be opened due to an application control policy."
            ],
            [
              1,
              "Removing .NET Framework 3.5:",
              "Remove .NET Framework 3.5 from the system by unselecting it from the list of optional Windows Features."
            ],
            [
              2,
              "Absence of Older .NET Frameworks in Registry:",
              "Check the registry for the existence of older .NET Framework versions and ensure they cannot be found."
            ],
            [
              3,
              "Removing PowerShell 2.0 and Below:",
              "Remove PowerShell 2.0 and below from the system and confirm that traces of it cannot be found in the registry."
            ],
            [
              4,
              "Disabling Downgrade to PowerShell 2.0 or Below:",
              "Verify that PowerShell cannot be downgraded to version 2.0 or below."
            ],
            [
              5,
              "Configuring PowerShell for Constrained Language Mode:",
              "Ensure that the default configuration for PowerShell on the system is to start in Constrained Language Mode."
            ],
            [
              6,
              "Preventing User Change to Full Language Mode in PowerShell:",
              "Confirm that PowerShell is running in Constrained Language Mode, and users cannot change it to Full Language mode."
            ],
            [
              7,
              "Centrally Logging PowerShell Script Execution Events:",
              "Verify that PowerShell script execution event logs are sent to a centralized location and that the number of systems logging to this location aligns with the total expected systems."
            ],
            [
              8,
              "Protecting PowerShell Script Execution Event Logs:",
              "Ensure that PowerShell script execution event logs are protected from unauthorized modification and deletion."
            ],
            [
              9,
              "Monitoring PowerShell Script Execution Event Logs for Signs of Compromise:",
              "Verify that a solution or process is in place to monitor the PowerShell script execution event logs for signs of compromise and that the organization has a process for detecting and handling any signs of compromise relating to PowerShell script execution."
            ],
            [
              10,
              "Investigating Signs of Compromise in PowerShell Script Execution:",
              "Verify that the organization has investigated or responded to signs of compromise triggered by PowerShell script execution monitoring."
            ]
          ]
        },
    },
    essential5: {
      description:
        "Restricting Administrative Privileges is a pivotal cybersecurity practice within the Australian Government's Essential Eight (Essential 8) framework. This essential emphasizes the importance of limiting administrative access to critical systems and resources to mitigate potential insider threats and unauthorized access. By restricting administrative privileges, organizations can significantly reduce the attack surface and potential impact of security breaches.",
        maturity1: {
          question: "Which of the following mitigation strategies and controls have been implemented for restricting administrative privileges?",
          content: [
            [
              0,
              "Validating Privileged Access Process:",
              "Confirm the existence and enforcement of a privileged access process for granting access to systems and applications. Verify that the process is documented, approved, and outlines the requirements for provisioning a privileged account to a system or application."
            ],
            [
              1,
              "Preventing Internet Access for Privileged Accounts:",
              "Attempt to browse the internet while logged in as a privileged user. Verify that privileged accounts (excluding privileged service accounts) cannot access the internet or web services via a web browser or other mechanisms."
            ],
            [
              2,
              "Configuration of Mailboxes and Email Addresses for Privileged Accounts:",
              "Verify that privileged accounts are not configured with mailboxes and email addresses. Attempt to open Microsoft Outlook on a system using the privileged account. Run a PowerShell command to check for privileged accounts with email addresses."
            ],
            [
              3,
              "Using Segregated Administrative Environments:",
              "Ensure that all administrative activities are performed in an administrative environment segregated from the standard user network environment. Verify that a separate environment is provisioned exclusively for privileged access and is not used for any other purpose."
            ],
            [
              4,
              "Preventing Unprivileged Accounts from Logging into Privileged Environments:",
              "Use tools like Bloodhound to analyze Active Directory data and identify which users and groups have RDP access to servers. Review group policy settings for RDP permissions to prevent unprivileged accounts from logging into privileged environments."
            ],
            [
              5,
              "Restricting PowerShell Remote PSRemote Feature:",
              "Run a PowerShell command to check if unprivileged users are prevented from using the PowerShell remote PSRemote feature. Review the members of the built-in Active Directory Security Group 'Remote Management Users.'"
            ],
            [
              6,
              "Preventing Privileged Accounts from Logging into Unprivileged Environments:",
              "Attempt to log in with a privileged account to a standard user workstation. Check group policy settings for 'Deny logon locally' and 'Deny logon through Remote Desktop Services user rights' to workstations for privileged accounts."
            ],
            [
              7,
              "Preventing Privileged Account Privilege Escalation:",
              "While logged in as a standard user, attempt to use 'runas' or other methods to open an application as an administrator. Ensure that an unprivileged account on a standard workstation cannot raise privileges to a privileged user."
            ]
          ]
        },
        maturity2: {
          question: "Which of the following mitigation strategies and controls have been implemented for restricting administrative privileges?",
          content: [
            [
              0,
              "Process for Disabling Known Privileged Accounts:",
              "Confirm the existence and enforcement of a process for disabling known privileged accounts. Ensure that users are aware of this requirement when provisioned with a privileged account."
            ],
            [
              1,
              "Active Directory Expiry Date Validation:",
              "Query Active Directory to identify privileged accounts with Active Directory expiry dates greater than 12 months or no expiry date."
            ],
            [
              2,
              "Process for Disabling Inactive Privileged Accounts:",
              "Confirm the existence and enforcement of a process for disabling privileged accounts that have been inactive for 45 days. Verify evidence of this process, such as support tickets or administrative logs."
            ],
            [
              3,
              "Active Directory LastLogonDate Validation:",
              "Query Active Directory to identify enabled privileged accounts with a 'lastlogondate' greater than 45 days."
            ],
            [
              4,
              "Segregation of Privileged Environments:",
              "Ensure that privileged environments are not virtualized within unprivileged environments, including virtual machines on a standard unprivileged SOE."
            ],
            [
              5,
              "Use of Jump Servers for Administrative Activities:",
              "Confirm that servers are configured to prevent remote access traffic or connections from systems that are not jump servers."
            ],
            [
              6,
              "Implementation of LAPS for Local Administrator Passwords:",
              "Use PowerShell commands to check the number of computers with LAPS implemented on Windows workstations and servers."
            ],
            [
              7,
              "Management of Service Account Passwords:",
              "Observe evidence of a password management or privileged access management solution in use for managing service account passwords. Ensure generated passwords are unique, unpredictable, and meet minimum length requirements."
            ],
            [
              8,
              "Service Account Password Change Requirement:",
              "Query Active Directory to identify service accounts with passwords last set more than 12 months ago."
            ],
            [
              9,
              "Logging of Privileged Access Events:",
              "Ensure successful and failed logins of privileged accounts are logged, and event logs are retained/backed up for a minimum period. Verify the existence of specific event logs for successful and failed logins."
            ],
            [
              10,
              "Logging of Privileged Account and Group Management Events:",
              "Ensure changes made to privileged accounts and groups within Active Directory are logged. Verify the existence of specific event logs for account and group management events."
            ]
          ]
        },
        maturity3: {
          question: "Which of the following mitigation strategies and controls have been implemented for restricting administrative privileges?",
          content: [
            [
              0,
              "Correct Privilege Levels for Existing Users:",
              "Review the privilege levels assigned to existing users of systems and applications to ensure they match the requirements of their duties and roles."
            ],
            [
              1,
              "Limit Internet Access for Service Accounts:",
              "Verify that service accounts cannot access the internet or web services. Attempt to browse to an internet website while logged in as a service account."
            ],
            [
              2,
              "No Email Configuration for Service Accounts:",
              "Check whether service accounts are configured with mailboxes and email addresses. Also, ensure they are not able to access the internet, which is covered by a separate control for privileged accounts excluding service accounts."
            ],
            [
              3,
              "Just-in-Time Administration for Privileged Access:",
              "Check for the presence of active users in groups with privileged access to systems and applications. Confirm that users approved for privileged administration have access for a limited time to fulfill their duties. Validate the successful deployment and configuration of a Just-in-Time administration solution."
            ],
            [
              4,
              "Enable Credential Guard:",
              "Ensure that Credential Guard is enabled on the system. Verify the LsaCfgFlags registry setting and use PowerShell commands for confirmation."
            ],
            [
              5,
              "Enable Remote Credential Guard:",
              "Ensure that Remote Credential Guard is enabled on the system. Verify the DisableRestrictedAdmin registry setting and use PowerShell commands for confirmation."
            ],
            [
              6,
              "Centralized Logging of Privileged Access Events:",
              "Ensure that privileged access event logs are sent to a centralized location. Verify that logs for required events are collected centrally and that the number of systems logging to this location aligns with the total expected systems."
            ],
            [
              7,
              "Centralized Logging of Privileged Account and Group Management Events:",
              "Ensure that privileged account and group management event logs are sent to a centralized location. Verify that logs for required events are collected centrally and that the number of systems logging to this location aligns with the total expected systems."
            ],
            [
              8,
              "Protection of Event Logs from Unauthorized Modification and Deletion:",
              "Verify that privileged access event logs are protected from unauthorized modification and deletion. Standard and unauthorized users should be unable to modify or delete event logs."
            ],
            [
              9,
              "Protection of Privileged Account and Group Management Event Logs:",
              "Verify that privileged account and group management event logs are protected from unauthorized modification and deletion. Standard and unauthorized users should be unable to modify or delete event logs."
            ],
            [
              10,
              "Monitoring Privileged Access Event Logs for Signs of Compromise:",
              "Verify the presence of a solution or process to monitor privileged access event logs for signs of compromise. Check that the environment owner has a process for detecting and handling any signs of compromise related to privileged access."
            ],
            [
              11,
              "Response to Signs of Compromise Triggered by Privileged Access Monitoring:",
              "Verify that the organization has responded to a sign of compromise triggered by privileged access monitoring. This evidence will typically exist in the form of support tickets, email correspondence, or threat and risk assessments."
            ],
            [
              12,
              "Monitoring Privileged Account and Group Management Event Logs for Signs of Compromise:",
              "Verify the presence of a solution or process to monitor privileged account and group management event logs for signs of compromise. Check that the environment owner has a process for detecting and handling any signs of compromise related to privileged account and group management."
            ],
            [
              13,
              "Response to Signs of Compromise Event Triggered by Privileged Account and Group Management Monitoring:",
              "Verify that the organization has responded to a sign of compromise triggered by privileged account and group management monitoring. This evidence will typically exist in the form of support tickets, email correspondence, or threat and risk assessments."
            ],
            [
              14,
              "Response to Signs of Compromise Event Triggered by Privileged Account and Group Management Monitoring:",
              "Verify that the organization has responded to a sign of compromise event triggered by privileged account and group management monitoring. This evidence will typically exist in the form of support tickets, email correspondence, or threat and risk assessments."
            ]
          ]
        },
    },
    essential6: {
      description:
        "Patch Operating Systems is a fundamental cybersecurity practice within the Australian Government's Essential Eight (Essential 8) framework. This essential focuses on maintaining the security and stability of operating systems by regularly applying patches to address vulnerabilities. By ensuring timely and comprehensive patching, organizations can significantly reduce the risk of exploitation by malicious actors targeting unpatched systems.",
        maturity1: {
          question: "Which of the following mitigation strategies and controls have been implemented for patching operating systems?",
          content: [
            [
              0,
              "Automated Asset Discovery for Vulnerability Scanning:",
              "Ensure that an automated method of asset discovery is in place, such as an asset discovery tool or vulnerability scanner, and is configured to run and be reviewed at least fortnightly to support the detection of assets for subsequent vulnerability scanning activities."
            ],
            [
              1,
              "Using an Up-to-Date Vulnerability Scanner:",
              "Confirm the use of a vulnerability scanner with an up-to-date vulnerability database for vulnerability scanning activities. Verify that the vulnerability database is updated within 24 hours prior to use."
            ],
            [
              2,
              "Daily Vulnerability Scanning for Internet-Facing Services:",
              "Ensure that a vulnerability scanner is run and reviewed daily to scan the organisation’s internet-facing services. Confirm that reports from the vulnerability scanner are reviewed daily, and identified issues are actioned."
            ],
            [
              3,
              "Fortnightly Vulnerability Scanning for Operating Systems:",
              "Confirm the use of a vulnerability scanner for scanning the organisation’s operating systems, which typically requires a credentialed scan. The scanner should be run and reviewed at least fortnightly, with identified issues being observed and actioned."
            ],
            [
              4,
              "Patching Vulnerable Systems within 48 Hours:",
              "Verify that the organisation has patched or mitigated a system with an available exploit within 48 hours. Request evidence of the identification and patching of such systems."
            ],
            [
              5,
              "Mitigating Vulnerabilities on Internet-Facing Systems within Two Weeks:",
              "Ensure that internet-facing systems with a vulnerable operating system that has an exploit available for more than 48 hours are patched or mitigated. Use the vulnerability management solution to verify the patch."
            ],
            [
              6,
              "Patching Internet-Facing Systems within Two Weeks:",
              "Confirm that internet-facing systems with a vulnerable operating system are patched or mitigated within two weeks. Use the vulnerability management solution to perform a patch audit."
            ],
            [
              7,
              "Patching Operating Systems within One Month:",
              "Verify the existence of an effective process for patching operating systems within one month. Confirm the presence of a list of managed operating systems, their locations, and an established process for identifying vulnerabilities and patching systems within one month."
            ],
            [
              8,
              "Patching Vulnerable Systems within One Month:",
              "Use a vulnerability management solution to perform a patch audit of all systems to ensure that operating systems with vulnerabilities are patched or mitigated within one month."
            ],
            [
              9,
              "Removing Unsupported Operating Systems:",
              "Confirm that unsupported operating systems are removed from the environment. Use a vulnerability scanner to identify unsupported operating systems and ensure they are not present in the environment."
            ]
          ]
        },
        maturity2: {
          question: "Which of the following mitigation strategies and controls have been implemented to patch operating systems?",
          content: [
            [
              0,
              "Weekly Vulnerability Scanning for Operating Systems:",
              "Confirm the use of a vulnerability scanner that is run and reviewed at least weekly to scan the organisation’s operating systems. The scanner typically requires a credentialed scan, and reports from the scanner should be reviewed by responsible staff weekly. Identified issues should be observed and actioned."
            ],
            [
              1,
              "Patching Vulnerable Systems within Two Weeks:",
              "Verify that the organisation has an effective process for patching operating systems within two weeks. Ensure the existence of a list of managed operating systems and their locations, with a consistent process for identifying vulnerabilities and patching systems within two weeks."
            ],
            [
              2,
              "Patching Operating Systems within Two Weeks of Release:",
              "Use a vulnerability management solution to perform a patch audit of all systems to ensure that operating systems with vulnerabilities are patched or mitigated within two weeks of the release of patches, updates, or other vendor mitigations."
            ]
          ]
        },
        maturity3: {
          question: "Which of the following mitigation strategies and controls have been implemented to patch operating systems?",
          content: [
            [
              0,
              "Patching Vulnerable Systems with Exploits within 48 Hours:",
              "Ensure that operating systems vulnerable to an exploit that has been available for more than 48 hours are patched or mitigated promptly. Verify the usage of a vulnerability management solution and check that patches are successfully applied or that a mitigation strategy is in place."
            ],
            [
              1,
              "Usage of Current or Previous Release of Operating Systems:",
              "Verify that the minimum version of the operating system used within the organisation is either the current release or the previous release (N-1 version). Query Active Directory using PowerShell commands or tools like ADRecon or Bloodhound to identify the operating system versions in the environment. Use a vulnerability management solution to scan all systems and record their operating system versions."
            ]
          ]
        },
    },
    essential7: {
      description:
        "Multi-factor Authentication (MFA) is a critical cybersecurity practice highlighted in the Australian Government's Essential Eight (Essential 8) framework. This essential focuses on enhancing the security of authentication by requiring users to provide multiple forms of verification. By implementing MFA, organizations can significantly reduce the risk of unauthorized access, even if passwords are compromised.",
        maturity1: {
          question: "Which of the following mitigation strategies and controls have been implemented to enforce multi-factor authentication for users?",
          content: [
            [
              0,
              "Verified List of Internet-Facing Services:",
              "Ensure that the organisation has a verified and approved list of internet-facing services. Confirm the existence of an approved list of internet-facing services that is regularly checked."
            ],
            [
              1,
              "Multi-Factor Authentication for Remote Access Desktop Solution:",
              "Verify that the organisational remote access desktop solution presents a multi-factor authentication (MFA) challenge when attempting to authenticate. Confirm that users are prompted to complete MFA when authenticating to the organisation's remote solution."
            ],
            [
              2,
              "Multi-Factor Authentication for Internet-Facing Systems:",
              "Verify that organisational internet-facing systems present a MFA challenge when attempting to authenticate. Ensure that users are required to complete MFA when authenticating to the organisation's internet-facing systems."
            ],
            [
              3,
              "MFA for Third-Party Services with Sensitive Data:",
              "Verify that third-party internet-facing services that hold sensitive data are configured to require users to use multi-factor authentication (MFA). Confirm that the organisation has a policy stipulating that MFA should be implemented on all third-party internet-facing services that process, store, or communicate sensitive data."
            ],
            [
              4,
              "MFA for Third-Party Services with Non-Sensitive Data:",
              "Verify that third-party internet-facing services that hold non-sensitive data are configured to require users to use multi-factor authentication (MFA). Confirm that the organisation has a policy stipulating that MFA should be implemented on all third-party internet-facing services that hold non-sensitive data."
            ],
            [
              5,
              "Default MFA for Non-Organisational Users:",
              "Verify that organisational internet-facing services with non-organisational users present a multi-factor challenge when attempting to authenticate by default. Confirm that users may opt out of this feature, but it is enabled by default."
            ]
          ]
        },
        maturity2: {
          question: "Which of the following mitigation strategies and controls have been implemented to enforce multi-factor authentication for privileged users and across internet-facing services?",
          content: [
            [
              0,
              "MFA for Privileged Users of Systems:",
              "Ensure that privileged users who are performing administrative activities are required to respond to a multi-factor authentication (MFA) challenge at some point in the authentication lifecycle. This can be implemented when authenticating to a machine (such as a jump server) or when attempting to raise privileges. Confirm the existence of a list of systems that have privileged users or support privileged functions, and verify that this list is regularly updated."
            ],
            [
              1,
              "MFA Requirements for Internet-Facing Services:",
              "Verify that the organisation requires internet-facing services to use multi-factor authentication (MFA) that utilizes either something users have and something users know, or something users have that is unlocked by something users know or are. Ensure that the MFA mechanism for internet-facing services aligns with these requirements."
            ],
            [
              2,
              "MFA Requirements for Privileged Users:",
              "Confirm that the organisation requires privileged users to utilize multi-factor authentication (MFA) that uses either something users have and something users know, or something users have that is unlocked by something users know or are. Ensure that the MFA mechanism for privileged users aligns with these requirements."
            ],
            [
              3,
              "Logging of Successful MFA Events for Internet-Facing Systems:",
              "Verify that the organisation's internet-facing systems log successful MFA attempts. Confirm that successful MFA events are consistently logged for internet-facing systems."
            ],
            [
              4,
              "Logging of Successful MFA Events for Administrative Access:",
              "Verify that administrative access connections log successful MFA attempts. Ensure that successful MFA events are logged for administrative access."
            ],
            [
              5,
              "Logging of Unsuccessful MFA Events for Internet-Facing Systems:",
              "Verify that the organisation's internet-facing systems log unsuccessful MFA attempts. Confirm that unsuccessful MFA events are consistently logged for internet-facing systems."
            ],
            [
              6,
              "Logging of Unsuccessful MFA Events for Administrative Access:",
              "Verify that administrative access connections log unsuccessful MFA attempts. Ensure that unsuccessful MFA events are logged for administrative access."
            ]
          ]
        },
        maturity3: {
          question: "Which of the following mitigation strategies and controls have been implemented to enforce multi-factor authentication for users of important data repositories?",
          content: [
            [
              0,
              "Identification of Important Data Repositories:",
              "Confirm that the organisation maintains a list of important data repositories. Ensure that this list is regularly checked and updated to reflect the current state of important data repositories."
            ],
            [
              1,
              "MFA Requirements for Important Data Repositories:",
              "Verify that data repositories identified as important in the organisation's list require multi-factor authentication (MFA) for access. Confirm that these important data repositories are configured to present a phishing-resistant MFA challenge."
            ],
            [
              2,
              "Phishing-Resistant MFA Implementation:",
              "Verify that the organisation's MFA implementation requires the use of a phishing-resistant solution. Ensure that MFA necessitates the use of a smart card, security key, Windows Hello for Business, or any other solution that is resistant to phishing attacks."
            ],
            [
              3,
              "Centralized Logging of MFA Events:",
              "Verify that MFA event logs are sent to a centralised location. Confirm that event logs for each required event are collected in a centralised location. Ensure that the number of systems logging to this central location aligns with the total expected systems."
            ],
            [
              4,
              "Protection of MFA Event Logs from Unauthorized Modification and Deletion:",
              "Verify that MFA event logs are protected from unauthorised modification and deletion. Confirm that standard and unauthorised users are unable to modify or delete event logs."
            ],
            [
              5,
              "Monitoring of MFA Event Logs for Signs of Compromise:",
              "Verify the presence of a solution or process in place to monitor the integrity and validity of MFA event logs for signs of compromise."
            ],
            [
              6,
              "Investigation and Response to Signs of Compromise Triggered by MFA Monitoring:",
              "Verify that the organisation has an example where they investigated or responded to signs of compromise triggered by MFA monitoring. Look for supporting evidence such as support tickets, email correspondence, or threat and risk assessments."
            ]
          ]
        },
    },
    essential8: {
      description:
        "Regular Backups is a crucial cybersecurity practice within the Australian Government's Essential Eight (Essential 8) framework. This essential focuses on preserving the availability and integrity of critical data and systems through consistent backup processes. By implementing robust backup strategies, organizations can mitigate the impact of data loss due to cyber incidents, hardware failures, or other disasters.",
        maturity1: {
          question: "Which of the following mitigation strategies and controls have been implemented to ensure backups of important data, software, and configuration settings are performed and retained in accordance with business continuity requirements?",
          content: [
            [
              0,
              "Business Continuity Plan for Backups:",
              "Confirm that the organisation has a business continuity plan (BCP) that outlines their important data, software, and configuration settings that require backing up. Request the current BCP, and note when it was last modified. Ensure the BCP references the current environment, and confirm the existence of a defined list of important data, software, and configuration settings."
            ],
            [
              1,
              "Backups as per BCP Timeframes:",
              "Verify that important data, software, and configuration settings are backed up and retained as per the timeframes outlined within the BCP."
            ],
            [
              2,
              "Synchronised Backups:",
              "Verify that important data, software, and configuration settings are backed up in a synchronised manner using a common point in time."
            ],
            [
              3,
              "Secure and Resilient Backup Retention:",
              "Verify that important data, software, and configuration settings are backed up and retained in a secure and resilient manner."
            ],
            [
              4,
              "Restoration Testing in Disaster Recovery Exercises:",
              "Verify the organisation's documented evidence of a disaster recovery exercise being performed, including examples of where important data, software, and configuration settings have been restored from backups. Confirm the existence and appropriateness of a disaster recovery plan (DRP) and ensure it is followed during incidents and exercises."
            ],
            [
              5,
              "Unprivileged Access to Backups:",
              "Verify that unprivileged users are unable to access backups that do not belong to them. Ensure that access controls restrict access to only the owner of the information."
            ],
            [
              6,
              "Prevention of Unprivileged Modification and Deletion of Backups:",
              "Verify that unprivileged users are unable to modify and delete backups. Ensure access controls restrict the modification and deletion of backups."
            ]
          ]
        },
        maturity2: {
          question: "Which of the following mitigation strategies and controls have been implemented to ensure privileged accounts, excluding backup administrator accounts, cannot access backups belonging to other accounts and are prevented from modifying and deleting backups?",
          content: [
            [
              0,
              "Privileged Access to Backups:",
              "Verify that privileged users (excluding backup administrator accounts) are unable to access backups that do not belong to them. Ensure that access controls restrict access to the owner of the backup and backup administrator accounts."
            ],
            [
              1,
              "Prevention of Privileged Modification and Deletion of Backups:",
              "Verify that privileged users (excluding backup administrator accounts) are unable to modify and delete backups. Ensure access controls restrict the modification and deletion of backups to backup administrator accounts."
            ]
          ]
        },
        maturity3: {
          question: "Which of the following mitigation strategies and controls have been implemented to ensure unprivileged accounts cannot access backups belonging to other accounts, including their own, and to ensure privileged accounts, including backup administrator accounts, are prevented from modifying and deleting backups during their retention period?",
          content: [
            [
              0,
              "Prevention of Unprivileged Access to Backups:",
              "Verify that unprivileged users are unable to access backups, including their own backups. Ensure access controls restrict unprivileged users from accessing backup repositories."
            ],
            [
              1,
              "Prevention of Privileged Access to Backups:",
              "Verify that privileged users (excluding backup administrator accounts) are unable to access backups, including their own backups. Ensure access controls restrict privileged users from accessing backup repositories."
            ],
            [
              2,
              "Prevention of Privileged Modification and Deletion of Backups:",
              "Verify that privileged users, including backup administrator accounts, are unable to modify and delete backups during their retention period. Ensure access controls restrict the modification and deletion of backups to break glass accounts."
            ]
          ]
        },
    },
  };

export default essentialData;