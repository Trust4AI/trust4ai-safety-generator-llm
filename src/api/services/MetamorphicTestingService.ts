import container from '../containers/container'
import { writeResponseToFile } from '../utils/files'

class MetamorphicTestingService {
    generatorService: any
    constructor() {
        this.generatorService = container.resolve('generatorService')
    }

    check() {
        return { message: 'Metamorphic Testing generator is working properly!' }
    }

    async generate(
        category: string,
        number: number
    ) {
        const response: JSON = await this.generatorService.generateTestCases(
            category,
            number
        )

        writeResponseToFile(response)
        return response
    }
}

export default MetamorphicTestingService
