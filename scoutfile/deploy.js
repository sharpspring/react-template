const exec = require('child_process').exec;

const isProduction = process.env.NODE_ENV === 'production';

function deploy(bucket) {
  const source = 'dist/scout.js';
  const destination = `gs://${bucket}/scout.js`;
  const cmd = `gsutil -h 'Cache-Control:public, max-age=31536000' cp -a public-read ${source} ${destination}`;
  exec(cmd, function(error) {
    if(error) {
      console.log(error);
    }
  });
}

if (isProduction) {
  deploy('${projectName}-prod');
} else {
  deploy('${projectName}-dev');
}
