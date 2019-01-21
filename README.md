## How It Works

Once the home page mounts, sends a GET request to the React Issues github API endpoint.

Scripts transform data response to store only relevant data in the global state.

Once the state updates presentational components re-render to show
a scrollable list of first 25 issues on the React github issues page.

Each issue title is a hyperlink to the issue's github URL.

## Run Locally

`yarn install && yarn run start`

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - frontend UI framework
* [Redux](https://redux.js.org/) - state management
