# Kajal & Rahul – Wedding Invitation Website

A single self-contained page: all CSS, JavaScript, artwork and photos are inside `index.html`.
Only the Google Fonts (Cinzel, Cormorant Garamond, Pinyon Script) load from the internet.

## Run locally
Double-click `index.html`, or serve the folder:

    python3 -m http.server 8080   # then open http://localhost:8080

## Host it (free)
- **Netlify:** drag this folder onto https://app.netlify.com/drop
- **GitHub Pages / Vercel / Cloudflare Pages:** upload the folder as a static site.

## Settings to edit (search inside index.html)
- `RSVP_WHATSAPP = "916203905811"` – WhatsApp number (country code, no +) that receives RSVPs.
- `RSVP_SHEET_URL = ""` – Google Sheet that collects every RSVP as a row (name, phone, attending, guests, and a
  head-count column per event with its date and venue). Setup: new Google Sheet → Extensions → Apps Script →
  paste `rsvp-google-apps-script.gs` → Save → Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone)
  → Authorize → copy the Web app URL here.
- `RSVP_APIKEY = ""` – optional CallMeBot key so RSVPs arrive on that WhatsApp automatically (the guest never leaves the page).
  One-time setup from the phone with that number: open https://www.callmebot.com/blog/free-api-whatsapp-messages/,
  save the bot number shown there, send it "I allow callmebot to send me messages", and paste the key it replies with.
  While empty, Send RSVP opens WhatsApp on the guest's phone instead.
- `autoT = setTimeout(enterSite, 2000)` and `let left = 2` – seconds before the card opens the site.
- `new Date('2026-12-02T19:00:00+05:30')` – countdown target.

## Sections
Start page (seal → card → doors) · Home (monogram, scratch card, countdown) · Our Families ·
Our Story (2 photos) · Schedule of Events · Venue · RSVP (with thank-you card) · Footer.
