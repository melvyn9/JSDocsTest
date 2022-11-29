/**
 * Generates a unique ID using crypto.randomUUID.
 * https://stackoverflow.com/questions/1155008/how-unique-is-uuid
 * @returns {string} A unique string ID to represent each task.
 */
function generateUniqueID() {
  return crypto.randomUUID();
}
