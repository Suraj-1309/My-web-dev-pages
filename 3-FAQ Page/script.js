function q1(){
    var img = document.getElementById('img1');
    if(img.src.includes('icon-plus.svg')){
        img.src = 'images/icon-minus.svg';
    }
    else{
        img.src = 'images/icon-plus.svg';
    }

    var text = document.getElementById('ans1');
    let text2 = document.getElementById('ans2');
    let img2 = document.getElementById('img2');
    let text3 = document.getElementById('ans3');
    let img3 = document.getElementById('img3');
    let text4 = document.getElementById('ans4');
    let img4 = document.getElementById('img4');
    if(text.innerText === ""){
        text.innerText = "The frontend of a website or application is the part that users interact with directly. It encompasses everything you see on a webpage: layout, design, text, images, buttons, and navigation. Frontend development involves using HTML to structure content, CSS to style it, and JavaScript to add interactivity. Frontend developers ensure that websites are visually appealing, functional, and responsive across various devices and browsers. Modern frameworks like React, Vue, and Angular enhance frontend capabilities, making the development process more efficient and scalable. In essence, the frontend bridges user experience and backend functionality, creating seamless interactions";
        text.style.padding = "6px 0px 25px 0px";
        text2.innerText = "";
        text2.style.padding = "0px";
        img2.src = 'images/icon-plus.svg';
        text3.innerText = "";
        text3.style.padding = "0px";
        img3.src = 'images/icon-plus.svg';
        text4.innerText = "";
        text4.style.padding = "0px";
        img4.src = 'images/icon-plus.svg';
    }
    else{
        text.innerText = "";
        text.style.padding = "0px";
    }
}


function q2(){
    var img = document.getElementById('img2');
    let text2 = document.getElementById('ans1');
    let img2 = document.getElementById('img1');
    let text3 = document.getElementById('ans3');
    let img3 = document.getElementById('img3');
    let text4 = document.getElementById('ans4');
    let img4 = document.getElementById('img4');
    if(img.src.includes('icon-plus.svg')){
        img.src = 'images/icon-minus.svg';
        text2.innerText = "";
        text2.style.padding = "0px";
        img2.src = 'images/icon-plus.svg';
        text3.innerText = "";
        text3.style.padding = "0px";
        img3.src = 'images/icon-plus.svg';
        text4.innerText = "";
        text4.style.padding = "0px";
        img4.src = 'images/icon-plus.svg';
    }
    else{
        img.src = 'images/icon-plus.svg';
    }

    var text = document.getElementById('ans2');
    if(text.innerText === ""){
        text.innerText = "HTML (HyperText Markup Language) is the standard language for creating web pages and web applications. It uses a series of elements and tags to structure content on the web, such as headings, paragraphs, links, images, and other multimedia. Each element is enclosed in angled brackets, like <tag>content</tag>. HTML also allows the embedding of scripts, like JavaScript, for dynamic behavior and stylesheets (CSS) for design and layout. As the backbone of web content, HTML is fundamental for web development, making it essential for anyone looking to build or modify websites."
        text.style.padding = "6px 0px 25px 0px";
    }
    else{
        text.innerText = "";
        text.style.padding = "0px";
    }
}


function q3(){
    var img = document.getElementById('img3');
    if(img.src.includes('icon-plus.svg')){
        img.src = 'images/icon-minus.svg'
    }
    else{
        img.src = 'images/icon-plus.svg'
    }

    var text = document.getElementById('ans3');
    let text2 = document.getElementById('ans1');
    let img2 = document.getElementById('img1');
    let text3 = document.getElementById('ans2');
    let img3 = document.getElementById('img2');
    let text4 = document.getElementById('ans4');
    let img4 = document.getElementById('img4');
    if(text.innerText === ""){
        text.innerText = "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of web pages. CSS allows developers to separate content from design, making it easier to maintain and update websites. It supports responsive design, enabling web pages to adapt to different screen sizes and devices. By using selectors and properties, CSS can apply styles to HTML elements in a structured and hierarchical manner. In essence, CSS enhances the user experience by making websites visually appealing and user-friendly."
        text.style.padding = "6px 0px 25px 0px";
        text2.innerText = "";
        text2.style.padding = "0px";
        img2.src = 'images/icon-plus.svg';
        text3.innerText = "";
        text3.style.padding = "0px";
        img3.src = 'images/icon-plus.svg';
        text4.innerText = "";
        text4.style.padding = "0px";
        img4.src = 'images/icon-plus.svg';
    }
    else{
        text.innerText = "";
        text.style.padding = "0px";
    }
}


function q4(){
    var img = document.getElementById("img4");
    if(img.src.includes("icon-plus.svg")){
        img.src = "images/icon-minus.svg";
    }
    else{
        img.src = "images/icon-plus.svg"
    }

    var text = document.getElementById("ans4");
    let text2 = document.getElementById('ans1');
    let img2 = document.getElementById('img1');
    let text3 = document.getElementById('ans3');
    let img3 = document.getElementById('img3');
    let text4 = document.getElementById('ans2');
    let img4 = document.getElementById('img2');
    if(text.innerText === ""){
        text.innerText = "JavaScript (JS) is a dynamic programming language used primarily in web development to create interactive and dynamic web pages. It allows developers to implement complex features such as animations, form validations, and content updates without reloading the page. JavaScript works alongside HTML and CSS, enhancing the user experience by enabling features like dropdown menus, sliders, and responsive navigation bars. It runs on the client-side (in the browser), but with the advent of Node.js, it can also be used server-side. JavaScript's versatility and ease of use make it an essential tool for modern web development."
        text.style.padding = "6px 0px 25px 0px"; 
        text2.innerText = "";
        text2.style.padding = "0px";
        img2.src = 'images/icon-plus.svg';
        text3.innerText = "";
        text3.style.padding = "0px";
        img3.src = 'images/icon-plus.svg';
        text4.innerText = "";
        text4.style.padding = "0px";
        img4.src = 'images/icon-plus.svg';  
    }
    else{
        text.innerText = "";
        text.style.padding = "0px";
    }

}
