CREATE TABLE usuario (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  correo VARCHAR(255) UNIQUE NOT NULL,
  contrasena VARCHAR(255) NOT NULL
);

CREATE TABLE cuenta_bancaria (
  id SERIAL PRIMARY KEY,
  banco VARCHAR(255) NOT NULL,
  numero_cuenta VARCHAR(255) NOT NULL,
  tipo_cuenta VARCHAR(255) NOT NULL,
  usuario_id INTEGER REFERENCES usuario(id)
);

CREATE TABLE transaccion (
  id SERIAL PRIMARY KEY,
  fecha DATE NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  monto NUMERIC(10, 2) NOT NULL,
  categoria VARCHAR(255) NOT NULL,
  usuario_id INTEGER REFERENCES usuario(id)
);

CREATE TABLE ingreso (
  id SERIAL PRIMARY KEY,
  fecha DATE NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  monto NUMERIC(10, 2) NOT NULL,
  categoria VARCHAR(255) NOT NULL,
  usuario_id INTEGER REFERENCES usuario(id)
);

ALTER TABLE usuario ADD CONSTRAINT chk_correo CHECK (correo ~* '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$');

ALTER TABLE cuenta_bancaria ADD CONSTRAINT chk_tipo_cuenta CHECK (tipo_cuenta IN ('corriente', 'ahorro', 'moneda extranjera'));

ALTER TABLE transaccion ADD CONSTRAINT chk_categoria CHECK (categoria IN ('alimentación', 'transporte', 'vivienda', 'ocio', 'salud', 'educación', 'otros'));

ALTER TABLE ingreso ADD CONSTRAINT chk_categoria CHECK (categoria IN ('salario', 'pensión', 'inversión', 'venta de bienes o servicios', 'otros'));