/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest)">DOCUMENTATION</p>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "doc",
      id: "documentation/home",
    },
    {
      type: "doc",
      id: "documentation/intro",
    },
    {
      type: "doc",
      id: "documentation/quick-start",
    },
    {
      type: "doc",
      id: "documentation/structure",
    },
    {
      type: "doc",
      id: "documentation/docker",
    },
    {
      type: "doc",
      id: "documentation/test",
    },
    {
      type: "doc",
      id: "documentation/package-json",
    },
    {
      type: "doc",
      id: "documentation/makefile",
    },
    {
      type: "doc",
      id: "documentation/commands",
    },
    {
      type: "doc",
      id: "documentation/debugger",
    },
    {
      type: "doc",
      id: "documentation/dotenv",
    },
    {
      type: "doc",
      id: "documentation/dependency-injection",
    },
    {
      type: "doc",
      id: "documentation/request-id",
    },
    {
      type: "doc",
      id: "documentation/exceptions",
    },
    {
      type: "doc",
      id: "documentation/domains",
    },
    {
      type: "doc",
      id: "documentation/coming-soon",
    },
  ]
};

module.exports = sidebars;
