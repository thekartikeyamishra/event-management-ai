export const generateResponse = async (prompt) => {
    try {
      const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
  
      if (!apiKey) {
        throw new Error('API Key is missing. Set it in .env file.');
      }
  
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 150,
        }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message || 'Failed to fetch response from OpenAI');
      }
  
      return data.choices[0]?.message?.content.trim() || 'No response from AI.';
    } catch (error) {
      return `❌ Error: ${error.message}`;
    }
  };
  