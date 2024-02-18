export interface ScreenSizeContext {
  width: number;
  height: number;
  type?: string;
}

export interface SanityPost {
  author: {
    _ref: string,
    _type: string
  },
  body: Array<Object>,
  publication: any,
  mainImage: {
    _type: string,
    asset: {
      _ref: string,
      _type: string,
      cleanUrl: string,
    },
  },
  publishedAt: Date,
  slug: {
    current: string,
    _type: string
  },
  title: string,
  topic: string,
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: "post",
  _updatedAt: Date
}

export interface SanityAuthor {
  author: {
    _rev: string,
    Instagram: string,
    bio: Array<Object>,
    LinkedIn: string,
    _createdAt: Date,
    _type: 'author',
    name: string,
    Twitter: string,
    _id: string,
    _updatedAt: Date,
    slug: { current: string, _type: 'slug' },
    image: { _type: 'image', alt: string, asset: {
      _ref: string,
      _type: string,
      cleanUrl: string,
    }},
  };
};

export interface CleanSanityPost extends SanityPost {
  pubName?: string;
  date?: string;
  image?: string;
}