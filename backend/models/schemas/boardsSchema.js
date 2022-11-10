'use strict'

module.exports = [
    {
        name: String,
        columns: [
            {
                name: String,
                tasks: [
                    {
                        title: String,
                        description: String,
                        status: String,
                        subtasks: [
                            {
                                title: String,
                                isCompleted: Boolean,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]
