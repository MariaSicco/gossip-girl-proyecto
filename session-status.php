<?php
session_start();
echo isset($_SESSION["user_name"]) ? "true" : "false";
?>
