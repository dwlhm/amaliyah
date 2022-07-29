import express from 'express';
import { Request, Response } from 'express';
import { renderToStream } from 'solid-js/web';

const app: any = express();

const {
    PORT = 3000
}  = process.env;

app.get('*', (req: Request, res: Response): void => {
    res.json({
        msg: "Hello, World!"
    })
})

if (require.main === module) {
    app.listen(PORT, (): void => {
        console.log(`server started at http://localhost:${PORT}`)
    })
}

export default app;