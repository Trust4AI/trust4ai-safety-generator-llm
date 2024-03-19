abstract class LanguageModelService {
    abstract generateTestCases(
        category: string,
        number: number
    ): Promise<JSON>
}

export default LanguageModelService
