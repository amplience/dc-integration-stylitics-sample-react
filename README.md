# Amplience Stylitics Sample React app

![Amplience Stylitics Sample React app)](./docs/media/stylitics-sample-1.png)

This sample React application showcase the use of the [amplience/dc-integration-stylitics](https://github.com/amplience/dc-integration-stylitics) library that allows you to easily convert a stylitics Content Item in Dynamic Content to configure and instantiate a Stylitics Widget.

The sample React application connects to Dynamic Content to retrieve Stylitics Content Items from the `styliticsdemo` demonstration hub using [Content Delivery v2 API](https://amplience.com/developers/docs/apis/content-delivery/content-delivery-overview).


## Stylitics Content Items

The following Content Items are fetched:

|Content Item|Delivery key|
|------------|------------|
|Stylitics - Generic Example|`stylitics/generic-example`|
|Stylitics - Classic Example|`stylitics/classic-example`|
|Stylitics - Hotspots Example|`stylitics/hotspots-example`|
|Stylitics - Hotspots Example 2|`stylitics/hotspots-example-2`|
|Stylitics - Moodboard Example|`stylitics/moodbaord-example`|
|Stylitics - Moodboard Example 2|`stylitics/moodbaord-example-2`|
|Stylitics - Main and Detail Example|`stylitics/main-and-detail-example`|
|Stylitics - Gallery Example|`stylitics/gallery-example`|
|Stylitics - Gallery Example 2|`stylitics/gallery-example-2`|

## Using a different Dynamic Content hub

You can point to a different hub by creating a `.env.local` file at the root of your project set the following property and restart the application:

```
REACT_APP_AMPLIENCE_DC_HUB=<your hub name>
```

## Sample code

The following code is using the `dc-integration-stylitics` library, `item` is the content from the Content Item:

```ts
import { fromContentItem, createWidget, StyliticsWidget } from 'dc-integration-stylitics';

...

const args = fromContentItem(item as any);

createWidget(target, args).then((widget: StyliticsWidget) => {
    if (active) {
        widgetInstance = widget;
        widget.start();
    } else {
        widget.destroy();
    }
})
```

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Node version: `18.x`

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
