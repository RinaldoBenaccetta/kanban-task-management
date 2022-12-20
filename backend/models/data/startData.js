module.exports = [
    {
        name: 'Platform Launch',
        columns: [
            {
                name: 'Todo',
                tasks: [
                    {
                        title: 'Build UI for onboarding flow',
                        description: '',
                        status: 'Todo',
                        subtasks: [
                            {
                                title: 'Sign up page',
                                isCompleted: true,
                            },
                            {
                                title: 'Sign in page',
                                isCompleted: false,
                            },
                            {
                                title: 'Welcome page',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Build UI for search',
                        description: '',
                        status: 'Todo',
                        subtasks: [
                            {
                                title: 'Search page',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Build settings UI',
                        description: '',
                        status: 'Todo',
                        subtasks: [
                            {
                                title: 'Account page',
                                isCompleted: false,
                            },
                            {
                                title: 'Billing page',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'QA and test all major user journeys',
                        description:
                            'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
                        status: 'Todo',
                        subtasks: [
                            {
                                title: 'Internal testing',
                                isCompleted: false,
                            },
                            {
                                title: 'External testing',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Doing',
                tasks: [
                    {
                        title: 'Design settings and search pages',
                        description: '',
                        status: 'Doing',
                        subtasks: [
                            {
                                title: 'Settings - Account page',
                                isCompleted: true,
                            },
                            {
                                title: 'Settings - Billing page',
                                isCompleted: true,
                            },
                            {
                                title: 'Search page',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Add account management endpoints',
                        description: '',
                        status: 'Doing',
                        subtasks: [
                            {
                                title: 'Upgrade plan',
                                isCompleted: true,
                            },
                            {
                                title: 'Cancel plan',
                                isCompleted: true,
                            },
                            {
                                title: 'Update payment method',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Design onboarding flow',
                        description: '',
                        status: 'Doing',
                        subtasks: [
                            {
                                title: 'Sign up page',
                                isCompleted: true,
                            },
                            {
                                title: 'Sign in page',
                                isCompleted: false,
                            },
                            {
                                title: 'Welcome page',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Add search endpoints',
                        description: '',
                        status: 'Doing',
                        subtasks: [
                            {
                                title: 'Add search endpoint',
                                isCompleted: true,
                            },
                            {
                                title: 'Define search filters',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Add authentication endpoints',
                        description: '',
                        status: 'Doing',
                        subtasks: [
                            {
                                title: 'Define user model',
                                isCompleted: true,
                            },
                            {
                                title: 'Add auth endpoints',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Research pricing points of various competitors and trial different business models',
                        description:
                            "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                        status: 'Doing',
                        subtasks: [
                            {
                                title: 'Research competitor pricing and business models',
                                isCompleted: true,
                            },
                            {
                                title: 'Outline a business model that works for our solution',
                                isCompleted: false,
                            },
                            {
                                title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Done',
                tasks: [
                    {
                        title: 'Conduct 5 wireframe tests',
                        description:
                            'Ensure the layout continues to make sense, and we have strong buy-in from potential users.',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Complete 5 wireframe prototype tests',
                                isCompleted: true,
                            },
                        ],
                    },
                    {
                        title: 'Create wireframe prototype',
                        description:
                            'Create a greyscale clickable wireframe prototype to test our assumptions so far.',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Create clickable wireframe prototype in Balsamiq',
                                isCompleted: true,
                            },
                        ],
                    },
                    {
                        title: 'Review results of usability tests and iterate',
                        description:
                            "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Meet to review notes from previous tests and plan changes',
                                isCompleted: true,
                            },
                            {
                                title: 'Make changes to paper prototypes',
                                isCompleted: true,
                            },
                            {
                                title: 'Conduct 5 usability tests',
                                isCompleted: true,
                            },
                        ],
                    },
                    {
                        title: 'Create paper prototypes and conduct 10 usability tests with potential customers',
                        description: '',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Create paper prototypes for version one',
                                isCompleted: true,
                            },
                            {
                                title: 'Complete 10 usability tests',
                                isCompleted: true,
                            },
                        ],
                    },
                    {
                        title: 'Market discovery',
                        description:
                            'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Interview 10 prospective customers',
                                isCompleted: true,
                            },
                        ],
                    },
                    {
                        title: 'Competitor analysis',
                        description: '',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Find direct and indirect competitors',
                                isCompleted: true,
                            },
                            {
                                title: 'SWOT analysis for each competitor',
                                isCompleted: true,
                            },
                        ],
                    },
                    {
                        title: 'Research the market',
                        description:
                            'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Write up research analysis',
                                isCompleted: true,
                            },
                            {
                                title: 'Calculate TAM',
                                isCompleted: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Product Launch',
        columns: [
            {
                name: 'To Do',
                tasks: [
                    {
                        title: 'Design homepage layout',
                        description:
                            'Create a visually appealing layout for the homepage',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Create wireframe',
                                isCompleted: true,
                            },
                            {
                                title: 'Choose color scheme',
                                isCompleted: false,
                            },
                            {
                                title: 'Design layout',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Implement search functionality',
                        description:
                            'Allow users to search for products on the website',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Write search algorithm',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Create product pages',
                        description: '',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Create template for product pages',
                                isCompleted: false,
                            },
                            {
                                title: 'Add product details and images',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Test all major user journeys',
                        description:
                            'Once we feel the product is ready to launch, we need to rigorously test it to identify any major gaps.',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Internal testing',
                                isCompleted: false,
                            },
                            {
                                title: 'External testing',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'In Progress',
                tasks: [
                    {
                        title: 'Design product pages',
                        description: '',
                        status: 'In Progress',
                        subtasks: [
                            {
                                title: 'Product pages - Template',
                                isCompleted: true,
                            },
                            {
                                title: 'Product pages - Details and images',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Implement account management endpoints',
                        description: '',
                        status: 'In Progress',
                        subtasks: [
                            {
                                title: 'Upgrade account',
                                isCompleted: true,
                            },
                            {
                                title: 'Cancel account',
                                isCompleted: true,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Done',
                tasks: [
                    {
                        title: 'Design homepage layout',
                        description: '',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Wireframe',
                                isCompleted: true,
                            },
                            {
                                title: 'Color scheme',
                                isCompleted: true,
                            },
                            {
                                title: 'Layout',
                                isCompleted: true,
                            },
                        ],
                    },
                    {
                        title: 'Implement search functionality',
                        description: '',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Write search algorithm',
                                isCompleted: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        name: 'Project X',
        columns: [
            {
                name: 'To Do',
                tasks: [
                    {
                        title: 'Gather requirements',
                        description:
                            'Meet with stakeholders to gather requirements for the project',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Meet with stakeholders',
                                isCompleted: false,
                            },
                            {
                                title: 'Write requirements document',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Create project plan',
                        description:
                            'Develop a plan outlining the steps needed to complete the project',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Outline project steps',
                                isCompleted: false,
                            },
                            {
                                title: 'Estimate time and resources',
                                isCompleted: false,
                            },
                            {
                                title: 'Write project plan document',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'In Progress',
                tasks: [
                    {
                        title: 'Design user interface',
                        description:
                            'Create mockups for the user interface of the project',
                        status: 'In Progress',
                        subtasks: [
                            {
                                title: 'Create wireframes',
                                isCompleted: true,
                            },
                            {
                                title: 'Choose color scheme',
                                isCompleted: false,
                            },
                            {
                                title: 'Design user interface mockups',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Implement core functionality',
                        description:
                            'Start implementing the core functionality of the project',
                        status: 'In Progress',
                        subtasks: [
                            {
                                title: 'Implement authentication system',
                                isCompleted: true,
                            },
                            {
                                title: 'Implement database management',
                                isCompleted: true,
                            },
                            {
                                title: 'Implement core functionality',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'QA',
                tasks: [
                    {
                        title: 'Test all major user journeys',
                        description:
                            'Test the project to identify any major gaps',
                        status: 'QA',
                        subtasks: [
                            {
                                title: 'Test user registration journey',
                                isCompleted: false,
                            },
                            {
                                title: 'Test user login journey',
                                isCompleted: false,
                            },
                            {
                                title: 'Test core functionality',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Fix identified issues',
                        description: 'Fix any issues identified during testing',
                        status: 'QA',
                        subtasks: [
                            {
                                title: 'Fix issue #1',
                                isCompleted: false,
                            },
                            {
                                title: 'Fix issue #2',
                                isCompleted: false,
                            },
                            {
                                title: 'Fix issue #3',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Done',
                tasks: [
                    {
                        title: 'Launch project',
                        description: 'Launch the project to the public',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Test launch process',
                                isCompleted: true,
                            },
                            {
                                title: 'Notify stakeholders',
                                isCompleted: true,
                            },
                            {
                                title: 'Launch project',
                                isCompleted: true,
                            },
                        ],
                    },
                    {
                        title: 'Gather feedback',
                        description:
                            'Gather feedback from users and stakeholders',
                        status: 'Done',
                        subtasks: [
                            {
                                title: 'Send feedback survey',
                                isCompleted: true,
                            },
                            {
                                title: 'Analyze feedback results',
                                isCompleted: false,
                            },
                            {
                                title: 'Implement changes based on feedback',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Project Z',
        columns: [
            {
                name: 'To Do',
                tasks: [
                    {
                        title: 'Paint office',
                        description:
                            "The office looks too dull, let's add some color!",
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Choose paint color',
                                isCompleted: false,
                            },
                            {
                                title: 'Buy paint and supplies',
                                isCompleted: false,
                            },
                            {
                                title: 'Paint office',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Organize company retreat',
                        description:
                            "It's time for the annual company retreat!",
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Choose retreat location',
                                isCompleted: false,
                            },
                            {
                                title: 'Book accommodation and transportation',
                                isCompleted: false,
                            },
                            {
                                title: 'Plan activities',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'In Progress',
                tasks: [
                    {
                        title: 'Create company mascot',
                        description:
                            'We need a mascot to represent the company culture!',
                        status: 'In Progress',
                        subtasks: [
                            {
                                title: 'Brainstorm mascot ideas',
                                isCompleted: true,
                            },
                            {
                                title: 'Design mascot',
                                isCompleted: true,
                            },
                            {
                                title: 'Create mascot costume',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Create company cheer',
                        description:
                            'We need a cheer to pump up the team at company meetings!',
                        status: 'In Progress',
                        subtasks: [
                            {
                                title: 'Brainstorm cheer ideas',
                                isCompleted: true,
                            },
                            {
                                title: 'Write cheer lyrics',
                                isCompleted: false,
                            },
                            {
                                title: 'Create cheer dance',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Another project',
        columns: [
            {
                name: 'To Do',
                tasks: [
                    {
                        title: 'Gather requirements',
                        description:
                            'Meet with stakeholders to gather requirements for the project',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Schedule meetings with stakeholders',
                                isCompleted: false,
                            },
                            {
                                title: 'Create list of requirements',
                                isCompleted: false,
                            },
                            {
                                title: 'Write requirements document',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Create project plan',
                        description:
                            'Develop a plan outlining the steps needed to complete the project',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Outline project steps',
                                isCompleted: false,
                            },
                            {
                                title: 'Estimate time and resources',
                                isCompleted: false,
                            },
                            {
                                title: 'Write project plan document',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Design user interface',
                        description:
                            'Create mockups for the user interface of the project',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Create wireframes',
                                isCompleted: false,
                            },
                            {
                                title: 'Choose color scheme',
                                isCompleted: false,
                            },
                            {
                                title: 'Design user interface mockups',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Implement core functionality',
                        description:
                            'Start implementing the core functionality of the project',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Implement authentication system',
                                isCompleted: false,
                            },
                            {
                                title: 'Implement data storage system',
                                isCompleted: false,
                            },
                            {
                                title: 'Implement user dashboard',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Test all major user journeys',
                        description:
                            'Test the project to identify any major gaps',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Test authentication system',
                                isCompleted: false,
                            },
                            {
                                title: 'Test data storage system',
                                isCompleted: false,
                            },
                            {
                                title: 'Test user dashboard',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Fix identified issues',
                        description: 'Fix any issues identified during testing',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Fix authentication system issues',
                                isCompleted: false,
                            },
                            {
                                title: 'Fix data storage system issues',
                                isCompleted: false,
                            },
                            {
                                title: 'Fix user dashboard issues',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Implement changes based on feedback',
                        description:
                            'Implement any changes based on the feedback gathered',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Identify necessary changes',
                                isCompleted: false,
                            },
                            {
                                title: 'Implement changes',
                                isCompleted: false,
                            },
                            {
                                title: 'Test changes',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Work Day Organization',
        columns: [
            {
                name: 'To Do',
                tasks: [
                    {
                        title: 'Create to-do list',
                        description:
                            'Make a list of tasks to be completed today',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Identify high-priority tasks',
                                isCompleted: false,
                            },
                            {
                                title: 'Organize tasks by importance',
                                isCompleted: false,
                            },
                            {
                                title: 'Write to-do list',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Schedule meetings',
                        description: 'Schedule any meetings for today',
                        status: 'To Do',
                        subtasks: [],
                    },
                ],
            },
            {
                name: 'In Progress',
                tasks: [
                    {
                        title: 'Complete high-priority tasks',
                        description:
                            'Work on completing the most important tasks on the to-do list',
                        status: 'In Progress',
                        subtasks: [],
                    },
                    {
                        title: 'Attend meetings',
                        description: 'Attend any scheduled meetings',
                        status: 'In Progress',
                        subtasks: [],
                    },
                ],
            },
            {
                name: 'Blocked',
                tasks: [
                    {
                        title: 'Request information from colleague',
                        description:
                            'Awaiting information from a colleague to proceed with a task',
                        status: 'Blocked',
                        subtasks: [
                            {
                                title: 'Send request to colleague',
                                isCompleted: true,
                            },
                            {
                                title: 'Follow up on request',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Waiting on external party',
                        description:
                            'Awaiting response or action from an external party',
                        status: 'Blocked',
                        subtasks: [],
                    },
                ],
            },
            {
                name: 'Done',
                tasks: [
                    {
                        title: 'Complete low-priority tasks',
                        description:
                            'Work on completing the remaining tasks on the to-do list',
                        status: 'Done',
                        subtasks: [],
                    },
                    {
                        title: 'Write daily report',
                        description:
                            'Write a report summarizing the tasks completed and progress made today',
                        status: 'Done',
                        subtasks: [],
                    },
                ],
            },
            {
                name: 'Cancelled',
                tasks: [
                    {
                        title: 'Meet with team',
                        description:
                            'Meeting with the team to discuss progress and plans',
                        status: 'Cancelled',
                        subtasks: [],
                    },
                    {
                        title: 'Attend industry conference',
                        description:
                            'Attend an industry conference to network and stay up-to-date on industry developments',
                        status: 'Cancelled',
                        subtasks: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'Terminator Schedule',
        columns: [
            {
                name: 'To Do',
                tasks: [
                    {
                        title: 'Locate Sarah Connor',
                        description:
                            'Track down Sarah Connor and determine her current whereabouts',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Gather intelligence on Sarah Connor',
                                isCompleted: false,
                            },
                            {
                                title: 'Analyze data to determine location',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Acquire weapons and equipment',
                        description:
                            'Obtain the necessary weapons and equipment for the mission',
                        status: 'To Do',
                        subtasks: [
                            {
                                title: 'Identify required weapons and equipment',
                                isCompleted: false,
                            },
                            {
                                title: 'Locate and acquire weapons and equipment',
                                isCompleted: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'In Progress',
                tasks: [
                    {
                        title: "Travel to Sarah Connor's location",
                        description:
                            "Make the necessary arrangements to travel to Sarah Connor's current location",
                        status: 'In Progress',
                        subtasks: [
                            {
                                title: 'Determine mode of transport',
                                isCompleted: true,
                            },
                            {
                                title: 'Book transportation',
                                isCompleted: false,
                            },
                        ],
                    },
                    {
                        title: 'Eliminate Sarah Connor',
                        description:
                            'Carry out the mission to eliminate Sarah Connor',
                        status: 'In Progress',
                        subtasks: [],
                    },
                ],
            },
            {
                name: 'Blocked',
                tasks: [
                    {
                        title: 'Eliminate any threats',
                        description:
                            'Deal with any individuals or groups that may pose a threat to the mission',
                        status: 'Blocked',
                        subtasks: [],
                    },
                    {
                        title: 'Acquire new target',
                        description:
                            'If the primary target is not located or becomes unavailable, acquire a new target',
                        status: 'Blocked',
                        subtasks: [],
                    },
                ],
            },
            {
                name: 'Done',
                tasks: [
                    {
                        title: 'Report mission status',
                        description:
                            'Report on the status of the mission to Skynet',
                        status: 'Done',
                        subtasks: [],
                    },
                    {
                        title: 'Dispose of evidence',
                        description:
                            'Ensure that all evidence of the mission is eliminated',
                        status: 'Done',
                        subtasks: [],
                    },
                ],
            },
            {
                name: 'Cancelled',
                tasks: [
                    {
                        title: 'Terminate John Connor',
                        description:
                            'Eliminate John Connor as a potential future threat',
                        status: 'Cancelled',
                        subtasks: [],
                    },
                    {
                        title: 'Capture Sarah Connor',
                        description:
                            'Capture Sarah Connor for further study and analysis',
                        status: 'Cancelled',
                        subtasks: [],
                    },
                ],
            },
        ],
    },
]
