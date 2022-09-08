#!/bin/bash

# Netlify Deploy Bash Script

PREVIEW="p"
PRODUCTION="d"

 echo -e "\\n"
 echo -e "Deploy or Send Preview Test to Netlify"
 echo -e "== 'p' preview and 'd' production deploy  =="
 echo -e "\\n"

 echo -n "Production or Peview: "
 read -r deployserver

 if [[ ! $deployserver ]]; then
    echo -e "Error: Empty input \\n"
    exit 1
 fi

 if [ "$PREVIEW" == "$deployserver" ]; then
        netlify deploy
 elif [ "$PRODUCTION" == "$deployserver" ]; then
        netlify deploy --prod --dir=public
 else
      echo "Command Not matching"
 fi