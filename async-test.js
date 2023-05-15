async function first() {
    console.log('first');
    second(() => {
      third();
    });
  }


function second(callback) {
    setTimeout(function() {
      console.log('second');
      callback();
    }, 2000);
  }
  
  
  function third() {
    console.log('third');
  }
  
  first();