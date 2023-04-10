# Fit4summ
Learning from scratch 

The useState hook is used to create two state variables: search and bodyParts. The search state is used to store the user's search input, and the bodyParts state is used to store the list of body parts available for filtering exercises.

The useEffect hook is used to fetch the list of available body parts from an external API when the component mounts for the first time. The fetched data is used to set the bodyParts state.

The handleSearch function is triggered when the user submits the search form. If the search state is not empty, it fetches the list of exercises from an external API, filters the data based on the user's search input, and sets the filtered exercises using the setExercises function.

The TextField component is a Material-UI component used to render the search bar. It takes in various props such as value, onChange, placeholder, and type. The value prop is set to the search state, and the onChange prop is used to update the search state whenever the user types into the search bar. The placeholder prop sets a placeholder text for the search bar, and the type prop specifies the input type as text.

The search works by filtering a list of exercises based on the user's search input. When the user submits the search form by clicking the search button or pressing the enter key, the handleSearch function is triggered.

Inside the handleSearch function, the code fetches a list of exercises from an external API and filters the data based on the user's search input. The filtering logic checks whether the exercise's name, target muscle group, equipment used, or body part includes the search input string, and returns a new list of exercises that match the search criteria

