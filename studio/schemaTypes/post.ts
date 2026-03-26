import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),

    // ── SEO ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'SEO Title Tag',
      type: 'string',
      description: 'Appears in the browser tab and Google search results. Keep under 60 characters.',
      validation: (Rule) => Rule.max(60).warning('Over 60 characters may be truncated by Google'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Appears under your link in Google search results. Keep between 140–160 characters.',
      validation: (Rule) => Rule.max(160).warning('Over 160 characters will be cut off by Google'),
    }),
    defineField({
      name: 'seoKeywords',
      title: 'Focus Keywords',
      type: 'string',
      description: 'Comma-separated primary keywords. e.g. ACL injury Pakistan, knee surgeon Bahawalpur',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image shown when this post is shared on WhatsApp, Facebook or LinkedIn. Recommended size: 1200×630px.',
      options: {hotspot: true},
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})