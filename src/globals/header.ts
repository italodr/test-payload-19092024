import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Admin',
  },
  fields: [
    {
      name: 'header_logo',
      label: 'Logo',
      type: 'group',
      localized: true,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo image',
          required: false,
        },
      ],
    },
  ],
}
