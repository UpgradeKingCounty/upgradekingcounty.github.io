# Upgrade King County

This is the repo for the Upgrade King County website

## Contributing

- Fork the repo
- Create a branch for your changes
- Submit a pull request

### Quick Start

Assuming you've already forked this repository follow these steps to get up and running
on your computer.

```bash
git clone git@github.com:{your-github-username}/upgradekingcounty.github.io
cd upgradekingcounty.github.io
git checkout -b descriptive-branch-name
npm install
npm start
```

## Development

A good starter post on Next.js + Gatsby + MDX can be found
[here](https://nextjs.org/blog/markdown).

The site uses Gatsby, a React-based static site generator.
Learn more about Gatsby [here.](https://www.gatsbyjs.com/)

We are also using a plugin for using Markdown and React together.
You can learn more about it [here](https://www.gatsbyjs.com/docs/mdx/).

We use Prettier for automatic JavaScript formatting.
Use the `npm run format` command to run code formatting or we recommend downloading the
[Prettier extension](https://prettier.io/docs/en/editors.html) for your editor of
choice to enable features like formatting on save.

### Adding or Updating Pages

As header and footer will be standard across the whole site, if you are working on
content for the site, you can largely just update existing MDX files in the `src/pages/`
directory.

### Common Components

The header, footer, and other common components should be placed in the
`src/components/common` directory. Unlike page content, these are written in JS + CSS.


## Deployment

This repository is configured so that whenever a change is pushed to `main` the website
will be entirely built and redeployed. We currently do not have a staging or dev site.
Recommended that if you want those, simply fork the repo and provide a link to your
fork's deployment.
