
#!/bin/sh

yarn build

# deploy docs
gsutil cp -r ~/Desktop/work/projects/active/bcd-viewer-docs/build/* gs://docs.braincelldata.org/
