use happyhouse;

DROP TABLE IF EXISTS `happyhouse`.`file_info` ;
DROP TABLE IF EXISTS `happyhouse`.`notice`;
DROP TABLE IF EXISTS `happyhouse`.`board` ;
DROP TABLE IF EXISTS `happyhouse`.`comments`;
DROP TABLE IF EXISTS `happyhouse`.`ssafy_member` ;

CREATE TABLE ssafy_member (
  `userid` VARCHAR(16) NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `userpwd` VARCHAR(16) NOT NULL,
  `email` VARCHAR(50) NULL,
  `joindate` TIMESTAMP NULL DEFAULT current_timestamp,
  PRIMARY KEY (`userid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO ssafy_member (userid, username, userpwd, email)
VALUES('admin', '관리자', 'admin', 'admin@ssafy.com');

INSERT INTO ssafy_member (userid, username, userpwd, email)
VALUES('ssafy', '김싸피', 'ssafy', 'ssafy@ssafy.com');


CREATE TABLE IF NOT EXISTS `happyhouse`.`notice` (
  `articleno` INT NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(16) NOT NULL,
  `subject` VARCHAR(100) NOT NULL,
  `content` VARCHAR(2000) NOT NULL,
  `hit` INT NULL DEFAULT 0,
  `regtime` TIMESTAMP NOT NULL DEFAULT current_timestamp,
  INDEX `notice_username_FK_idx` (`userid` ASC) VISIBLE,
  PRIMARY KEY (`articleno`),
  CONSTRAINT `notice_userid_FK`
    FOREIGN KEY (`userid`)
    REFERENCES `happyhouse`.`ssafy_member` (`userid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

insert into notice(userid, subject, content) 
values('admin', '이용규칙', '이용규칙입니다.'), 
      ('admin', '문의 안내', '문의는 Q&A 게시판 이용해주세요.'),
      ('admin', '데이터 출처', '공공데이터 포털 입니다.');


CREATE TABLE IF NOT EXISTS `happyhouse`.`file_info` (
  `articleno` INT NOT NULL,
  `savefolder` VARCHAR(45) NULL,
  `originfile` VARCHAR(50) NULL,
  `savefile` VARCHAR(50) NULL,
  INDEX `file_info_articleno_fk_idx` (`articleno` ASC) VISIBLE,
  CONSTRAINT `file_info_articleno_fk`
    FOREIGN KEY (`articleno`)
    REFERENCES `happyhouse`.`notice` (`articleno`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `happyhouse`.`board` (
  `articleno` INT NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(16) NULL DEFAULT NULL,
  `subject` VARCHAR(100) NULL DEFAULT NULL,
  `content` VARCHAR(2000) NULL DEFAULT NULL,
  `hit` INT NULL DEFAULT 0,
  `regtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`articleno`),
  INDEX `board_to_member_fk` (`userid` ASC) VISIBLE,
  CONSTRAINT `board_to_member_fk`
    FOREIGN KEY (`userid`)
    REFERENCES `happyhouse`.`ssafy_member` (`userid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
    
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

insert into board(userid, subject, content) 
values('ssafy', '아파트 매매 정보 문의', '아파트 매매 정보 출처가 궁금합니다.'), 
      ('ssafy', '서비스 이용 규칙', '서비스 이용 규칙이 궁금합니다.'),
      ('ssafy', '오류 문의', '사용 중 오류가 있습니다.');
      

CREATE TABLE IF NOT EXISTS `happyhouse`.`comments` (
  `commentno` INT NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(16) NOT NULL,
  `comment` VARCHAR(500) NOT NULL,
  `regtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `articleno` INT NOT NULL,
  `check` INT NOT NULL,
  PRIMARY KEY (`commentno`),
  KEY `comment_articleno_idx` (`articleno`)
  ) 
ENGINE=InnoDB 
AUTO_INCREMENT = 1
DEFAULT CHARSET=utf8mb4 
COLLATE=utf8mb4_0900_ai_ci;

commit;
