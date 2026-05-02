import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    name: 'Al-Arsh System'
  });
});

app.listen(config.port, () => {
  console.log(`🌌 العرش يعمل على المنفذ ${config.port}`);
});
