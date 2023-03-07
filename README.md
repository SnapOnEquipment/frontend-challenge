## Cat Club

Snap-on has learned that workshop staff:
- perform best when allowed frequent breaks from their tasks
- may not be allowed to use their phones during work for entertainment
- love cats

Monica, the Common UI product owner, has asked you to improve a prototype for a Snap-on Cat Club. The Cat Club will ship as part of the Common UI suite used on our new machines.

The idea is that the workers in any particular workshop can maintain a herd of cats. Workers can grow their herds using Snaps (coins) they earn while performing work tasks.

### Cat Club prototype features:
#### the active user can:
- buy a new cat with Snaps
- view the cats in their herd

The user's cat herd consists of Cat Cards. Monica has generated an idea for what a Cat Card could look like and has created a simple base app that you can use to get started. Cat images and details are fetched from https://api.thecatapi.com/. You should apply for a developer license and use that in the local configuration file.

As this is a new feature for Common UI, Monica has asked that you create the prototype in a demonstration mode so that she may show the features to management. She has suggested that you create a footer bar that includes a selector for the active user and buttons to simulate performing tasks. 

### Demonstration features:
- tasks that earn Cat Coins can be simulated by clicking a button thus, increasing the bank of Cat Coins of the active user. Assume that there are two tasks at launch. Car Align adds 15 coins. Truck Align adds 25 coins.
- switch the active user

### Your tasks: 
- style the CatCard component
- create the CatCardCreator component

### Data
Mock data is provided in ./db.json and is served by json-server. You can run the server with `npm run db`. The server is available at http://localhost:3001

