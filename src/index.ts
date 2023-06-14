import { server } from "./server/server";

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening port ${port}`));
