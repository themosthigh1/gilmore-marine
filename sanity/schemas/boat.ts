"use client";

import {
  defineType,
  defineField,
  defineArrayMember,
  ActiveWorkspaceMatcher,
} from "sanity";

const boat = defineType({
  name: "boat",
  title: "Boat",
  type: "document",
  fields: [
    defineField({
      name: "model",
      title: "Model",
      type: "string",
    }),
    defineField({
      name: "activeStatus",
      title: "Inactive | Active ",
      type: "boolean",
    }),
    defineField({
      name: "newCondition",
      title: "Used | New",
      type: "boolean",
    }),
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload the main image",
      options: { hotspot: true },
    },
    {
      name: "images",
      title: "Additional Images",
      type: "array",
      description: "Upload additional images here.",
      of: [
        {
          type: "image",

          options: { hotspot: true },
        },
      ],
    },
    {
      name: "price",
      type: "number",
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Click Generate and the slug will populate automatically based on the model entered above.",

      options: {
        source: "name",
        maxLength: 90,
      },
    },
    defineField({
      name: "details",
      title: "Details",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "array",
      title: "Description",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    }),
  ],
});

export default boat;
