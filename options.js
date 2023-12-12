document.getElementById('saveButton').addEventListener('click', () => {
    const numLoops = parseInt(document.getElementById('numLoops').value);
    const tourneyName = document.getElementById('tourneyName').value;
    chrome.storage.sync.set({ numLoops, tourneyName }, () => {
      alert('Settings saved.');
    });
  });