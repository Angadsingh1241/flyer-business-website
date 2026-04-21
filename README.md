# Hamilton Flyer Delivery

Professional Next.js website for a Hamilton, Ontario flyer delivery business.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form + Zod
- Leaflet + OpenStreetMap
- WhatsApp-first quote flow

## Main editable file

- `lib/site-content.ts`

Update this file to change:

- business name
- phone number
- WhatsApp number
- email
- headlines and CTA copy
- pricing
- service areas
- postal code options
- FAQs
- sample work labels

## Main routes

- `/`
- `/services`
- `/pricing`
- `/areas-served`
- `/contact`

## Local setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Quote flow

The quote form does not email leads.

It opens WhatsApp with the customer details already filled in so the customer can send the quote request directly to your business number.

## Useful scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Archived code

The old mixed-in SmartVeg project has been moved into:

- `smartveg-archive/`
