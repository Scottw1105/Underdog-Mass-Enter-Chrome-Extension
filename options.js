document.getElementById('saveButton').addEventListener('click', () => {
    const numLoops = parseInt(document.getElementById('numLoops').value);
    const tourneyName = document.getElementById('tourneyName').value;
    const draftSpeed = document.getElementById('draftSpeed').value;
    chrome.storage.sync.set({ numLoops, tourneyName, draftSpeed}, () => {
      alert('Settings saved.');
    });
  });