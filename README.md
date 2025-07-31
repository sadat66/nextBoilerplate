# Next.js Production-Ready Boilerplate

A modern, secure, and internationalized Next.js boilerplate with authentication, input sanitization, and production-ready features.

## Features

- ⚡ **Next.js 15** with App Router and React 19
- 🔐 **Authentication** with NextAuth.js and Prisma
- 🌍 **Internationalization** (i18n) with next-intl (EN, ES, FR, DE)
- 🎨 **Modern UI** with Tailwind CSS and shadcn/ui components
- 🛡️ **Input Sanitization** with DOMPurify
- 📝 **Type Safety** with TypeScript
- 🗄️ **Database** with Prisma ORM
- 🔒 **Security** features and best practices

## Environment Setup

1. Copy the environment template:
```bash
cp .env.example .env.local
```

2. Update the environment variables in `.env.local`:

### Required Variables
```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Application
NODE_ENV="development"
```

### Optional Variables
See `.env.example` for additional optional configurations including SMTP, analytics, error tracking, file storage, Redis, and rate limiting.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Security Features

### Input Sanitization
This boilerplate includes comprehensive input sanitization using DOMPurify:

- **HTML Sanitization**: Removes malicious HTML/JavaScript while preserving safe content
- **Text Sanitization**: Strips HTML tags and encodes special characters
- **Email Sanitization**: Validates and normalizes email addresses
- **URL Sanitization**: Validates URLs and allows only HTTP/HTTPS protocols
- **Database Sanitization**: Removes null bytes and limits input length

### Authentication Security
- Password hashing with bcryptjs (12 rounds)
- JWT-based sessions with NextAuth.js
- SQL injection protection via Prisma ORM
- XSS protection through React's built-in escaping
- Input validation with Zod schemas

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Internationalized routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/
│   ├── auth/              # Authentication components
│   ├── ui/                # shadcn/ui components
│   └── providers/         # Context providers
├── lib/
│   ├── auth.ts            # NextAuth configuration
│   ├── prisma.ts          # Database client
│   ├── sanitize.ts        # Input sanitization utilities
│   └── utils.ts           # Utility functions
├── i18n/                  # Internationalization config
└── types/                 # TypeScript type definitions
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
