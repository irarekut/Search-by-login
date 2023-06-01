/* eslint-disable no-promise-executor-return */
/* eslint-disable arrow-body-style */
import { Octokit } from 'octokit';

const octokit = new Octokit({});

export default async function SearchUsers(login, sortBy, order, page, rel) {
  try {
    const users = await octokit.paginate(
      `GET /search/users?q=${login}&sort=${sortBy}&order=${order}&page=${page}&rel=${rel}`,
      {
        per_page: 30,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
      (response, done) => {
        const ret = { total: response.data.total_count, items: [] };
        ret.items = response.data.map((user) => {
          if (user.login.includes(`${login}`)) {
            done();
          }
          return {
            login: user.login,
            url: user.html_url,
            img: user.avatar_url,
          };
        });
        return ret;
      }
    );
    const result = await users;
    return result[0];
  } catch (e) {
    console.error(e);
  }
}
