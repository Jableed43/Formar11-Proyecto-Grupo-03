-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema tacopado_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tacopado_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tacopado_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `tacopado_db` ;

-- -----------------------------------------------------
-- Table `tacopado_db`.`Sexes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Sexes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`Provinces`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Provinces` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`Rols`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Rols` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `id_sex` INT NOT NULL,
  `id_province` INT NOT NULL,
  `id_rol` INT NOT NULL,
  `avatar` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_sex` (`id_sex` ASC) VISIBLE,
  INDEX `id_province` (`id_province` ASC) VISIBLE,
  INDEX `id_rol` (`id_rol` ASC) VISIBLE,
  CONSTRAINT `Users_ibfk_1`
    FOREIGN KEY (`id_sex`)
    REFERENCES `tacopado_db`.`Sexes` (`id`),
  CONSTRAINT `Users_ibfk_2`
    FOREIGN KEY (`id_province`)
    REFERENCES `tacopado_db`.`Provinces` (`id`),
  CONSTRAINT `Users_ibfk_3`
    FOREIGN KEY (`id_rol`)
    REFERENCES `tacopado_db`.`Rols` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`Subcategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Subcategories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `id_category` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_category` (`id_category` ASC) VISIBLE,
  CONSTRAINT `Subcategories_ibfk_1`
    FOREIGN KEY (`id_category`)
    REFERENCES `tacopado_db`.`Categories` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `images` VARCHAR(255) NOT NULL,
  `description` VARCHAR(1234) NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  `calories` DECIMAL(10,0) NOT NULL,
  `totalfat` DECIMAL(10,0) NOT NULL,
  `carb` DECIMAL(10,0) NOT NULL,
  `protein` DECIMAL(10,0) NOT NULL,
  `transfat` DECIMAL(10,0) NOT NULL,
  `saturatedfat` DECIMAL(10,0) NOT NULL,
  `cholesterol` DECIMAL(10,0) NOT NULL,
  `sodium` DECIMAL(10,0) NOT NULL,
  `sugars` DECIMAL(10,0) NOT NULL,
  `fiber` DECIMAL(10,0) NOT NULL,
  `id_subcategory` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_subcategory` (`id_subcategory` ASC) VISIBLE,
  CONSTRAINT `Products_ibfk_1`
    FOREIGN KEY (`id_subcategory`)
    REFERENCES `tacopado_db`.`Subcategories` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`Orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(255) NOT NULL,
  `id_client` INT NOT NULL,
  `total` DECIMAL(10,0) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_client` (`id_client` ASC) VISIBLE,
  CONSTRAINT `Orders_ibfk_1`
    FOREIGN KEY (`id_client`)
    REFERENCES `tacopado_db`.`Users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`Carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`Carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_users` INT NOT NULL,
  `id_products` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `id_order` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_users` (`id_users` ASC) VISIBLE,
  INDEX `id_products` (`id_products` ASC) VISIBLE,
  INDEX `id_order` (`id_order` ASC) VISIBLE,
  CONSTRAINT `Carts_ibfk_1`
    FOREIGN KEY (`id_users`)
    REFERENCES `tacopado_db`.`Users` (`id`),
  CONSTRAINT `Carts_ibfk_2`
    FOREIGN KEY (`id_products`)
    REFERENCES `tacopado_db`.`Products` (`id`),
  CONSTRAINT `Carts_ibfk_3`
    FOREIGN KEY (`id_order`)
    REFERENCES `tacopado_db`.`Orders` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tacopado_db`.`SequelizeMeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacopado_db`.`SequelizeMeta` (
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
