-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.5.53 - MySQL Community Server (GPL)
-- Операционная система:         Win64
-- HeidiSQL Версия:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных userman
CREATE DATABASE IF NOT EXISTS `userman` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `userman`;

-- Дамп данных таблицы userman.auth_assignment: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `auth_assignment` DISABLE KEYS */;
REPLACE INTO `auth_assignment` (`item_name`, `user_id`, `created_at`) VALUES
	('admin', '1', 1535720158),
	('manager', '2', 1535714719),
	('manager', '5', 1535743282);
/*!40000 ALTER TABLE `auth_assignment` ENABLE KEYS */;

-- Дамп данных таблицы userman.auth_item: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `auth_item` DISABLE KEYS */;
REPLACE INTO `auth_item` (`name`, `type`, `description`, `rule_name`, `data`, `created_at`, `updated_at`) VALUES
	('admin', 1, NULL, NULL, NULL, 1535720096, 1535720096),
	('manager', 1, NULL, NULL, NULL, 1535714719, 1535714719),
	('viewUserData', 2, 'viewUserData', 'isAdmin', NULL, 1535720096, 1535720096),
	('viewUserTable', 2, 'View user table', 'isManager', NULL, 1535720096, 1535720096);
/*!40000 ALTER TABLE `auth_item` ENABLE KEYS */;

-- Дамп данных таблицы userman.auth_item_child: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `auth_item_child` DISABLE KEYS */;
REPLACE INTO `auth_item_child` (`parent`, `child`) VALUES
	('admin', 'manager'),
	('admin', 'viewUserData'),
	('manager', 'viewUserTable'),
	('viewUserData', 'viewUserTable');
/*!40000 ALTER TABLE `auth_item_child` ENABLE KEYS */;

-- Дамп данных таблицы userman.auth_rule: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `auth_rule` DISABLE KEYS */;
REPLACE INTO `auth_rule` (`name`, `data`, `created_at`, `updated_at`) VALUES
	('isAdmin', _binary 0x4F3A31383A226170705C726261635C41646D696E52756C65223A333A7B733A343A226E616D65223B733A373A22697341646D696E223B733A393A22637265617465644174223B693A313533353737333132343B733A393A22757064617465644174223B693A313533353737333132343B7D, 1535773124, 1535773124),
	('isManager', _binary 0x4F3A32303A226170705C726261635C4D616E6167657252756C65223A333A7B733A343A226E616D65223B733A393A2269734D616E61676572223B733A393A22637265617465644174223B693A313533353731353839323B733A393A22757064617465644174223B693A313533353731353839323B7D, 1535715892, 1535715892);
/*!40000 ALTER TABLE `auth_rule` ENABLE KEYS */;

-- Дамп данных таблицы userman.migration: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `migration` DISABLE KEYS */;
REPLACE INTO `migration` (`version`, `apply_time`) VALUES
	('m000000_000000_base', 1535703699),
	('m140506_102106_rbac_init', 1535710875),
	('m170907_052038_rbac_add_index_on_auth_assignment_user_id', 1535710875);
/*!40000 ALTER TABLE `migration` ENABLE KEYS */;

-- Дамп данных таблицы userman.user: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`id`, `username`, `email`, `password_hash`, `auth_key`, `confirmed_at`, `unconfirmed_email`, `blocked_at`, `registration_ip`, `created_at`, `updated_at`, `flags`, `last_login_at`, `status`, `avatar_filename`, `age`) VALUES
	(1, 'admin', 'demo1@gmail.com', '$2y$13$AybgFPp0of37plazMGzmSOSLK4H0s1FjGNEJ99c3JVoYswnN8XOH6', 's9yKZ3uFyLaU1ctSzOK6JW_okYlzBVu_', 1535706166, NULL, NULL, NULL, 1535706166, 1535706166, 0, NULL, 10, NULL, NULL),
	(2, 'manager', 'manager@gmail.com', '$2y$13$H0l2dXWI.XhCi4g.d/DLZ.rWp6EPyPe9VtCjlviLcOcTrqV7astfW', '6srW7itZHF69Duke349oCIltZW3Ks5kO', 1535706166, NULL, NULL, NULL, 1535714574, 1535714574, 0, NULL, 10, NULL, NULL),
	(5, 'demouser', 'demouser@gmail.com', '$2y$13$HuZCpZ5/oSntgDcBJnu09eG2vXI1HlXI5bVu2KRQrbne2vtc/Rlum', 'Oby_-WEQ1xKEovl3SRdNaAzrmdHXhR_b', NULL, NULL, NULL, NULL, 1535743282, 1535743282, 0, NULL, 10, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
