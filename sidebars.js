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
  //tutorialSidebar: [{type: 'autogenerated', dirName: './docs/Team Media'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'Intro',
  ],
  TeamMedia: [
    {
      type: 'autogenerated',
      dirName: 'Team Media',
    },
  ],
  Production: [
    {
      type: 'autogenerated',
      dirName: 'Production',
    },
  ],
  Predicatori: [
    {
      type: 'autogenerated',
      dirName: 'Predicatori',
    },
  ],
  // Predicatori: [ //to ancorate in sidebars single or some md file
  //   {
  //     type: 'doc',
  //     id:'Predicatori/Template Powerpoint',
  //     label:'Template Powerpoint'
  //   },
  //   ]
   
};

module.exports = sidebars;
