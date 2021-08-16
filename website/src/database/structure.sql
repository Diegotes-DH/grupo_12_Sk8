/* Creamos la base en beekeeper y las obtuvimos con el script SHOW CREATE DATABASE */
CREATE DATABASE `dbSk8` /*!40100 DEFAULT CHARACTER SET utf8 */

/* Creamos las tablas en beekeeper y las obtuvimos con el script SHOW CREATE TABLE*/
CREATE TABLE `brand` ( 
    ↩   `id` int(11) NOT NULL AUTO_INCREMENT, 
    ↩   `name` varchar(100) NOT NULL, 
    ↩   PRIMARY KEY (`id`)
↩ ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8

CREATE TABLE `category` ( 
    ↩   `id` int(11) NOT NULL AUTO_INCREMENT, 
    ↩   `name` varchar(100) NOT NULL, 
    ↩   PRIMARY KEY (`id`)
 ↩ ) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8

CREATE TABLE `color` ( 
    ↩   `id` int(11) NOT NULL AUTO_INCREMENT, 
    ↩   `name` varchar(100) NOT NULL, 
    ↩   `value` varchar(100) NOT NULL, 
    ↩   PRIMARY KEY (`id`)
    ↩ ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8

CREATE TABLE `colorProduct` ( 
    ↩   `id` int(11) NOT NULL AUTO_INCREMENT, 
    ↩   `idColor` int(11) NOT NULL, 
    ↩   `idColor2` int(11) DEFAULT NULL, 
    ↩   `idProduct` int(11) NOT NULL, 
    ↩   PRIMARY KEY (`id`), 
    ↩   KEY `idColor` (`idColor`), 
    ↩   KEY `idColor2` (`idColor2`), 
    ↩   KEY `idProduct` (`idProduct`), 
    ↩   CONSTRAINT `colorproduct_ibfk_1` FOREIGN KEY (`idColor`) REFERENCES `color` (`id`), 
    ↩   CONSTRAINT `colorproduct_ibfk_2` FOREIGN KEY (`idColor2`) REFERENCES `color` (`id`), 
    ↩   CONSTRAINT `colorproduct_ibfk_3` FOREIGN KEY (`idProduct`) REFERENCES `product` (`id`) 
    ↩ ) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `product` ( 
    ↩   `id` int(11) NOT NULL AUTO_INCREMENT, 
    ↩   `name` varchar(100) NOT NULL, 
    ↩   `descript` varchar(200) NOT NULL, 
    ↩   `idCategory` int(11) NOT NULL, 
    ↩   `idBrand` int(11) NOT NULL, 
    ↩   `image` varchar(100) NOT NULL, 
    ↩   `price` smallint(6) NOT NULL, 
    ↩   PRIMARY KEY (`id`), 
    ↩   KEY `idCategory` (`idCategory`), 
    ↩   KEY `idBrand` (`idBrand`), 
    ↩   CONSTRAINT `product_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`), 
    ↩   CONSTRAINT `product_ibfk_2` FOREIGN KEY (`idBrand`) REFERENCES `brand` (`id`) 
    ↩ ) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `user` ( 
    ↩   `id` int(11) NOT NULL AUTO_INCREMENT, 
    ↩   `name` varchar(50) NOT NULL, 
    ↩   `lastname` varchar(50) NOT NULL, 
    ↩   `email` varchar(100) NOT NULL, 
    ↩   `password` varchar(100) NOT NULL, 
    ↩   `image` varchar(100) NOT NULL, 
    ↩   PRIMARY KEY (`id`) 
    ↩ ) ENGINE=InnoDB DEFAULT CHARSET=utf8


