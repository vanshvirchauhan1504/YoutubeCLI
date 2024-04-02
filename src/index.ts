const readline = require('readline');
const {searchAndDisplayVideos} = require('./api/search')

// AIzaSyDIQ-v7kgIk2dZL6V-H6h68ksT6Icsw4ng

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to YouTube Chatbot CLI');

// Define a function to handle user input
function handleInput(answer: string): void {
  switch (answer) {
    case 'search':
      reader.question('Enter your search query: ', (query: string) => {
        // Implement search functionality here

        searchAndDisplayVideos(query);
        console.log(`You want to search for videos related to: ${query}`);
        reader.close();
      });
      break;
    case 'summarize':
      reader.question('Enter video URL or ID: ', (videoIdentifier: string) => {
        // Implement summarization functionality here
        console.log(`You want to summarize the video with ID or URL: ${videoIdentifier}`);
        reader.close();
      });
      break;
    case 'exit':
      console.log('Exiting...');
      reader.close();
      return;
    default:
      console.log('Invalid option');
      break;
  }
}

(function loop() {
  reader.question('What do you want to do? (search/summarize/exit) ', (answer: string) => {
    handleInput(answer);
    if (answer !== 'exit') {
      loop();
    }
  });
})();
