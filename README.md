# Sales AI Dashboard

A modern, Hebrew-friendly, responsive dashboard for visualizing key sales metrics — built for the Hackathon Stage 1 (static version). The system is designed to later integrate with an AI Sales Agent backend that will automate follow‑up calls and sales processes.

> **Note:** This version is a static mock dashboard built in **React**. For the purpose of demonstrating it in the hackathon, we used **Vite** for rapid development and deployed it to **GitHub Pages**.

---

## Overview
This project delivers a **React** dashboard for monitoring sales and marketing performance. In Stage 1, the dashboard displays mock data to demonstrate design, responsiveness, and basic interactions. In Stage 2, the same UI will connect to live API data and AI‑driven call automation.

---

## Features
- **KPIs (Key Performance Indicators):** Calls today, Success rate, New leads, Average call duration
- **Time Range Filter:** Today, Yesterday, This Week, This Month, Custom
- **Charts:**
  - Line chart of calls over the last 7 days
  - Pie chart of call outcomes (Closed, Warm, No Answer, Not Relevant)
- **Recent Calls Table:** Name, time, outcome, rating, and details button
- **Responsive Design:** RTL support, Hebrew text, mobile‑friendly
- **Floating Action Box:** Custom quick links (gradient yellow buttons)

---

## Tech Stack
- **React** (UI library)
- **Chart.js** (data visualization)
- HTML5 + CSS3 (Flexbox, Grid)

---

## Getting Started (Local Development)

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9
- Git installed

### Run Locally
```bash
# Clone the repo
git clone https://github.com/<username>/<repo>.git
cd <repo>

# Install dependencies
npm install

# Start local development server
npm run dev
```

Your app will be available at: [http://localhost:5173](http://localhost:5173)

---

## Architecture (Stage 1)
```
React Components (KPI, Charts, Table, FloatingBox)
        ↓
Static React App Build
        ↓
Hosting (GH Pages for hackathon demo)
```

_Future Stage 2:_
```
React Components
        ↓
REST API Calls → Backend Server → Database
```

---

## License
MIT License — Free to use, modify, and distribute under hackathon rules.
