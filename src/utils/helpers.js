export const getRandom = (min, max) => {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    );
}

export const decodeHtml = (html) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}