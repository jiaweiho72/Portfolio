# **Personal Portfolio**

Magic Portfolio was built with [Once UI](https://once-ui.com) and [Next.js](https://nextjs.org). It requires Node.js v18.17+.

**[DEMO](https://portfolio-ho-jia-wei.vercel.app/)**

**1. Clone the repository**
```
git clone https://github.com/jiaweiho72/Portfolio.git
```

**2. Install dependencies**
```
npm install
```

**3. Run dev server**
```
npm run dev
```

**4. Edit config**
```
src/app/resources/config
```

**5. Edit content**
```
src/app/resources/content
```

# **Features**

## **Once UI**
- All tokens, components & features of [Once UI](https://once-ui.com) (v0.3.1)

## **SEO**
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

## **Design**
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

TIP:
You try pre-built designs by changing the imports for the config and content in src/app/resources/index.ts

## **Content**
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs
