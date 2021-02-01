# Vuejs workshops

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


## TASK

Your second task is create very simple BaseSearch component following below instructions and Vuejs patterns

1.  Define props: icon, text. placeholder.
2.  Emit event to parent component (Home) from BaseSearch component
3.  Inside parent component (Home) do API request using fetchCountries available in /api folder
4.  Create hook useCountryNameSearch which gets countries and add handle updating search value there
5. Add  this line inside setup : const regions = ref(["Europe", "Africa", "Americas", "Asia", "Oceania"]);
5. Use useCountryNameSearch hook inside Home component

Now, you can go to branch named `task-3` and verify your solution and move forward. 
