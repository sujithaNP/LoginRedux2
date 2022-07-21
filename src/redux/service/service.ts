export const fetchData = async () => {
  let response = await fetch('https://api.publicapis.org/entries');
  let result = await response.json();
  console.log('response', response);
  console.log('result', result);
  return result;
};
