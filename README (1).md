# -BUILD-A-CHROME-EXTENSION-FOR-PRODUCTIVITY-MANAGEMENT
DEVELOP A CHROME EXTENSION THAT ACTS AS A  PRODUCTIVITY TRACKER. THE EXTENSION WILL  MONITOR TIME SPENT ON DIFFERENT WEBSITES,  BLOCK DISTRACTING SITES, AND PROVIDE DAILY  PRODUCTIVITY REPORTS. USE THE MERN STACK FOR  BACKEND FUNCTIONALITIES LIKE STORING USER  PREFERENCES, GENERATING REPORTS, AND SYNCING  DATA ACROSS DEVICES


COMPANY NAME : CODETECH IT SOLUTIONS

NAME : POTHINA CHANDRIKARANI

INTERN ID : CT6WVMW

DOMAIN NAME : MERN STACK 

DURATION : 6WEEKS

MENTOR : NEELA SANTOSH

Overview:
The Productivity Tracker Chrome Extension is a lightweight browser tool designed to help users monitor and manage their web activity. Built using HTML, CSS, JavaScript, and Chrome Extension APIs, this extension allows users to track the amount of time spent on different websites, block distracting domains, and view daily productivity reports — all locally without needing an internet connection or backend database.

Key Features:
Time Tracking:
Automatically monitors time spent on websites.

Tracks which site is currently active and logs how long the user stays on it.

Uses the background script and Chrome tabs API for accurate time logging.

Website Blocking:
Users can define a list of distracting sites.

The extension blocks or redirects the user when they attempt to access those sites.

Helps improve focus and prevent procrastination.

Daily Productivity Reports:
A popup dashboard shows a breakdown of time spent on each website.

Data is visualized in a clean interface for quick analysis.

Reports reset daily, encouraging consistent productivity.

Offline Support:
Works entirely in the browser with no external server or database.

Stores data using localStorage for privacy and simplicity.

Tech Stack:
Frontend (Chrome Extension):
HTML/CSS: For building the popup interface and styling.

JavaScript: Handles time tracking, blocking logic, and data processing.

Chrome Extension APIs: Enables interaction with browser tabs, tracking activity, and managing local data storage.

How It Works:
Tracking Usage:
The background script detects when a tab is active or switched.

It records the time a domain is visited and updates the stored data accordingly.

Blocking Distractions:
A predefined list of blocked sites is compared with the current tab’s URL.

If a match is found, the site is either closed or redirected to a custom warning page.

Displaying Reports:
The popup (popup.html) fetches time-tracking data from localStorage.

It displays a summary of top visited sites and time spent.

Potential Enhancements:
Sync Across Devices: Use Chrome Sync API to maintain consistency between multiple browsers.

Custom Timers: Let users set work/break intervals using a Pomodoro-style timer.

Notifications: Alert users when they’ve spent too much time on a specific site.

Graphical Analytics: Add charts for visual time breakdowns using Chart.js or similar.

Conclusion:
The Productivity Tracker Chrome Extension is a privacy-friendly, easy-to-use tool that boosts online focus by tracking and managing time spent on websites. With features like site blocking and local reporting, it's ideal for students, professionals, or anyone looking to improve their digital discipline.

OUTPUT:

![Image](https://github.com/user-attachments/assets/2eaf01fa-e778-4866-8576-b30911c1e070)

![Image](https://github.com/user-attachments/assets/db557fe1-674c-4626-9a89-4b8f40557c96)

![Image](https://github.com/user-attachments/assets/5e4927c4-bdd3-4ba9-8b5f-a68587c7e9fe)

