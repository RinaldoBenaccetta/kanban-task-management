#!/usr/bin/env sh

# abort on errors
set -e

# give the repository infos for deploy
# No spaces around = sign
git_username=your_git_user_name
# shellcheck disable=SC1068
git_repo=name_of_the_app_repository
# This is the branch that will be created and that will contain the packed app for production.
git_production_branch=prod

# switch to main and reset if main branch exists, otherwise, create it.
# https://stackoverflow.com/questions/26961371/switch-on-another-branch-create-if-not-exists-without-checking-if-already-exi
git switch main

## copy backend to backend before dist
rsync -av --exclude='node_modules' --exclude='.nyc_output' --exclude='test' backend/ dist/

# dist
npm run build

# navigate into the dist output directory
cd dist

git init
# switch to main and reset if main branch exists, otherwise, create it.
git switch -C main
git add -A
git commit -m 'deploy'

# deploy to repo branch
git push -f git@github.com:$git_username/$git_repo.git main:$git_production_branch

cd -
