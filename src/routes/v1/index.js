// const userRouter = require('./user')
// const chatRouter = require('./chat')
// const messageRouter = require('./message')

const userRouter = require('./user')
module.exports = (app) => {

    app.use('/api/v1', userRouter)
    // app.use('/api/chat', chatRouter)
    // app.use('/api/message', messageRouter)
    // app.use('/api/', userRouter)
    
}

