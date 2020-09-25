# Render as you fetch

Render-as-you-fetch simply refers to not blocking the UI rendering while fetching data. In traditional approaches, we did this:

1. Start fetching data
2. Finish fetching data
3. Start rendering UI

With suspense we can do the following:

1. Start fetching
2. **Start rendering**
3. **Finish fetching**

Essentially, you don’t wait for the response to come back before you start rendering. In fact, you start rendering pretty much immediately after kicking off the network request.
