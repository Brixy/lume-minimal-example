export const layout = 'layouts/post.njk';
export const type = 'posts';

export function url(page) {
  const path = page.dest.path.replace('/posts', '').replace('/index', '');
  return page.dest.ext === '.md' ? path + '/' : path + page.dest.ext;
}

export const imagick = [
  {
    resize: [200, 200],
    suffix: '-small',
  },
  {
    resize: [200, 200],
    suffix: '-small',
    format: 'webp',
  },
  {
    resize: [600, 600],
  },
  {
    resize: [600, 600],
    format: 'webp',
  },
];
