## GETTING STARTED
- Clone this repository.
- Create a new repo in your Github account. Set it to be a public repo.
- Copy the new repo SSH path.
- Open the project in your favorite IDE. Start a terminal session.
- Update/change the remote origin path with to the new SSH path **OR** add a new path (f.i "solved" or "destination"). [Github's git remote actions docs](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories).
- Push the main/master branch to the new repository.
- Run ```npm i``` to install dependencies and packages.
- Start solving the exercises, following the "HOW IT WORKS" section.

## BEFORE YOU START
Remember, that functions require arguments and every function must return something.

## HOW IT WORKS
- The repo has 16 files (p1e1.js .. p2e16.js). Each file includes the task description, a function declared, data imported, and a placeholder for your code. 
- Each file name contains the part number and the exercise number. "p1e1" is part one, exercise one, "p1e2" is part one exercise two, and so on.
- Open p1e1.js file and start writing functions' code in the "Your code" placeholder to achieve the goals described.
- Once you are done run the test command ```npx vitest --run p1e1``` in the command line, where "p1e1" is the current file name you are in. This will start the test environment and show the passed and failed tests for the current code you have written.
- Please pay attention to the file name in the end of the command. Every file requires it\'s own file name in the end of the command to test the function in that file.
- If the test results have all tests passed (no red comments), consider it finished successfully sn switch to the next exercise file.
- If any of the tests fails, refactor the code and run the test command after you've fixed the function. Please, don't switch to the next exercise file until the current one is finished successfully.
- The goal is to write proper code for every exercise file and pass ALL tests successfully.

### CAUTION
Please, do **NOT** change or update:

- Functions' or functions' arguments or their names.
- Files in the "data" folder.
- Files in the "test" folder.

You can only write your code in the "Your code goes here..." placeholder in each file.

Changing the files listed above may cause tests failure.
You can always restore those file's initial state with ```git restore <fileName>``` command.

### HOW TO SUBMIT
- Commit and push the changes to your repository (the one you have created on step 2 of GETTING STARTED).
- Submit the zipped txt file with a repo link on the exercise page in devslopes course.
