
Project Initialization command :

`npm run dev`

`npm run server`

# Answer for question 1 : 

As several developers are contributing with their own branch, so following a convention while creating hotfix branch like adding developer name initials would become handly.
if the hotfix addresses a bug related to the rendering issue, the branch could be named:
`hotfix/render-issue-AF`     (here AF is the initial of the developer working on it)

`git checkout main`

`git pull origin main`

`git checkout -b hotfix/render-issue-AF`

I will switch to the main branch then pull the latest changes in the main remote repository. After that I will create and switch to the new branch and work on that branch.

After doing the needed changes I will commit and push hotfix branch to the remote repo

`git push origin hotfix/render-issue-AF`

Creating a Pull Request (PR)

I’ll go to the remote repo page on github
I’ll create a new pull request , select the main or production branch and `compare with hotfix/render-issue-AF branch `
Fill in the pull request details

Title: Render flickers when loading and showing the data

Description: detail information about the fix

Reviewers: select relevant team members as reviewers.
 Create Pull Request

After team member reviews or requested any change, after that approves the request, me or any team member will merge the pull request.
After merging, will delete the hotfix branch from the remote repository.
After that I will pull the latest changes from the main branch.
`git checkout main
git pull origin main`

# Answer for question 2 : 
In every menu Item object, menuItems inside the category  array indicates ids mapped to real menuItems,  a “has” relationship. To resolve this i’d approach creating a function which in the argument will take the original array. Then I’ll map to get each menu object and start returning an object which will have the same type, but inside the category this time there needs some changes, I’ll again perform a map function to dive into category array, it will return the same name but in case of items, I will first map this category to pull out the id(which indicates to new id) and then I’ll run a “Find” function inside that which will take every item as argument and compare that item’s id to menuItems id and will return that information. So basically by using map and find function it can be done efficiently. This way I will assign the function return to a new variable and use this variable when working to render.

