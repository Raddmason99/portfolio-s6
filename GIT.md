## GIT Explained
### Git setup help
| Steps | Explanation | Command | 
| ------------- | ------------- | ------------- |
| step 1 | clone the Repository | git clone url |
| step 2 | cd into the repository folder | cd foldername |
| step 3 | instal dependencies* | npm install |
| step 4 | create a new remote branch | git checkout -b newbranchname |
| step 5 | push to the new remote branch | git push --set-upstream origin newbranchname |

* *Make sure NodeJS is installed on your computer, else download [here](https://nodejs.org/en/download/).*

### Git use help
| Steps | Explanation | Command | 
| ------------- | ------------- | ------------- |
| step 1 | cd into the repository folder | cd foldername |
| step 2 | add all changes to stage | git add . |
| step 3 | commit all changes | git commit -m "update" |
| step 4 | push all updates to git | git push |

*Before pushing to your working branch and creating a merge request, pull from the master and fix all merge conflicts!*