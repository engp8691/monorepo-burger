What is Next.js and how is it different from Create React App (CRA)?

How does routing work in Next.js using the Pages Router?

What file is used to configure a custom document structure in Next.js? What is its purpose?

What is the difference between pages/_app.js and pages/_document.js?

How do you create dynamic routes in Next.js (Pages Router)?

How can you prefetch routes in Next.js?

How do you use static assets in Next.js? Where should they be placed?

🧠 Intermediate-Level Questions
What is the difference between getStaticProps and getServerSideProps?

How does getStaticPaths work with dynamic routes?

Explain Incremental Static Regeneration (ISR) in Next.js.

How would you handle 404 and 500 error pages in Next.js?

How does next/link improve performance over using a regular anchor tag?

How can you share layout between pages in the Pages Router?

What are the key features enabled by default in Next.js that benefit SEO?

Can you explain how Next.js image optimization works with next/image?

🧩 Advanced-Level Questions
What are the trade-offs between SSR (getServerSideProps) and SSG (getStaticProps)? When would you use one over the other?

Describe how middleware works in Next.js. What are valid use cases?

How would you handle authentication and protected routes in Next.js (Pages Router)?

How can you customize the Webpack configuration in Next.js?

Explain how to implement internationalization (i18n) in Next.js.

How would you implement role-based access control in Next.js?

How can you track performance metrics like Core Web Vitals in a Next.js app?

What’s the difference between _middleware.js (deprecated) and the current middleware.ts?

⚙️ Project/Scenario-Based Questions
Your marketing page needs to be fast and SEO-optimized. What data fetching strategy would you use?

You're building a blog with dynamic slugs. How would you handle static generation for each post?

How would you add a custom analytics script that loads only on production?

How do you prevent a build-time crash due to missing data when using getStaticProps?

What’s the best way to conditionally fetch data client-side only (not SSR or SSG)?

---------------
What is the difference between dynamic routing and catch-all routing in Next.js?

How do optional catch-all routes work in the Pages Router?

Example: pages/blog/[[...slug]].tsx

What happens when two dynamic routes conflict?

How does getStaticPaths affect page generation at build time?

Can you use multiple dynamic route parameters in a single file?

🧠 Data Fetching & Performance
What are the differences between getStaticProps, getServerSideProps, and getInitialProps?

How would you use fallback: 'blocking' in getStaticPaths, and when is it useful?

What are the trade-offs of ISR vs SSR for an e-commerce product page?

How can you cache server-side responses in Next.js?

How does Next.js optimize performance for hybrid applications?

🌍 SEO & Metadata
How do you manage metadata for individual pages in Next.js (Pages Router)?

What are some best practices for improving SEO in Next.js apps?

How would you implement Open Graph meta tags dynamically in a blog post page?

🔐 Authentication & Security
How would you handle JWT authentication in Next.js with getServerSideProps?

What's a secure way to protect server-side API routes in Next.js?

How can you protect pages from being crawled or indexed by search engines?

⚙️ API Routes
How do API routes differ from pages in Next.js?

How would you structure a RESTful API inside the pages/api directory?

How would you connect your API routes to a database like MongoDB or PostgreSQL?

📁 Static Assets & CDN
What is the public folder used for in Next.js?

How would you handle external images or assets in next/image?

What are the limitations of using the Image component compared to <img>?

📐 Deployment & Configuration
What is the next.config.js file used for?

How do you enable custom headers and rewrites in Next.js?

How can you disable server-side rendering for a page or component?

🔧 Advanced Topics
What are the implications of using next export?

How can you preload font files for better performance in Next.js?

How does Next.js handle environment variables?

Can you explain how Middleware works in Next.js?

What are edge functions, and how do they differ from traditional SSR?