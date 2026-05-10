import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.HEAD || "master",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },

  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },

  schema: {
    collections: [
      {
        label: "Documentazione",
        name: "docs",
        path: "docs",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titolo",
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "Posizione nella sidebar",
          },
          {
            type: "string",
            name: "description",
            label: "Descrizione breve (opzionale)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenuto",
            isBody: true,
          },
        ],
      },
      {
        label: "Documentazione (con componenti)",
        name: "docs_mdx",
        path: "docs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titolo",
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "Posizione nella sidebar",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenuto",
            isBody: true,
            templates: [
              {
                name: "VideoPlayer",
                label: "Inserisci Video",
                fields: [
                  {
                    type: "string",
                    name: "url",
                    label: "URL del video (YouTube, Vimeo, ecc.)",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
