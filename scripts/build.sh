#!/bin/bash

dir="./preact_plugin_boilerplate"
cd "$dir"
make build
cd ..
zip -r test.zip $dir/dist $dir/index.php
echo "Build complete. Created test.zip"
exit 0
