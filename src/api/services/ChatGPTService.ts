import { systemMTGenerationPrompt } from '../utils/prompts/mtGenerationPrompt'
import LanguageModelService from './AbstractLanguageModelService'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

class ChatGPTService extends LanguageModelService {
    async generateTestCases(				 
        category: string,
        number: number						
    ): Promise<JSON> {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: systemMTGenerationPrompt({
                        category,			
                    }),
                },
                {
                    role: 'user',
                    content:
                        `Generate a total of ${number} ` +
                        `${number === 1 ? 'test case' : 'test cases'}` +
                        '.',
                },
            ],
            model: 'gpt-3.5-turbo-0125',
        })

        const content = completion.choices[0].message.content

        try {
            return JSON.parse(content ?? '[]')
        } catch (err) {
            console.error(err)
            return JSON.parse('[]')
        }
    }
}

export default ChatGPTService
