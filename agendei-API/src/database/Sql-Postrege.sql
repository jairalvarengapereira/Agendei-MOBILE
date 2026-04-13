--
-- Arquivo gerado com SQLiteStudio v3.4.10 em dom mar 8 07:32:02 2026
--
-- Codificação de texto usada: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Tabela: admins
CREATE TABLE IF NOT EXISTS admins (
    id_admin INTEGER       PRIMARY KEY AUTOINCREMENT,
    name     VARCHAR (50),
    email    VARCHAR (100),
    password VARCHAR (100) 
);

INSERT INTO admins (
                       id_admin,
                       name,
                       email,
                       password
                   )
                   VALUES (
                       4,
                       'Cida',
                       'cida@cida.com',
                       '$2b$10$RReAM3H9qLLKzJ6hMZti/OW.yCKyK11pb9bCsXYzX82zlqfYRkUYm'
                   );

INSERT INTO admins (
                       id_admin,
                       name,
                       email,
                       password
                   )
                   VALUES (
                       5,
                       'Jair',
                       'jair@jair.com',
                       '$2b$10$p8cQI3FuQuqB79qkwlEybuFQkHQC1GwxjXy1WaPUCVFtFhI8hSr/e'
                   );

INSERT INTO admins (
                       id_admin,
                       name,
                       email,
                       password
                   )
                   VALUES (
                       6,
                       'vander',
                       'vander@vander.com',
                       '$2b$10$o5Nt2bv8DemRHhncHbaZ3ONF0ssEI9A3M/xmbhaFBF1qQk22YeR9W'
                   );

INSERT INTO admins (
                       id_admin,
                       name,
                       email,
                       password
                   )
                   VALUES (
                       7,
                       'jair2',
                       'jair2@jair.com',
                       '$2b$10$5ww2eOMs2bL5.uqXxy7hnOUSVFkmhSfwEJ9Kw4cUuSb5TwTGr67La'
                   );


-- Tabela: appointments
CREATE TABLE IF NOT EXISTS appointments (
    id_appointment INTEGER     PRIMARY KEY AUTOINCREMENT,
    id_doctor      INTEGER     REFERENCES doctors (id_doctor),
    id_service     INTEGER     REFERENCES services (id_service),
    id_user        INTEGER     REFERENCES users (id_user),
    booking_date   DATE,
    booking_hour   VARCHAR (5) 
);

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             1,
                             1,
                             1,
                             7,
                             '2024-02-10',
                             '09:00'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             2,
                             2,
                             2,
                             12,
                             '2024-02-11',
                             '10:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             3,
                             3,
                             3,
                             13,
                             '2024-02-12',
                             '14:00'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             4,
                             4,
                             4,
                             14,
                             '2024-02-13',
                             '08:45'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             5,
                             5,
                             5,
                             7,
                             '2024-02-14',
                             '16:15'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             6,
                             6,
                             6,
                             12,
                             '2024-02-15',
                             '11:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             7,
                             7,
                             7,
                             13,
                             '2024-02-16',
                             '09:15'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             8,
                             8,
                             8,
                             14,
                             '2024-02-17',
                             '13:45'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             9,
                             9,
                             9,
                             7,
                             '2024-02-18',
                             '15:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             10,
                             10,
                             10,
                             12,
                             '2024-02-19',
                             '10:00'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             11,
                             1,
                             1,
                             13,
                             '2024-02-20',
                             '08:00'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             12,
                             2,
                             2,
                             14,
                             '2024-02-21',
                             '14:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             13,
                             3,
                             3,
                             7,
                             '2024-02-22',
                             '11:45'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             14,
                             4,
                             4,
                             12,
                             '2024-02-23',
                             '09:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             15,
                             5,
                             5,
                             13,
                             '2024-02-24',
                             '16:45'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             16,
                             7,
                             37,
                             14,
                             '2025-02-07',
                             '16:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             18,
                             5,
                             35,
                             16,
                             '2025-02-20',
                             '10:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             19,
                             1,
                             21,
                             16,
                             '2025-02-28',
                             '08:00'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             37,
                             1,
                             1,
                             15,
                             '2025-02-15',
                             '13:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             43,
                             1,
                             21,
                             15,
                             '2025-02-18',
                             '11:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             46,
                             9,
                             41,
                             15,
                             '2025-02-18',
                             '11:30'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour
                         )
                         VALUES (
                             48,
                             1,
                             21,
                             15,
                             '2025-02-27',
                             '11:30'
                         );


