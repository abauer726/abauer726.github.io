# abauer726.github.io Local Development Guide

> **NOTE: This file is for local development reference only and should NOT be committed to the repository.**

## Project Setup Issues and Solutions

This document tracks the setup process for local development of the abauer726.github.io project.

## Environment Setup

The project is a Gatsby site with the following requirements:
- Node.js (recommended version: 14.16.0 from .nvmrc)
- npm or yarn

## Attempted Solutions

1. ❌ Running with WSL
   - Encountered networking issues between WSL and Windows
   - Python HTTP server on port 8080 could not be accessed from Windows

2. ❌ Running with npm in WSL
   - Dependency conflicts with gatsby-plugin-robots-txt
   - Package version mismatches
   - Issues with tmp module

3. ❌ Running Windows directly (npm start)
   - Permission errors
   - Error: EPERM: operation not permitted

4. ✅ Installing Node.js from official website
   - Downloaded from https://nodejs.org/
   - Selected "Automatically install the necessary tools" option

## Windows Setup Steps

After installing Node.js from the official website:

1. Restart your computer to ensure all path variables are set

2. Open a new Command Prompt window

3. Navigate to your project directory:
   ```
   cd C:\Users\annbauer\Documents\GitHub\abauer726.github.io
   ```

4. Verify your Node.js installation:
   ```
   node --version
   npm --version
   ```

5. Clean up any previous installation attempts:
   ```
   npm cache clean --force
   ```

6. Delete the node_modules folder if it exists:
   ```
   rd /s /q node_modules
   ```

7. Install dependencies:
   ```
   npm install
   ```

8. Start the development server:
   ```
   npm start
   ```

The site should be available at http://localhost:8000

## Notes

- GitHub Pages configuration: source branch contains source code, master branch contains built site
- The site is deployed to GitHub Pages using: `npm run deploy`
- Windows permission issues may be related to antivirus or security settings

## Color Schemes

### Blues (TikTok-inspired)
```css
:root {
  --dark-navy: #0f172a;
  --navy: #161f30;
  --light-navy: #1e293b;
  --lightest-navy: #334155;
  --navy-shadow: rgba(15, 23, 42, 0.7);
  --dark-slate: #64748b;
  --slate: #94a3b8;
  --light-slate: #cbd5e1;
  --lightest-slate: #e2e8f0;
  --white: #f8fafc;
  --green: #22d8e5;
  --green-tint: rgba(34, 216, 229, 0.15);
  --pink: #fe2c55;
  --blue: #69c9d0;
}
```