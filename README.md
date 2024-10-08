## About task requirement 

* Functional Requirement :

1. Use https://dummyjson.com/docs to find JSON contract for fetching products and product categories.

2. Display all categories and make it selectable (single-select).

3. Show products for the selected category otherwise show products from all categories when no category selected.

1. While fetching products use pagination parameter and keep size 10.

(If given combination has 50 products we need to show all products in the single page without UI pagination but instead of fetching all products at once we have to fetch the data in batches i.e first 1-10 then 11 - 20.. so on and display whichever is fetched till now)

4. Implement Search for the products.

5. List down if there are any limitations of your app as comments in “App.js”.

Technical Requirement:

1. Use only functional components.

2. Use Redux to store and retrieve product and category data.

3. Selected Category and search input should be stored as queryparams

------------------------------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
