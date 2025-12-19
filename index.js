// Step 1: Create combineUsers function with rest parameter
function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = {
    users: []
  };

  // Step 3: Loop through args (array of arrays)
  for (const userArray of args) {
    // Step 4: Merge arrays using spread operator
    combinedObject.users.push(...userArray);
  }

  // Step 5: Add today's date using datejs
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return the object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};