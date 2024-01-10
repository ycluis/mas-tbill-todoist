# MAS T-Bill Data Fetcher and Todoist Reminder

## Overview

This project is a JavaScript application that fetches Treasury Bill (T-Bill) data directly from the Monetary Authority of Singapore (MAS) API. The retrieved data is then used to create reminders in Todoist. It's important to note that this tool is created solely for educational and personal use and should not be employed for commercial purposes.

## Features

- **MAS API Integration:** Directly calls the MAS API to retrieve up-to-date T-Bill data.

- **Todoist Integration:** Utilizes the fetched data to generate reminders in Todoist for staying informed about T-Bill information.

## Installation

1. **Clone the Repository:**

   ```bash
    git clone https://github.com/ycluis/mas-tbill-todoist.git
    cd mas-tbill-todoist
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Todoist API:**

   - Obtain your Todoist API key from [Todoist Developer](https://developer.todoist.com/).
   - Rename `.env.sample` to `.env`.
   - **Todoist API Key:** Replace the placeholder in `.env` with your Todoist API key.

4. **Run the Application:**
   ```bash
   npm start
   ```

## Usage

1. **Run the Application:**
   Execute the `app.js` script to initiate the process of fetching T-Bill data and creating Todoist reminders.

2. **Check Todoist:**
   Visit your Todoist account to confirm the creation of reminders.

## Important Notes

- **Educational and Personal Use Only:** This tool is intended for educational and personal use. Commercial use is not permitted.
- **Disclaimer:** The use of this tool is at your own risk. Ensure compliance with all relevant laws and regulations, and respect the terms of use of external services like MAS and Todoist.
