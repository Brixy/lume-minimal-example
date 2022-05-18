import lume from 'lume/mod.ts';
import imagick from 'lume/plugins/imagick.ts';

const site = lume({
  src: './src/',
});

site
  .use(imagick())

site
  .copy('static', '.')
  .copy(
    ['.docx', '.mp3', '.mp4', '.pdf'],
    function (path) {
      return path.replace('/posts', '');
    },
  );

/*
site.process(['.jpg', '.png', '.gif'], function (page) {
  page.dest.path = page.dest.path.replace('/posts', '');
});
*/

export default site;
