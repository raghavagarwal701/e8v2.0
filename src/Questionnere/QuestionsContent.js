const questionnaire = {
      essential1: [
        {
          name: "Mitigation Strategy One: - Application control",
          question:'Which of the following application control security measures have been implemented to achieve Maturity Level 1, aiming to prevent the execution of various file types in user profiles and temporary folders on workstations?',
          options: [
            [
              "Restricting the execution of executable files (EXE or COM) in user profiles and temporary folders.",
              0,
            ],
            [
              "Enforcing limitations on software library files (DLL or OCX) to prevent execution in user profiles and temporary folders.",
              1,
            ],
            [
              "Implementing safeguards against script files (PS, VBS, BAT, or JS) execution in user profiles and temporary folders.",
              2,
            ],
            [
              "Controlling and blocking installer files (MSI, MST, or MSP) from executing in user profiles and temporary folders.",
              3,
            ],
            [
              "Prohibiting the execution of compiled HTML files (CHM) in user profiles and temporary folders.",
              4,
            ],
            [
              "Securing against the execution of HTML application files (HTA) in user profiles and temporary folders.",
              5,
            ],
            [
              "Safeguarding against the execution of control panel applet files (CPL) in user profiles and temporary folders.",
              6,
            ],
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy One: - Application control on Workstations and Internet-facing Servers",
          question: "Which of the following mitigation strategies and controls have been implemented to achieve Maturity Level 2 for application control on workstations and internet-facing servers?",
          options: [
            [
              "Implementation of a dedicated application control solution.",
              0,
            ],
            [
              "Controlling the execution of unapproved executables.",
              1,
            ],
            [
              "Enforcing limitations on the execution of unapproved software libraries.",
              2,
            ],
            [
              "Safeguarding against the execution of unapproved scripts.",
              3,
            ],
            [
              "Regulating the execution of unapproved installers.",
              4,
            ],
            [
              "Managing the execution of unapproved compiled HTML files.",
              5,
            ],
            [
              "Monitoring and controlling the execution of unapproved HTML applications.",
              6,
            ],
            [
              "Managing the execution of unapproved control panel applets.",
              7,
            ],
            [
              "Logging allowed and blocked execution events on workstations and internet-facing servers.",
              8,
            ]
          ],
          choosedOption: null,
        },        
        {
          name: "Mitigation Strategy One: - Application control on Workstations and Servers",
          question: "Which of the following mitigation strategies and controls have been implemented to achieve Maturity Level 3 for application control on workstations and servers?",
          options: [
            [
              "Implementation of a dedicated application control solution.",
              0,
            ],
            [
              "Control of approved executables.",
              1,
            ],
            [
              "Control of approved software libraries.",
              2,
            ],
            [
              "Control of approved scripts.",
              3,
            ],
            [
              "Control of approved installers.",
              4,
            ],
            [
              "Control of approved compiled HTML files.",
              5,
            ],
            [
              "Control of approved HTML applications.",
              6,
            ],
            [
              "Control of approved control panel applets.",
              7,
            ],
            [
              "Control of approved drivers.",
              8,
            ],
            [
              "Configuration of Microsoft's recommended Block rules.",
              9,
            ],
            [
              "Configuration of Microsoft's recommended driver block rules.",
              10,
            ],
            [
              "Annual validation of application control rulesets.",
              11,
            ],
            [
              "Centralized logging of allowed and blocked execution events on workstations and servers.",
              12,
            ],
            [
              "Protection of application control event logs from unauthorized modification and deletion.",
              13,
            ],
            [
              "Monitoring of application control event logs for signs of compromise and appropriate action when signs of compromise are detected.",
              14,
            ],
            [
              "Organizational response to signs of compromise triggered by application control monitoring.",
              15,
            ]
          ],
          choosedOption: null,
        },
      ],
      essential2: [
        {
          name: "Mitigation Strategy Two: - Patch Applications",
          question: "Which of the following mitigation strategies and controls have been implemented to achieve Maturity Level 1 for patching applications?",
          options: [
            [
              "Implementation of an automated method of asset discovery run and reviewed at least fortnightly.",
              0,
            ],
            [
              "Usage of a vulnerability scanner with an up-to-date vulnerability database for vulnerability scanning activities.",
              1,
            ],
            [
              "Daily use of a vulnerability scanner to identify missing patches or updates for vulnerabilities in internet-facing services.",
              2,
            ],
            [
              "Fortnightly use of a vulnerability scanner to identify missing patches or updates for vulnerabilities in office productivity suites, web browsers, email clients, PDF software, and security products.",
              3,
            ],
            [
              "Application of patches, updates, or vendor mitigations for vulnerabilities in internet-facing services within two weeks of release or within 48 hours if an exploit exists.",
              4,
            ],
            [
              "Patching applications with available exploits older than 48 hours.",
              5,
            ],
            [
              "Patching applications within two weeks.",
              6,
            ],
            [
              "Application of patches, updates, or vendor mitigations for vulnerabilities in office productivity suites, web browsers, email clients, PDF software, and security products within one month of release.",
              7,
            ],
            [
              "Ensuring office productivity suites, web browsers, email clients, PDF software, and security products do not have vulnerabilities older than one month.",
              8,
            ],
            [
              "Removal of unsupported internet-facing services from the environment.",
              9,
            ],
            [
              "Removal of unsupported office productivity suites, web browsers, email clients, PDF software, and security products from the environment.",
              10,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Two: - Patch Applications",
          question: "Which of the following mitigation strategies and controls have been implemented to achieve Maturity Level 2 for patching applications?",
          options: [
            [
              "Usage of a vulnerability scanner run and reviewed at least weekly to scan office productivity suites, web browsers, email clients, PDF software, and security products.",
              0,
            ],
            [
              "Usage of a vulnerability scanner run and reviewed at least fortnightly to scan other applications.",
              1,
            ],
            [
              "Application of patches, updates, or other vendor mitigations for vulnerabilities in office productivity suites, web browsers, email clients, PDF software, and security products within two weeks of release.",
              2,
            ],
            [
              "Ensuring office productivity suites, web browsers, email clients, PDF software, and security products do not have vulnerabilities older than two weeks.",
              3,
            ],
            [
              "Application of patches, updates, or other vendor mitigations for vulnerabilities in other applications within one month of release.",
              4,
            ],
            [
              "Ensuring that other applications with vulnerabilities are patched or mitigated within one month.",
              5,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Two: - Patch Applications",
          question: "Which of the following mitigation strategies and controls have been implemented for patching office productivity suites, web browsers, email clients, PDF software, and security products?",
          options: [
            [
              "Effective process for patching these applications within 48 hours, with an example of patching an available exploit within 48 hours.",
              0,
            ],
            [
              "Ensuring that these applications do not have vulnerabilities older than 48 hours.",
              1,
            ],
            [
              "Removal of unsupported applications from the environment.",
              2,
            ]
          ],
          choosedOption: null,
        },
      ],
      essential3: [
        {
          name: "Mitigation Strategy Three: - Configure Microsoft Office Macro Settings",
          question: "Which of the following mitigation strategies and controls have been implemented for configuring Microsoft Office macro settings?",
          options: [
            [
              "Technical solution to block Microsoft Office macros for unauthorized users under the Microsoft Office macro policy.",
              0,
            ],
            [
              "Record of approved users for Microsoft Office macro execution matching the technical solution.",
              1,
            ],
            [
              "Blocking Microsoft Office macros in files from the internet.",
              2,
            ],
            [
              "Configuration of Microsoft Office to block macros in files from the internet (Group Policy and Registry settings).",
              3,
            ],
            [
              "Enabled Microsoft Office macro antivirus scanning.",
              4,
            ],
            [
              "Successful detection of a virus test signature inside Microsoft Office macros.",
              5,
            ],
            [
              "Preventing standard users from modifying Microsoft Office macro security settings.",
              6,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Three: - Configure Microsoft Office Macro Settings",
          question: "Which of the following mitigation strategies and controls have been implemented for configuring Microsoft Office macro settings?",
          options: [
            [
              "Blocking Microsoft Office macros from making Win32 API calls in Microsoft Office files.",
              0,
            ],
            [
              "Logging allowed execution of Microsoft Office macros within Microsoft Office files.",
              1,
            ],
            [
              "Logging blocked execution of Microsoft Office macros within Microsoft Office files.",
              2,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Three: - Configure Microsoft Office Macro Settings",
          question: "Which of the following mitigation strategies and controls have been implemented for configuring Microsoft Office macro settings?",
          options: [
            [
              "Allowing only Microsoft Office macros to execute from trusted locations.",
              0,
            ],
            [
              "Allowing Microsoft Office macros digitally signed by a trusted publisher to execute.",
              1,
            ],
            [
              "Only executing Microsoft Office macros from within a sandboxed environment.",
              2,
            ],
            [
              "Having a defined standard for validating and accepting Microsoft Office macros in trusted locations.",
              3,
            ],
            [
              "Preventing users from writing files into trusted locations.",
              4,
            ],
            [
              "Blocking Microsoft Office macros signed by untrusted publishers from executing.",
              5,
            ],
            [
              "Disallowing users from enabling Microsoft Office macros signed by untrusted publishers via the Message Bar or Backstage View.",
              6,
            ],
            [
              "Validating Microsoft Office's list of trusted publishers on an annual or more frequent basis.",
              7,
            ],
            [
              "Centrally logging allowed and blocked Microsoft Office macro execution events.",
              8,
            ],
            [
              "Protecting Microsoft Office macro execution event logs from unauthorized modification and deletion.",
              9,
            ],
            [
              "Monitoring Microsoft Office macro execution event logs for signs of compromise.",
              10,
            ],
            [
              "Investigating and responding to signs of compromise triggered by Microsoft Office macro execution monitoring.",
              11,
            ]
          ],
          choosedOption: null,
        },
      ],
      essential4: [
        {
          name: "Mitigation Strategy Four: - User Application Hardening",
          question: "Which of the following mitigation strategies and controls have been implemented for user application hardening?",
          options: [
            [
              "Blocking Java content in Microsoft Edge.",
              0,
            ],
            [
              "Blocking Java content in Google Chrome.",
              1,
            ],
            [
              "Blocking Java content in Mozilla Firefox.",
              2,
            ],
            [
              "Blocking web advertisements in Microsoft Edge.",
              3,
            ],
            [
              "Blocking web advertisements in Google Chrome.",
              4,
            ],
            [
              "Blocking web advertisements in Mozilla Firefox.",
              5,
            ],
            [
              "Blocking Internet Explorer 11 from accessing external internet sites.",
              6,
            ],
            [
              "Preventing users from changing Microsoft Edge security settings.",
              7,
            ],
            [
              "Preventing users from changing Google Chrome security settings.",
              8,
            ],
            [
              "Preventing users from changing Mozilla Firefox security settings.",
              9,
            ],
            [
              "Preventing users from changing Internet Explorer 11 security settings.",
              10,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Four: - User Application Hardening",
          question: "Which of the following mitigation strategies and controls have been implemented for user application hardening?",
          options: [
            [
              "ASD guidance for hardening Microsoft Edge is implemented.",
              0,
            ],
            [
              "Microsoft guidance for hardening Microsoft Edge is implemented.",
              1,
            ],
            [
              "Google guidance for hardening Google Chrome is implemented.",
              2,
            ],
            [
              "Microsoft Office files cannot create child processes.",
              3,
            ],
            [
              "Microsoft Office files cannot create executable content.",
              4,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Four: - User Application Hardening",
          question: "Which of the following mitigation strategies and controls have been implemented for user application hardening?",
          options: [
            [
              "The Internet Explorer 11 binary (iexplore.exe) does not exist on the system or is not able to be opened due to an application control policy.",
              0,
            ],
            [
              ".NET Framework 3.5 has been removed from the system by unselecting it from the list of optional Windows Features.",
              1,
            ],
            [
              "Older .NET Frameworks are unable to be found in the registry.",
              2,
            ],
            [
              "PowerShell 2.0 and below has been removed from the system and traces of it cannot be found in the registry.",
              3,
            ],
            [
              "PowerShell cannot be downgraded to version 2.0 or below.",
              4,
            ],
            [
              "The default configuration for PowerShell on the system is to start in Constrained Language Mode.",
              5,
            ],
            [
              "PowerShell will not allow a user to change to Full Language mode.",
              6,
            ],
            [
              "PowerShell script execution event logs are sent to a centralised location.",
              7,
            ],
            [
              "PowerShell script execution event logs are protected from unauthorised modification and deletion.",
              8,
            ],
            [
              "PowerShell script execution event logs are monitored for signs of compromise.",
              9,
            ],
            [
              "The organisation has an example where they investigated or responded to signs of compromise triggered by PowerShell script execution monitoring.",
              10,
            ]
          ],
          choosedOption: null,
        },
      ],
      essential5: [
        {
          name: "Mitigation Strategy Five: - Restrict Administrative Privileges",
          question: "Which of the following mitigation strategies and controls have been implemented for restricting administrative privileges?",
          options: [
            [
              "A process exists and is enforced for granting privileged access to systems.",
              0,
            ],
            [
              "Privileged accounts (excluding privileged service accounts) cannot access the internet or web services via a web browser or other mechanism.",
              1,
            ],
            [
              "Privileged accounts are not configured with mailboxes and email addresses.",
              2,
            ],
            [
              "All administrative activities are performed in an administrative environment that is segmented from the standard user network environment.",
              3,
            ],
            [
              "Unprivileged accounts cannot logon to systems in the privileged environment.",
              4,
            ],
            [
              "Unprivileged user prevented from using the PowerShell remote PSRemote windows feature.",
              5,
            ],
            [
              "A privileged account cannot be used to authenticate and interactively login to standard user workstations, or other unprivileged environments.",
              6,
            ],
            [
              "An unprivileged account logged into a standard user workstation cannot raise privileges to a privileged user.",
              7,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Five: - Restrict Administrative Privileges",
          question: "Which of the following mitigation strategies and controls have been implemented for restricting administrative privileges?",
          options: [
            [
              "A process for disabling known privileged accounts exists and is enforced. Users are made aware of this requirement when being provisioned with a privileged account.",
              0,
            ],
            [
              "There are no privileged accounts that have an Active Directory expiry date that is greater than 12 months or do not have an expiry date.",
              1,
            ],
            [
              "A process for disabling privileged accounts that have not been used for 45 days exists and is enforced by the entity. Evidence exists for the usage of the 45 days inactive disabling process, including support tickets or administrative logs that show accounts were disabled.",
              2,
            ],
            [
              "There are no enabled privileged accounts that have a lastlogondate that is greater than 45 days.",
              3,
            ],
            [
              "Where a privileged environment is virtualised, the virtualised image is not located in an unprivileged environment. This includes virtual machines on a standard unprivileged SOE.",
              4,
            ],
            [
              "Servers are configured to not allow remote access traffic or connections from systems that are not jump servers.",
              5,
            ],
            [
              "The Microsoft Local Administrator Password Solution (LAPS) or a similar solution is implemented on Windows workstations and servers.",
              6,
            ],
            [
              "Services account passwords are generated to be long, unique and unpredictable. Service account passwords are stored in a secure location, such as a password manager or a Privileged Access Management solution.",
              7,
            ],
            [
              "Passwords should be changed at least once every 12 months.",
              8,
            ],
            [
              "Successful and failed logins of privileged accounts are logged.",
              9,
            ],
            [
              "Changes made to privileged accounts and groups within Active Directory are logged.",
              10,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Five: - Restrict Administrative Privileges",
          question: "Which of the following mitigation strategies and controls have been implemented for restricting administrative privileges?",
          options: [
            [
              "The existing users of systems and applications are provided with the correct level of privilege required to perform their duties.",
              0,
            ],
            [
              "Service accounts cannot access the internet or web services via a web browser or other mechanism. This might be due to a proxy configuration, system configuration, or another solution.",
              1,
            ],
            [
              "Service accounts are not configured with mailboxes and email addresses. Note tests for Maturity Level One already cover internet restrictions for privileged accounts excluding service accounts.",
              2,
            ],
            [
              "Groups that are identified as having privileged access to systems and applications contain no active users.",
              3,
            ],
            [
              "Users that are approved access to privileged administration groups are provided with access for a limited time to fulfil their duties. A Just-in-time administration solution has been successfully deployed and configured.",
              4,
            ],
            [
              "Credential Guard is enabled on the system. Check the registry setting at HKLM:\\System\\CurrentControlSet\\Control\\LSA\\ and confirm that LsaCfgFlags is set to 1 or 2.",
              5,
            ],
            [
              "Remote Credential Guard is enabled on the system. Check the registry setting at HKLM:\\System\\CurrentControlSet\\Control\\LSA\\ and confirm that DisableRestrictedAdmin is set to 0.",
              6,
            ],
            [
              "Privileged access event logs are sent to a centralised location. Verify event logs for each required event are collected at a centralised location.",
              7,
            ],
            [
              "Privileged account and group management event logs are sent to a centralised location.",
              8,
            ],
            [
              "Privileged access event logs are protected from unauthorised modification and deletion.",
              9,
            ],
            [
              "Privileged account and group management event logs are protected from unauthorised modification and deletion.",
              10,
            ],
            [
              "Privileged access event logs are monitored for signs of compromise. Verify a solution or process is in place to monitor the privileged access event logs for signs of compromise.",
              11,
            ],
            [
              "The organisation has an example where they investigated or responded to signs of compromise triggered by privileged access monitoring.",
              12,
            ],
            [
              "Privileged account and group management event logs are monitored for signs of compromise. Verify a solution or process is in place to monitor the privileged account and group management event logs for signs of compromise.",
              13,
            ],
            [
              "The organisation has an example where they investigated or responded to signs of compromise event triggered by privileged account and group management monitoring.",
              14,
            ]
          ],
          choosedOption: null,
        },
      ],
      essential6: [
        {
          name: "Mitigation Strategy Six: - Patch Operating Systems",
          question: "Which of the following mitigation strategies and controls have been implemented for patching operating systems?",
          options: [
            [
              "An automated method of asset discovery is run and reviewed at least fortnightly.",
              0,
            ],
            [
              "A vulnerability scanner with an up-to-date vulnerability database is being used for vulnerability scanning activities.",
              1,
            ],
            [
              "A vulnerability scanner is run and reviewed daily to scan the organisation’s internet-facing services.",
              2,
            ],
            [
              "A vulnerability scanner is run and reviewed at least fortnightly to scan the organisation’s operating systems.",
              3,
            ],
            [
              "The organisation has an example of where an available exploit has been identified and patched within 48 hours.",
              4,
            ],
            [
              "Internet-facing system that have a vulnerable operating system with an exploit that has been available for greater than 48 hours are patched or mitigated.",
              5,
            ],
            [
              "Internet-facing systems that have a vulnerable operating system are patched or mitigated within two weeks.",
              6,
            ],
            [
              "The organisation has an effective process for patching operating systems within one month.",
              7,
            ],
            [
              "Operating systems that have a vulnerability are patched or mitigated within one month.",
              8,
            ],
            [
              "The organisation has removed unsupported operating systems from the environment.",
              9,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Six: Patch Operating Systems",
          question: "Which of the following mitigation strategies and controls have been implemented to patch operating systems?",
          options: [
            [
              "A vulnerability scanner is used at least weekly to identify missing patches or updates for vulnerabilities in operating systems of workstations, servers, and network devices. A vulnerability scanner is run and reviewed at least weekly to scan the organisation’s operating systems. Confirm that a vulnerability scanner is in place, and it is configured to scan the organisation’s operating systems, typically requiring a credentialed scan. Confirm that reports from the vulnerability scanner are reviewed by the responsible staff weekly, and that identified issues have been observed and actioned.",
              0,
            ],
            [
              "The organisation has an effective process for patching operating systems within two weeks. Confirm the existence of a list of managed operating systems, and where they are located. Ensure a process for identifying vulnerabilities for operating systems in the list is consistently followed. Request evidence of the patching of these systems within two weeks.",
              1,
            ],
            [
              "Patches, updates or other vendor mitigations for vulnerabilities in operating systems of workstations, servers, and network devices are applied within two weeks of release. Operating systems that have a vulnerability are patched or mitigated within two weeks. Use vulnerability management solution to perform a patch audit of all systems. Retrieve the update history of the system, noting the release date of the patch and the date it was installed. Look for differences greater than two weeks.",
              2,
            ]
          ],
          choosedOption: null,
        },        
        {
          name: "Mitigation Strategy Six: Patch Operating Systems",
          question: "Which of the following mitigation strategies and controls have been implemented to patch operating systems?",
          options: [
            [
              "Patches, updates or other vendor mitigations for vulnerabilities in operating systems of workstations, servers and network devices are applied within two weeks of release, or within 48 hours if an exploit exists. Operating systems vulnerable to an exploit that has been available for greater than 48 hours are patched or mitigated.",
              0,
            ],
            [
              "The latest release, or the previous release, of operating systems are used for. The minimum version of the operating system is the current, or previous release (N-1 version). Query Active Directory using PowerShell commands or tools such as ADRecon or Bloodhound to identify operating system versions within the environment. Use a vulnerability management solution to scan all systems to record their operating system version.",
              1,
            ]
          ],
          choosedOption: null,
        },
      ],
      essential7: [
        {
          name: "Mitigation Strategy Seven: Multi-factor Authentication",
          question: "Which of the following mitigation strategies and controls have been implemented to enforce multi-factor authentication for users?",
          options: [
            [
              "Multi-factor authentication is used by an organisation’s users when they authenticate to their organisation’s internet-facing services.",
              0,
            ],
            [
              "The organisational remote access desktop solution presents a MFA challenge when attempting to authenticate. Verify the user is presented with a MFA challenge when authenticating to the organisation’s remote solution.",
              1,
            ],
            [
              "Organisational internet-facing systems present a MFA challenge when attempting to authenticate. Verify the user is presented with a MFA challenge when authenticating to the organisation’s internet-facing systems.",
              2,
            ],
            [
              "Third-party internet-facing services that hold sensitive data are configured to require users to use MFA. Verify the organisation’s sensitive third-party internet-facing services are configured with MFA. Confirm the organisation has a policy that MFA will be implemented on all third-party internet-facing services that hold sensitive data.",
              3,
            ],
            [
              "Third-party internet-facing services that hold non-sensitive data are configured to require users to use MFA. Verify the organisation’s third-party internet-facing services are configured with MFA. Confirm the organisation has a policy that MFA will be implemented on all third-party internet-facing services that hold non-sensitive data.",
              4,
            ],
            [
              "The organisational internet-facing services with non-organisational users present a multi-factor challenge when attempting to authenticate by default. Verify non-organisational users are presented with an MFA challenge by default when accessing the organisation’s internet-facing services.",
              5,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Seven: Multi-factor Authentication",
          question: "Which of the following mitigation strategies and controls have been implemented to enforce multi-factor authentication for privileged users and across internet-facing services?",
          options: [
            [
              "Multi-factor authentication is used to authenticate privileged users of systems. Verify a privileged user is presented with a MFA challenge when authenticating to a machine or attempting to raise privileges. Confirm the organisation has a list of privileged systems and is regularly updated.",
              0,
            ],
            [
              "Multi-factor authentication uses either: something users have and something users know, or something users have that is unlocked by something users know or are. Verify that internet-facing services require multi-factor authentication using one of these methods.",
              1,
            ],
            [
              "The organisation requires that privileged users utilise multi-factor authentication that uses either: something users have and something users know, or something users have that is unlocked by something users know or are.",
              2,
            ],
            [
              "The organisation’s internet-facing systems log successful MFA attempts. Verify successful MFA events are logged for the organisation's internet-facing systems.",
              3,
            ],
            [
              "Administrative access connections log successful MFA attempts. Verify successful MFA events are logged for administrative access.",
              4,
            ],
            [
              "The organisation’s internet-facing systems log unsuccessful MFA attempts. Verify unsuccessful MFA events are logged for the organisation's internet-facing systems.",
              5,
            ],
            [
              "Administrative access connections log unsuccessful MFA attempts. Verify unsuccessful MFA events are logged for administrative access.",
              6,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Seven: Multi-factor Authentication for Important Data Repositories",
          question: "Which of the following mitigation strategies and controls have been implemented to enforce multi-factor authentication for users of important data repositories?",
          options: [
            [
              "The organisation has a list of important data repositories. Confirm the organisation has a list of important data repositories and this list is regularly checked.",
              0,
            ],
            [
              "Data repositories that have been listed as important require MFA to access. Verify important data repositories are configured to present a MFA challenge.",
              1,
            ],
            [
              "The MFA implementation requires the use of a phishing-resistant solution. Verify that MFA requires a smart card, security key, Windows Hello for Business, or any other solution that is resistant to phishing attacks.",
              2,
            ],
            [
              "MFA event logs are sent to a centralised location. Verify event logs for each required event are collected at a centralised location. Verify the number of systems logging to this location align with total expected systems (i.e. all systems are logging here).",
              3,
            ],
            [
              "MFA event logs are protected from unauthorised modification and deletion. Verify standard and unauthorised users are unable to modify or delete event logs.",
              4,
            ],
            [
              "MFA event logs are monitored for signs of compromise. Verify a solution or process is in place to monitor the integrity and validity of MFA event logs.",
              5,
            ],
            [
              "The organisation has an example where they investigated or responded to signs of compromise triggered by MFA monitoring. Verify the organisation has responded to a sign of compromise triggered by MFA monitoring. This evidence will typically exist as support tickets, email correspondence, or threat and risk assessments.",
              6,
            ]
          ],
          choosedOption: null,
        },
      ],
      essential8: [
        {
          name: "Mitigation Strategy Eight: Regular Backups",
          question: "Which of the following mitigation strategies and controls have been implemented to ensure backups of important data, software, and configuration settings are performed and retained in accordance with business continuity requirements?",
          options: [
            [
              "The organisation has a business continuity plan (BCP) that outlines their important data, software, and configuration settings that require backing up. Request the current BCP. Note when the BCP was last modified as old BCPs often don’t reference the current environment. Confirm the organisation has a defined list of important data, software, and configuration settings.",
              0,
            ],
            [
              "Important data, software, and configuration settings are backed up and retained as per the timeframes outlined within the BCP. Verify important data, software, and configuration settings are backed up and retained in accordance with the BCP.",
              1,
            ],
            [
              "Important data, software, and configuration settings are backed up in a synchronised manner using a common point in time. Verify important data, software, and configuration settings are backed up in a synchronised manner using a common point in time.",
              2,
            ],
            [
              "Important data, software, and configuration settings are backed up and retained in a secure and resilient manner. Verify important data, software, and configuration settings are backed up and retained in a secure and resilient manner.",
              3,
            ],
            [
              "The organisation has documented evidence of a disaster recovery exercise being performed. This includes examples of where important data, software, and configuration settings have been restored from backups. Verify the organisation has conducted a disaster recovery exercise. Verify the organisation has successfully restored important data, software, and configuration settings as part of this exercise. Confirm the existence of a disaster recovery plan (DRP), and ensure it is appropriate, relevant, and followed during incidents and exercises.",
              4,
            ],
            [
              "Unprivileged users are unable to access backups that do not belong to them. Verify access controls restrict access to only the owner of the information.",
              5,
            ],
            [
              "Unprivileged users are unable to modify and delete backups. Verify access controls restrict the modification and deletion of backups.",
              6,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Eight: Regular Backups - Privileged Accounts",
          question: "Which of the following mitigation strategies and controls have been implemented to ensure privileged accounts, excluding backup administrator accounts, cannot access backups belonging to other accounts and are prevented from modifying and deleting backups?",
          options: [
            [
              "Privileged users (excluding backup administrator accounts) are unable to access backups that do not belong to them. Verify access controls restrict the access of backups to the owner of the backup and backup administrator accounts.",
              0,
            ],
            [
              "Privileged users (excluding backup administrator accounts) are unable to modify and delete backups. Verify access controls restrict the modification and deletion of backups to backup administrator accounts.",
              1,
            ]
          ],
          choosedOption: null,
        },
        {
          name: "Mitigation Strategy Eight: Regular Backups - Privileged Accounts (Continued)",
          question: "Which of the following mitigation strategies and controls have been implemented to ensure unprivileged accounts cannot access backups belonging to other accounts, including their own, and to ensure privileged accounts, including backup administrator accounts, are prevented from modifying and deleting backups during their retention period?",
          options: [
            [
              "Unprivileged users are unable to access backups, including their own. Verify access controls restrict unprivileged users from accessing backup repositories.",
              0,
            ],
            [
              "Privileged users (excluding backup administrator accounts) are unable to access backups, including their own. Verify access controls restrict privileged users (excluding backup administrator accounts) from accessing backup repositories.",
              1,
            ],
            [
              "Privileged users (including backup administrator accounts) are unable to modify and delete backups during their retention period. Verify access controls restrict the modification and deletion of backups during their retention period to break glass accounts.",
              2,
            ]
          ],
          choosedOption: null,
        },
      ],
    }



export default questionnaire;