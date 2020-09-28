# Render as you fetch

![https://i.imgur.com/0y5iDgE.gif](https://i.imgur.com/0y5iDgE.gif)

Render-as-you-fetch simply refers to not blocking the UI rendering while fetching data. In traditional approaches, we did this:

1. Start fetching data
2. Finish fetching data
3. Start rendering UI

With suspense we can do the following:

1. Start fetching
2. **Start rendering**
3. **Finish fetching**

Essentially, you start rendering pretty much immediately after kicking off the network request.

[See docs](https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense)

<br />

## Goal

The goal here is to take a sample project and implement the render as you fetch pattern. Sounds simple? Don't get cocky yet, huh? 😉

Read on!

<br />

## Running the starter application

<br />

1️⃣ **Clone the repository**

```bash
git clone https://github.com/ohansemmanuel/react_suspense_concurrent_app.git
```

2️⃣ **Install dependencies**

```bash
npx yarn
```

3️⃣ **Start the app**

```bash
npx yarn start
```

<br />

Point your browser to `http://localhost:3000/`. You should see the following:

<br />

![https://i.imgur.com/4cSn98f.png](https://i.imgur.com/4cSn98f.png)

<br />

4️⃣ **View the UI components**

To make the challenge focused on logic, UI components have been built for you. To view them, run:

```bash
npx yarn start:dev
```

Point your browser to `http://localhost:6060/`. You should have a React [Styleguidist](https://react-styleguidist.js.org/) server running. Inspect the components and live editable code.

<br />

## App requirement

You will make an API call to fetch a list of users, then fetch their profile details and have these all rendered.

See the full requirement below:

Your UI should start with a bare card (or UI section) to hold the result of the initial data fetch i.e the user names. Use the `Card` component provided.

![https://i.imgur.com/UqyonQD.png](https://i.imgur.com/UqyonQD.png)

While waiting for the fetched result, have a loading indicator displayed:

![https://i.imgur.com/7aun6Mq.png](https://i.imgur.com/7aun6Mq.png)

Once the API request is successful, you'll get a list of user names and their IDs. Render the user names.

![https://i.imgur.com/n5MzCT8.png](https://i.imgur.com/n5MzCT8.png)

Immediately after getting the list of user names, begin fetching their corresponding user details (different API requests). The initial network request was a single one. This includes multiple requests for each user.

![https://i.imgur.com/4sutKDE.png](https://i.imgur.com/4sutKDE.png)

While fetching the user details, make sure clicking a user name works, while also rendering a loading indicator.

![https://i.imgur.com/dLYaAxz.png](https://i.imgur.com/dLYaAxz.png)

Make sure the user details requests are parallelized i.e isn't waiting for the other to be completed first
![https://i.imgur.com/eHwhm9e.png](https://i.imgur.com/eHwhm9e.png)

Make sure the UI is incrementally updated for each user detail request

![https://i.imgur.com/4vYuFfm.png](https://i.imgur.com/4vYuFfm.png)

<br />

Here's what a working solution looks like:

![https://i.imgur.com/P9YVQqJ.gif](https://i.imgur.com/P9YVQqJ.gif)

<br />

## Chief Requirement

Arguably the most important requirement here is to make sure **start rendering immediately after kicking off the network request**. You know you're on the wrong path if you do this:

```jsx
// fetchDetails is fired after initial render :(
useEffect(() => fetchDetails(), []);
```

You'd want to use a suspense library for this one. e.g. Recoil or Relay.

## API requests/Server details

See the `/api` directory for api query functions `getUserNames` and `getUserDetails`. These point to the `/users` and `/users/${userId}` respectively.

For this to work, you need to run the accompanying [server](https://github.com/ohansemmanuel/react_suspense_concurrent_app_server) to which these requests are proxied.

Clone the repo:

```bash
git clone https://github.com/ohansemmanuel/react_suspense_concurrent_app_server.git
```

Install dependencies:

```bash
npx yarn
```

and start the server:

```bash
npx yarn start
```

visit http://localhost:3001/

<br />

## Endpoints

| route         |           resource            |
| ------------- | :---------------------------: |
| /             |     default user details      |
| /users        | list of user names (with IDs) |
| /users/\${id} |     specific user details     |

## Challenge Solution

- See branch 'recoil' for recoil solution
