#!/bin/bash
cd build
# in build/, if makes new html can regenerate long command
# find .|grep html|sed "s#^#ispell -p ../scripts/ispell_english_custom_dict #"|sed "s/$/ \&\& /g"

# Can use this command to add to the dictionary with `I` (happily doesn't use
#       default .ispell_english but the linked scripts/ispell_english_custom_dict)
# But have to modify the original .md/.js files.

# On MacOS: brew install ispell

ispell -p ../scripts/ispell_english_custom_dict ./index.html                     &&
ispell -p ../scripts/ispell_english_custom_dict ./category/viewer/index.html     &&
ispell -p ../scripts/ispell_english_custom_dict ./404.html                       &&
ispell -p ../scripts/ispell_english_custom_dict ./about/index.html               &&
ispell -p ../scripts/ispell_english_custom_dict ./viewer/singlecell/index.html   &&
ispell -p ../scripts/ispell_english_custom_dict ./viewer/genexp/index.html       &&
ispell -p ../scripts/ispell_english_custom_dict ./viewer/cellspatial/index.html  &&
ispell -p ../scripts/ispell_english_custom_dict ./viewer/arch/index.html         &&
ispell -p ../scripts/ispell_english_custom_dict ./markdown-page/index.html       &&
ispell -p ../scripts/ispell_english_custom_dict ./downloads/index.html
