-- Script de criação do banco de dados para PostgreSQL (Neon)

-- Tabela: admins
CREATE TABLE IF NOT EXISTS admins (
    id_admin SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Tabela: users
CREATE TABLE IF NOT EXISTS users (
    id_user SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela: doctors
CREATE TABLE IF NOT EXISTS doctors (
    id_doctor SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    specialty VARCHAR(50) NOT NULL,
    icon VARCHAR(10)
);

-- Tabela: services
CREATE TABLE IF NOT EXISTS services (
    id_service SERIAL PRIMARY KEY,
    description VARCHAR(50) NOT NULL
);

-- Tabela: appointments
CREATE TABLE IF NOT EXISTS appointments (
    id_appointment SERIAL PRIMARY KEY,
    id_doctor INTEGER REFERENCES doctors(id_doctor),
    id_service INTEGER REFERENCES services(id_service),
    id_user INTEGER REFERENCES users(id_user),
    booking_date DATE NOT NULL,
    booking_hour VARCHAR(5) NOT NULL
);

-- Tabela: doctors_services
CREATE TABLE IF NOT EXISTS doctors_services (
    id_doctor_service SERIAL PRIMARY KEY,
    id_doctor INTEGER REFERENCES doctors(id_doctor),
    id_service INTEGER REFERENCES services(id_service),
    price DECIMAL(9, 2)
);

-- Inserir admin padrão
INSERT INTO admins (name, email, password) 
VALUES ('Admin', 'admin@agendei.com', '$2b$10$defaultpasswordhash')
ON CONFLICT (email) DO NOTHING;