# Shipt Tic Tac Toe

Hello Shipt!

Here is my submission for the mobile tic tac toe game. During the assessment, I had to make some assumptions and ran into some constraints that I will explain below. 

Assumptions:
I assumed Player 1 to be X and Player 2 to be O. 
I also assumed that players may only start a new game after the current one has been completed. 

Constraints:
Within App.js I used two hooks to toggle switching out the game board and the game result. Initially, I intended to use one but React-Native had a odd rendering issue while using one state to make a Modal and View component simultaneously change. 

While visiting the URL to view the project file, you may notice that the game result appears below the game board while trying to view the app in a web view. This is because a possible bug in the Modal component is not supported in web browsers(https://github.com/expo/snack-web/issues/34). iOS and Android simulators should be fully functional. 

This project was created using expo, a react-native framework. I have included a link below to view the project.

https://snack.expo.io/@dpmartin/tic-tac-toe

Thank you! 

# Expo Instructions below

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by clicking the **Run** button or use the simulator by clicking **Tap to Play**. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Export** your project and use it with [expo-cli](https://docs.expo.io/versions/latest/introduction/installation.html).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the **Embed** button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.io).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack-web).
