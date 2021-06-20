import app from '../app.js';
import environment from '../config/environment.js';

const PORT = environment.node_port;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
