import { createSupabaseClient } from '@/utils/placesApi';

const supabase = createSupabaseClient();

// Mock responses for different types of queries
const mockResponses = {
  greeting: "Hello! I'm your campus assistant. How can I help you today?",
  food: "We have several food options on campus. The main cafeteria is open from 7 AM to 10 PM. There's also a coffee shop in the library and a food court near the student center.",
  library: "The library is open from 8 AM to 11 PM on weekdays and 10 AM to 8 PM on weekends. You can check out books for up to 2 weeks.",
  schedule: "Your next class is Computer Science 101 at 2 PM in Room 305. After that, you have a break until 4 PM.",
  default: "I'm here to help with campus-related questions. You can ask me about food options, library hours, class schedules, and more."
};

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    // Check for keywords in the prompt to return relevant mock responses
    const lowerPrompt = prompt.toLowerCase();

    if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
      return mockResponses.greeting;
    }

    if (lowerPrompt.includes('food') || lowerPrompt.includes('eat') || lowerPrompt.includes('restaurant')) {
      return mockResponses.food;
    }

    if (lowerPrompt.includes('library') || lowerPrompt.includes('book') || lowerPrompt.includes('study')) {
      return mockResponses.library;
    }

    if (lowerPrompt.includes('schedule') || lowerPrompt.includes('class') || lowerPrompt.includes('time')) {
      return mockResponses.schedule;
    }

    // Default response for unrecognized queries
    return mockResponses.default;

    // Original code commented out
    /*
    if (!supabase) {
      console.error('Supabase client is not initialized. Cannot call Gemini API.');
      return `I'm sorry, I can't connect to my AI service right now. Please check that you have set up your Supabase credentials in the environment variables.`;
    }
    
    const { data, error } = await supabase.functions.invoke('gemini', {
      body: { prompt }
    });

    if (error) {
      console.error('Error from Gemini API:', error);
      throw error;
    }
    
    return data.response;
    */
  } catch (error) {
    console.error('Error in mock response:', error);
    return mockResponses.default;
  }
};
