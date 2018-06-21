module.exports = {
    missingGithubAPI: `
    **Error: Github api token is missing**
       1. Please create a .env file in the root directory of this project
       2. Then add GITHUB_API_TOKEN=your_github_token line
       3. Restart the project
        
       Note: The .env file is part of .gitignore so your will remain local`,

    serverPort: `The Server is running at port:`
}