// JavaScript code for file viewer page

// Function to play the video file
function playVideo(fileId) {
    streamVideo(fileId);
  }
  
  // Get file ID from URL or any other source
  const urlParams = new URLSearchParams(window.location.search);
  const fileId = urlParams.get('fileId');
  
  if (fileId) {
    // Play the video file
    playVideo(fileId);
  }
  