-- Tabela: doctors
CREATE TABLE IF NOT EXISTS doctors (
    id_doctor INTEGER      PRIMARY KEY AUTOINCREMENT,
    name      VARCHAR (50),
    specialty VARCHAR (50),
    icon      VARCHAR (10) 
);

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        1,
                        'Dr. Carlos Silva',
                        'Cardiologia',
                        'M'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        2,
                        'Dra. Mariana Souza',
                        'Dermatologia',
                        'F'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        3,
                        'Dr. João Almeida',
                        'Ortopedia',
                        'M'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        4,
                        'Dra. Fernanda Lima',
                        'Coloproctologia',
                        'F'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        5,
                        'Dr. Ricardo Mendes',
                        'Neurologia',
                        'M'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        6,
                        'Dra. Camila Rocha',
                        'Ginecologia',
                        'F'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        8,
                        'Dra. Patrícia Martins',
                        'Oftalmologia',
                        'F'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        9,
                        'Dr. Felipe Torres',
                        'Psiquiatria',
                        'M'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        10,
                        'Dra. Juliana Castro',
                        'Endocrinologia',
                        'F'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon
                    )
                    VALUES (
                        26,
                        'Dr. Douglas',
                        'Cirurgia Cardiovascular',
                        'M'
                    );


-- Tabela: doctors_services
CREATE TABLE IF NOT EXISTS doctors_services (
    id_doctor_service INTEGER        PRIMARY KEY,
    id_doctor         INTEGER        REFERENCES doctors (id_doctor),
    id_service        INTEGER        REFERENCES services (id_service),
    price             DECIMAL (9, 2) 
);

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 1,
                                 1,
                                 1,
                                 200
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 2,
                                 2,
                                 2,
                                 180
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 3,
                                 3,
                                 3,
                                 220
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 4,
                                 4,
                                 4,
                                 150
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 5,
                                 5,
                                 5,
                                 250
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 6,
                                 6,
                                 6,
                                 210
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 7,
                                 7,
                                 7,
                                 230
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 8,
                                 8,
                                 8,
                                 190
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 9,
                                 9,
                                 9,
                                 200
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 10,
                                 10,
                                 10,
                                 240
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 11,
                                 1,
                                 11,
                                 210
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 12,
                                 2,
                                 12,
                                 175
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 13,
                                 3,
                                 13,
                                 235
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 14,
                                 4,
                                 14,
                                 160
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 15,
                                 5,
                                 15,
                                 245
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 16,
                                 6,
                                 16,
                                 220
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 17,
                                 7,
                                 17,
                                 240
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 18,
                                 8,
                                 18,
                                 180
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 19,
                                 9,
                                 19,
                                 210
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 20,
                                 10,
                                 20,
                                 230
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 21,
                                 1,
                                 21,
                                 225
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 22,
                                 2,
                                 22,
                                 185
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 23,
                                 3,
                                 23,
                                 245
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 24,
                                 4,
                                 24,
                                 165
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 25,
                                 5,
                                 25,
                                 255
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 26,
                                 6,
                                 26,
                                 230
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 27,
                                 7,
                                 27,
                                 250
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 28,
                                 8,
                                 28,
                                 190
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 29,
                                 9,
                                 29,
                                 220
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 30,
                                 10,
                                 30,
                                 240
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 31,
                                 1,
                                 31,
                                 215
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 32,
                                 2,
                                 32,
                                 170
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 33,
                                 3,
                                 33,
                                 240
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 34,
                                 4,
                                 34,
                                 150
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 35,
                                 5,
                                 35,
                                 265
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 36,
                                 6,
                                 36,
                                 240
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 37,
                                 7,
                                 37,
                                 255
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 38,
                                 8,
                                 38,
                                 195
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 39,
                                 9,
                                 39,
                                 225
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 40,
                                 10,
                                 40,
                                 250
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 41,
                                 1,
                                 41,
                                 205
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 42,
                                 2,
                                 41,
                                 180
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 43,
                                 3,
                                 41,
                                 220
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 44,
                                 4,
                                 41,
                                 160
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 45,
                                 5,
                                 41,
                                 250
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 46,
                                 6,
                                 41,
                                 230
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 47,
                                 7,
                                 41,
                                 240
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 48,
                                 8,
                                 41,
                                 190
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 49,
                                 9,
                                 41,
                                 210
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price
                             )
                             VALUES (
                                 50,
                                 10,
                                 41,
                                 240
                             );


-- Tabela: services
CREATE TABLE IF NOT EXISTS services (
    id_service  INTEGER      PRIMARY KEY AUTOINCREMENT,
    description VARCHAR (50) 
);

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         1,
                         'Acupuntura'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         2,
                         'Alergia e Imunologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         3,
                         'Anestesiologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         4,
                         'Angiologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         5,
                         'Cardiologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         6,
                         'Cirurgia Cardiovascular'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         7,
                         'Cirurgia da Mão'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         8,
                         'Cirurgia de Cabeça e Pescoço'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         9,
                         'Cirurgia do Aparelho Digestivo'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         10,
                         'Cirurgia Geral'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         11,
                         'Cirurgia Oncológica'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         12,
                         'Cirurgia Pediátrica'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         13,
                         'Cirurgia Plástica'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         14,
                         'Cirurgia Torácica'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         15,
                         'Cirurgia Vascular'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         16,
                         'Clínica Médica'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         17,
                         'Coloproctologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         18,
                         'Dermatologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         19,
                         'Endocrinologia e Metabologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         20,
                         'Endoscopia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         21,
                         'Gastroenterologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         22,
                         'Geriatria'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         23,
                         'Ginecologia e Obstetrícia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         24,
                         'Hematologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         25,
                         'Infectologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         26,
                         'Mastologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         27,
                         'Medicina de Emergência'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         28,
                         'Medicina do Trabalho'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         29,
                         'Medicina Esportiva'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         30,
                         'Nefrologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         31,
                         'Neurologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         32,
                         'Nutrologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         33,
                         'Oftalmologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         34,
                         'Ortopedia e Traumatologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         35,
                         'Otorrinolaringologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         36,
                         'Pediatria'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         37,
                         'Pneumologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         38,
                         'Psiquiatria'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         39,
                         'Radiologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         40,
                         'Reumatologia'
                     );

