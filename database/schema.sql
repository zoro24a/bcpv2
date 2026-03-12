-- ======================================================
-- BCP v2 (Bonafide Certificate Portal) Database Schema
-- Database: bcp_db
-- Refined Version: AUTO_INCREMENT PKs, Normalized fields
-- ======================================================

CREATE DATABASE IF NOT EXISTS bcp_db;
USE bcp_db;

-- 1. Departments table
-- Reference to hod_id will be added via ALTER TABLE later to avoid circular dependency
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    hod_id INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'hod', 'tutor', 'principal', 'office', 'student') NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    department_id INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Add FK for HOD in departments table
ALTER TABLE departments 
ADD CONSTRAINT fk_departments_hod 
FOREIGN KEY (hod_id) REFERENCES users(id) ON DELETE SET NULL;

-- 3. Batches table
CREATE TABLE batches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department_id INT NOT NULL,
    start_year INT NOT NULL,
    end_year INT NOT NULL,
    section VARCHAR(10) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 4. Students table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    register_number VARCHAR(50) NOT NULL UNIQUE,
    parent_name VARCHAR(255) DEFAULT NULL,
    gender ENUM('Male', 'Female', 'Other') DEFAULT NULL,
    batch_id INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (batch_id) REFERENCES batches(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- 5. Tutors table
CREATE TABLE tutors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    department_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 6. Tutor Assignments table
CREATE TABLE tutor_assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    batch_id INT NOT NULL,
    tutor_id INT NOT NULL,
    semester INT NOT NULL,
    academic_year VARCHAR(20) NOT NULL, -- e.g. "2025-26"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (batch_id) REFERENCES batches(id) ON DELETE CASCADE,
    FOREIGN KEY (tutor_id) REFERENCES tutors(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 7. Requests table
CREATE TABLE requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    certificate_type VARCHAR(255) NOT NULL,
    reason TEXT NOT NULL,
    status ENUM('pending_tutor', 'pending_hod', 'pending_principal', 'ready_for_issue', 'issued', 'returned') DEFAULT 'pending_tutor',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    INDEX idx_status (status),
    INDEX idx_student (student_id)
) ENGINE=InnoDB;

-- 8. Request History table
CREATE TABLE request_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT NOT NULL,
    action ENUM('submitted', 'approved_tutor', 'approved_hod', 'approved_principal', 'returned', 'issued') NOT NULL,
    action_by INT NOT NULL,
    remarks TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE CASCADE,
    FOREIGN KEY (action_by) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_request (request_id)
) ENGINE=InnoDB;

-- 9. Certificates table
CREATE TABLE certificates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT NOT NULL UNIQUE,
    certificate_number VARCHAR(100) NOT NULL UNIQUE, -- Format: ACE/BC/YYYY/NNNN
    issued_by INT NOT NULL,
    issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pdf_url VARCHAR(255) DEFAULT NULL,
    FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE CASCADE,
    FOREIGN KEY (issued_by) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 10. Templates table
CREATE TABLE templates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    html_template LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
