export default {
  name: 'icecream',
  type: 'document',
  title: 'icecream',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'price',
      type: 'array',
      of: [{type: 'number'}],
    },
    {
      name: 'details',
      title: 'details',
      type: 'string',
    },
  ],
}
