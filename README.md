# Rock Paper Scissors Game

*You will need Node.js and git installed.*
To check run the commands:
`node -v`
`git -v`

## Setting up

1. Create an account on GitHub: https://github.com/
2. Fork the repository: https://github.com/humairaasaleh/RockPaperScissors.git ensuring the Owner is set to your account, and the `Copy the main branch only` tickbox is selected. 
3. In the `Code` tab of the repository, select the green `<> Code` dropdown and copy the HTTPS link.
4. On your laptops, create a new empty folder, titling the folder with your names. 
5. Open up VSCode, go to `File` and `Open Folder` and locate the folder you have just created and open that.
6. In VSCode, open up a New Terminal (run the command `pwd` to make sure you are located in your new folder)
7. Enter the command: git clone `paste the HTTPS link from step 3 here` . This should have cloned the github repository to your new folder.
8. Run the command `npm start` which will open up the app in the browser. 


## Git Help:

Git is a method of version control which is used by developers to publish their work online so it can be accessed and shared with their team. This helps when multiple people are working on the same thing. 

You will now each have your own repository that you are working in. To esnure you can access your work from home you will need to push up your code to the repository on github. 

Before making any changes to the code:
* Create a new branch to work on. You will currently be on the `main` branch, but in the working world, you will always work off a separate branch and merge to the main branch when all is completed.
* When running any git commands in the VSCode terminal you will need to be located in the GitHub repository (this is NOT the location of the folder you created in step 4, but is the folder inside that you cloned in step 7). You can do this by right clicking the folder name in the workspace on the left, and selecting `Open In Integrated Terminal`.
* To create a new branch run the command: `git checkout -b insert_name_of_new_branch` . Now you should be on the new branch.

For any changes made to code to push up run the following comands:
1. `git add *` which will add all the changes you made or `git add filename` to only add the given file.
2. `git commit -m "insert a messsage here to state what changes you made"`
3. `git push` to push the changes up to github. If you go to your repository on your github account you should now be able to see your new changes.

Eventually, you will want to merge your new branch to the main branch. You can do this by creating a pull request on the github UI and merging it. Ensure that the base branch is `main` and the `compare` branch is your new branch. 

## Activity 1:

Your first task will be to create a multiplayer Rock Paper Scissors game. It can be as simple or complex as you would like it to be (depending on your coding experience). 

The main functionality to start off with is being able to take in 2 user inputs for their moves, and calculate the winner and output it to the screen. 

Extra things you can add:
* Inputs for player names
* Outputting what each player selected
* Images for the Rock/Paper/Scissors 

## Activty 2:

Have some fun and get creative by developing the Welcome Page for the app. Play around with the different react-bootstrap components. I'd reccommend planning out how you want the page to look by creating a wireframe (template of the page). This is commonly done in the working world when developing. 

Useful links to create a wireframe on:
* https://wireframe.cc/
* https://app.diagrams.net/

## Extension: 

This is a stretch task which will be quite challenging, but is something to take home to work on. Create a leaderboard which stores the winners/scores from each game played.

## Developers Guide

* In the browser of the app: right click, select `Inspect`, then naviagate to the `Console` tab. This is where you will see any errors or if you log anything to the console.
* Remember, if you are stuck Google is your best friend. 
* React Bootstrap Docs: https://react-bootstrap.github.io/
* Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf
