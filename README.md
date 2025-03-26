# DEV.to Blog with Next.js (App Router) & next-intl 🌍

This project is a DEV.to-like blogging platform built using Next.js (App Router), TypeScript, Tailwind CSS, and next-intl for multilingual support.

## 🚀 Features

✅ Server-side rendering (SSR) for blogs  
✅ Dynamic language switching with next-intl  
✅ Tailwind CSS for styling  
✅ Middleware-based locale handling  
✅ SEO-friendly pages  

## 📚 Project Structure

```
📆 serverside-next-intl
 ┓ 📚 app
 ┃ ┓ 📚 [locale]   # Dynamic language-based routes
 ┃ ┃
 ┃ ┃ ┓ 📋 layout.tsx   # Root layout with language dropdown
 ┃ ┃ ┓ 📋 page.tsx     # Blog listing page
 ┃ ┓ 📚 components
 ┃ ┃ ┓ 📋 LanguageDropdown.tsx   # Language switcher dropdown
 ┃ ┓ 📚 i18n
 ┃ ┃ ┓ 📋 messages.ts   # Translations
 ┃ ┃ ┓ 📋 routing.ts    # Locale routing config
 ┃ ┓ 📋 middleware.ts   # Locale middleware
 ┓ 📋 next-intl.config.ts  # next-intl configuration
 ┓ 📋 next.config.ts       # Next.js config
 ┓ 📋 tsconfig.json        # TypeScript config
 ┓ 📋 package.json         # Dependencies
 ┓ 📋 README.md            # Project documentation
```

## 🌍 Internationalization (i18n)

This project uses `next-intl` for handling multiple languages.

### ✅ How Language Switching Works

- Middleware (`middleware.ts`) detects the user’s locale.
- A dropdown in the navbar allows manual language selection.
- `next-intl` loads translations dynamically based on the locale.

## 🛠️ Setup & Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/VIVEKKOYANI/dev.to-blog-with-next-intl.git
cd serverside-next-intl
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the development server
```sh
npm run dev
```
Now, open [http://localhost:3000](http://localhost:3000) in your browser.

## 📌 Tech Stack

- Next.js (App Router)  
- TypeScript  
- Tailwind CSS  
- next-intl (for translations)  

