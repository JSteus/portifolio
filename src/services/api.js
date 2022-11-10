import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GPAK
});

export async function getMyRepos() {
  try {
    const result = await octokit.request("Get /users/{username}/repos", {
      username: "JSteus",
    });

    return(result)

  } catch (error) {
    return `Error! Status: ${error.status}. Message: ${error.response.data.message}`
  }
}