INSERT INTO services (
                         id_service,
                         description
                     )
                     VALUES (
                         41,
                         'Urologia'
                     );


-- Tabela: users
CREATE TABLE IF NOT EXISTS users (
    id_user  INTEGER       PRIMARY KEY AUTOINCREMENT,
    name     VARCHAR (50),
    email    VARCHAR (100),
    password VARCHAR (100),
    fone     NUMERIC (20),
    cep      NUMERIC (10),
    logr     TEXT (200),
    num      TEXT (20),
    compl    TEXT (50),
    bairro   TEXT (50),
    cidade   TEXT (50),
    uf       TEXT (2) 
);

INSERT INTO users (
                      id_user,
                      name,
                      email,
                      password,
                      fone,
                      cep,
                      logr,
                      num,
                      compl,
                      bairro,
                      cidade,
                      uf
                  )
                  VALUES (
                      7,
                      'jair alvarenga pereira',
                      'jairalvrenga@gmail.com',
                      '$2b$10$Nkj36uaz/v1PtRkC1Sk1bupnsC3v/cG7/CiBNu5SlP7ilSL.kxhaa',
                      31986506619,
                      30512750,
                      'Rua Barão De Sabará',
                      '190',
                      'Apto 203',
                      'Madre Gertrudes',
                      'Belo Horizonte',
                      ''
                  );

INSERT INTO users (
                      id_user,
                      name,
                      email,
                      password,
                      fone,
                      cep,
                      logr,
                      num,
                      compl,
                      bairro,
                      cidade,
                      uf
                  )
                  VALUES (
                      12,
                      'Fernanda Pereira',
                      'fernandapereira@gmail.com',
                      '$2b$10$VlDV44Pl1J2zr0QWF/KwROgTBJ7qoG7YP/aSdm1Nmpc4k88LeacXG',
                      31986506619,
                      31842330,
                      'Rua Nelson Hungria',
                      '710',
                      NULL,
                      'Tupi',
                      'Belo Horizonte',
                      'MG'
                  );

INSERT INTO users (
                      id_user,
                      name,
                      email,
                      password,
                      fone,
                      cep,
                      logr,
                      num,
                      compl,
                      bairro,
                      cidade,
                      uf
                  )
                  VALUES (
                      13,
                      'cida',
                      'jairalvarengapereira@gmail.com',
                      '$2b$10$/OjR4KITU5a9rpmepr3qxuVNAhpjXshuM/iV74GyvoE3OGBNLaE5G',
                      31987025062,
                      31846290,
                      'Rua Coronel Braga Junior',
                      '18',
                      'Casa',
                      'Lajedo',
                      'Belo Horizonte',
                      'MG'
                  );

INSERT INTO users (
                      id_user,
                      name,
                      email,
                      password,
                      fone,
                      cep,
                      logr,
                      num,
                      compl,
                      bairro,
                      cidade,
                      uf
                  )
                  VALUES (
                      15,
                      'JAIR ALVARENGA PEREIRA',
                      'jair@jair.com',
                      '$2b$10$sMRzz5YLj97rucmYUS6v3uXfu.GfuOhKcjhK3oWUs5uHMwiYU38z.',
                      NULL,
                      NULL,
                      NULL,
                      NULL,
                      NULL,
                      NULL,
                      NULL,
                      NULL
                  );

INSERT INTO users (
                      id_user,
                      name,
                      email,
                      password,
                      fone,
                      cep,
                      logr,
                      num,
                      compl,
                      bairro,
                      cidade,
                      uf
                  )
                  VALUES (
                      16,
                      'gabriel',
                      'gabriel@gabriel.com',
                      '$2b$10$XMdsanYliu9nC1XSm94FLeH68tPZP1kDvQVxf.SwAWyhMngXOS/qy',
                      NULL,
                      NULL,
                      NULL,
                      NULL,
                      NULL,
                      NULL,
                      NULL,
                      NULL
                  );

INSERT INTO users (
                      id_user,
                      name,
                      email,
                      password,
                      fone,
                      cep,
                      logr,
                      num,
                      compl,
                      bairro,
                      cidade,
                      uf
                  )
                  VALUES (
                      19,
                      'Jair2',
                      'jairalvarengapereira@gmail.com',
                      NULL,
                      31986506619,
                      31846290,
                      'Rua Coronel Braga Junior',
                      '18',
                      'Casa',
                      'Lajedo',
                      'Belo Horizonte',
                      NULL
                  );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
