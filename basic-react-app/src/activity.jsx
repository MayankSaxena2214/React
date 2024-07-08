function Activity({username,textColor}){
    let styles={color:textColor};
    return (
        <h1 style={styles}>Hello {username}</h1>
    );
}

export default Activity;