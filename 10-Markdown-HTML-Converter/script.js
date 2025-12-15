const convertMarkdown = () => {

  // for h1
  const h1regex = /^# (.*)$/gm;
  const h1updated = markdownInput.value.replace(h1regex, (_, content) => heading1(content));

  // for h2
  const h2regex = /^## (.*)$/gm;
  const h2updated = h1updated.replace(h2regex, (_, content) => heading2(content));

  // for h3
  const h3regex = /^### (.*)$/gm;
  const h3updated = h2updated.replace(h3regex, (_, content) => heading3(content));

  // for strong
  const boldregex = /\*\*(.+?)\*\*/g;
  const boldupdated = h3updated.replace(boldregex, (_, content) => bold(content));

  const bold2regex = /__(.+?)__/g;
  const bold2updated = boldupdated.replace(bold2regex, (_, content) => bold(content));


  // for italic
  const italicregex = /\*(.+?)\*/g;
  const italicupdated = bold2updated.replace(italicregex, (_, content) => italic(content));

  const italic2regex = /_(.+?)_/g;
  const italic2updated = italicupdated.replace(italic2regex, (_, content) => italic(content));


  // for image 
  const imageregex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const imageupdated = italic2updated.replace(imageregex, (_, alt, src) => img(alt, src));
  
  // for links
  const urlregex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const urlupdated = imageupdated.replace(urlregex, (_, linkText, urlsrc) => url(urlsrc, linkText));


  // for blockquote
  const blockquoteregex = /^\s*> (.+)$/gm;
  const bqupdated = urlupdated.replace(blockquoteregex, (_, content) => bq(content));

  rawHTMLOutput.textContent = bqupdated;
  htmlPreview.innerHTML = rawHTMLOutput.textContent;

  return bqupdated;
}


function heading1(str){
  return `<h1>${str}</h1>`;
}

function heading2(str){
  return `<h2>${str}</h2>`;
}

function heading3(str){
  return `<h3>${str}</h3>`;
}

function bold(str){
  return `<strong>${str}</strong>`;
}

function italic(str){
  return `<em>${str}</em>`;
}

function img(alt, src){
  return `<img alt="${alt}" src="${src}">`;
}

function url(urlSrc, linkText){
  return `<a href="${urlSrc}">${linkText}</a>`;
}

function bq(str){
  return `<blockquote>${str}</blockquote>`
}

const markdownInput = document.querySelector('#markdown-input');

const rawHTMLOutput = document.querySelector('#html-output');

const htmlPreview = document.querySelector('#preview');

markdownInput.addEventListener('input', convertMarkdown);

