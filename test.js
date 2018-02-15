var manp = require('./index')
var data = [
    {
        "time": "2018-02-09T06:36:07.650Z",
        "dialogue": "Hi,chatbot",
        "speaker": "user"
    },
    {
        "time": "2018-02-09T06:36:21.208Z",
        "dialogue": "How are you",
        "speaker": "user"
    },
    {
        "time": "2018-02-09T06:36:21.233Z",
        "dialogue": "Hello :)",
        "speaker": "bot"
    },
    {
        "time": "2018-02-09T06:36:21.236Z",
        "dialogue": "I am awesome,How can I help you",
        "speaker": "bot"
    },
    {
        "time": "2018-02-09T06:36:30.824Z",
        "dialogue": "I would like to know,my account details.",
        "speaker": "user"
    },
    {
        "time": "2018-02-09T06:36:30.826Z",
        "dialogue": "Sure,could you provide,your account number.",
        "speaker": "bot"
    },
    {
        "time": "2018-02-09T06:36:30.826Z",
        "dialogue": "It's 8934***********",
        "speaker": "user"
    },
    {
        "time": "2018-02-09T06:36:41.288Z",
        "dialogue": "and which is saving account.",
        "speaker": "user"
    },
    {
        "time": "2018-02-09T06:36:41.290Z",
        "dialogue": "Here are the details about your account.",
        "speaker": "bot"
    },
    {
        "time": "2018-02-09T06:36:50.089Z",
        "dialogue": "Is there anything else,I can help you with.",
        "speaker": "bot"
    }
]
var result = manp.groupByOccurance(data, 'speaker')
console.log(JSON.stringify(result))