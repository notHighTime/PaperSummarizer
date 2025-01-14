import OpenAI from 'openai';
const openai = new OpenAI({
  // apiKey: "", // This is the default and can be omitted
  // dangerouslyAllowBrowser: true
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
}

export default openai;