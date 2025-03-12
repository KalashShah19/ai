// Wait for the Transformers.js library to load
window.addEventListener('load', async () => {
    // Initialize the text generation pipeline
    const { pipeline } = window.Transformers;
    const generator = await pipeline('text-generation', 'gpt2');
  
    // Get references to DOM elements
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const generateBtn = document.getElementById('generateBtn');
  
    // Add event listener to the generate button
    generateBtn.addEventListener('click', async () => {
      const input = inputText.value;
      if (input.trim() === '') {
        outputText.textContent = 'Please enter some text.';
        return;
      }
  
      // Generate text based on user input
      const result = await generator(input, { maxLength: 50 });
      outputText.textContent = result[0].generated_text;
    });
  });
  
