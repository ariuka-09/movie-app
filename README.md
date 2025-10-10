This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Todo list

- [x] create Next App
- [x] set ShadCN
- [x] Create Navbar component
 -  apply Theme using shadCN
 - customize shadCN theme 
 - link the logo to its homepage
 - add genre section using dropdown from shadCN
 - get genres from the backend and map it
- [x] add carousel element with 3 pictures using shadCN Carousel component
 - apply autoplay
- [x] Create Movies component which returns Popular, Upcoming, Top Rated movies' lists
 - Modify the use of axios to axiosInstance
 - Create and use .env file to hide API token from git pushes
 - Use axiosInstance to fetch the data
- [x] create MovieCard component   
 - apply useRouter to its biggest parent div which is linked to a dynamic page
- [x] create GroupedMovieCard component 
 - Map MovieCard component with the data fetched from movie
- [x] Create footer element
 - use the footer component in the layout page, not in page ( same for navBar )
- [x] Create dynamic detail page
 - Place a folder in app folder and create a page with [{name}] name
 - with the use of params, enable it to fetch data of an specific movie from the backend.
 - seperate the detail page into 4 sections: Header; Image; Info; Related movies
 - Create each of the sections as components
- [ ] Implement search function
- [ ] Create responsive design for alternative devices
 