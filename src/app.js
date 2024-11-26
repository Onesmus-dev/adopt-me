const pet = (props)=>{
    return React.createElement("div",{},[
        React.createElement("h1", {},props.name),
        React.createElement("h2", {},props.animal),
        React.createElement("h2", {},props.breed),

    ]);
};
const App = () => {
    return React.createElement(
        "div",
        {},
        [React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(pet,{
            animal: "Dog",
            name: "Nala",
            breed: "Havanese",
        }),
        React.createElement(pet,{
            animal: "Dog",
            name: "Mufsa",
            breed: "German",
        }),
        React.createElement(pet,{
            animal: "Cat",
            name: "Pickles",
            breed: "Mixed",

        }),
    ]);
};
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Use createRoot instead of createElement
root.render(React.createElement(App)); // Render the App component