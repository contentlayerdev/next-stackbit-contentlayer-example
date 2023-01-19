import type * as Stackbit from '@stackbit/sdk'

export const Post: Stackbit.YamlPageModel = {
  type: 'page',
  urlPath: '/posts/{slug}',
  fields: [
    {
      name: 'title',
      type: 'string',
      default: 'Post title and main heading',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      description: 'Publish date',
    },
  ],
}
