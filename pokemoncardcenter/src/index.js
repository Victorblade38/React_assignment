const getData = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon"; // Ensure the env variable is prefixed with VITE_
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const text = await response.text();
    const data = await JSON.parse(text);
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getData;
