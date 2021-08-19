/* Table brand */
INSERT INTO brand (id, name) VALUES (DEFAULT, "Marca1"); 
INSERT INTO brand (id, name) VALUES (DEFAULT, "Marca2");  
INSERT INTO brand (id, name) VALUES (DEFAULT, "Marca3"); 
INSERT INTO brand (id, name) VALUES (DEFAULT, "Marca4");

/* Table category */
INSERT INTO brand (id, name) VALUES (DEFAULT, "Skates");
INSERT INTO brand (id, name) VALUES (DEFAULT, "Tablas");  
INSERT INTO brand (id, name) VALUES (DEFAULT, "Trucks"); 
INSERT INTO brand (id, name) VALUES (DEFAULT, "Ruedas");
INSERT INTO brand (id, name) VALUES (DEFAULT, "Rulemanes");  
INSERT INTO brand (id, name) VALUES (DEFAULT, "Lijas"); 
INSERT INTO brand (id, name) VALUES (DEFAULT, "Accesorios");
INSERT INTO brand (id, name) VALUES (DEFAULT, "Protecciones"); 

/* Table color */
INSERT INTO color (id, name, value) VALUES (DEFAULT, "Lime-green", "rgb(60, 255, 30)");
INSERT INTO color (id, name, value) VALUES (DEFAULT, "Salmon", "rgb(250, 74, 73)");
INSERT INTO color (id, name, value) VALUES (DEFAULT, "Grey", "rgb(235, 233, 233)");

/* Table product */
INSERT INTO product  VALUES (DEFAULT, "Tabla guatambú", "Tabla de guanambú", 2, 2, "productImages-1625768289675.png", 5000);
INSERT INTO product  VALUES (DEFAULT, "Rueda", "Rueda 53 mm", 4, 2, "productImages-1625942157634.png", 3000);
INSERT INTO product  VALUES (DEFAULT, "Skate Armado", "Tabla concava", 1, 3, "productImages-1625942584875.png", 7000);
INSERT INTO product  VALUES (DEFAULT, "Truck", "Cromado x 2", 3, 4, "productImages-1625943351223.png", 2000);

/* Table colorProduct */
INSERT INTO colorProduct  VALUES (DEFAULT, 3, 1);
INSERT INTO colorProduct  VALUES (DEFAULT, 1, 2);
INSERT INTO colorProduct  VALUES (DEFAULT, 2, 3);
INSERT INTO colorProduct  VALUES (DEFAULT, 3, 4);


/* Table user */
INSERT INTO user VALUES (default, "Fran", "Astarloa", "fran@gmail.com", "123456", "avatar-1626480395882.png")
INSERT INTO user VALUES (default, "Diego", "Testa", "testadiegom@gmail.com", "$2a$10$GekMMMHv1JOcwUaNfVFjtuQPzkQlPIvqoqXdfi4tfyaqEo9miJsr6", "avatar-1626480395882.png")



