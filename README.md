Imports:
React, useState, and useEffect are from the React library, used for creating components and managing state and side effects in functional components.
BrowserRouter, Route, Routes, and Link are from react-router-dom, used for handling routing in the application.
ItemList and Cart are imported from local files ('./ItemList' and './Cart'), representing components that display a list of items and the shopping cart.
Component Definition:
App is a functional component defined using const.
State Management:
useState hooks are used to declare and manage state variables:
items: manages the list of items with their quantities.
cart: manages items added to the shopping cart.
newItem: manages the input value for adding new items.
currentTime: manages the current time, initialized with the current date.
showPopup: manages the visibility of the "order successful" popup.
Side Effects:
useEffect is used to perform side effects in functional components. Here, it sets up a timer that updates currentTime every second (1000 milliseconds).
setInterval is used to execute the timer logic.
The cleanup function returned from useEffect clears the timer interval when the component unmounts ([] dependency array ensures it runs only once on mount).
Routing:
The Router component from react-router-dom provides routing capabilities for the application.
Link components are used to navigate between different routes ('/' for items and '/cart' for the cart).
Routes and Route components define the paths and corresponding components (ItemList and Cart) to render based on the current URL.
Props:
Props are passed to ItemList and Cart components to provide them with necessary data (items, newItem, cart) and functions (handleInputChange, handleAddItem, etc.).

#output

![sum1](https://github.com/SrujanNadimpalli/Simple-Cart/assets/127650135/cca5221c-720b-4aa5-83ea-3bfaefc9273f)

![sum2](https://github.com/SrujanNadimpalli/Simple-Cart/assets/127650135/cf34067f-4791-4499-9fff-b0d747730573)


![sum3](https://github.com/SrujanNadimpalli/Simple-Cart/assets/127650135/5240b28f-ff13-47ee-acc1-396dcd12e2a4)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
"# Simple-Cart" 
