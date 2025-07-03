# VoiceKiosk - Voice-Controlled Smart Assistant for Hospitals & Banks

🚀 **VoiceKiosk** is a touchless smart kiosk that uses voice commands to help people check in, call staff, or get information — designed for hospitals, banks, and crowded public spaces.

This repository contains the **Kiosk Application**, which acts as a local interface (running on Raspberry Pi, laptop, or embedded device). It connects to our SaaS backend API to register check-ins and trigger alerts.

---

## 🌟 Features
- 🎙️ **Voice-activated interface** (no touch required)
- 🗣️ Supports commands like:
  - `"Check me in"` ➔ Registers check-in & confirms appointment
  - `"Call a nurse"` ➔ Triggers staff alert
  - `"Show my appointment"` ➔ Displays schedule
- 📺 Visual feedback on screen
- 🔊 Audio responses using TTS
- 📡 Sends data to multi-tenant SaaS backend (API keyed per organization)
- 🩺 Designed for hospitals, but easily extendable to banks, airports, etc.

---

## 🏗️ Tech Stack

| Layer          | Technology                                  |
|----------------|---------------------------------------------|
| Voice Input    | Python `speech_recognition`, Google Speech  |
| Voice Output   | `pyttsx3` or `gTTS`                        |
| UI Display     | `Tkinter` (can swap with HTML/React front) |
| Backend API    | Node.js / Express / Clerk (SaaS)           |
| Data Storage   | API posts to multi-org backend DB          |
| Auth           | API key on kiosk (provided by backend)     |

---
