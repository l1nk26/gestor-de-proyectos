import express from 'express';

const app = express();
const port = 3000;

app.listen(() => {
    console.log("servidor en puerto ", port);
});