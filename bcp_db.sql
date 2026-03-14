-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bcp_db
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `batches`
--

DROP TABLE IF EXISTS `batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `section` varchar(10) DEFAULT NULL,
  `department_id` int NOT NULL,
  `student_count` int DEFAULT NULL,
  `total_sections` int DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `current_semester` int DEFAULT NULL,
  `semester_from_date` date DEFAULT NULL,
  `semester_to_date` date DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `batches_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batches`
--

LOCK TABLES `batches` WRITE;
/*!40000 ALTER TABLE `batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `established_year` int DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Department of Computer Science & Engineering (Cyber Security)',2024,'2026-03-13 15:41:13'),(2,'Department of Computer Science & Engineering (Artificial Intelligence and Machine Learning)',2025,'2026-03-13 15:42:50'),(3,'Department of Electronics and Communication Engineering',1991,'2026-03-13 21:44:14');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `id` char(36) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `role` enum('admin','student','tutor','hod','principal','office') NOT NULL,
  `department_id` int DEFAULT NULL,
  `batch_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`),
  KEY `department_id` (`department_id`),
  KEY `batch_id` (`batch_id`),
  CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `profiles_ibfk_2` FOREIGN KEY (`batch_id`) REFERENCES `batches` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES ('1566de7f-1c10-4724-bfaa-31d201e983a1','Office','User','office','office@gmail.com','$2b$12$PjofAvWS5lrCVgIvOwvkheGcYXe0tk4Sd7t5Mpz0ZK4V56HukihfS',NULL,NULL,NULL,'office',NULL,NULL,'2026-03-13 14:33:25','2026-03-13 14:33:25'),('28ed5f58-55c7-447c-a327-500e79304c0e','Principal','User','principal','principal@gmail.com','$2b$12$PjofAvWS5lrCVgIvOwvkheGcYXe0tk4Sd7t5Mpz0ZK4V56HukihfS',NULL,NULL,NULL,'principal',NULL,NULL,'2026-03-13 14:33:25','2026-03-13 14:33:25'),('633e426b-c95e-4e0b-98b9-e584b7820983','csestudent ','s',NULL,'csestudent@gmail.com','$2b$12$/0eoqhMLZCotpqerjSq3FuViNJvE2WymYwVSF2FctQHDFiEbgm2nm',NULL,NULL,'male','student',1,NULL,'2026-03-14 07:35:09','2026-03-14 07:35:09'),('a00ffc8b-2342-4d7a-a69d-04ce77b13b13','Admin','User','admin','admin@gmail.com','$2b$12$PjofAvWS5lrCVgIvOwvkheGcYXe0tk4Sd7t5Mpz0ZK4V56HukihfS',NULL,NULL,NULL,'admin',NULL,NULL,'2026-03-13 14:33:25','2026-03-13 14:33:25'),('ac5e3e05-9537-4642-9e5a-b3db58bffe23','csehod@gmail.com','',NULL,'csehod@gmail.com','$2b$12$roG4BRnMHqrMwR2QabgRje8qMKgNlV.PelIT6ejIklQ6Et8PbZXd2','+91 6767654246',NULL,'female','hod',1,NULL,'2026-03-14 07:25:49','2026-03-14 07:25:49');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_history`
--

DROP TABLE IF EXISTS `request_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `request_id` int NOT NULL,
  `action` varchar(100) NOT NULL,
  `action_by` char(36) NOT NULL,
  `remarks` text,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `request_id` (`request_id`),
  KEY `action_by` (`action_by`),
  CONSTRAINT `request_history_ibfk_1` FOREIGN KEY (`request_id`) REFERENCES `requests` (`id`),
  CONSTRAINT `request_history_ibfk_2` FOREIGN KEY (`action_by`) REFERENCES `profiles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_history`
--

LOCK TABLES `request_history` WRITE;
/*!40000 ALTER TABLE `request_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `request_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `date` datetime DEFAULT (now()),
  `type` varchar(255) NOT NULL,
  `sub_type` varchar(255) DEFAULT NULL,
  `reason` text NOT NULL,
  `status` enum('pending_tutor','pending_hod','pending_principal','approved','rejected','issued') DEFAULT NULL,
  `template_id` int DEFAULT NULL,
  `return_reason` text,
  `pdf_url` varchar(255) DEFAULT NULL,
  `certificate_number` varchar(100) DEFAULT NULL,
  `issued_at` datetime DEFAULT NULL,
  `tutor_id` char(36) DEFAULT NULL,
  `hod_id` char(36) DEFAULT NULL,
  `batch_id` int DEFAULT NULL,
  `company_block` text,
  `duration_block` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  `year` int DEFAULT NULL,
  `serial_number` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `template_id` (`template_id`),
  KEY `tutor_id` (`tutor_id`),
  KEY `hod_id` (`hod_id`),
  KEY `batch_id` (`batch_id`),
  KEY `ix_requests_student_id` (`student_id`),
  KEY `ix_requests_status` (`status`),
  CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `requests_ibfk_2` FOREIGN KEY (`template_id`) REFERENCES `templates` (`id`),
  CONSTRAINT `requests_ibfk_3` FOREIGN KEY (`tutor_id`) REFERENCES `profiles` (`id`),
  CONSTRAINT `requests_ibfk_4` FOREIGN KEY (`hod_id`) REFERENCES `profiles` (`id`),
  CONSTRAINT `requests_ibfk_5` FOREIGN KEY (`batch_id`) REFERENCES `batches` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `register_number` varchar(50) NOT NULL,
  `parent_name` varchar(255) DEFAULT NULL,
  `batch_id` int DEFAULT NULL,
  `profile_id` char(36) DEFAULT NULL,
  `tutor_id` char(36) DEFAULT NULL,
  `hod_id` char(36) DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_students_register_number` (`register_number`),
  UNIQUE KEY `profile_id` (`profile_id`),
  KEY `batch_id` (`batch_id`),
  KEY `tutor_id` (`tutor_id`),
  KEY `hod_id` (`hod_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`batch_id`) REFERENCES `batches` (`id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`),
  CONSTRAINT `students_ibfk_3` FOREIGN KEY (`tutor_id`) REFERENCES `profiles` (`id`),
  CONSTRAINT `students_ibfk_4` FOREIGN KEY (`hod_id`) REFERENCES `profiles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'2403617614921022','kk',NULL,'633e426b-c95e-4e0b-98b9-e584b7820983',NULL,NULL,'2026-03-14 07:35:09');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `templates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `template_type` varchar(50) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates`
--

LOCK TABLES `templates` WRITE;
/*!40000 ALTER TABLE `templates` DISABLE KEYS */;
/*!40000 ALTER TABLE `templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutor_assignments`
--

DROP TABLE IF EXISTS `tutor_assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutor_assignments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `batch_id` int NOT NULL,
  `section` varchar(10) DEFAULT NULL,
  `tutor_id` char(36) NOT NULL,
  `semester` int NOT NULL,
  `academic_year` varchar(20) NOT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `batch_id` (`batch_id`),
  KEY `tutor_id` (`tutor_id`),
  CONSTRAINT `tutor_assignments_ibfk_1` FOREIGN KEY (`batch_id`) REFERENCES `batches` (`id`),
  CONSTRAINT `tutor_assignments_ibfk_2` FOREIGN KEY (`tutor_id`) REFERENCES `profiles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutor_assignments`
--

LOCK TABLES `tutor_assignments` WRITE;
/*!40000 ALTER TABLE `tutor_assignments` DISABLE KEYS */;
/*!40000 ALTER TABLE `tutor_assignments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-14 12:53:54
