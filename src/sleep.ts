/**
 * Pauses the execution flow via `setTimeout` if the function is awaited. Useful for testing or development.
 *
 * @param time duration in milliseconds for how long the execution should be haled
 * @returns an empty promise
 */
export const sleep = async (time: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
