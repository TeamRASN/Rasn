-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2021 a las 20:28:16
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rasn_mysql`
--

DELIMITER $$
--
-- Funciones
--
CREATE DEFINER=`root`@`localhost` FUNCTION `change_pass` (`_emailUser` VARCHAR(250), `_oldPass` VARCHAR(250), `_newPass` VARCHAR(250), `_newRePass` VARCHAR(250)) RETURNS TEXT CHARSET utf8 BEGIN
	DECLARE _message TEXT;
    SET _message = '';
    SET @coincide := (select `id_persona` from `persona` where `email` = _emailUser and `password` = md5(_oldPass) );
    if (@coincide > 0 ) THEN
        if(_newPass = _newRePass) THEN
            IF(_oldPass != _newPass ) THEN
                IF (length(_newPass) >= 5  AND length(_newPass) <= 25) THEN
                    UPDATE `persona` SET `password` = md5(_newPass) WHERE `id_persona` =  @coincide;
                    SET _message = 'Su contraseña se modificó correctamente';
                ELSE
                    SET _message = 'La contraseña no cumple con los párametros. Mayor a 5 y menor a 25 caracteres.';
                END IF;
            ELSE
                SET _message = 'Ingrese una contraseña NUEVA (distina a la anterior).';
            END IF;
        ELSE
            SET _message = 'Las contraseñas no coinciden';
        END IF; 
    ELSE
        SET _message = 'Este usuario no se encuentra registrado en la base de datos.';
    END IF;
    RETURN _message;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `insert_user` (`_documentUser` VARCHAR(255), `_name` VARCHAR(250), `_lastName` VARCHAR(250), `_birthDate` DATE, `_phoneNumber` VARCHAR(50), `_category` INT, `_email` VARCHAR(250), `_password` TEXT, `_confirmPassword` TEXT, `_typeDocument` INT) RETURNS TEXT CHARSET utf8 BEGIN
    DECLARE _message TEXT;
    SET _message = '';
	IF (length(_documentUser ) > 0) THEN
		IF(EXISTS (SELECT * FROM `tipos_documento` WHERE (`tipos_documento`.`id_tipos_documento` = _typeDocument))) THEN
			IF (NOT EXISTS(SELECT * FROM `personas` WHERE (`personas`.`documento` = _documentUser)) AND NOT EXISTS(SELECT * FROM `personas` WHERE (`personas`.`email` = _email))) THEN
				IF (_name IS NOT null AND _name <> '' AND length(_name) >= 2) THEN
					IF (_lastName IS NOT null AND _lastName <> '' AND length(_lastName) >= 2) THEN
						IF(TIMESTAMPDIFF( YEAR,_birthDate, CURDATE()) >= 12) THEN
							IF(EXISTS (SELECT * FROM `categorias` WHERE (`categorias`.`categoria_id` = _category))) THEN
								IF (_email IS NOT null AND _email <> '') THEN
									IF (LOCATE('@', _email) AND LOCATE('.', _email) AND length(_email) > 5) THEN 
										IF (length(_documentUser) <= max_chars_document(_typeDocument)) THEN
											IF (length(_password) >= 5  AND length(_password) <= 25) THEN
												IF (_password = _confirmPassword ) THEN 
													INSERT INTO `personas` (`documento`, `nombre`, `apellido`, `fecha_nac`, `telefono`, `categoria`, `email`, `password`, `tipo_documento`) VALUES ( _documentUser, _name, _lastName, _birthDate, _phoneNumber, _category, _email, md5(_password), _typeDocument);
													SET _message = 'Se ha agregado satisfactoriamente';
												ELSE
													SET _message = 'Contraseña incorrecta';
												END IF;
											ELSE
												SET _message = 'Ingrese una contraseña mayor a 5 y menor a 25 caracteres';
											END IF;
										ELSE
											SET _message = 'El documento ingresado no concuerda con el tipo de documento.';
										END IF; 
									ELSE
										SET _message = 'Ingrese un email valido';
									END IF;
								ELSE
									SET _message = 'Ingrese el email';
								END IF;
							ELSE
								SET _message = 'Esta categoría no existe';
							END IF;
						ELSE
							SET _message = 'Fecha inválida';
						END IF;
					ELSE 
						SET _message = 'Ingrese un apellido real';
					END IF;
				ELSE
					SET _message = 'Ingrese un nombre real';
				END IF;
			ELSE
				SET _message = 'El usuario ya se encuentra registrado';
			END IF;
		ELSE
			SET _message = "Este tipo de documento no existe";
		END IF;
	ELSE
		SET _message = 'El documento esta vacio';
	END IF; 
    RETURN _message;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `login_user` (`_emailUser` VARCHAR(255), `_passUser` VARCHAR(255)) RETURNS VARCHAR(255) CHARSET latin1 COLLATE latin1_general_ci BEGIN
    declare _token text;
    declare _user_id text;
    SET _user_id := (select documento from personas where email = _emailUser and password = _passUser);
    set _token = "invalid-user";
    IF EXISTS (select documento from personas where email = _emailUser and password = _passUser) THEN
        set _token = sha2("abc",224);
            return _token;
        ELSE
            return _token;
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `login_user_node_session` (`_emailUser` VARCHAR(255), `_passUser` VARCHAR(255)) RETURNS VARCHAR(255) CHARSET latin1 COLLATE latin1_general_ci BEGIN
    declare _token text;
    declare _user_id text;
    SET _user_id := (select documento from personas where email = _emailUser and password = md5(_passUser));
    set _token = 0;
    IF EXISTS (select documento from personas where email = _emailUser and password = md5(_passUser)) THEN
        set _token = 1;
            return _token;
        ELSE
            return _token;
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `max_chars_document` (`_tipoDocumento` INT) RETURNS INT(11) BEGIN
	CASE
		WHEN _tipoDocumento = 1 THEN RETURN 8;
        WHEN _tipoDocumento = 2 THEN RETURN 9;
        WHEN _tipoDocumento  = 3 THEN RETURN 8; 
        ELSE RETURN 10;
	END CASE;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `pass_recovery` (`_documentUser` INT(10), `_emailUser` VARCHAR(250)) RETURNS TEXT CHARSET latin1 COLLATE latin1_general_ci BEGIN
	DECLARE _message TEXT;
    DECLARE _token TEXT;
    DECLARE _timestamp DATETIME;
    
    SET _message = '';
    set @lastRecovery := (SELECT (last_recovery) FROM `personas` WHERE `email` = _emailUser and `documento` = _documentUser);
    SET @existe := (SELECT count(*) FROM `personas` WHERE `email` = _emailUser and `documento` = _documentUser);
    IF (LOCATE('@', _emailUser) AND LOCATE('.', _emailUser) AND LENGTH(_emailUser) > 5) THEN
      IF (@existe > 0) THEN
		if not exists(SELECT (last_recovery) FROM `personas` WHERE `email` = _emailUser and `documento` = _documentUser) THEN
			SET _message = "1";
			SET _token = LEFT(MD5(RAND()), 20);
			update `personas` SET `recovery_token` = _token, `last_recovery` = now() where documento = _documentUser and email = _emailUser;
		ELSE
			if (TIMESTAMPDIFF(SECOND, @lastRecovery, now() ) < 30) THEN
				SET _message = "0";
			ELSE 
				SET _message = "1";
				SET _token = LEFT(MD5(RAND()), 20);
				update `personas` SET `recovery_token` = _token, `last_recovery` = now() where documento = _documentUser and email = _emailUser;
            END IF;
        END IF;
    ELSE
        SET _message = "Los datos ingresados no corresponden a ningun registro";
      END IF;
    ELSE
      SET _message = "El email ingresado NO cumple con las caracteristicas correspondientes";
    END IF;
RETURN _message;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `refresh_session` (`_sessionID` VARCHAR(128), `_userEmail` VARCHAR(128)) RETURNS TEXT CHARSET latin1 COLLATE latin1_general_ci BEGIN
	IF EXISTS(SELECT * FROM personas WHERE email = _userEmail AND ultima_sesion = _sessionID) THEN
		RETURN 1;
        ELSE 
        RETURN 0;
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `restrict_session` (`_sessionID` VARCHAR(128), `_emailUser` VARCHAR(255)) RETURNS VARCHAR(1122) CHARSET latin1 COLLATE latin1_general_ci BEGIN

	IF ((SELECT ultima_sesion FROM personas WHERE email = _emailUser) IS NULL) THEN
		DO SLEEP(2);
		UPDATE `rasn_mysql`.`personas` SET `ultima_sesion` = _sessionID WHERE `email` = _emailUser;
        RETURN 1;
	END IF;
    RETURN 0;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `token_recovery` (`_token` TEXT, `_newPass` VARCHAR(250), `_newRePass` VARCHAR(250)) RETURNS TEXT CHARSET utf8 BEGIN
	DECLARE _message TEXT;
    SET _message = '';
    SET @coincide := (select `id_persona` from `personas` where `recovery_token` = _token);
    
    if (@coincide > 0 ) THEN
        if(_newPass = _newRePass) THEN
                IF (length(_newPass) >= 5  AND length(_newPass) <= 25) THEN
                    UPDATE `personas` SET `password` = md5(_newPass), `recovery_token` = null WHERE `id_persona` =  @coincide;
					
                    SET _message = 'Su contraseña se modificó correctamente';
                ELSE
                    SET _message = 'La contraseña no cumple con los párametros. Mayor a 5 y menor a 25 caracteres.';
                END IF;
        ELSE
            SET _message = 'Las contraseñas no coinciden';
        END IF; 
    ELSE
        SET _message = 'Este token ya no es válido.';
    END IF;
    RETURN _message;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `categoria_id` int(11) NOT NULL,
  `nombre_cat` varchar(30) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`categoria_id`, `nombre_cat`) VALUES
(1, 'alumno'),
(2, 'docente'),
(3, 'preceptor'),
(4, 'directivo'),
(5, 'tutor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id_persona` int(11) NOT NULL,
  `documento` int(10) NOT NULL,
  `nombre` varchar(30) COLLATE latin1_general_ci NOT NULL,
  `apellido` varchar(30) COLLATE latin1_general_ci NOT NULL,
  `fecha_nac` date NOT NULL,
  `telefono` varchar(30) COLLATE latin1_general_ci NOT NULL,
  `categoria` int(11) NOT NULL,
  `email` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `password` varchar(300) COLLATE latin1_general_ci NOT NULL,
  `tipo_documento` int(11) NOT NULL,
  `foto_perfil` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `ultima_sesion` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `recovery_token` text COLLATE latin1_general_ci DEFAULT NULL,
  `last_recovery` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id_persona`, `documento`, `nombre`, `apellido`, `fecha_nac`, `telefono`, `categoria`, `email`, `password`, `tipo_documento`, `foto_perfil`, `ultima_sesion`, `recovery_token`, `last_recovery`) VALUES
(1, 44561985, 'Juan Pablo', 'Aubone', '2003-01-29', '1168407520', 1, 'juanaubone@gmail.com', '5f4dcc3b5aa765d61d8327deb882cf99', 1, '', '-TFLnbrq4x0amHOkfoyOcewzoM1gEncZ', '1baf83024a53fb97d769', '2021-10-01 17:20:19'),
(2, 0, 'Ke', 'Ke', '2003-12-12', '11111111111111111', 5, 'm3eee3nem@fakemdenem33.m', '9530b5d1a1b662e1c02d882649fc70c6', 1, '', NULL, NULL, NULL),
(3, 0, 'Ke', 'Ke', '2003-12-12', '11111111111111111', 5, 'meeee3nem@fakemdenem33.m', '9530b5d1a1b662e1c02d882649fc70c6', 2, '', NULL, NULL, NULL),
(4, 0, 'Ke', 'Ke', '2003-12-12', '11111111111111111', 5, 'meeeenem@fakemdenem33.m', 'e6b376d1ecc828f16904a4f808b4ab2f', 1, '', NULL, NULL, NULL),
(5, 0, 'Carlos', 'Menem', '2003-03-12', '11111111111111111', 1, 'meeeenem@fakemenem.m', 'e6b376d1ecc828f16904a4f808b4ab2f', 1, '', NULL, NULL, NULL),
(6, 0, 'Ke', 'Ke', '2003-12-12', '11111111111111111', 1, 'meeeenem@fakemenem33.m', 'e6b376d1ecc828f16904a4f808b4ab2f', 1, '', NULL, NULL, NULL),
(7, 0, 'Carlos', 'Menem', '2003-03-12', '11111111111111111', 1, 'menem@menem.menem', 'e6b376d1ecc828f16904a4f808b4ab2f', 1, '', NULL, NULL, NULL),
(8, 95827652, 'Samuel', 'Hernández', '2003-03-27', '91121678328', 1, 'sdho2003@gmail.com', '5f4dcc3b5aa765d61d8327deb882cf99', 1, '', NULL, NULL, '2021-10-07 16:21:43'),
(9, 95825635, 'Samuel', 'Hernández', '2003-03-27', '1121678328', 1, 'sdho2023@gmail.com', 'e9a0372306ec126b3288e8ed32ced84e', 2, '', NULL, NULL, NULL),
(12, 95858655, 'Samuel', 'Hernández', '2000-11-11', '0000000000', 1, 'sdho203333@gmail.com', '640e5a3b9f9e4d667456c4e68194d6a2', 1, '', NULL, NULL, NULL),
(13, 44581843, 'Juan', 'Aubone', '2000-11-11', '0000000000', 1, 'juanaubone1234@gmail.com', 'a5b01730d3760a82e00ce84ed1a84764', 1, '', NULL, '4d24e57168328991ff1e', '2021-10-07 16:25:06'),
(14, 95825655, 'Samuel', 'Hernández', '2000-11-11', '0000000000', 1, 'samuelhernandezojeda03@gmail.com', 'aebfc5389c2728f3ad551450cdcbf508', 1, '', NULL, NULL, '2021-10-14 16:16:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `session_expires` int(11) UNSIGNED NOT NULL,
  `session_data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `session_expires`, `session_data`) VALUES
