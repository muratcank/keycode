window.addEventListener('keydown', e => {
  const keyText = document.querySelector('#key');
  const codeText = document.querySelector('#code');
  if (e.keyCode === 32)
    keyText.innerText = 'space character';
  else
    keyText.innerText = e.key;
  codeText.innerText = e.keyCode;

})