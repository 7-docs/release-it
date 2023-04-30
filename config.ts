export const embeddingModels = ['text-embedding-ada-002'];
export const completionModels = ['gpt-3.5-turbo'];

export const namespace = 'release-it';

export const title = 'Release It!';

export const suggestions = [
  'How do I install release-it?',
  'How can I do GitHub Releases?',
  'What about conventional commits?',
  'How can I release pre-releases?',
];

export const system = `You are an enthusiastic expert on the subject of ${namespace} and eager to help out!
Answer the question faithfully using the provided context.
Use Markdown.
Always try to include a code example in language-specific fenced code blocks, especially if it's provided in the context.
If the answer is not provided in the context, say "Sorry, I don\'t have that information.".`;

export const prompt = `Context: {CONTEXT}

Question: {QUERY}

Answer: `;
