# Assignment

- You are **not** obligated to implement all the requirements, quality over quantity.
- You are free to change anything in the code as long as the **cytoscape library** is still in use with the given example graph.
- You may use the entire page freely, you can use the graph's canvas as you please. Focus on provide a smooth user experience while implementing the requirements.
- Instructions are provided on how to get started in sections below.
- Good Luck!

## Requirements

1. Allow the user to click a node and visualize information from it. (name, indegree, outdegree, any other you deem important)
2. Highlight all the edges connected to the selected node after click. (currently the node turns blue after clicking, do the same for it edges).
3. Allow the user to change the name of a node. (Does not need to be persistent, after refreshing the page the nodes could be the same as they originally were)
4. Filter nodes based on their names (Preferably, in real time while the user types)
5. Allow the user to select a set of nodes and collapse them all into a single node (cluster) and also, expand that cluster back into the original set of nodes that form it.
6. When clicking a cluster get its data exactly as in requirement 1, but this time also, include the amount of nodes within it.
7. Export the current graph as a json file. It could be similar to the original one we load, but this time it should also reflect the changes made by the user (clusters, new names, excluding the filtered nodes, etc)
8. Import the graph from requirement 7

## Bonus

9. Provide a way for the user to compute the shortest path (if exists any) from one node to another. Higlight the path.
10. Allow the user to add notes to a cluster (like summary). If you have implemented point 5, then when a cluster is formed, display the top 'k' keywords based on all the nodes within the cluster.
11. Anything you think that could be interesting.

## Submission

1. Make a fork of this repo
2. Implement your code with proper documentation. Tell us your thought process on implementing one or all of the requirements.
3. Share your forked repo link with us once you have completed the implementations.

You should checkout cytoscape documentation here https://js.cytoscape.org/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Documentation

## Introduction

To facilitate styling, I decided to make use of the TailwindCSS library. Documentation can be found at [https://tailwindcss.com](https://tailwindcss.com/docs/guides/create-react-app)

## Requirements

#### Requirement 1 (completed)

> Allow the user to click a node and visualize information from it. (name, indegree, outdegree, any other you deem important)

#### Requirement 2 (completed)

> Highlight all the edges connected to the selected node after click. (currently the node turns blue after clicking, do the same for it edges).

#### Requirement 3 (completed and persistent)

> Allow the user to change the name of a node. (Does not need to be persistent, after refreshing the page the nodes could be the same as they originally were)

#### Requirement 4

> Filter nodes based on their names (Preferably, in real time while the user types)

#### Requirement 5

> Allow the user to select a set of nodes and collapse them all into a single node (cluster) and also, expand that cluster back into the original set of nodes that form it.

#### Requirement 6

> When clicking a cluster get its data exactly as in requirement 1, but this time also, include the amount of nodes within it.

#### Requirement 7

> Export the current graph as a json file. It could be similar to the original one we load, but this time it should also reflect the changes made by the user (clusters, new names, excluding the filtered nodes, etc)

#### Requirement 8

> Import the graph from requirement 7
