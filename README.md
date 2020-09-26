# Render as you fetch

Render-as-you-fetch simply refers to not blocking the UI rendering while fetching data. In traditional approaches, we did this:

1. Start fetching data
2. Finish fetching data
3. Start rendering UI

With suspense we can do the following:

1. Start fetching
2. **Start rendering**
3. **Finish fetching**

Essentially, you start rendering pretty much immediately after kicking off the network request.

[See docs]()

<br />

## Goal

The goal here is to take a sample project and implement the render as you fetch pattern.

> Simple? Read on!

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

Point your browser to `http://localhost:6060/`. You should see the following:

<br />

![https://i.imgur.com/hFp7okw.gif](https://i.imgur.com/hFp7okw.gif)

<br />

## App requirement

You will make an API call to fetch a list of users, then fetch their profile details and have these all rendered. See the full requirement below:

Your UI should start with a bare card (or UI section) to hold the result of the initial data fetch i.e the user names. Use the `Card` component provided.

![https://i.imgur.com/UqyonQD.png](https://i.imgur.com/UqyonQD.png)

While waiting for the fetch result, have a loading indicator displayed:

![https://i.imgur.com/7aun6Mq.png](https://i.imgur.com/7aun6Mq.png)

Once the API request is successful, you'll get a list of user names and their IDs. Render the user names.

![https://i.imgur.com/n5MzCT8.png](https://i.imgur.com/n5MzCT8.png)

Immediately after getting the list of user names, begin fetching their corresponding user details (different API requests). The initial network request was a single one. This includes multiple requests for each user.

![https://i.imgur.com/4sutKDE.png](https://i.imgur.com/4sutKDE.png)

While fetching the user details, make sure clicking a user name works, while also rendering a loading indicator.

![https://i.imgur.com/dLYaAxz.png](https://i.imgur.com/dLYaAxz.png)

Make sure each request isn't waiting for the other i.e render a user's detail if the request is successful while waiting for others.

![https://i.imgur.com/4vYuFfm.png](https://i.imgur.com/4vYuFfm.png)

<br />

Here's what my final solution looks like:

![https://i.imgur.com/OIODDbT.gif](https://i.imgur.com/OIODDbT.gif)
