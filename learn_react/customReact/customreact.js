function customRender(reactElement, mainContaier){

    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // mainContaier.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props){
        if(prop == "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    mainContaier.appendChild(domElement);
    
}



const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const mainContaier = document.querySelector('#root')

customRender(reactElement, mainContaier)