('-TFLnbrq4x0amHOkfoyOcewzoM1gEncZ', 1635272747, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:25:47.084Z\",\"httpOnly\":true,\"path\":\"/\"},\"email\":\"juanaubone@gmail.com\"}'),
('3cMTqJtDuGiVII0nupaFr5nKLb_c9q0L', 1635272868, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:48.065Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('6F1inZoTbaXxCuSsu-Eq4RMQdkoMm6-A', 1635272815, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:26:54.622Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('6tHLV9xt0qSWghxF3QKVkvWL6X0aQrm4', 1635272873, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:53.065Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('8leUYeFkYXRQ582bfuvTsXwr59JqW-79', 1635272882, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:28:01.567Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('AIXGJFmksuaKJIAj4EHcIFbK4GMtNtur', 1635272887, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:28:07.319Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('BKCaf3g3KjG2F98SJraOYGIHtPmEFqA7', 1635272748, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:25:48.372Z\",\"httpOnly\":true,\"path\":\"/\"},\"email\":\"juanaubone@gmail.com\"}'),
('LMCUCyEUabMRSHXkxvXD_uG2kgjJMS7j', 1635272869, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:48.843Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('Lll-vKEyO7YuAcknblqEFLp4u89-tUOM', 1635272846, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:26.115Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('O6mbg7gOMvLpXQe0PzrU2AK8veA_nR30', 1635272843, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:22.987Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('OpMZbgCzYh8UoeaPV6HaSEbVSiVL_Dg3', 1635272845, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:25.090Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('TD6uku8dcjn1NH-9efaWAiSALMvgdijq', 1635272743, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:25:43.082Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('VJEotP0ptjTE6aanOBwnQjcqulRXndTc', 1635272858, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:38.452Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('Vaa3LOjDe6Yodbm3l7fj1tw2nZrPBiAM', 1635272841, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:20.716Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('XcXM0Tt9Vg6onLf1BBOspFyPPfgTsmze', 1635272838, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:18.390Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('aIo0pbxCQxUCNcKpWIdU-xFPk0fy6glO', 1635272858, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:37.664Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('b2p086QD5NSLQdHJpm42HWupAR46vkJm', 1635272842, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:21.986Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('gdxTT2ZYtDBxFcewh9VMki-0Kw_BiNdG', 1635272807, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:26:46.713Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('i_Xq8FM_acgH_UPDzAhWSMw8sd4rJZ4Z', 1635272869, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:49.258Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('oA4afOTwClQ2UE68p3FNPEw1LDAlE5cW', 1635272732, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:25:32.069Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('qRqXlmqxyyDc7fXE4kzUfpxGkLrqPt5O', 1635272874, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:53.524Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('u3MblvwlVhuAOkmth-i1hcoywrX0PvJX', 1635272816, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:26:55.869Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('vRBH1eyzEcv4eNOIt5oGZeE02b32yNR8', 1635272749, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:25:49.268Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('vyJ4rEXn9DD2yknVo9GQkyeCAnU62fMc', 1635272727, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:25:26.920Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('wp8cEuHF3a6H8t71csyrbuwMB3UzX8Gp', 1635272803, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:26:42.639Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('zxh5d698F3YBeb7OCoZgBG9BmndRi4Ev', 1635272850, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2021-10-26T18:27:29.904Z\",\"httpOnly\":true,\"path\":\"/\"}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_documento`
--

CREATE TABLE `tipos_documento` (
  `id_tipos_documento` int(11) NOT NULL,
  `nombre_tipo` varchar(50) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `tipos_documento`
--

INSERT INTO `tipos_documento` (`id_tipos_documento`, `nombre_tipo`) VALUES
(1, 'Documento Nacional de Identidad'),
(2, 'Pasaporte'),
(3, 'Libreta Cívica de Enrolamiento');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id_persona`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `persona_categoria` (`categoria`),
  ADD KEY `persona_documento` (`tipo_documento`),
  ADD KEY `persona_sesion` (`ultima_sesion`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `tipos_documento`
--
ALTER TABLE `tipos_documento`
  ADD PRIMARY KEY (`id_tipos_documento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `categoria_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tipos_documento`
--
ALTER TABLE `tipos_documento`
  MODIFY `id_tipos_documento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `personas`
--
ALTER TABLE `personas`
  ADD CONSTRAINT `persona_categoria` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`categoria_id`),
  ADD CONSTRAINT `persona_documento` FOREIGN KEY (`tipo_documento`) REFERENCES `tipos_documento` (`id_tipos_documento`),
  ADD CONSTRAINT `persona_sesion` FOREIGN KEY (`ultima_sesion`) REFERENCES `sessions` (`session_id`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
