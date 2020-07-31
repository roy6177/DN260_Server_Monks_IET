<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'inditclx_wp872' );
/** MySQL database username */
define( 'DB_USER', 'inditclx_wp872' );
/** MySQL database password */
define( 'DB_PASSWORD', '8(vSm3pw0!' );
/** MySQL hostname */
define( 'DB_HOST', 'localhost' );
/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tdpt39gmf8xod9wlroz98kkc5k9wa0nozg24udyfj5d6kddblmufvukhruc2wf7l' );
define( 'SECURE_AUTH_KEY',  'hzkrgylapkc5nauujy6rgtesyk2axrym4aazk9ovtlcizmrdqqhj8x01n6neksbi' );
define( 'LOGGED_IN_KEY',    'gaiubx7ym8gbofulb3v05o41qwidbatgpp6t6j6hmenfwnnocm090gogx9370xdz' );
define( 'NONCE_KEY',        '1nuy5vudmuktovj9byuaoghkhnsm1wdeh9syrh5jee6zsowi3g0v1le1peldyzif' );
define( 'AUTH_SALT',        'qfwvcvzf0tqob6a7vhqnshnry0dvzj0vuufmxzliae5o2xugrapa9n3s1redwhxa' );
define( 'SECURE_AUTH_SALT', 'sry6etgqk7mkjqxjnxhd1v7lzedrms1u10vagw8p4sikbqwsk8pvyttxgyp6bvjb' );
define( 'LOGGED_IN_SALT',   'dzgiw9161fvtr63cmz2vulauv0uryhljqvxtbbt3uesff58n1r0bxftaeevaffiz' );
define( 'NONCE_SALT',       'j0ldz3t0zc845wu2ffhmvksdlnf6g6bedlqwsy4sqkmbxsqoz4moxt60dnk4j1k2' );
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpmb_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );
//Woovina
define( 'WP_MEMORY_LIMIT', '256M' );
set_time_limit(6000);
define( 'AUTOSAVE_INTERVAL', 300 );
define( 'WP_POST_REVISIONS', 5 );
define( 'EMPTY_TRASH_DAYS', 7 );
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';