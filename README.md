# Bi-directional links in a Next.js blog

[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fjoelhans)](https://twitter.com/joelhans)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/joelhans/nextjs-mdx-bidirectional-links)

This is an experiment in implementing bi-directional links on a Next.js-powered blog.

The Next.js architecture that runs the blog functionality is very bare-bones, by design, to highlight how bi-directional
are collected, stored, and rendered in the blog post templates.

**The only dependency, aside from what Next.js itself requires, is [`mdx-bundler`](https://github.com/kentcdodds/mdx-bundler) (and [`esbuild`](https://github.com/evanw/esbuild) by extension)**.

Check out the documentation below for details on the implementation and how you can add bi-directional links to your
Next.js-powered blog.

[**See a demo!**](https://nextjs-mdx-bidirectional-links-o3gv25xq1-joelhans.vercel.app/)

## Motivation

I've been an [Obsidian](https://obsidian.md/) user for years, but never really paid attention to its implementation of
bi-directional links (called `Linked Mentions`) until I found the [Athens
Research](https://github.com/athensresearch/athens) project and started pitching in.

After reading about the history of bi-directional links (recommended: [*A Short History of Bi-Directional
Links*](https://maggieappleton.com/bidirectionals)) and the memex, I started to understand the value in being able to
walk "backward" through an information architecture. Once you're able to discover knowledge that references *what you're
currently reading*, you've greatly expanded your potential to connect what seem like tangential pieces of knowledge and
research faster.

Bi-directional links are commonplace in so-called personal knowledgebase management (PKM) software like Obsidian, Roam
Research, Logseq, and others, but they don't appear very often on the web.

You know, where they began.

I first explored this implementation on my [personal website](https://joelhans.com) to great success! The only fault in
the process I've built is that I need to write more articles to really flex the functionality.

I now believe believe that *every* blog&mdash;and *especially* documentation site&mdash;should include some
implementation of bi-directional links. This is my first attempt at simplifying that process for those using Next.js.

## Quickstart

Download the repository to your local system.

```
git clone https://github.com/joelhans/nextjs-mdx-bidirectional-links.git
```

Install dependencies.

```
yarn install
# or
npm install
```

Add new articles or edit existing links. Next, build the site (which updates the link data file in `data/links.json`), and run the site in production mode.

```
yarn build && yarn start
# or 
npm run build && npm run start
```

Now that you've run `next build` (via `yarn build` or `npm build`), you can run the site in development mode and see the
most up-to-date bi-directional links.

## Add bi-directional links to your existing Next.js blog

More information coming soon!

### Using the `tailwind-nextjs-starter-blog` template

More information coming soon!

### Using *any* template

More information coming soon!

## Implementation

More information coming soon!

## Development/customization

In theory, you *could* fork this repository and use it as the framework for a new, customized Next.js-based blog.

I wouldn't recommend this! Instead, start with the
[timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog), which is a far more
powerful starter template for blogging, and follow the instructions in the [Add bi-directional links to your existing
Next.js blog](#using-the-tailwind-nextjs-starter-blog-template) section to add in bi-directional links.

First, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
