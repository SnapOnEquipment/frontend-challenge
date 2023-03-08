## Cat Club

Snap-on has learned that workshop staff:
- perform best when allowed frequent breaks from their tasks
- may not be allowed to use their phones during work for entertainment
- love cats

Monica, the Common UI product owner, has asked you to improve a prototype for a Snap-on Cat Club. The Cat Club will ship as part of the Common UI suite used on our new machines.

The idea is that the workers in any particular workshop can maintain a herd of cats. Workers can grow their herds using Snaps (coins) they earn while performing work tasks. The Cat Club will be a place where workers can view their herds and interact with them.

The user's cat herd consists of Cat Cards. Users grow their herd by using the Cat Card Creator component. Monica has generated a simple mock-up for what a Cat Card Creator could look like and has created a simple base app with user data that you can use to get started. Cat images and details are sourced from https://api.thecatapi.com/. You should apply for a developer license and use that in the local configuration file.

As this is a new feature for Common UI, Monica has asked that you add a demonstration mode so that she may show the features to management. She has suggested that you create a footer bar that includes a selector for the active user. She also noticed that the images from thecatapi.com are not the same size so she would like them to auto-fit in a consistent way since all the Cat Cards should be the same size.


### Your tasks: 
- style the CatCard component
- fix the problem with the image sizes
- create the CatCardCreator component. It should allow the user to select a cat image and name their cat. The user should be able to save the cat to their herd. Keep things simple and just use the random cat image from the API for now. The user should be able to get a new random cat image by clicking on the reload icon.

### Data
Mock data is provided in ./db.json and is served by json-server. You can run the server with `npm run db`. The server is available at http://localhost:3001

