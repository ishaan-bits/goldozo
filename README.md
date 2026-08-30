# Gold Dozo Gym — Marketing Website

Premium marketing website for Gold Dozo Gym, Patna. Built with Next.js and powered by Firebase.

**Live:** [goldozo.vercel.app](https://goldozo.vercel.app)

## Features

- **Responsive single-page site** — Hero, About, Programs, Gallery, Amenities, Pricing, Reviews, Visit Us, CTA
- **Enquiry form** — collects leads directly into Firestore
- **Admin panel** (`/admin`) — login with Firebase Auth
  - **Dashboard** — stats overview, recent enquiries, quick actions
  - **Leads** — filterable table, status management (New → Contacted → Converted)
  - **Content Editor** — edit every text element on the website from a visual sidebar editor
- **Server-side API routes** — all Firebase operations handled server-side for speed and security
- **CMS-style content system** — default content baked in, overrides stored in Firestore

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, vanilla CSS |
| Auth | Firebase Authentication (Email/Password) |
| Database | Cloud Firestore |
| Hosting | Vercel |
| Fonts | Bebas Neue (display), Inter (body) |

## Project Structure

```
goldozo/
├── app/
│   ├── page.jsx                  # Main site
│   ├── layout.jsx                # Root layout
│   ├── globals.css               # All styles
│   ├── icon.png                  # Favicon
│   ├── admin/
│   │   ├── page.jsx              # Admin login
│   │   ├── layout.jsx            # Auth guard + nav
│   │   └── dashboard/
│   │       ├── page.jsx          # Dashboard overview
│   │       ├── leads/page.jsx    # Leads management
│   │       └── content/page.jsx  # Content editor
│   └── api/
│       ├── enquiry/route.js      # Submit enquiry
│       ├── leads/route.js        # CRUD leads
│       └── content/route.js      # Read/write content
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Programs.jsx
│   ├── Gallery.jsx
│   ├── Amenities.jsx
│   ├── Pricing.jsx
│   ├── Reviews.jsx
│   ├── Visit.jsx
│   ├── CTABand.jsx
│   ├── EnquiryForm.jsx
│   ├── Footer.jsx
│   ├── Logo.jsx
│   ├── Ico.jsx                   # SVG icon library
│   ├── ScrollReveal.jsx          # IntersectionObserver animations
│   └── ContentProvider.jsx       # Global content context
├── lib/
│   ├── firebase.js               # Lazy Firebase init
│   └── content-defaults.js       # Default editable content
└── public/
    └── photos/                   # Gym interior photos + program images
```

## Setup

```bash
npm install
cp .env.example .env.local   # add Firebase config
npm run dev                   # http://localhost:3000
```

### Environment Variables

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication** → **Email/Password** sign-in method
3. Create a **Firestore Database** (start in test mode)
4. Set Firestore rules:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /leads/{docId} {
         allow create: if true;
         allow read, update, delete: if true;
       }
       match /settings/{docId} {
         allow read, write: if true;
       }
     }
   }
   ```
5. Add your Vercel domain to **Authentication → Settings → Authorized domains**

## Admin Panel

- **URL:** [goldozo.vercel.app/admin](https://goldozo.vercel.app/admin)
- Create users in Firebase Console → Authentication → Add user
- Dashboard shows lead stats and quick links
- Leads page lets you filter, update status, and delete enquiries
- Content editor lets you update all website text — changes save to Firestore and appear on the live site

## Deployment

Connected to GitHub — push to `main` and Vercel auto-deploys. Environment variables are set in Vercel dashboard or via CLI:

```bash
npx vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production --visibility config --no-sensitive
```

## License

Private — Gold Dozo Gym, Bailey Road, Patna.
