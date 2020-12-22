# gibsonm9.github.io
## TODO
We still need to do the following when we get a chance on Marcus' admin account:
- Change 'source' to the default branch

## Branches
- source is the default branch, which includes all files necessary for development. You should only pull down and work on this branch.
- develop is the branch that the source branch publishes to. To publish to develop, run `npm run deploy`.

## Development
- gatsbyjs.com has a lot of useful documentation

### Important Files and Folders
- src contains the source code of the website
  - src/components contains react components, which in the react framework, are building blocks of a website
  - src/data contains all non-image files (usually things like pdfs for download)
  - src/images contains all images
  - src/pages contains all webpages in the site
- gatsby-config.js contains some plugins needed for proper functioning of the site, including a plugin to create styled components, and one for file downloading.
- package.json specifies all npm libraries installed for use in the app. It also includes scripts you can use for development. The only two you should really need are `gatsby develop`, which enables your local server to start and the website to run so that you can see the changes you make, and `npm run deploy`, which publishes your site. You can add scripts to your liking.

### Important Git Commands
- git add -u
  - stages all changes to existing files for commit
- git add .
  - stages all changes for commit
- git add <FILENAME>
  - stages specific file for commit
- git commit -m "YOUR COMMIT MESSAGE HERE"
  - commits all staged changes
- git push
  - pushes all changes to the remote repository to be accessed by collaborators
- git stash
  - removes all changes made since last commit
- git stash pop
  - reapplies last stashed changes
