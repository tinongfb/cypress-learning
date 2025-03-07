<<<<<<< HEAD
# cypress-learning
first cypress project: learning cypress
=======
# Real World Testing with Cypress - Course App

This application is for the [Testing your first application course](https://learn.cypress.io/testing-your-first-application) on [learn.cypress.io](https://learn.cypress.io/).

The `start` branch is the main branch for this repo and is the starting point for the course. The [final](https://github.com/cypress-io/cypress-realworld-testing-course-app/tree/final) branch contains the completed tests.
>>>>>>> 2564e60 (initial commit - Cypress project 1)

# managing git: https://chatgpt.com/share/67c94402-64b8-800d-bf12-c746f043c1e7

# https://learn.cypress.io/
#lesson 1:
>install latest LTS node js (not current)
>install vs code
>download the zip file of the start branch https://github.com/cypress-io/cypress-realworld-testing-course-app
>open the folder of the zip
>open terminal and check node "node -v"
>check "npm -v"
>dependencies "npm install"
>open in browser localhost:3000 >>see lesson course

#lesson 2:
>install cypress>vscode in terminal "npm install cypress --save-dev"
>"npx cypress open"
>select E2E testing
>cypress shows all files it will create/configure for the test
>choose which browser to run test in, then restart cypress to load this browser>then after choose browser, select start E2E
>create new empty spec
>rename the file to "/home.cy.ts" because this is test for home page
>spec file breakdown: open folder: cypress>e2e>home.cy.ts
>there is a describe function with 2 arguments, 1-string for what this spec if for
  >>2-callback function js
  >>within is the it block, which is the actual test, add link to the app URL in cy.visit
  >>try run, but this will error since you havent started your local dev server

#Run local dev server,
>terminal: npm run dev
>new terminal run cypress: npx cypress open

#to write cases
>>see command in home.cy.ts the spec file created
>can do beforeEach for the cy.visit("url")
>can do custom commands for data-test e.g. get becomes "getByData" etc by adding it on the e2e>support>commands.ts