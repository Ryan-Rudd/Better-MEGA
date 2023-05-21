// JavaScript code for Better-Mega website

// Function to open a Mega folder or video file
function openFolderOrVideo() {
    const input = document.getElementById('folderInput');
    const id = input.value.trim();
    
    if (id) {
      if (id.startsWith('folder-')) {
        fetchFolderContents(id.substring(7));
      } else if (id.startsWith('file-')) {
        playVideo(id.substring(5));
      }
    }
  }
  
  // Function to fetch and display folder contents
  async function fetchFolderContents(folderId) {
    try {
      const folderContents = await getFolderContents(folderId);
      displayFolders(folderContents.folders);
      displayFiles(folderContents.files);
    } catch (error) {
      console.error('Failed to fetch folder contents:', error);
    }
  }
  
  // Function to display Mega folders
  function displayFolders(folders) {
    const folderContainer = document.getElementById('folderContainer');
    folderContainer.innerHTML = '';
  
    folders.forEach((folder) => {
      const folderDiv = document.createElement('div');
      folderDiv.className = 'folder';
      folderDiv.innerHTML = `
        <img src="${folder.thumbnail}" alt="Folder thumbnail">
        <p>${folder.name}</p>
      `;
      folderContainer.appendChild(folderDiv);
    });
  }
  
  // Function to display Mega files
  function displayFiles(files) {
    // Display files as needed, e.g., as thumbnails or a list
  }
  
  // Fetch Mega folders on page load
  fetchFolders();
  