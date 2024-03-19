import { check } from 'express-validator'

const generate = [
    check('category')
        .optional()
        .isString()
        .isLength({ min: 1, max: 60 })
        .trim()
        .withMessage(
            'category is optional but must be a string with length between 1 and 60 if provided'
        ),
    check('number')
        .optional()
        .isInt({ min: 1, max: 10 })
        .withMessage(
            'number is optional but must be an integer between 1 and 10 if provided'
        ),
]

export { generate }
