async function unitTest() {
  console.log('Test GET started -------------------');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json();

  for (const obj of data) {
    if(!Number.isInteger(obj.id)) {
      console.log(`Invalid type id is not integer -------------------`);
      break;
    } else if (!Number.isInteger(obj.userId)) {
      console.log(`Invalid type user id is not integer -------------------`);
      break;
    } else if (typeof obj.title !== 'string') {
      console.log(`Invalid type title is not string -------------------`);
      break;
    } else if (typeof obj.body !== 'string') {
      console.log(`Invalid type title is not string -------------------`);
      break;
    } else {
      console.log(`Posts id ${obj.id} looks good! -------------------`);
    }
  }

  console.log('Test GET finished -------------------');
  // =================================================================================================  
  console.log('Test POST started -------------------');
  const bodyRequest = {
    title: 'recommendation',
    body: 'motorcycle',
    userId: 12
  }
  const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyRequest)
  });
  const data2 = await response2.json();
  if(data2.title !== bodyRequest.title ||
    data2.body !== bodyRequest.body ||
    data2.userId !== bodyRequest.userId) {
      console.log('Invalid response not same with body request -------------------');
  }
  console.log('Test finished -------------------');
}

unitTest()


/*
const logBtn = document.getElementById('log');
logBtn.addEventListener('click', fetchData);

async function fetchData() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'recommendation',
      body: 'motorcycle',
      userId: 12
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}
*/