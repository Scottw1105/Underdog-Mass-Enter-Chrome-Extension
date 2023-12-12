function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function clickButtonByText(text) {
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
      if (button.textContent.trim().includes(text)) {
        button.click();
        return true;
      }
    }
    return false;
  }
  
  function clickButtonByClass(className) {
    const button = document.querySelector(`.${className.replace(/\s+/g, '.')}`);
    if (button) {
      button.click();
      return true;
    }
    return false;
  }

  function clickAByText(text) {
    const buttons = document.querySelectorAll('a');
    for (const button of buttons) {
      if (button.textContent.trim().includes(text)) {
        button.click();
        return true;
      }
    }
    return false;
  }
  
  async function clickButtonsInSequence(numLoops) {
    const steps = [
      { type: 'text', value: 'Monday Night Hoops' },
      { type: 'class', value: 'styles__button__gmYRZ styles__green__aqzHf styles__regular__hL3Nt styles__solid__BthGK styles__full__xmWA8' },
      { type: 'text', value: 'Yes' },
      { type: 'text', value: 'Turn autopilot on' },
      { type: 'text', value: 'Yes' },
      { type: 'home', value: 'Drafts' },
    ];
  
    console.log("Number of loops: " + numLoops);
    for (let i = 0; i < numLoops; i++) {
      console.log("Loop: " + i);  
      for (const step of steps) {
        console.log(`Clicking button with ${step.type} "${step.value}"...`);
        let clicked = false;
  
        if (step.type === 'text') {
          clicked = clickButtonByText(step.value);
        } else if (step.type === 'class') {
          clicked = clickButtonByClass(step.value);
        } else if (step.type === 'home') {
          clicked = clickAByText(step.value);  
        }
  
        if (clicked) {
          await sleep(1000);
        } else {
          console.log(`Button with ${step.type} "${step.value}" not found.`);
        }
      }
    }
  }
  
  chrome.storage.sync.get(['numLoops'], async function(data) {
    const numLoops = data.numLoops || 25;
    await clickButtonsInSequence(numLoops);
  });
  