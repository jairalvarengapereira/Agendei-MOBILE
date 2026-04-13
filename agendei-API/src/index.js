import express from 'express';
import cors from 'cors';
import router from './routes.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS - deve ser o primeiro middleware
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With']
}));

// Preflight para todas as rotas
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}...`);
});