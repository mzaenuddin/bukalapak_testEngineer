const logBtn = document.getElementById('log');
logBtn.addEventListener('click', fetchData);

async function fetchData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json();

    data.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
          
          if(Number.isInteger([value][0]))
          { 
            console.log('Data Type Is Integer'+ " " +  `${key}` +  " = "+ `${value}`);
          }
          else
          {
            console.log('Data Type Is Varchar'+ " " + `${key}` + " = "+ `${value}`);
          }
          // console.log(`${key}`);
            // console.log(`${key} ${value}`);
        });
        console.log('-------------------');
    });
}