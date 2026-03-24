import dotenv from 'dotenv';
import { createServer } from 'http';
import app from './app';
import { SocketService } from './services/SocketService';

dotenv.config();

const PORT = process.env.BACKEND_PORT || 3001;

const httpServer = createServer(app);

// Initialize Socket.io and its logic
const socketService = SocketService.getInstance();
socketService.initialize(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 SocialFlow Backend is running on http://localhost:${PORT}`);
});
