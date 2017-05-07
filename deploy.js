const git = require('git-rev');
const exec = require('child_process').exec;
const isProduction = process.env.NODE_ENV === 'production';
const supportedLanguages = ['en_US', 'de_DE'];

git.short(function(sha1) {
  console.log(`hash=${sha1}`);
  if (isProduction) {
    deploy(sha1, '${projectName}-prod');
  } else {
    deploy(sha1, '${projectName}-dev');
  }
});

function deploy(sha1, bucket) {
  supportedLanguages.forEach(function(language) {
    const source = `dist/${language}.main.min.js`;
    const destination = `gs://${bucket}/${sha1}/${language}.main.js`;
    const cmd = `gsutil -h 'Cache-Control:public, max-age=31536000' cp -a public-read ${source} ${destination}`;
    exec(cmd, function(error, stdout, stderr) {
      console.log(error);
    });
  });
}
