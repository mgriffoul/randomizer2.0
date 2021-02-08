# randomizer2

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Randomizer

Is a little application that let you configure your team, and randomize it to obtain a random running order.

To add or remove team members, just go in src/team.config.ts. Use getTeamMemberList to return an Array populated with
each member matching TeamMember interface. Place the new member's avatar at the location src/assets/avatar/ and report
the file name in the appropriate TeamMember as 'avatarFileName' property.

Ex : I add Jean Michel.
I have a picture of Jean Michel, named jm.png that i paste in my src/assets/avatar/ folder.
Then in the team.config.ts file, i add :

```typescript
getTeamMemberList = (): TeamMember[] => {
    return [
        
        // (...)
        
      {
        firstName: "Jean-Michel",
        avatarFileName: "jm.png",
        presence: true,
        order: 0
      }
    ];
};
```
