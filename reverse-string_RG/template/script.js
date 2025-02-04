function reverseText() {
    const input = document.getElementById('textInput').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').textContent = reversed;
 }